import AccountNotFound from "../Exceptions/accountNotFound.exception";
import accountStub from "./account.stub";

export default {
    

    post(eventStoreDto) {
        if (eventStoreDto.destination != accountStub.id) {
            throw new AccountNotFound;
        }
        
        switch (eventStoreDto.type) {
            case 'deposit':
                this.createAccount(eventStoreDto);
        }
    },

    createAccount(eventStoreDTO) {
        if (accountStub.id == eventStoreDTO.destination) {
            return this.depositOnAccount(eventStoreDTO);
        }

        return {
            destination: {
                id: eventStoreDTO.id, 
                balance: eventStoreDTO.amount
            }
        };
    },

    depositOnAccount(eventStoreDTO) {
        return {
            destination: {
                id: eventStoreDTO.id, 
                balance: accountStub.balance + eventStoreDTO.amount
            }
        };
    }
}