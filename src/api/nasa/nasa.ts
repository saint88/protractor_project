import { ApodImage } from './types/apod.type';
import { URL } from 'url';
import { logger } from '../../utils/logger/log4js.logger';

const fetch = require("node-fetch");

const API_KEY: string = 'K5wWanEsmvIywSqW58EzHTwXIb1TdGh4sDYHKhMQ';
const BASE_URL: string = 'https://api.nasa.gov';

export const apod = async (): Promise<ApodImage> => {
    logger.info('Get image and description about space from NASA')

    let url = new URL(BASE_URL + '/planetary/apod');
    url.searchParams.append('api_key', API_KEY)

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'   
        }
    })

    expect(response.status).toBe(200);

    const apodImage: ApodImage = await response.json();

    expect(apodImage.explanation).not.toEqual('');
    expect(apodImage.hdurl).not.toEqual('');
    
    return new Promise((resolve) => {
        resolve({
            explanation: apodImage.explanation,
            hdurl: apodImage.hdurl
        })
    });
}