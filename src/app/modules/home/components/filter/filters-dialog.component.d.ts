import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormGroupDirective, NgForm, UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import { Widget } from '@shared/models/widget.models';
import { UtilsService } from '@core/services/utils.service';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from '@core/services/dialog.service';
import { Filter, Filters } from '@shared/models/query/query.models';
import { DashboardUtilsService } from '@core/services/dashboard-utils.service';
import * as i0 from "@angular/core";
export interface FiltersDialogData {
    filters: Filters;
    widgets: Array<Widget>;
    isSingleFilter?: boolean;
    isSingleWidget?: boolean;
    disableAdd?: boolean;
    singleFilter?: Filter;
    customTitle?: string;
}
export declare class FiltersDialogComponent extends DialogComponent<FiltersDialogComponent, Filters> implements ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: FiltersDialogData;
    private errorStateMatcher;
    dialogRef: MatDialogRef<FiltersDialogComponent, Filters>;
    private fb;
    private utils;
    private dashboardUtils;
    private translate;
    private dialogs;
    private dialog;
    title: string;
    disableAdd: boolean;
    filterToWidgetsMap: {
        [filterId: string]: Array<string>;
    };
    filterNames: Set<string>;
    filtersFormGroup: UntypedFormGroup;
    submitted: boolean;
    constructor(store: Store<AppState>, router: Router, data: FiltersDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<FiltersDialogComponent, Filters>, fb: UntypedFormBuilder, utils: UtilsService, dashboardUtils: DashboardUtilsService, translate: TranslateService, dialogs: DialogService, dialog: MatDialog);
    private createFilterFormControl;
    filtersFormArray(): UntypedFormArray;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    removeFilter(index: number): void;
    private getNextDuplicatedName;
    duplicateFilter(index: number): void;
    addFilter(): void;
    editFilter(index: number): void;
    private openFilterDialog;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FiltersDialogComponent, [null, null, null, { skipSelf: true; }, null, null, null, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FiltersDialogComponent, "tb-filters-dialog", never, {}, {}, never, never, false, never>;
}
