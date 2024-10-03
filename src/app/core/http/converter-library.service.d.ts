import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Converter, ConverterType, Model, Vendor } from '@shared/models/converter.models';
import { IntegrationType } from '@shared/models/integration.models';
import { RequestConfig } from '@core/http/http-utils';
import * as i0 from "@angular/core";
export declare class ConverterLibraryService {
    private http;
    private readonly baseUrl;
    constructor(http: HttpClient);
    getVendors(integrationType: IntegrationType, config?: RequestConfig): Observable<Vendor[]>;
    getModels(integrationType: IntegrationType, vendorName: string, converterType: ConverterType, config?: RequestConfig): Observable<Model[]>;
    getConverter(integrationType: IntegrationType, vendorName: string, modelName: string, converterType: ConverterType, config?: RequestConfig): Observable<Converter>;
    getConverterMetaData(integrationType: IntegrationType, vendorName: string, modelName: string, converterType: ConverterType, config?: RequestConfig): Observable<Object>;
    getConverterPayload(integrationType: IntegrationType, vendorName: string, modelName: string, converterType: ConverterType, config?: RequestConfig): Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConverterLibraryService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConverterLibraryService>;
}
