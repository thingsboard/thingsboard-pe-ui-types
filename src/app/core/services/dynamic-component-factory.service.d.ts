import { Compiler, Injector, NgModuleRef, OnDestroy, Type } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare abstract class DynamicComponentModule implements OnDestroy {
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicComponentModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DynamicComponentModule, never, never, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DynamicComponentModule>;
}
interface DynamicComponentData<T> {
    componentType: Type<T>;
    componentModuleRef: NgModuleRef<DynamicComponentModule>;
}
export declare class DynamicComponentFactoryService {
    private compiler;
    private injector;
    private dynamicComponentModulesMap;
    constructor(compiler: Compiler, injector: Injector);
    createDynamicComponent<T>(componentType: Type<T>, template: string, modules?: Type<any>[], preserveWhitespaces?: boolean, compileAttempt?: number, styles?: string[]): Observable<DynamicComponentData<T>>;
    destroyDynamicComponent<T>(componentType: Type<T>): void;
    private _createDynamicComponent;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicComponentFactoryService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DynamicComponentFactoryService>;
}
export {};
