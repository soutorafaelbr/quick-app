import EventStoreDTO from '../../App/DTOs/eventStore.dto';
import httpStatusesEnum from '../../App/Enums/HttpStatusesEnum';
import eventService from '../../App/Services/event.service';

export default {
    post(req, res) {
        const {type, destination, amount, origin} = req.body;

        try {
            res.status(httpStatusesEnum.HTTP_CREATED)
            .send(eventService.post(new EventStoreDTO(type, destination, amount, origin)));
        } catch (error) {
            res.status(httpStatusesEnum.HTTP_NOT_FOUND)
                .type('Content-Type', 'text/plain')
                .send('0');
        }
    },
}