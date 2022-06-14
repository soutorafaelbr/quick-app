import balanceService from './balance.service';

describe('given invalid account when balance is requested ', () => {
    it('should throw exception', () => {
        expect(() => {balanceService.getByAccountId(1234)}).toThrow('Account Not Found');
    });
});