import app from '../../../index.js';
import supertest from 'supertest';

const request = supertest(app);

describe('reset controller', () => {
    test('given valid http request when /reset is requested should responds with http 200 OK', async () => {
        const response = await request.get('/reset');
        expect(response.statusCode).toBe(200);
    });
});