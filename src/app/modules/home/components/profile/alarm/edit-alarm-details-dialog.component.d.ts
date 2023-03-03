import { OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import { UtilsService } from '@core/services/utils.service';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface EditAlarmDetailsDialogData {
    alarmDetails: string;
    readonly: boolean;
}
export declare class EditAlarmDetailsDialogComponent extends DialogComponent<EditAlarmDetailsDialogComponent, string> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: EditAlarmDetailsDialogData;
    private errorStateMatcher;
    dialogRef: MatDialogRef<EditAlarmDetailsDialogComponent, string>;
    private fb;
    private utils;
    translate: TranslateService;
    alarmDetails: string;
    editDetailsFormGroup: UntypedFormGroup;
    submitted: boolean;
    constructor(store: Store<AppState>, router: Router, data: EditAlarmDetailsDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<EditAlarmDetailsDialogComponent, string>, fb: UntypedFormBuilder, utils: UtilsService, translate: TranslateService);
    ngOnInit(): void;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EditAlarmDetailsDialogComponent, [null, null, null, { skipSelf: true; }, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EditAlarmDetailsDialogComponent, "tb-edit-alarm-details-dialog", never, {}, {}, never, never, false, never>;
}
