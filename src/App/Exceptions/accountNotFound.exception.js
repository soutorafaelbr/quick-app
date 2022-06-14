export default class AccountNotFound extends Error {
    constructor() {
        super();
        this.name = 'AccountNotFound';
        this.message = 'Account Not Found';
    }
}