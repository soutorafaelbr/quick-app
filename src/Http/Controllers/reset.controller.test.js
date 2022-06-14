import app from '../../../server';
import supertest from 'supertest';
import statuses from "../../App/Enums/HttpStatusesEnum.js";

const request = supertest(app);

describe('given valid http request when /reset is requested ', () => {
    it('should responds with http 200 OK', () => {
        return request
            .get('/reset')
            .then(response => expect(response.statusCode).toBe(statuses.HTTP_OK));
    });
});