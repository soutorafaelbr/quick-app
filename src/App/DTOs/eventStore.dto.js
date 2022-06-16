export default class EventStoreDTO {
    constructor(type, amount, destination = 0, origin = 0) {
        this.type = type;
        this.destination = destination;
        this.amount = amount;
        this.origin = origin;
    }
}