/* ==============================================================================
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
;(function ($) {
    $.fn.spinner = function (opts) {
        return this.each(function () {
            var defaults = {value: 0, min: 0};
            var options = $.extend(defaults, opts);
            var keyCodes = {up: 38, down: 40};
            var container = $('<div></div>');
            container.addClass('spinner');
            var textField = $(this).addClass('value').attr('maxlength', '4').val(options.value)
                .bind('keyup paste change', function (e) {
                    var field = $(this);
                    if (e.keyCode == keyCodes.up) changeValue(1);
                    else if (e.keyCode == keyCodes.down) changeValue(-1);
                    else validateAndTrigger(field,false);
                }).blur(function () {
                    if($.trim($(this).val()).length===0){
                      $(this).val(options.min);
                    }
                });
            textField.wrap(container);

            var increaseButton = $('<button class="increase">+</button>').click(function () {
                changeValue(1)
            });
            var decreaseButton = $('<button class="decrease">-</button>').click(function () {
                changeValue(-1)
            });

            validate(textField);
            container.data('lastValidValue', options.value);
            textField.before(decreaseButton);
            textField.after(increaseButton);

            function changeValue(delta) {
                textField.val(parseInt(getValue()) + delta);
                validateAndTrigger(textField)
            }

            function validateAndTrigger(field,isDisableButton) {
                // clearTimeout(container.data('timeout'));
                var value = validate(field,isDisableButton);
                if (!isInvalid(value)) {
                    textField.trigger('update', [field, value])
                }
            }

            function validate(field,isDisableButton) {
                var value = getValue();
                if (value <= options.min) decreaseButton.attr('disabled', 'disabled');
                else decreaseButton.removeAttr('disabled');
                if(isDisableButton===undefined) {
                  if (value >= options.max) increaseButton.attr('disabled', 'disabled');
                  else increaseButton.removeAttr('disabled');
                }
                field.toggleClass('invalid', isInvalid(value)).toggleClass('passive', value === 0);
                if (isInvalid(value)) {
                    // var timeout = setTimeout(function () {
                    //     textField.val(container.data('lastValidValue'));
                    //     validate(field)
                    // }, 500);
                  textField.val(options.min || 0);
                  decreaseButton.attr('disabled', 'disabled');
                  options.invalidCallback();
                    // container.data('timeout', timeout)
                } else {
                    // container.data('lastValidValue', value)
                }
                return value;
            }

            function isInvalid(value) {
                if(value.length===0){
                    return false;
                }
                return isNaN(+value) || value < options.min || value > options.max || value%1 !== 0;
            }

            function getValue(field) {
                field = field || textField;
                return field.val();
            }
        })
    }
})(jQuery);
