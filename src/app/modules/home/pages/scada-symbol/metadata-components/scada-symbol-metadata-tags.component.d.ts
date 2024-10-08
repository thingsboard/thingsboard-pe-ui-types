import { OnChanges, OnInit, QueryList, SimpleChanges } from '@angular/core';
import { AbstractControl, ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { ScadaSymbolTag } from '@home/components/widget/lib/scada/scada-symbol.models';
import { ScadaSymbolMetadataTagComponent } from '@home/pages/scada-symbol/metadata-components/scada-symbol-metadata-tag.component';
import { TbEditorCompleter } from '@shared/models/ace/completion.models';
import * as i0 from "@angular/core";
export declare class ScadaSymbolMetadataTagsComponent implements ControlValueAccessor, OnInit, Validator, OnChanges {
    private fb;
    styleDisplay: string;
    styleOverflow: string;
    metadataTags: QueryList<ScadaSymbolMetadataTagComponent>;
    disabled: boolean;
    tags: string[];
    elementStateRenderFunctionCompleter: TbEditorCompleter;
    clickActionFunctionCompleter: TbEditorCompleter;
    tagsFormGroup: UntypedFormGroup;
    private modelValue;
    private propagateChange;
    constructor(fb: UntypedFormBuilder);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: ScadaSymbolTag[] | undefined): void;
    validate(_c: UntypedFormControl): {
        tags: {
            valid: boolean;
        };
    };
    tagsFormArray(): UntypedFormArray;
    trackByTag(_index: number, tagControl: AbstractControl): any;
    editTagStateRenderFunction(tag: string): void;
    editTagClickAction(tag: string): void;
    private setupTags;
    private prepareTagsFormArray;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScadaSymbolMetadataTagsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ScadaSymbolMetadataTagsComponent, "tb-scada-symbol-metadata-tags", never, { "disabled": { "alias": "disabled"; "required": false; }; "tags": { "alias": "tags"; "required": false; }; "elementStateRenderFunctionCompleter": { "alias": "elementStateRenderFunctionCompleter"; "required": false; }; "clickActionFunctionCompleter": { "alias": "clickActionFunctionCompleter"; "required": false; }; }, {}, never, never, false, never>;
}
