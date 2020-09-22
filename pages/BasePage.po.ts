import { browser, element, by } from "protractor";

export abstract class BasePage<T> {

    protected hostnamePattern: string = 'https?://.*?\\.\\w{2,3}';

    open(path: string): T {
        browser.get(browser.params.baseUrl + path);

        return <unknown>this as T;
    }

    pageShouldBeOpened(regExp: RegExp): T {
        expect(browser.driver.getCurrentUrl()).toMatch(regExp);

        return <unknown>this as T;
    }
}