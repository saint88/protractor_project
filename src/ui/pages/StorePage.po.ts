import { element, browser } from 'protractor';
import { BasePage } from "./BasePage.po";
import { logger } from '../../utils/logger/log4js.logger';

export class StorePage extends BasePage<StorePage> {

    private path: string = '/store/ru';

    open(): StorePage {
        logger.info('Open Store page')

        return super.open(this.path)
            .pageShouldBeOpened(new RegExp(this.path));
    }

}