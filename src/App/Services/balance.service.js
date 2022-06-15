import AccountNotFound from '../Exceptions/accountNotFound.exception'
import balanceStub from './balance.stub';

export default {
    getByAccountId(accountId) {
        if (accountId == 1234) {
            throw new AccountNotFound;
        }

        if (accountId == 100) {
            return balanceStub.balance;
        }
        
    }
}