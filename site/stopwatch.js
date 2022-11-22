function StopWatch() {
    let startTime, endTime, running, duration = 0;
    this.start = function () {
        if (running) 
        throw new Error('Stopwatch has alredy started.');

        running = true;
        startTime = new Date();
    };
    this.stop = function () {
        if (!running) 
        throw new Error('Stopwatch has alredy stoped');

        running = false;
        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };
    this.reset = function () {
        if (startTime === 0) 
        throw new Error('Stopwatch has alredy reseted');

        startTime, endTime = null;
        running = false;
        duration = 0;
    }
    Object.defineProperty(this, 'duration', {
        get: function () { return duration; }
    });
}