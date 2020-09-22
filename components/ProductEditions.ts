import { LoginPage } from './../pages/LoginPage.po';
import { AnyComponent } from "./AnyComponentAbstract";
import { $, ElementFinder, ElementArrayFinder, $$, ExpectedConditions, browser } from 'protractor';

export class ProductEditions extends AnyComponent<ProductEditions> {
    
    constructor() {
        super($('[data-component="ProductCard"]'));
    }

    private favouriteButtons: ElementArrayFinder = this.get().$$('[data-component="WishButton"] button');

    clickRandomFavouriteButton(index: number): LoginPage {
        const favouriteButton: ElementFinder = this.favouriteButtons.get(--index);
        browser.wait(ExpectedConditions.elementToBeClickable(favouriteButton));

        favouriteButton.click();

        return new LoginPage();

    }
}