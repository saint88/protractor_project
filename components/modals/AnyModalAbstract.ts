import { waitForCondition, waitForElementVisible, waitForElementNotVisible } from '../../utils/waiter';
import { ElementFinder, ExpectedConditions } from "protractor";
import { IModal } from "./IModal";

export abstract class AnyModal<T> implements IModal<T> {

    protected component: ElementFinder;

    constructor(component: ElementFinder) {
        this.component = component;
    }

    modalShouldBePresent(): T {
        expect(waitForElementVisible(this.component)).toBeTrue;

        return <unknown>this as T;
    }

    modalShouldNotBePresent(): T {
        expect(waitForElementNotVisible(this.component)).toBeTrue;

        return <unknown>this as T;
    }

    get(): ElementFinder {
        return this.component
    }
}