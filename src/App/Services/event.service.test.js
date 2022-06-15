import EventStoreDTO from '../DTOs/eventStore.dto';
import eventService from './event.service';

describe('given valid post /event request', () => {
    it('responds with id and balance of destination', () => {
        const dto = new EventStoreDTO('some-type', 1234, 10);
        
        const response = eventService.createAccount(dto);

        expect(response.destination.id).toBe(dto.id);
        expect(response.destination.balance).toBe(dto.amount);
    });
});

describe('given valid put /event request', () => {
    it('responds with id and balance of destination', () => {
        const dto = new EventStoreDTO('some-type', 1234, 10);
        
        const response = eventService.depositOnAccount(dto);

        expect(response.destination.id).toBe(dto.id);
        expect(response.destination.balance).toBe(dto.amount);
    });
});