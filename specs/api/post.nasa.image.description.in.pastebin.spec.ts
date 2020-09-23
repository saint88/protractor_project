import { createNewPaste } from '../../src/api/pastebin/pastebin';
import { apod } from '../../src/api/nasa/nasa';
import { ApodImage } from '../../src/api/nasa/types/apod.type';
import { browser } from 'protractor';
import { logger } from '../../src/utils/logger/log4js.logger';

const Request = require("request");

describe('Post data in pastebin service via API', () => {
    
    it('Post NASA image description in pastebin service via API', async () => {

        const apodImage: ApodImage = await apod();

        logger.info(apodImage.hdurl);

        await createNewPaste(apodImage.explanation, {api_paste_name: 'NASA Space Info'});
    })    
})