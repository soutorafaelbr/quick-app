import EventStoreDTO from '../DTOs/eventStore.dto';
import {account, origin, destination} from './account.stub';
import eventService from './event.service';

describe('given valid dto on calling create account', () => {
    it('responds with id and balance of destination', () => {
        const dto = new EventStoreDTO('deposit', 10, 1234, 100);
        
        const response = eventService.createAccount(dto);

        expect(response.destination.id).toBe(dto.id);
        expect(response.destination.balance).toBe(dto.amount);
    });
});

describe('given valid dto on calling deposit in account', () => {
    it('responds with id and balance of destination', () => {
        const dto = new EventStoreDTO('deposit', 100, 10);
        
        const response = eventService.depositOnAccount(dto);
        const amount = account.balance + dto.amount;
        expect(response.destination.id).toBe(dto.id);
        expect(response.destination.balance).toBe(amount);
    });
});

describe('given invalid destination when withdrawing value', () => {
    it('throws account not found exception', () => {
        expect(() => {eventService.post(1234)}).toThrow('Account Not Found');
    });
});

describe('given valid request on calling withdraw from a account', () => {
    it('responds with id and balance of destination', () => {
        const dto = new EventStoreDTO('deposit', 100, 5, 100);
        
        const response = eventService.withdraw(dto);
        const amount = account.balance - dto.amount;

        expect(response.origin.id).toBe(dto.origin);
        expect(response.origin.balance).toBe(amount);
    });

    it('throws account not found exception', () => {
        expect(() => {eventService.post(1234)}).toThrow('Account Not Found');
    });
});

describe('given valid request on calling transfer from a account to other', () => {
    it('responds with id and balance of destination', () => {
        const dto = new EventStoreDTO('transfer', 5, destination.id, origin.id);
        
        const response = eventService.transfer(dto);

        expect(response.origin.id).toBe(dto.origin);
        expect(response.origin.balance).toBe(origin.balance - dto.amount);

        expect(response.destination.id).toBe(dto.destination);
        expect(response.destination.balance).toBe(destination.balance + dto.amount);
    });
    
    it('throws account not found exception', () => {
        expect(() => {eventService.post(1234)}).toThrow('Account Not Found');
    });
});