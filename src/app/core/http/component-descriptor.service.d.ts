import { HttpClient } from '@angular/common/http';
import { ComponentDescriptor, ComponentType } from '@shared/models/component-descriptor.models';
import { RequestConfig } from '@core/http/http-utils';
import { Observable } from 'rxjs';
import { RuleChainType } from '@shared/models/rule-chain.models';
import * as i0 from "@angular/core";
export declare class ComponentDescriptorService {
    private http;
    private componentsByTypeByRuleChainType;
    private componentsByClazz;
    constructor(http: HttpClient);
    getComponentDescriptorsByType(componentType: ComponentType, ruleChainType: RuleChainType, config?: RequestConfig): Observable<Array<ComponentDescriptor>>;
    getComponentDescriptorsByTypes(componentTypes: Array<ComponentType>, ruleChainType: RuleChainType, config?: RequestConfig): Observable<Array<ComponentDescriptor>>;
    getComponentDescriptorByClazz(componentDescriptorClazz: string, config?: RequestConfig): Observable<ComponentDescriptor>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ComponentDescriptorService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ComponentDescriptorService>;
}
