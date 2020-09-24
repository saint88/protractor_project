import { mergeObjects, joinKeyValueObject } from './../../utils/objects';
import { browser } from "protractor";
import { stringify } from "querystring";
import { logger } from "../../utils/logger/log4js.logger";

const fetch = require("node-fetch");

const DEV_KEY: string = 'rJMQnE5-W_vF8uvQxr-OlAgFDWaftBD3';
const BASE_URL: string = 'https://pastebin.com';

export const createNewPaste = async (text: string, options?: {}): Promise<string> => {
    const params = {
        api_dev_key: DEV_KEY,
        api_paste_code: text,
        api_option: 'paste'
    };

    const requestParams = mergeObjects(params, options);
    const body = joinKeyValueObject(requestParams, '&');

    const response = await fetch(BASE_URL + '/api/api_post.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded' 
        },
        body: body
    });

    expect(response.status).toBe(200);

    const bodyResponse = await response.text()

    expect(bodyResponse).toMatch(new RegExp('^https?://pastebin.com/.*?$'));

    return bodyResponse;
}