"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("request");
class BackendApiClient {
    constructor() {
        this.apiUrl = process.env.API_BACKEND;
    }
    async post(path, data) {
        const uri = `${this.apiUrl}/${path}`;
        let options = {
            json: data,
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return await new Promise((resolve, reject) => {
            request_1.post(uri, options, (error, response, body) => {
                if (error)
                    return reject(error);
                if (response.statusCode != 200)
                    return reject(response);
                if (!body)
                    return resolve();
                if (typeof (body) == 'string')
                    return resolve(JSON.parse(body.replace(/^\uFEFF/, '')));
                return resolve(body);
            });
        });
    }
}
exports.BackendApiClient = BackendApiClient;
//# sourceMappingURL=backendapi-client.js.map