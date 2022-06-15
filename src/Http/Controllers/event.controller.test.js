import app from '../../../server';
import supertest from 'supertest';
import statuses from "../../App/Enums/HttpStatusesEnum.js";

const request = supertest(app);

describe('given valid request when post /balance', () => {
    it('responds with HTTP 201 CREATED', async () => {
        await request
            .post('/event')
            .set({'Content-Type': 'application/json'})
            .send({type:'deposit', destination:100, amount:10})
            .expect(statuses.HTTP_CREATED)
    });
});

describe('given invalid account id when post /balance', () => {
    it('responds with HTTP 404 NOT FOUND', async () => {
        await request
            .post('/event')
            .set({'Content-Type': 'application/json'})
            .send({type:'deposit', destination:300, amount:10})
            .expect(statuses.HTTP_NOT_FOUND)
    });

    it('responds with number 0 in the body', async () => {
        await request
            .post('/event')
            .set({'Content-Type': 'application/json'})
            .send({type:'deposit', destination:300, amount:10})
            .expect(
                (response) => expect(response.body.toString()).toBe('0') 
            )
    });
});