"use strict";

function expandOnClick() {
  return {
    restrict: "A",
    link: function($scope, $element, $attrs) {
      $element.on("click", () => {
        console.log($element);
        $element[0].nextElementSibling.classList.toggle("hidden");
      });
    }
  };
}

angular
  .module("App")
  .directive("expandOnClick", expandOnClick);
