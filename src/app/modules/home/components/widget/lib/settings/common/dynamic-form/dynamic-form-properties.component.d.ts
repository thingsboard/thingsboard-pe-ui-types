import { DestroyRef, OnInit, QueryList } from '@angular/core';
import { AbstractControl, ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { TranslateService } from '@ngx-translate/core';
import { FormProperty } from '@shared/models/dynamic-form.models';
import { DynamicFormPropertyRowComponent } from '@home/components/widget/lib/settings/common/dynamic-form/dynamic-form-property-row.component';
import { ImportExportService } from '@shared/import-export/import-export.service';
import { DialogService } from '@core/services/dialog.service';
import * as i0 from "@angular/core";
export declare class DynamicFormPropertiesComponent implements ControlValueAccessor, OnInit, Validator {
    private fb;
    private translate;
    private importExportService;
    private dialogService;
    private destroyRef;
    styleDisplay: string;
    styleOverflow: string;
    get containerHeight(): string;
    propertyRows: QueryList<DynamicFormPropertyRowComponent>;
    disabled: boolean;
    noBorder: boolean;
    noMargin: boolean;
    fillHeight: boolean;
    importExport: boolean;
    exportFileName: string;
    booleanPropertyIds: string[];
    propertiesFormGroup: UntypedFormGroup;
    errorText: string;
    get dragEnabled(): boolean;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, translate: TranslateService, importExportService: ImportExportService, dialogService: DialogService, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: FormProperty[] | undefined): void;
    validate(_c: UntypedFormControl): {
        properties: {
            valid: boolean;
        };
    };
    propertyIdUnique(id: string, index: number): boolean;
    propertyDrop(event: CdkDragDrop<string[]>): void;
    propertiesFormArray(): UntypedFormArray;
    trackByProperty(_index: number, propertyControl: AbstractControl): any;
    removeProperty(index: number, emitEvent?: boolean): void;
    addProperty(): void;
    export($event: Event): void;
    import($event: Event): void;
    clear($event: Event): void;
    private preparePropertiesFormArray;
    private getProperties;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicFormPropertiesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DynamicFormPropertiesComponent, "tb-dynamic-form-properties", never, { "disabled": { "alias": "disabled"; "required": false; }; "noBorder": { "alias": "noBorder"; "required": false; }; "noMargin": { "alias": "noMargin"; "required": false; }; "fillHeight": { "alias": "fillHeight"; "required": false; }; "importExport": { "alias": "importExport"; "required": false; }; "exportFileName": { "alias": "exportFileName"; "required": false; }; }, {}, never, never, false, never>;
}
