
      if (Util.isElement(this._config.parent)) {
                    parent = this._config.parent; // It's a jQuery object
            
                    if (typeof this._config.parent.jquery !== 'undefined') {
                      parent = this._config.parent[0];
                    }
                  } else {
                    parent = $(this._config.parent)[0];
                  }
            
                  var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
                  $(parent).find(selector).each(function (i, element) {
                    _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
                  });
                  return parent;
                };
            
                _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
                  if (element) {
                    var isOpen = $(element).hasClass(ClassName.SHOW);
            
                    if (triggerArray.length > 0) {
                      $(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
                    }
                  }
                }; // Static
            
            
                Collapse._getTargetFromElement = function _getTargetFromElement(element) {
                  var selector = Util.getSelectorFromElement(element);
                  return selector ? $(selector)[0] : null;
                };
            
                Collapse._jQueryInterface = function _jQueryInterface(config) {
                  return this.each(function () {
                    var $this = $(this);
                    var data = $this.data(DATA_KEY);
            
                    var _config = _objectSpread({}, Default, $this.data(), typeof config === 'object' && config ? config : {});
            
                    if (!data && _config.toggle && /show|hide/.test(config)) {
                      _config.toggle = false;
                    }
            
                    if (!data) {
                      data = new Collapse(this, _config);
                      $this.data(DATA_KEY, data);
                    }
            
                    if (typeof config === 'string') {
                      if (typeof data[config] === 'undefined') {
                        throw new TypeError("No method named \"" + config + "\"");
                      }
            
                      data[config]();
                    }
                  });
                };
            
                _createClass(Collapse, null, [{
                  key: "VERSION",
                  get: function get() {
                    return VERSION;
                  }
                }, {
                  key: "Default",
                  get: function get() {
                    return Default;
                  }
                }]);
            
                return Collapse;
              }();
              /**
               * ------------------------------------------------------------------------
               * Data Api implementation
               * ------------------------------------------------------------------------
               */
            
            
              $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
                // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
                if (event.currentTarget.tagName === 'A') {
                  event.preventDefault();
                }
            
                var $trigger = $(this);
                var selector = Util.getSelectorFromElement(this);
                $(selector).each(function () {
                  var $target = $(this);
                  var data = $target.data(DATA_KEY);
                  var config = data ? 'toggle' : $trigger.data();
            
                  Collapse._jQueryInterface.call($target, config);
                });
              });
              /**
               * ------------------------------------------------------------------------
               * jQuery
               * ------------------------------------------------------------------------
               */
            
              $.fn[NAME] = Collapse._jQueryInterface;
              $.fn[NAME].Constructor = Collapse;
            
              $.fn[NAME].noConflict = function () {
                $.fn[NAME] = JQUERY_NO_CONFLICT;
                return Collapse._jQueryInterface;
              };
            
              return Collapse;
            }($);
            //# sourceMappingURL=collapse.js.map