import { ElementFinder } from 'protractor';

export abstract class AnyComponent<T> {
    
    protected component: ElementFinder;

    constructor(component: ElementFinder) {
        expect(component.isPresent()).toBeTrue;
        this.component = component;
    }

    get(): ElementFinder {
        return this.component
    }
}