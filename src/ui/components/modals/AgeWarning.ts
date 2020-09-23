import { ProductPage } from '../../pages/ProductPage.po';
import { AnyModal } from "./AnyModalAbstract";
import { $, browser } from 'protractor';
import { logger } from '../../../utils/logger/log4js.logger';

export class AgeWarningModal extends AnyModal<AgeWarningModal> {

    constructor() {
        super($('[data-component="WarningTemplate"]'));
    }

    clickContinueButton(): ProductPage {
        logger.info("Click 'Continue' button")
        this.get().$('button[data-component="Button"]').click();

        return new ProductPage();
    }

}