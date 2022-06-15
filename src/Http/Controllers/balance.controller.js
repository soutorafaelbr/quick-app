import balanceService from "../../App/Services/balance.service";
import statuses from "../../App/Enums/HttpStatusesEnum";

export default {
    get(req, res) {
        try {
            res.type('Content-Type', 'text/plain')
                .status(statuses.HTTP_OK)
                .send(`${balanceService.getByAccountId(req.query.account_id)}`);

        } catch (err) {
            res.status(statuses.HTTP_NOT_FOUND).send();
        };
    },
}