import { waitForCondition, waitForElementVisible, waitForElementNotVisible } from '../../utils/waiter';
import { ElementFinder, ExpectedConditions, browser } from "protractor";
import { IModal } from "./IModal";
import { logger } from '../../../utils/logger/log4js.logger';

export abstract class AnyModal<T> implements IModal<T> {

    protected component: ElementFinder;

    constructor(component: ElementFinder) {
        this.component = component;
    }

    modalShouldBePresent(): T {
        logger.info(`Modal should be visible`)
        expect(waitForElementVisible(this.component)).toBeTrue;

        return <unknown>this as T;
    }

    modalShouldNotBePresent(): T {
        logger.info(`Modal should not be visible`)
        expect(waitForElementNotVisible(this.component)).toBeTrue;

        return <unknown>this as T;
    }

    get(): ElementFinder {
        return this.component
    }
}