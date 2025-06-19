import { DestroyRef } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import { TranslateService } from '@ngx-translate/core';
import { EntityKeyValueType, Filter } from '@shared/models/query/query.models';
import { UnitService } from '@core/services/unit.service';
import * as i0 from "@angular/core";
export interface UserFilterDialogData {
    filter: Filter;
}
export declare class UserFilterDialogComponent extends DialogComponent<UserFilterDialogComponent, Filter> implements ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: UserFilterDialogData;
    private errorStateMatcher;
    dialogRef: MatDialogRef<UserFilterDialogComponent, Filter>;
    private fb;
    private translate;
    private destroyRef;
    private unitService;
    filter: Filter;
    userFilterFormGroup: FormGroup;
    valueTypeEnum: typeof EntityKeyValueType;
    submitted: boolean;
    constructor(store: Store<AppState>, router: Router, data: UserFilterDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<UserFilterDialogComponent, Filter>, fb: FormBuilder, translate: TranslateService, destroyRef: DestroyRef, unitService: UnitService);
    private createUserInputFormControl;
    userInputsFormArray(): FormArray;
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserFilterDialogComponent, [null, null, null, { skipSelf: true; }, null, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UserFilterDialogComponent, "tb-user-filter-dialog", never, {}, {}, never, never, false, never>;
}
