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
        browser.logger.step(`Type search request ${text} in search field`)

        this.searchInputField.sendKeys(text);

        return this;
    }

    valueInSearchFieldShouldBeSameAs(text: string): SearchBar {
        browser.logger.step(`Check that value in search field same as ${text}`)

        this.searchInputField.getAttribute('value')
            .then($value => expect($value).toEqual(text));

        return this;
    }

    searchResultTooltipShouldBeVisible(): SearchBar {
        browser.logger.step('Check visible tooltip with search results')

        expect(waitForElementVisible(this.searchResultTooltip)).toBeTrue;
        
        return this;
    }

    searchResultTooltipShouldNotBeVisible(): SearchBar {
        browser.logger.step('Check don\'t visible tooltip with search results')

        expect(waitForElementNotVisible(this.searchResultTooltip)).toBeTrue;
        
        return this;
    }

    searchResultTooltipItemsShouldBeVisible(quantity: number): SearchBar {
        browser.logger.step('Check visible search result items in tooltip')

        let condition = () => this.searchListItems
            .filter($item => $item.isDisplayed())
            .count().then($num => $num === quantity);
        
        expect(waitForCondition(condition)).toBe(true);

        return this;
    }

    clickCrossButton(): SearchBar {
        browser.logger.step('Click cross button in search field')

        browser.wait(ExpectedConditions.elementToBeClickable(this.crossButton));
        this.crossButton.click();

        return this;
    }

    clickSearchItemByTitle(title: string): ProductPage {
        browser.logger.step(`Click item ${title} in search result tooltip`)

        this.searchListItems.filter($item => $item.getText().then($title => $title === title))
            .click();

        return new ProductPage();
    }
}