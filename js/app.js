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
        callServer: function() {
            var self = this;
            var body = new FormData( document.querySelector('form') );
            var request = new Request('app.php',{ method: 'POST', body: body });
            fetch(request).then( function(res) {
                return res.json();
            }).then( function (data) {
                self.distance = data.distance;
            }).catch ( function(err) {
                alert(err);
            });
        }
    }
})
