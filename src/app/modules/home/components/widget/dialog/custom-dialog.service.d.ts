import { Type } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '@core/auth/auth.service';
import { DynamicComponentFactoryService } from '@core/services/dynamic-component-factory.service';
import { CustomDialogComponent } from './custom-dialog.component';
import * as i0 from "@angular/core";
export declare class CustomDialogService {
    private translate;
    private authService;
    private dynamicComponentFactoryService;
    private sharedModule;
    private sharedHomeComponentsModule;
    private homeComponentsModule;
    dialog: MatDialog;
    constructor(translate: TranslateService, authService: AuthService, dynamicComponentFactoryService: DynamicComponentFactoryService, sharedModule: Type<any>, sharedHomeComponentsModule: Type<any>, homeComponentsModule: Type<any>, dialog: MatDialog);
    customDialog(template: string, controller: (instance: CustomDialogComponent) => void, data?: any, config?: MatDialogConfig): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomDialogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomDialogService>;
}
