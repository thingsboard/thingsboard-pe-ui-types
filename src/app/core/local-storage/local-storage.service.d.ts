import * as i0 from "@angular/core";
export declare class LocalStorageService {
    constructor();
    static loadInitialState(): any;
    setItem(key: string, value: any): void;
    getItem(key: string): any;
    removeItem(key: string): void;
    /** Tests that localStorage exists, can be written to, and read from. */
    testLocalStorage(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LocalStorageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LocalStorageService>;
}
