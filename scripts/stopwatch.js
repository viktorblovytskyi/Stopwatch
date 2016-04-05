/**
 * Created by Viktor Blvytskyi on 05.04.2016.
 */

var stopwatch = new Vue({
    el: '#stopwatch',

    data: {
        time: '00:00:00.0',
        timeBegan: null,
        timeStopped: null,
        started: null,
        durationTime: 0,
        laps: [],
        lastLap: 0,
        elapsedTime: 0,
        first_button: 'Start',
        second_button: 'Reset'
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
            this.clearLaps();
        },

        /***
         * This function displays data for stopwatch.
         *
         */
        displayTime: function () {
            var currentTime = new Date();

            this.elapsedTime = new Date(currentTime - this.timeBegan - this.timeStopped);
            this.time = this.generateStrTime(this.elapsedTime.getUTCHours(),
                                             this.elapsedTime.getUTCMinutes(),
                                             this.elapsedTime.getUTCSeconds(),
                                             this.elapsedTime.getUTCMilliseconds());
        },

        /***
         * This function generates string with time.
         * @param hour - int
         * @param min - int
         * @param sec - int
         * @param msec - int
         * @return String
         */
        generateStrTime: function (hour, min, sec, msec) {
            msec = msec+"";
            return (hour <= 9 ? "0" + hour : hour) + ":" +
                (min <= 9 ? "0" + min : min) + ":" +
                (sec <= 9 ? "0" + sec : sec) + "." + msec[0];
        },

        /***
         * This function adds lap in list.
         */
        addLapTime: function () {
            console.log('last '+ this.lastLap + ' now '+ this.elapsedTime);
            if (this.lastLap === 0) {
                this.laps.push({time: this.generateStrTime( this.elapsedTime.getUTCHours(),
                                                            this.elapsedTime.getUTCMinutes(),
                                                            this.elapsedTime.getUTCSeconds(),
                                                            this.elapsedTime.getUTCMilliseconds())});
            } else {
                var lapTime = new Date(this.elapsedTime - this.lastLap);
                this.laps.push({ time: this.generateStrTime( lapTime.getUTCHours(),
                                                             lapTime.getUTCMinutes(),
                                                             lapTime.getUTCSeconds(),
                                                             lapTime.getUTCMilliseconds()) });
            }
            this.lastLap = this.elapsedTime;
        },

        /***
         * This function deletes all data from array of laps.
         */
        clearLaps: function () {
            this.laps = [];
        }
    }
});