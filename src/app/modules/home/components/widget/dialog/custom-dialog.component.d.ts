import { MatDialogRef } from '@angular/material/dialog';
import { InjectionToken } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { PageComponent } from '@shared/components/page.component';
import { CustomDialogContainerComponent } from './custom-dialog-container.component';
import { FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
export declare const CUSTOM_DIALOG_DATA: InjectionToken<any>;
export interface CustomDialogData {
    controller: (instance: CustomDialogComponent) => void;
    [key: string]: any;
}
export declare class CustomDialogComponent extends PageComponent {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<CustomDialogContainerComponent>;
    fb: FormBuilder;
    data: CustomDialogData;
    [key: string]: any;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<CustomDialogContainerComponent>, fb: FormBuilder, data: CustomDialogData);
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomDialogComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CustomDialogComponent, never, never, {}, {}, never>;
}
