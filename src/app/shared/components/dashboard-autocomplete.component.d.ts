import { ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import { DashboardInfo } from '@app/shared/models/dashboard.models';
import { DashboardService } from '@core/http/dashboard.service';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { Operation } from '@shared/models/security.models';
import { FloatLabelType, MatFormFieldAppearance, SubscriptSizing } from '@angular/material/form-field';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import * as i0 from "@angular/core";
export declare class DashboardAutocompleteComponent implements ControlValueAccessor, OnInit {
    private store;
    translate: TranslateService;
    private dashboardService;
    private fb;
    private dirty;
    selectDashboardFormGroup: UntypedFormGroup;
    modelValue: DashboardInfo | string | null;
    useIdValue: boolean;
    selectFirstDashboard: boolean;
    label: any;
    placeholder: string;
    userId: string;
    tenantId: string;
    customerId: string;
    operation: Operation;
    floatLabel: FloatLabelType;
    appearance: MatFormFieldAppearance;
    subscriptSizing: SubscriptSizing;
    inlineField: boolean;
    requiredText: string;
    required: boolean;
    disabled: boolean;
    dashboardInput: ElementRef;
    dashboardAutocomplete: MatAutocompleteTrigger;
    filteredDashboards: Observable<Array<DashboardInfo>>;
    searchText: string;
    dashboardURL: string;
    useDashboardLink: boolean;
    private authUser;
    private propagateChange;
    constructor(store: Store<AppState>, translate: TranslateService, dashboardService: DashboardService, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    ngOnInit(): void;
    selectFirstDashboardIfNeeded(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: DashboardInfo | string | null): void;
    updateView(value: DashboardInfo | string | null): void;
    displayDashboardFn(dashboard?: DashboardInfo): string | undefined;
    fetchDashboards(searchText?: string): Observable<Array<DashboardInfo>>;
    getDashboards(pageLink: PageLink): Observable<PageData<DashboardInfo>>;
    onFocus(): void;
    clear(): void;
    textIsNotEmpty(text: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardAutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DashboardAutocompleteComponent, "tb-dashboard-autocomplete", never, { "useIdValue": { "alias": "useIdValue"; "required": false; }; "selectFirstDashboard": { "alias": "selectFirstDashboard"; "required": false; }; "label": { "alias": "label"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "userId": { "alias": "userId"; "required": false; }; "tenantId": { "alias": "tenantId"; "required": false; }; "customerId": { "alias": "customerId"; "required": false; }; "operation": { "alias": "operation"; "required": false; }; "floatLabel": { "alias": "floatLabel"; "required": false; }; "appearance": { "alias": "appearance"; "required": false; }; "subscriptSizing": { "alias": "subscriptSizing"; "required": false; }; "inlineField": { "alias": "inlineField"; "required": false; }; "requiredText": { "alias": "requiredText"; "required": false; }; "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, ["[tb-error]", "[tb-hint]"], false, never>;
}
