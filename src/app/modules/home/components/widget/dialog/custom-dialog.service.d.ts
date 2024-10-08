import { Type } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DynamicComponentFactoryService } from '@core/services/dynamic-component-factory.service';
import { CustomDialogComponent } from './custom-dialog.component';
import * as i0 from "@angular/core";
export declare class CustomDialogService {
    private dynamicComponentFactoryService;
    private sharedModule;
    private sharedHomeComponentsModule;
    private homeComponentsModule;
    private widgetComponentsModule;
    dialog: MatDialog;
    private customImports;
    constructor(dynamicComponentFactoryService: DynamicComponentFactoryService, sharedModule: Type<any>, sharedHomeComponentsModule: Type<any>, homeComponentsModule: Type<any>, widgetComponentsModule: Type<any>, dialog: MatDialog);
    setAdditionalImports(imports: Array<Type<any>>): void;
    customDialog(template: string, controller: (instance: CustomDialogComponent) => void, data?: any, config?: MatDialogConfig): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomDialogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomDialogService>;
}
