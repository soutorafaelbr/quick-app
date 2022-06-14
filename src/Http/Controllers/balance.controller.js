import balanceService from "../../App/Services/balance.service";
import statuses from "../../App/Enums/HttpStatusesEnum";

export default {
    get(req, res) {
        try {
            balanceService.getByAccountId(req.query.account_id);
            res.send('success!');
        } catch (err) {
            res.status(statuses.HTTP_NOT_FOUND).send();
        };
    },
}