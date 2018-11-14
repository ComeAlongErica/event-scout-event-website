"use strict";

const search = {
    templateUrl: "components/search-criteria/search-criteria.html",
    controller: ["EventService", function(EventService) {
        const vm = this;
        vm.passSearch = (search) => {
            EventService.submitData(search);
        };

        vm.navHome = () => {
            EventService.routeHome();
        };
    
    }]
    
}


angular
    .module("App")
    .component("search",search);