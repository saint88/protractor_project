import { browser, element, by } from "protractor";
import { logger } from "../../utils/logger/log4js.logger";

export abstract class BasePage<T> {

    protected hostnamePattern: string = 'https?://.*?\\.\\w{2,3}';

    open(path: string): T {
        logger.info(`Open page ${path}`)

        browser.get(browser.params.baseUrl + path);

        return <unknown>this as T;
    }

    pageShouldBeOpened(regExp: RegExp): T {
        logger.info('Check that page is opened')

        expect(browser.driver.getCurrentUrl()).toMatch(regExp);

        return <unknown>this as T;
    }
}