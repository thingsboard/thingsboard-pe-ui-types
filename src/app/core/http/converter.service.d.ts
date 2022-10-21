import { HttpClient } from '@angular/common/http';
import { PageLink } from '@shared/models/page/page-link';
import { RequestConfig } from '@core/http/http-utils';
import { Observable } from 'rxjs';
import { PageData } from '@shared/models/page/page-data';
import { Converter, ConverterDebugInput, TestConverterResult, TestDownLinkInputParams, TestUpLinkInputParams } from '@shared/models/converter.models';
import { ScriptLanguage } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class ConverterService {
    private http;
    constructor(http: HttpClient);
    getConverters(pageLink: PageLink, config?: RequestConfig): Observable<PageData<Converter>>;
    getConvertersByEdgeTemplate(pageLink: PageLink, isEdgeTemplate: boolean, config?: RequestConfig): Observable<PageData<Converter>>;
    getConvertersByIds(converterIds: Array<string>, config?: RequestConfig): Observable<Array<Converter>>;
    getConverter(converterId: string, config?: RequestConfig): Observable<Converter>;
    saveConverter(converter: Converter, config?: RequestConfig): Observable<Converter>;
    deleteConverter(converterId: string, config?: RequestConfig): Observable<Object>;
    testUpLink(inputParams: TestUpLinkInputParams, scriptLang?: ScriptLanguage, config?: RequestConfig): Observable<TestConverterResult>;
    testDownLink(inputParams: TestDownLinkInputParams, scriptLang?: ScriptLanguage, config?: RequestConfig): Observable<TestConverterResult>;
    getLatestConverterDebugInput(converterId: string, config?: RequestConfig): Observable<ConverterDebugInput>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConverterService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConverterService>;
}
