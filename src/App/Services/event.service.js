
export default {
    createAccount(eventStoreDTO) {
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
                balance: eventStoreDTO.amount
            }
        };
    }
}