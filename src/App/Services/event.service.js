import AccountNotFound from "../Exceptions/accountNotFound.exception";
import {account, destination, origin} from "./account.stub";

export default {
    

    post(eventStoreDto) {
        if (! [account.id, destination.id, origin.id].includes(eventStoreDto.destination)) {
            throw new AccountNotFound;
        }

        switch (eventStoreDto.type) {
            case 'deposit':
                return this.createAccount(eventStoreDto);
            case 'withdraw':
                return this.withdraw(eventStoreDto);
            case 'transfer':
                return this.transfer(eventStoreDto);
        }
    },

    createAccount(eventStoreDTO) {
        if (account.id == eventStoreDTO.destination) {
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
                balance: account.balance + eventStoreDTO.amount
            }
        };
    },

    withdraw(eventStoreDTO) {
        return {
            origin: {
                id: eventStoreDTO.origin, 
                balance: account.balance - eventStoreDTO.amount
            }
        };
    },

    transfer(eventStoreDTO) {
        return {
            origin: {
                id: eventStoreDTO.origin,
                balance: origin.balance - eventStoreDTO.amount
            },
            destination: {
                id: eventStoreDTO.destination,
                balance:  destination.balance + eventStoreDTO.amount
            }
        }
    }
}