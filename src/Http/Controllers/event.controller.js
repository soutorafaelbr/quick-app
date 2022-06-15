import EventStoreDTO from '../../App/DTOs/eventStore.dto';
import httpStatusesEnum from '../../App/Enums/HttpStatusesEnum';
import eventService from '../../App/Services/event.service';

export default {
    post(req, res) {
        const {type, destination, amount} = req.body;

        res.status(httpStatusesEnum.HTTP_CREATED)
            .send(eventService.createAccount(new EventStoreDTO(type, destination, amount)));
    },

    put(req, res) {
        const {type, destination, amount} = req.body;

        res.status(httpStatusesEnum.HTTP_CREATED)
            .send(eventService.createAccount(new EventStoreDTO(type, destination, amount)));
    }
}