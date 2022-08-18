import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import * as i0 from "@angular/core";
export interface RateLimitsDetailsDialogData {
    rateLimits: string;
    title: string;
    readonly: boolean;
}
export declare class RateLimitsDetailsDialogComponent extends DialogComponent<RateLimitsDetailsDialogComponent> {
    protected store: Store<AppState>;
    protected router: Router;
    data: RateLimitsDetailsDialogData;
    dialogRef: MatDialogRef<RateLimitsDetailsDialogComponent>;
    private fb;
    editDetailsFormGroup: FormGroup;
    rateLimits: string;
    title: string;
    constructor(store: Store<AppState>, router: Router, data: RateLimitsDetailsDialogData, dialogRef: MatDialogRef<RateLimitsDetailsDialogComponent>, fb: FormBuilder);
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RateLimitsDetailsDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RateLimitsDetailsDialogComponent, "ng-component", never, {}, {}, never, never>;
}
