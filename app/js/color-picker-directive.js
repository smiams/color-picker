ColorPickerApp.directive("colorPicker", ["Settings", function(Settings) {
  return {
    restrict: 'E',

    link: function(scope, element, attrs, controller) {
      var jqElement = $(element);
      var div = jqElement.find("div");
      div.attr("style", "background-color: " + Settings.initialColor + ";");
    },

    templateUrl: "/html/partials/color-picker.html"
  };
}]);