import { waitForElementNotVisible, waitForElementVisible } from '../utils/waiter';
import { waitForCondition } from '../utils/waiter';
import { by, $, element, browser, ExpectedConditions, ElementFinder, $$, ElementArrayFinder } from 'protractor';
import { AnyComponent } from "./AnyComponentAbstract";
import { ProductPage } from '../pages/ProductPage.po';

export class SearchBar extends AnyComponent<SearchBar> {
    
    constructor() {
        super($('[data-component="SearchBar"]'));
    }

    private searchInputField: ElementFinder = element(by.id('searchInput'));
    private searchResultTooltip: ElementFinder = element(by.id('search-bar-autocomplete'));
    private searchListItems: ElementArrayFinder = $$('[data-component="ResultListItem"]');
    private crossButton: ElementFinder = $('button[class*="searchCloseButton"]');

    typeSearchRequest(text: string): SearchBar {
        this.searchInputField.sendKeys(text);

        return this;
    }

    valueInSearchFieldShouldBeSameAs(text: string): SearchBar {
        this.searchInputField.getAttribute('value')
            .then($value => expect($value).toEqual(text));

        return this;
    }

    searchResultTooltipShouldBeVisible(): SearchBar {
        expect(waitForElementVisible(this.searchResultTooltip)).toBeTrue;
        
        return this;
    }

    searchResultTooltipShouldNotBeVisible(): SearchBar {
        expect(waitForElementNotVisible(this.searchResultTooltip)).toBeTrue;
        
        return this;
    }

    searchResultTooltipItemsShouldBeVisible(quantity: number): SearchBar {
        let condition = () => this.searchListItems
            .filter($item => $item.isDisplayed())
            .count().then($num => $num === quantity);
        
        expect(waitForCondition(condition)).toBe(true);

        return this;
    }

    clickCrossButton(): SearchBar {
        browser.wait(ExpectedConditions.elementToBeClickable(this.crossButton));
        this.crossButton.click();

        return this;
    }

    clickSearchItemByTitle(title: string): ProductPage {
        this.searchListItems.filter($item => $item.getText().then($title => $title === title))
            .click();

        return new ProductPage();
    }
}