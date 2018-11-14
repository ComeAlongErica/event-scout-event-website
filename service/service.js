"use strict";

function EventService($location, $http) {
    const self = this;
    // self.jsonPayload = [];
    self.bucketList = [];


    // recieves data from search and sends to API
    self.submitData = (search) => {
        return self.searchTicketMaster(search);
    };

    // recieves defined data from search and sends to defined API
    self.submitDataDefined = (search) => {
        return self.searchTicketMasterDefined(search);
    };

    //returns data for event search page
    self.returnData = () => {
        return self.jsonPayload;
    }

    //returns data for event search page
    self.returnBucketList = () => {
        return self.bucketList;
    }

    // navigates home when logo is clicked
    self.routeHome = () => {
        $location.path("/home");
    };

    //saves event to bucket list
    self.saveBucketList = (saveEvent) => {
        self.bucketList.push(saveEvent);
    };

    //removes event from bucket list
    self.removeBucket = (removeEvent) => {
        let index = self.bucketList.indexOf(removeEvent);
        self.bucketList.splice(index, 1);
    };

    //API Request
    self.searchTicketMaster = (search) => {
        let day = search.localDate.getDate();
        let month = `${search.localDate.getMonth() + 1}`;
        let year = search.localDate.getFullYear();

        return $http({
            method: "GET", // Defines the method
            url: `http://app.ticketmaster.com/discovery/v2/events.json?keyword=${search.searchKeyword}&postalCode=${search.postalCode}&localDate=${year}-${month}-${day}&apikey=ibBJCTVGbVNR0NGGSUX7I2MLXS17aVQH` // Defines the URL
        }).then((data) => {
            // This method is what is used to get data from the promise once it has been resolved
            self.jsonPayload = data.data._embedded.events;
            $location.path("/event-list");
        });
    }

    //Pres Defined API Request
    //API Request
    self.searchTicketMasterDefined = (search) => {
        return $http({
            method: "GET", // Defines the method
            url: `http://app.ticketmaster.com/discovery/v2/events.json?keyword=${search.searchKeyword}&postalCode=${search.postalCode}&apikey=ibBJCTVGbVNR0NGGSUX7I2MLXS17aVQH` // Defines the URL
        }).then((data) => {
            // This method is what is used to get data from the promise once it has been resolved
            // console.log(data.data._embedded.events);
            self.jsonPayload = data.data._embedded.events;
            $location.path("/event-list");
        });
    }

};
angular
    .module("App")
    .service("EventService", EventService);
