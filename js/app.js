var app = new Vue({
    el: '#app',
    data: {
        latitude1: null,
        longitude1: null,
        latitude2: null,
        longitude2: null,
        distance: null
    },
    methods: {
        calculate: function (){
            this.haversine();
        },
        reset: function() {
            this.distance = null;
            this.latitude1 = null;
            this.longitude1 = null;
            this.latitude2 = null;
            this.longitude2 = null;
        },
        example: function() {
            this.latitude1 = 49.5851239;
            this.longitude1 = 21.66071125367194;
            this.latitude2 = 52.20743105;
            this.longitude2 = 20.915034212779624;
        },
        radians: function(deg) {
            return deg/180.0 * Math.PI;
        },
        haversine: function() {
           var lat1 = this.radians(this.latitude1),
               lon1 = this.radians(this.longitude1),
               lat2 = this.radians(this.latitude2),
               lon2 = this.radians(this.longitude2);
           var R = 6372.8; // km
           var dLat = lat2 - lat1;
           var dLon = lon2 - lon1;
           var a = Math.sin(dLat / 2) * Math.sin(dLat /2) + Math.sin(dLon / 2) * Math.sin(dLon /2) * Math.cos(lat1) * Math.cos(lat2);
           var c = 2 * Math.asin(Math.sqrt(a));
           this.distance = R * c;
        }
    }
})
