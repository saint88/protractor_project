import { ProductPage } from '../../pages/ProductPage.po';
import { AnyModal } from "./AnyModalAbstract";
import { $, browser } from 'protractor';

export class AgeWarningModal extends AnyModal<AgeWarningModal> {

    constructor() {
        super($('[data-component="WarningTemplate"]'));
    }

    clickContinueButton(): ProductPage {
        browser.logger.step("Click 'Continue' button")
        this.get().$('button[data-component="Button"]').click();

        return new ProductPage();
    }

}