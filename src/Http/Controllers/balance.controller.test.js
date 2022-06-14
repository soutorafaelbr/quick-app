import app from '../../../server';
import supertest from 'supertest';
import statuses from "../../App/Enums/HttpStatusesEnum.js";

const request = supertest(app);

describe('given invalid account when balance is requested ', () => {
    it('should responds with http 404 NOT FOUND', () => {
        return request
            .get('/balance')
            .query({account_id:'1234'})
            .then(
                response => expect(response.statusCode).toBe(statuses.HTTP_NOT_FOUND)
            );
    });
});