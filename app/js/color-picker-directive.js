ColorPickerApp.directive("colorPicker", ["Settings", function(Settings) {
  return {
    restrict: 'E',

    link: function(scope, element, attrs, controller) {
      scope.initialColor = Settings.initialColor;

      var jqElement = $(element);
      var jqInput = jqElement.find("input#color-selection");
      var jqValue = jqElement.find("#color-value");

      jqInput.keyup(function(event) {
        if (event.target.value.length === 0) {
          jqValue.attr("style", "background-color: " + scope.initialColor + ";");
        }
        else {
          jqValue.attr("style", "background-color: " + event.target.value + ";");
        }
      });

      jqValue.attr("style", "background-color: " + scope.initialColor + ";");
    },

    templateUrl: "/html/partials/color-picker.html"
  };
}]);