import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { FcRuleEdge, LinkLabel } from '@shared/models/rule-node.models';
import { TruncatePipe } from '@shared/pipe/truncate.pipe';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class RuleNodeLinkComponent implements ControlValueAccessor, OnInit {
    private fb;
    truncate: TruncatePipe;
    translate: TranslateService;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    private allowCustomValue;
    get allowCustom(): boolean;
    set allowCustom(value: boolean);
    allowedLabels: {
        [label: string]: LinkLabel;
    };
    sourceRuleChainId: string;
    ruleNodeLinkFormGroup: UntypedFormGroup;
    modelValue: FcRuleEdge;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, truncate: TruncatePipe, translate: TranslateService);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: FcRuleEdge): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<RuleNodeLinkComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RuleNodeLinkComponent, "tb-rule-node-link", never, { "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "allowCustom": { "alias": "allowCustom"; "required": false; }; "allowedLabels": { "alias": "allowedLabels"; "required": false; }; "sourceRuleChainId": { "alias": "sourceRuleChainId"; "required": false; }; }, {}, never, never, false, never>;
}
