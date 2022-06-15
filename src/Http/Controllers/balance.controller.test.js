import app from '../../../server';
import supertest from 'supertest';
import statuses from "../../App/Enums/HttpStatusesEnum.js";
import balanceStub from '../../App/Services/balance.stub';

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

describe('given valid account when balance is requested ', () => {
    it('should responds with http 200 OK', () => {
        return request
            .get('/balance')
            .query({account_id:'100'})
            .then(
                response => expect(response.statusCode).toBe(statuses.HTTP_OK)
            );
    });

    it('should responds with body with account balance', () => {
        return request
            .get('/balance')
            .query({account_id:'100'})
            .then(
                response => {
                    let result = response.body.toString();
                    expect(result).toBe(balanceStub.balance.toString())
                }  
            );
    });
});