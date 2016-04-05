/**
 * Created by leito on 05.04.2016.
 */

var stopwatch = new Vue({
    el: '#stopwatch',

    data: {
        time: '00:00:00.0',
        timeBegan: null,
        timeStopped: null,
        started: null,
        durationTime: 0,
        hour: 0,
        min: 0,
        sec: 0,
        msec: 0,
        laps: []
    },

    methods: {

        /***
         * This function starts stopwatch.
         */
        startTime: function () {
            if (this.timeBegan === null) {
                this.timeBegan = new Date();
            } else if (this.timeBegan !== null) {
                this.durationTime += ( new Date() - this.timeStopped);
            }

            this.started = setInterval(this.displayTime, 10);
        },

        /***
         * This function stops stopwatch.
         */
        stopTime: function () {
            this.timeStopped = new Date();
            clearInterval(this.started);
        },

        /***
         * This function reset data for stopwatch.
         */
        resetTime: function () {
            clearInterval(this.started);
            this.timeBegan = null;
            this.timeStopped = null;
            this.durationTime = 0;
            this.time = "00:00:00.0";
        },

        /***
         * This function displays data for stopwatch.
         *
         */
        displayTime: function () {
            var currentTime = new Date(),
                elapsedTime = new Date(currentTime - this.timeBegan - this.timeStopped);

            this.hour = elapsedTime.getUTCHours();
            this.min = elapsedTime.getUTCMinutes();
            this.sec = elapsedTime.getUTCSeconds();
            this.msec = elapsedTime.getUTCMilliseconds();
            this.generateStrTime();
        },

        /***
         * This function generates string with time.
         */
        generateStrTime: function () {
            this.time = (this.hour < 9 ? "0" + this.hour : this.hour) + ":" +
                (this.min < 9 ? "0" + this.min : this.min) + ":" +
                (this.sec < 9 ? "0" + this.sec : this.sec) + "." + this.msec;
        }
    }
});