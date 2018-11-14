"use strict";

const home = {
    templateUrl: "components/home/home.html",
    bindings: {},
    controller: ["EventService", function(EventService) {
        const vm = this;

        //sends data to service
        vm.passSearch = (search) => {
            EventService.submitData(search);
        };
        //sends defined data
        vm.passDefined = (search) => {
            EventService.submitDataDefined(search);
        };
    }]
    
};


angular
    .module("App")
    .component("home", home);