export default class EventStoreDTO {
    constructor(type, destination, amount) {
        this.type = type;
        this.destination = destination;
        this.amount = amount;
    }
}