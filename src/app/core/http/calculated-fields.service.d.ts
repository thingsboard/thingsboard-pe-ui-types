import { RequestConfig } from './http-utils';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PageData } from '@shared/models/page/page-data';
import { CalculatedField, CalculatedFieldReprocessingValidation, CalculatedFieldTestScriptInputParams } from '@shared/models/calculated-field.models';
import { PageLink } from '@shared/models/page/page-link';
import { EntityId } from '@shared/models/id/entity-id';
import { EntityTestScriptResult } from '@shared/models/entity.models';
import { CalculatedFieldEventBody } from '@shared/models/event.models';
import { Job } from '@app/shared/models/job.models';
import * as i0 from "@angular/core";
export declare class CalculatedFieldsService {
    private http;
    constructor(http: HttpClient);
    getCalculatedFieldById(calculatedFieldId: string, config?: RequestConfig): Observable<CalculatedField>;
    saveCalculatedField(calculatedField: CalculatedField, config?: RequestConfig): Observable<CalculatedField>;
    deleteCalculatedField(calculatedFieldId: string, config?: RequestConfig): Observable<boolean>;
    getCalculatedFields({ entityType, id }: EntityId, pageLink: PageLink, config?: RequestConfig): Observable<PageData<CalculatedField>>;
    testScript(inputParams: CalculatedFieldTestScriptInputParams, config?: RequestConfig): Observable<EntityTestScriptResult>;
    getLatestCalculatedFieldDebugEvent(id: string, config?: RequestConfig): Observable<CalculatedFieldEventBody>;
    reprocessCalculatedField(id: string, startTs: number, endTs: number, config?: RequestConfig): Observable<void>;
    getLastCalculatedFieldReprocessingJob(id: string, config?: RequestConfig): Observable<Job>;
    validateCalculatedFieldReprocessing(id: string, config?: RequestConfig): Observable<CalculatedFieldReprocessingValidation>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CalculatedFieldsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CalculatedFieldsService>;
}
