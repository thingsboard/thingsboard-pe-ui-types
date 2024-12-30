import { ChangeDetectorRef, DestroyRef, EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { JsFuncModulesComponent } from '@shared/components/js-func-modules.component';
import { ResourceSubType } from '@shared/models/resource.models';
import { ResourceAutocompleteComponent } from '@shared/components/resource/resource-autocomplete.component';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface JsFuncModuleRow {
    alias: string;
    moduleLink: string;
}
export declare const moduleValid: (module: JsFuncModuleRow) => boolean;
export declare class JsFuncModuleRowComponent implements ControlValueAccessor, OnInit, Validator {
    private fb;
    private cd;
    private modulesComponent;
    private http;
    private translate;
    private destroyRef;
    ResourceSubType: typeof ResourceSubType;
    resourceAutocomplete: ResourceAutocompleteComponent;
    index: number;
    moduleRemoved: EventEmitter<any>;
    moduleRowFormGroup: UntypedFormGroup;
    modelValue: JsFuncModuleRow;
    moduleDescription: any;
    moduleSourceCode: any;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, cd: ChangeDetectorRef, modulesComponent: JsFuncModulesComponent, http: HttpClient, translate: TranslateService, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    writeValue(value: JsFuncModuleRow): void;
    validate(_c: UntypedFormControl): {
        moduleAliasNotUnique: boolean;
        invalidVariableName?: undefined;
        module?: undefined;
    } | {
        invalidVariableName: boolean;
        moduleAliasNotUnique?: undefined;
        module?: undefined;
    } | {
        module: boolean;
        moduleAliasNotUnique?: undefined;
        invalidVariableName?: undefined;
    };
    private loadModuleDescription;
    private loadModuleSourceCode;
    private moduleAliasValidator;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<JsFuncModuleRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<JsFuncModuleRowComponent, "tb-js-func-module-row", never, { "index": { "alias": "index"; "required": false; }; }, { "moduleRemoved": "moduleRemoved"; }, never, never, false, never>;
}
