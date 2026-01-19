import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { AlarmRuleExpression } from "@shared/models/alarm-rule.models";
import { CalculatedFieldArgument } from "@shared/models/calculated-field.models";
import * as i0 from "@angular/core";
export declare class AlarmRuleFilterTextComponent {
    private translate;
    private datePipe;
    required: boolean;
    noFilterText: any;
    addFilterPrompt: any;
    nowrap: boolean;
    arguments: Record<string, CalculatedFieldArgument>;
    disabled: boolean;
    private alarmRuleExpressionValue;
    get alarmRuleExpression(): AlarmRuleExpression;
    set alarmRuleExpression(value: AlarmRuleExpression);
    private specTextValue;
    get specText(): string;
    set specText(value: string);
    isRequired: boolean;
    filterText: string;
    constructor(translate: TranslateService, datePipe: DatePipe);
    private updateFilterText;
    private keyFiltersToText;
    private filterPredicateToText;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmRuleFilterTextComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmRuleFilterTextComponent, "tb-alarm-rule-filter-text", never, { "required": { "alias": "required"; "required": false; }; "noFilterText": { "alias": "noFilterText"; "required": false; }; "addFilterPrompt": { "alias": "addFilterPrompt"; "required": false; }; "nowrap": { "alias": "nowrap"; "required": false; }; "arguments": { "alias": "arguments"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "alarmRuleExpression": { "alias": "alarmRuleExpression"; "required": false; }; "specText": { "alias": "specText"; "required": false; }; }, {}, never, never, false, never>;
}
