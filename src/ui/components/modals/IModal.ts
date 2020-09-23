export interface IModal<T> {
    modalShouldBePresent(): T;
    modalShouldNotBePresent(): T;
}