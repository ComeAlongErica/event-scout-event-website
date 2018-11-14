"use strict";

const eventList = {
    templateUrl: "components/event-list/event-list.html",
    bindings: {},
    controller: ["EventService", function (EventService) {
        const vm = this;
        vm.receivedData = EventService.returnData();

        // navigates home
        vm.navHome = () => {
            EventService.routeHome();
        };
      
        //sends search
        vm.passSearch = (search) => {
            EventService.submitData(search).then(() => {
                vm.receivedData = EventService.returnData();
            });
        };

        // sends event to save in array
        vm.saveEvent = (event) => {
            EventService.saveBucketList(event);
        }

    }]

}


angular
    .module("App")
    .component("eventList", eventList);