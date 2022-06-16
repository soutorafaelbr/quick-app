import app from '../../../server';
import supertest from 'supertest';
import statuses from "../../App/Enums/HttpStatusesEnum.js";
import { destination, origin } from '../../App/Services/account.stub';

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
            .send({type:'deposit', destination:200, amount:10})
            .expect(statuses.HTTP_NOT_FOUND)
    });

    it('responds with number 0 in the body', async () => {
        await request
            .post('/event')
            .set({'Content-Type': 'application/json'})
            .send({type:'deposit', destination:200, amount:10})
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

describe('given valid request when making transfer', () => {
    it('responds with HTTP 201 CREATED', async () => {
        await request
            .post('/event')
            .set({'Content-Type': 'application/json'})
            .send({type:'transfer', origin: 100, destination:300, amount:15})
            .expect(statuses.HTTP_CREATED)
    });

    it('responds with destination and id on body of response', async () => {
        let requestObject = {type:'transfer', origin:100, amount:5, destination: 300};

        await request
            .post('/event')
            .set({'Content-Type': 'application/json'})
            .send(requestObject)
            .expect(
                (response) => {
                    let body = response.body;
                    expect(body.origin.id).toBe(requestObject.origin);
                    expect(body.origin.balance).toBe(origin.balance - requestObject.amount);
                    expect(body.destination.id).toBe(requestObject.destination);
                    expect(body.destination.balance).toBe(destination.balance + requestObject.amount);
                }
            )
    });
});