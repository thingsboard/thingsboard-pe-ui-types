import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs';
import { TooltipPosition } from '@angular/material/tooltip';
import { RuleChain, RuleChainType } from '@shared/models/rule-chain.models';
import { RuleChainService } from '@core/http/rule-chain.service';
import * as i0 from "@angular/core";
export declare class RuleChainSelectComponent implements ControlValueAccessor, OnInit {
    private ruleChainService;
    tooltipPosition: TooltipPosition;
    required: boolean;
    disabled: boolean;
    ruleChainType: RuleChainType;
    ruleChains$: Observable<Array<RuleChain>>;
    ruleChainId: string | null;
    private propagateChange;
    constructor(ruleChainService: RuleChainService);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: string | null): void;
    ruleChainIdChanged(): void;
    private updateView;
    private getRuleChains;
    static ɵfac: i0.ɵɵFactoryDeclaration<RuleChainSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RuleChainSelectComponent, "tb-rule-chain-select", never, { "tooltipPosition": "tooltipPosition"; "required": "required"; "disabled": "disabled"; "ruleChainType": "ruleChainType"; }, {}, never, never, false, never>;
}
