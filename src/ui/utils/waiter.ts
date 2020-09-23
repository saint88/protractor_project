import { browser, ExpectedConditions, ElementFinder } from 'protractor';

export const waitForCondition = (condition: Function, timeout = 5000): boolean => {
    try {
        browser.wait(condition, timeout)
        return true;
    } catch(err) {
        return false;
    }
}

export const waitForElementVisible = (element: ElementFinder, timeout = 5000): boolean => {
    return waitForCondition(ExpectedConditions.visibilityOf(element));
}

export const waitForElementNotVisible = (element: ElementFinder, timeout = 5000): boolean => {
    return waitForCondition(ExpectedConditions.invisibilityOf(element));
}