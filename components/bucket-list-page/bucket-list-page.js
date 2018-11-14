"use strict";

const bucketList = {
    templateUrl: "components/bucket-list-page/bucket-list-page.html",
    bindings: {},
    controller: ["EventService", function(EventService) {
        const vm = this;
        //recieves bucket list
        vm.recieveBucket = EventService.returnBucketList();

        //sends search
        vm.passSearch = (search) => {
            EventService.submitData(search);
        };

        //navigates home when logo is clicked
        vm.navHome = () => {
            EventService.routeHome();
        };

        //removes event
        vm.removeEvent = (event) => {
            EventService.removeBucket(event);
        };
    }]
    
}


angular
    .module("App")
    .component("bucketList",bucketList);