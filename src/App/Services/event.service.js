
export default{
    store(eventStoreDTO) {
        return {
            destination: {
                id: eventStoreDTO.id, 
                balance: eventStoreDTO.amount
            }
        };
    }
}