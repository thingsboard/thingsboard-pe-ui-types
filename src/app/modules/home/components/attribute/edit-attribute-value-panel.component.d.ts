import { InjectionToken, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { OverlayRef } from '@angular/cdk/overlay';
import * as i0 from "@angular/core";
export declare const EDIT_ATTRIBUTE_VALUE_PANEL_DATA: InjectionToken<any>;
export interface EditAttributeValuePanelData {
    attributeValue: any;
}
export declare class EditAttributeValuePanelComponent extends PageComponent implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    data: EditAttributeValuePanelData;
    private errorStateMatcher;
    overlayRef: OverlayRef;
    fb: UntypedFormBuilder;
    attributeFormGroup: UntypedFormGroup;
    result: any;
    submitted: boolean;
    constructor(store: Store<AppState>, data: EditAttributeValuePanelData, errorStateMatcher: ErrorStateMatcher, overlayRef: OverlayRef, fb: UntypedFormBuilder);
    ngOnInit(): void;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    invalid(): boolean;
    cancel(): void;
    update(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EditAttributeValuePanelComponent, [null, null, { skipSelf: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EditAttributeValuePanelComponent, "tb-edit-attribute-value-panel", never, {}, {}, never, never, false, never>;
}
