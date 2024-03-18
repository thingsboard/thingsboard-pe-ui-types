import { AfterViewInit, ElementRef, InjectionToken } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { OverlayRef } from '@angular/cdk/overlay';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { RuleChain, RuleChainType } from '@shared/models/rule-chain.models';
import { RuleChainService } from '@core/http/rule-chain.service';
import * as i0 from "@angular/core";
export declare const RULE_CHAIN_SELECT_PANEL_DATA: InjectionToken<any>;
export interface RuleChainSelectPanelData {
    ruleChainId: string | null;
    ruleChainType: RuleChainType;
}
export declare class RuleChainSelectPanelComponent implements AfterViewInit {
    data: RuleChainSelectPanelData;
    private overlayRef;
    private fb;
    private ruleChainService;
    ruleChainId: string;
    private readonly ruleChainType;
    selectRuleChainGroup: FormGroup;
    userInput: ElementRef;
    filteredRuleChains: Observable<Array<RuleChain>>;
    searchText: string;
    ruleChainSelected: boolean;
    result?: RuleChain;
    private dirty;
    constructor(data: RuleChainSelectPanelData, overlayRef: OverlayRef, fb: FormBuilder, ruleChainService: RuleChainService);
    ngAfterViewInit(): void;
    selected(event: MatAutocompleteSelectedEvent): void;
    private fetchRuleChains;
    onFocus(): void;
    clear(): void;
    private getRuleChains;
    static ɵfac: i0.ɵɵFactoryDeclaration<RuleChainSelectPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RuleChainSelectPanelComponent, "tb-rule-chain-select-panel", never, {}, {}, never, never, false, never>;
}
