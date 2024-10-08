import { Type, ɵComponentDef } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class DynamicComponentFactoryService {
    constructor();
    createDynamicComponent<T>(componentType: Type<T>, template: string, imports?: Type<any>[], preserveWhitespaces?: boolean, styles?: string[]): Observable<Type<T>>;
    destroyDynamicComponent<T>(_componentType: Type<T>): void;
    getComponentDef<T>(componentType: Type<T>): ɵComponentDef<T>;
    private createAndCompileDynamicComponent;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicComponentFactoryService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DynamicComponentFactoryService>;
}
