import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@app/shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class EntityDetailsConfigComponent extends RuleNodeConfigurationComponent implements OnInit {
    translate: TranslateService;
    private fb;
    entityDetailsConfigForm: FormGroup;
    predefinedValues: any[];
    constructor(translate: TranslateService, fb: FormBuilder);
    ngOnInit(): void;
    protected configForm(): FormGroup;
    protected prepareInputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityDetailsConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityDetailsConfigComponent, "tb-enrichment-node-entity-details-config", never, {}, {}, never, never, false, never>;
}
