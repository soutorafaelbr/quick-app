import AccountNotFound from '../Exceptions/accountNotFound.exception'

export default {
    getByAccountId(accountId) {
        if (accountId == 1234) {
            throw new AccountNotFound;
        }
        
    }
}