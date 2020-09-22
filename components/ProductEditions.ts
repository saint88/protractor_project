import { LoginPage } from './../pages/LoginPage.po';
import { AnyComponent } from "./AnyComponentAbstract";
import { $, ElementFinder, ElementArrayFinder, $$, ExpectedConditions, browser } from 'protractor';

export class ProductEditions extends AnyComponent<ProductEditions> {
    
    constructor() {
        super($('[data-component="ProductCard"]'));
    }

    private favouriteButtons: ElementArrayFinder = this.get().$$('[data-component="WishButton"] button');

    clickFavouriteButtonByIndex(index: number): LoginPage {
        browser.logger.step(`Click favourite button ${index} in editions list`)

        const favouriteButton: ElementFinder = this.favouriteButtons.get(--index);
        browser.wait(ExpectedConditions.elementToBeClickable(favouriteButton));

        favouriteButton.click();

        return new LoginPage();

    }
}