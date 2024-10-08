import { OnInit, QueryList } from '@angular/core';
import { AbstractControl, ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { ScadaSymbolBehavior } from '@home/components/widget/lib/scada/scada-symbol.models';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ScadaSymbolBehaviorRowComponent } from '@home/pages/scada-symbol/metadata-components/scada-symbol-behavior-row.component';
import { TranslateService } from '@ngx-translate/core';
import { IAliasController } from '@core/api/widget-api.models';
import { WidgetActionCallbacks } from '@home/components/widget/action/manage-widget-actions.component.models';
import * as i0 from "@angular/core";
export declare class ScadaSymbolBehaviorsComponent implements ControlValueAccessor, OnInit, Validator {
    private fb;
    private translate;
    styleDisplay: string;
    styleOverflow: string;
    behaviorRows: QueryList<ScadaSymbolBehaviorRowComponent>;
    aliasController: IAliasController;
    callbacks: WidgetActionCallbacks;
    disabled: boolean;
    behaviorsFormGroup: UntypedFormGroup;
    errorText: string;
    get dragEnabled(): boolean;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, translate: TranslateService);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: ScadaSymbolBehavior[] | undefined): void;
    validate(c: UntypedFormControl): {
        behaviors: {
            valid: boolean;
        };
    };
    behaviorIdUnique(id: string, index: number): boolean;
    behaviorDrop(event: CdkDragDrop<string[]>): void;
    behaviorsFormArray(): UntypedFormArray;
    trackByBehavior(index: number, behaviorControl: AbstractControl): any;
    removeBehavior(index: number, emitEvent?: boolean): void;
    addBehavior(): void;
    private prepareBehaviorsFormArray;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScadaSymbolBehaviorsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ScadaSymbolBehaviorsComponent, "tb-scada-symbol-metadata-behaviors", never, { "aliasController": { "alias": "aliasController"; "required": false; }; "callbacks": { "alias": "callbacks"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
