import { BasePage } from "./BasePage.po";

export class ProductPage extends BasePage<ProductPage> {
    
    private pattern = new RegExp(this.hostnamePattern + '/store/\\w{2}/product/.*?/home');

    pageShouldBeOpened(): ProductPage {
        super.pageShouldBeOpened(this.pattern);

        return this;
    }

}