import { OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { ScadaSymbolTag } from '@home/components/widget/lib/scada/scada-symbol.models';
import { TbEditorCompleter } from '@shared/models/ace/completion.models';
import { MatButton } from '@angular/material/button';
import { TbPopoverService } from '@shared/components/popover.service';
import * as i0 from "@angular/core";
export declare class ScadaSymbolMetadataTagComponent implements ControlValueAccessor, OnInit, Validator {
    private fb;
    private popoverService;
    private renderer;
    private viewContainerRef;
    editStateRenderFunctionButton: MatButton;
    editClickActionButton: MatButton;
    disabled: boolean;
    elementStateRenderFunctionCompleter: TbEditorCompleter;
    clickActionFunctionCompleter: TbEditorCompleter;
    tagFormGroup: UntypedFormGroup;
    modelValue: ScadaSymbolTag;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: ScadaSymbolTag): void;
    validate(_c: UntypedFormControl): {
        tag: {
            valid: boolean;
        };
    };
    editTagStateRenderFunction(): void;
    editClickAction(): void;
    private openTagFunction;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScadaSymbolMetadataTagComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ScadaSymbolMetadataTagComponent, "tb-scada-symbol-metadata-tag", never, { "disabled": { "alias": "disabled"; "required": false; }; "elementStateRenderFunctionCompleter": { "alias": "elementStateRenderFunctionCompleter"; "required": false; }; "clickActionFunctionCompleter": { "alias": "clickActionFunctionCompleter"; "required": false; }; }, {}, never, never, false, never>;
}
