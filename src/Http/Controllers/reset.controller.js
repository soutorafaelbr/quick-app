import statuses from "../../App/Enums/HttpStatusesEnum.js";

export default {
    get(req, res) {
        res.status(statuses.HTTP_OK);
        res.send();
    }
}