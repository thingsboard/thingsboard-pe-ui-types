import { EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { FcRuleNode } from '@shared/models/rule-node.models';
import { EntityType } from '@shared/models/entity-type.models';
import { RuleNodeConfigComponent } from './rule-node-config.component';
import { Router } from '@angular/router';
import { RuleChainType } from '@app/shared/models/rule-chain.models';
import { ServiceType } from '@shared/models/queue.models';
import * as i0 from "@angular/core";
export declare class RuleNodeDetailsComponent extends PageComponent implements OnInit, OnChanges, OnDestroy {
    private fb;
    private router;
    ruleNodeConfigComponent: RuleNodeConfigComponent;
    ruleNode: FcRuleNode;
    ruleChainId: string;
    ruleChainType: RuleChainType;
    disabled: boolean;
    isAdd: boolean;
    initRuleNode: EventEmitter<void>;
    changeScript: EventEmitter<void>;
    entityType: typeof EntityType;
    serviceType: ServiceType;
    ruleNodeFormGroup: UntypedFormGroup;
    private destroy$;
    constructor(fb: UntypedFormBuilder, router: Router);
    private buildForm;
    private updateRuleNode;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    validate(): void;
    onSingleModeChange($event: Event): void;
    openRuleChain($event: Event): void;
    isAddQueue(): boolean;
    isSingleton(): boolean;
    isSingletonEditAllowed(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<RuleNodeDetailsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RuleNodeDetailsComponent, "tb-rule-node", never, { "ruleNode": { "alias": "ruleNode"; "required": false; }; "ruleChainId": { "alias": "ruleChainId"; "required": false; }; "ruleChainType": { "alias": "ruleChainType"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "isAdd": { "alias": "isAdd"; "required": false; }; }, { "initRuleNode": "initRuleNode"; "changeScript": "changeScript"; }, never, never, false, never>;
}
