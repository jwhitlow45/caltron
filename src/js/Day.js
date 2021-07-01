class Day {
    constructor(date, isPadding, events = []) {
        this.date = date;
        this.isPadding = isPadding;
        this.events = events;
    }

    // getter functions
    getDate() {
        return this.date
    }
    getEvents() {
        return this.events;
    }
    getIsPadding() {
        return this.isPadding;
    }
}