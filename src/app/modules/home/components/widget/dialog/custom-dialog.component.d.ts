import { MatDialogRef } from '@angular/material/dialog';
import { InjectionToken } from '@angular/core';
import { Router } from '@angular/router';
import { PageComponent } from '@shared/components/page.component';
import { UntypedFormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
export declare const CUSTOM_DIALOG_DATA: InjectionToken<CustomDialogData>;
export interface CustomDialogData {
    controller: (instance: CustomDialogComponent) => void;
    [key: string]: any;
}
export declare class CustomDialogComponent extends PageComponent {
    [key: string]: any;
    protected router: Router;
    dialogRef: MatDialogRef<any, any>;
    data: CustomDialogData;
    fb: UntypedFormBuilder;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomDialogComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CustomDialogComponent, never, never, {}, {}, never, never, false, never>;
}
