import accountStub from "./account.stub";

export default {
    

    post(eventStoreDto) {
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