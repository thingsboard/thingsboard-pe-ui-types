import { DestroyRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import { TranslateService } from '@ngx-translate/core';
import { EntityKeyValueType, Filter } from '@shared/models/query/query.models';
import { UnitService } from '@core/services/unit.service';
import * as i0 from "@angular/core";
export interface UserFilterDialogData {
    filter: Filter;
}
interface UserInputForm {
    label: FormControl<string>;
    valueType: FormControl<EntityKeyValueType>;
    unitSymbol: FormControl<string>;
    value: FormControl<string | number | boolean>;
}
export declare class UserFilterDialogComponent extends DialogComponent<UserFilterDialogComponent, Filter> {
    protected store: Store<AppState>;
    protected router: Router;
    data: UserFilterDialogData;
    protected dialogRef: MatDialogRef<UserFilterDialogComponent, Filter>;
    private fb;
    private translate;
    private destroyRef;
    private unitService;
    filter: Filter;
    userInputsFormArray: FormArray<FormGroup<UserInputForm>>;
    valueTypeEnum: typeof EntityKeyValueType;
    constructor(store: Store<AppState>, router: Router, data: UserFilterDialogData, dialogRef: MatDialogRef<UserFilterDialogComponent, Filter>, fb: FormBuilder, translate: TranslateService, destroyRef: DestroyRef, unitService: UnitService);
    private createUserInputFormControl;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserFilterDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UserFilterDialogComponent, "tb-user-filter-dialog", never, {}, {}, never, never, false, never>;
}
export {};
