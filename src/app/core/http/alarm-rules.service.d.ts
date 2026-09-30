import { RequestConfig } from './http-utils';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PageData } from '@shared/models/page/page-data';
import { CalculatedFieldAlarmRule, CalculatedFieldAlarmRuleInfo, CalculatedFieldsQuery, CalculatedFieldTestScriptInputParams } from '@shared/models/calculated-field.models';
import { PageLink } from '@shared/models/page/page-link';
import { EntityId } from '@shared/models/id/entity-id';
import { EntityTestScriptResult } from '@shared/models/entity.models';
import { CalculatedFieldEventBody } from '@shared/models/event.models';
import * as i0 from "@angular/core";
export declare class AlarmRulesService {
    private http;
    constructor(http: HttpClient);
    getAlarmRuleById(alarmRuleId: string, config?: RequestConfig): Observable<CalculatedFieldAlarmRule>;
    saveAlarmRule(alarmRule: CalculatedFieldAlarmRule, config?: RequestConfig): Observable<CalculatedFieldAlarmRule>;
    deleteAlarmRule(alarmRuleId: string, config?: RequestConfig): Observable<boolean>;
    getAlarmRules(pageLink: PageLink, query: CalculatedFieldsQuery, config?: RequestConfig): Observable<PageData<CalculatedFieldAlarmRuleInfo>>;
    getAlarmRulesByEntityId({ entityType, id }: EntityId, pageLink: PageLink, config?: RequestConfig): Observable<PageData<CalculatedFieldAlarmRule>>;
    testScript(inputParams: CalculatedFieldTestScriptInputParams, config?: RequestConfig): Observable<EntityTestScriptResult>;
    getLatestAlarmRuleDebugEvent(id: string, config?: RequestConfig): Observable<CalculatedFieldEventBody>;
    getAlarmRuleNames(pageLink: PageLink, config?: RequestConfig): Observable<PageData<string>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmRulesService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AlarmRulesService>;
}
