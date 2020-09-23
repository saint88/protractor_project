import { BasePage } from "./BasePage.po";
import { logger } from "../../utils/logger/log4js.logger";

export class ProductPage extends BasePage<ProductPage> {
    
    private pattern = new RegExp(this.hostnamePattern + '/store/\\w{2}/product/.*?/home');

    pageShouldBeOpened(): ProductPage {
        logger.info('Check Product page was opened')

        super.pageShouldBeOpened(this.pattern);

        return this;
    }

}