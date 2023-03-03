import { OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, FormGroupDirective, NgForm, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import { UtilsService } from '@core/services/utils.service';
import { TranslateService } from '@ngx-translate/core';
import { Filter, Filters } from '@shared/models/query/query.models';
import * as i0 from "@angular/core";
export interface FilterDialogData {
    isAdd: boolean;
    filters: Filters | Array<Filter>;
    filter?: Filter;
}
export declare class FilterDialogComponent extends DialogComponent<FilterDialogComponent, Filter> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: FilterDialogData;
    private errorStateMatcher;
    dialogRef: MatDialogRef<FilterDialogComponent, Filter>;
    private fb;
    private utils;
    translate: TranslateService;
    isAdd: boolean;
    filters: Array<Filter>;
    filter: Filter;
    filterFormGroup: UntypedFormGroup;
    submitted: boolean;
    constructor(store: Store<AppState>, router: Router, data: FilterDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<FilterDialogComponent, Filter>, fb: UntypedFormBuilder, utils: UtilsService, translate: TranslateService);
    validateDuplicateFilterName(): ValidatorFn;
    ngOnInit(): void;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterDialogComponent, [null, null, null, { skipSelf: true; }, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FilterDialogComponent, "tb-filter-dialog", never, {}, {}, never, never, false, never>;
}
