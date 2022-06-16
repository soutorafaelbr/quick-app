import app from '../../../server';
import supertest from 'supertest';
import statuses from "../../App/Enums/HttpStatusesEnum.js";

const request = supertest(app);

describe('given valid request when making a deposit', () => {
    it('responds with HTTP 201 CREATED', async () => {
        await request
            .post('/event')
            .set({'Content-Type': 'application/json'})
            .send({type:'deposit', destination:100, amount:10, origin: 100})
            .expect(statuses.HTTP_CREATED)
    });
});

describe('given invalid account id when making a deposit', () => {
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


describe('given valid request when making a withdraw', () => {
    it('responds with HTTP 201 CREATED', async () => {
        await request
            .post('/event')
            .set({'Content-Type': 'application/json'})
            .send({type:'withdraw', destination:100, amount:5})
            .expect(statuses.HTTP_CREATED)
    });

    it('responds with destination and id on body of response', async () => {
        let requestObject = {type:'withdraw', origin:100, amount:5, destination: 100};

        await request
            .post('/event')
            .set({'Content-Type': 'application/json'})
            .send(requestObject)
            .expect(
                (response) => {
                    let body = response.body;
                    expect(body.origin.id).toBe(requestObject.origin);
                    expect(body.origin.balance).toBe(requestObject.amount);
                }
            )
    });
});