import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormGroup, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import { UtilsService } from '@core/services/utils.service';
import { ComplexOperation, Filter, FilterInfo, Filters } from '@shared/models/query/query.models';
import { FormControlsFrom } from '@shared/models/tenant.model';
import * as i0 from "@angular/core";
export interface FilterDialogData {
    isAdd: boolean;
    filters: Filters | Array<Filter>;
    filter?: Filter;
    disableUserEdit?: boolean;
}
export declare class FilterDialogComponent extends DialogComponent<FilterDialogComponent, Filter> {
    protected store: Store<AppState>;
    protected router: Router;
    data: FilterDialogData;
    protected dialogRef: MatDialogRef<FilterDialogComponent, Filter>;
    private fb;
    private utils;
    isAdd: boolean;
    disableUserEdit: boolean;
    filterFormGroup: FormGroup<FormControlsFrom<FilterInfo>>;
    ComplexOperation: typeof ComplexOperation;
    complexOperationTranslationMap: Map<ComplexOperation, string>;
    allowKeyFiltersOrConditions: boolean;
    private readonly filter;
    private filters;
    constructor(store: Store<AppState>, router: Router, data: FilterDialogData, dialogRef: MatDialogRef<FilterDialogComponent, Filter>, fb: FormBuilder, utils: UtilsService);
    validateDuplicateFilterName(): ValidatorFn;
    onEditableChange(event: MouseEvent): void;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FilterDialogComponent, "tb-filter-dialog", never, {}, {}, never, never, false, never>;
}
