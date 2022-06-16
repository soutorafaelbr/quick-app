export default class EventStoreDTO {
    constructor(type, destination, amount, origin = null) {
        this.type = type;
        this.destination = destination;
        this.amount = amount;
        this.origin = origin;
    }
}