import { ViewContainerRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { RuleChain, RuleChainType } from '@shared/models/rule-chain.models';
import { Overlay } from '@angular/cdk/overlay';
import * as i0 from "@angular/core";
export declare class RuleChainSelectComponent implements ControlValueAccessor {
    private overlay;
    private viewContainerRef;
    tooltipPosition: TooltipPosition;
    required: boolean;
    disabled: boolean;
    ruleChainType: RuleChainType;
    ruleChain: RuleChain | null;
    panelOpened: boolean;
    private propagateChange;
    constructor(overlay: Overlay, viewContainerRef: ViewContainerRef);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: RuleChain): void;
    ruleChainIdChanged(): void;
    openRuleChainSelectPanel($event: Event): void;
    private updateView;
    static ɵfac: i0.ɵɵFactoryDeclaration<RuleChainSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RuleChainSelectComponent, "tb-rule-chain-select", never, { "tooltipPosition": { "alias": "tooltipPosition"; "required": false; }; "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "ruleChainType": { "alias": "ruleChainType"; "required": false; }; }, {}, never, never, false, never>;
}
