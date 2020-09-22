import { BasePage } from "./BasePage.po";
import { browser } from "protractor";

export class ProductPage extends BasePage<ProductPage> {
    
    private pattern = new RegExp(this.hostnamePattern + '/store/\\w{2}/product/.*?/home');

    pageShouldBeOpened(): ProductPage {
        browser.logger.step('Check Product page was opened')

        super.pageShouldBeOpened(this.pattern);

        return this;
    }

}