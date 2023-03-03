import { ErrorStateMatcher } from '@angular/material/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { AttributesNameValueMap } from '@home/components/profile/device/lwm2m/lwm2m-profile-config.models';
import * as i0 from "@angular/core";
export interface Lwm2mAttributesDialogData {
    readonly: boolean;
    attributes: AttributesNameValueMap;
    modelName: string;
    isResource: boolean;
}
export declare class Lwm2mAttributesDialogComponent extends DialogComponent<Lwm2mAttributesDialogComponent, AttributesNameValueMap> implements ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    private data;
    private errorStateMatcher;
    dialogRef: MatDialogRef<Lwm2mAttributesDialogComponent, AttributesNameValueMap>;
    private fb;
    readonly: boolean;
    name: string;
    isResource: boolean;
    private submitted;
    attributeFormGroup: UntypedFormGroup;
    constructor(store: Store<AppState>, router: Router, data: Lwm2mAttributesDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<Lwm2mAttributesDialogComponent, AttributesNameValueMap>, fb: UntypedFormBuilder);
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    save(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Lwm2mAttributesDialogComponent, [null, null, null, { skipSelf: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Lwm2mAttributesDialogComponent, "tb-lwm2m-attributes-dialog", never, {}, {}, never, never, false, never>;
}
