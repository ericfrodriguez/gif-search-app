import 'whatwg-fetch';

import dotenv from 'dotenv';

dotenv.config({
    path: '.env'
})

jest.mock('./src/helpers/getEnvironments', () => ({
    getEnvironments: () => ({...process.env})
}))