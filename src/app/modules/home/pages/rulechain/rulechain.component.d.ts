import { ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityComponent } from '../../components/entity/entity.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { RuleChain } from '@shared/models/rule-chain.models';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import * as i0 from "@angular/core";
export declare class RuleChainComponent extends EntityComponent<RuleChain> {
    protected store: Store<AppState>;
    protected translate: TranslateService;
    protected entityValue: RuleChain;
    protected entitiesTableConfigValue: EntityTableConfig<RuleChain>;
    protected fb: FormBuilder;
    protected cd: ChangeDetectorRef;
    ruleChainScope: 'tenant' | 'edges' | 'edge';
    constructor(store: Store<AppState>, translate: TranslateService, entityValue: RuleChain, entitiesTableConfigValue: EntityTableConfig<RuleChain>, fb: FormBuilder, cd: ChangeDetectorRef);
    ngOnInit(): void;
    hideDelete(): boolean;
    buildForm(entity: RuleChain): FormGroup;
    updateForm(entity: RuleChain): void;
    onRuleChainIdCopied($event: any): void;
    isEdgeRootRuleChain(): boolean;
    isAutoAssignToEdgeRuleChain(): any;
    isNotAutoAssignToEdgeRuleChain(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<RuleChainComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RuleChainComponent, "tb-rulechain", never, {}, {}, never, never>;
}
