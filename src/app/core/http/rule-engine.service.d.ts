import { HttpClient } from '@angular/common/http';
import { RequestConfig } from '@core/http/http-utils';
import { EntityId } from '@shared/models/id/entity-id';
import * as i0 from "@angular/core";
export declare class RuleEngineService {
    private http;
    constructor(http: HttpClient);
    makeRequestToRuleEngine(requestBody: {
        [key: string]: any;
    }, config?: RequestConfig): import("rxjs").Observable<Object>;
    makeRequestToRuleEngineFromEntity(entityId: EntityId, requestBody: {
        [key: string]: any;
    }, timeout?: number, config?: RequestConfig): import("rxjs").Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RuleEngineService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RuleEngineService>;
}
