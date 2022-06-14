import EventStoreDTO from '../DTOs/eventStore.dto';
import eventService from './event.service';

describe('given invalid account when balance is requested ', () => {
    it('should throw exception', () => {
        const dto = new EventStoreDTO('some-type', 1234, 10);
        
        const response = eventService.store(dto);
        expect(response.destination.id).toBe(dto.id);
        expect(response.destination.balance).toBe(dto.amount);
    });
});