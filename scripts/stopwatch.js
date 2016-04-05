/**
 * Created by leito on 05.04.2016.
 */
window.onload = function() {
    var stopwatch = new Vue({

        el: '#stopwatch',
        data: {
            time: '00:00:00.000',
            timeBegan: null,
            timeStopped: null,
            started: null,
            durationTime: 0
        },
        methods: {
            /***
             * This function starts 
             */
            startTime: function(){},
            stopTime: function(){},
            resetTime: function(){
                clearInterval(this.started);
                this.timeBegan = null;
                this.timeStopped = null;
                this.durationTime = 0;
            },
            displayTime: function(){}


        }
    }); 
};