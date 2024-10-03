import { HttpClient } from '@angular/common/http';
import { PageLink } from '@shared/models/page/page-link';
import { RequestConfig } from '@core/http/http-utils';
import { Observable } from 'rxjs';
import { PageData } from '@shared/models/page/page-data';
import { Integration, IntegrationInfo, IntegrationsConvertersInfo, IntegrationType } from '@shared/models/integration.models';
import * as i0 from "@angular/core";
export declare class IntegrationService {
    private http;
    constructor(http: HttpClient);
    getIntegrations(pageLink: PageLink, config?: RequestConfig): Observable<PageData<Integration>>;
    getIntegrationsConvertersInfo(config?: RequestConfig): Observable<IntegrationsConvertersInfo>;
    getIntegrationsInfo(pageLink: PageLink, isEdgeTemplate: boolean, config?: RequestConfig): Observable<PageData<IntegrationInfo>>;
    getIntegrationsByEdgeTemplate(pageLink: PageLink, isEdgeTemplate: boolean, config?: RequestConfig): Observable<PageData<Integration>>;
    getIntegrationsByIds(integrationIds: Array<string>, config?: RequestConfig): Observable<Array<Integration>>;
    getIntegration(integrationId: string, config?: RequestConfig): Observable<Integration>;
    saveIntegration(integration: Integration, config?: RequestConfig): Observable<Integration>;
    deleteIntegration(integrationId: string, config?: RequestConfig): Observable<Object>;
    getIntegrationHttpEndpointLink(configuration: any, integrationType: IntegrationType, routingKey: string): string;
    checkIntegrationConnection(value: Integration, config?: RequestConfig): Observable<string>;
    assignIntegrationToEdge(edgeId: string, integrationId: string, config?: RequestConfig): Observable<Integration>;
    unassignIntegrationFromEdge(edgeId: string, integrationId: string, config?: RequestConfig): Observable<Object>;
    getEdgeIntegrations(edgeId: string, pageLink: PageLink, config?: RequestConfig): Observable<PageData<IntegrationInfo>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<IntegrationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IntegrationService>;
}
