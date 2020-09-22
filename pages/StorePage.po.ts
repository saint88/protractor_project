import { element, browser } from 'protractor';
import { BasePage } from "./BasePage.po";

export class StorePage extends BasePage<StorePage> {

    private path: string = '/store/ru';

    open(): StorePage {
        browser.logger.step('Open Store page')

        return super.open(this.path)
            .pageShouldBeOpened(new RegExp(this.path));
    }

}