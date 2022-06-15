import EventStoreDTO from '../DTOs/eventStore.dto';
import accountStub from './account.stub';
import eventService from './event.service';

describe('given valid dto on calling create account', () => {
    it('responds with id and balance of destination', () => {
        const dto = new EventStoreDTO('deposit', 1234, 10);
        
        const response = eventService.createAccount(dto);

        expect(response.destination.id).toBe(dto.id);
        expect(response.destination.balance).toBe(dto.amount);
    });
});

describe('given valid dto on calling deposit in account', () => {
    it('responds with id and balance of destination', () => {
        const dto = new EventStoreDTO('deposit', 100, 10);
        
        const response = eventService.depositOnAccount(dto);
        const amount = accountStub.balance + dto.amount;
        expect(response.destination.id).toBe(dto.id);
        expect(response.destination.balance).toBe(amount);
    });
});