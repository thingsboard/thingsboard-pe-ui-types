import { Injector, Type, ɵComponentDef, ɵNgModuleDef } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IModulesMap } from '@modules/common/modules-map.models';
import { TbResourceId } from '@shared/models/id/tb-resource-id';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { RequestConfig } from '@core/http/http-utils';
import * as i0 from "@angular/core";
export interface ModuleInfo {
    module: ɵNgModuleDef<any>;
    components: ɵComponentDef<any>[];
}
export interface ModulesWithComponents {
    modules: ModuleInfo[];
    standaloneComponents: ɵComponentDef<any>[];
}
export declare const flatModulesWithComponents: (modulesWithComponentsList: ModulesWithComponents[]) => ModulesWithComponents;
export declare const modulesWithComponentsToTypes: (modulesWithComponents: ModulesWithComponents) => Type<any>[];
export declare const componentTypeBySelector: (modulesWithComponents: ModulesWithComponents, selector: string) => Type<any> | undefined;
export declare class ResourcesService {
    private readonly document;
    protected store: Store<AppState>;
    private http;
    private injector;
    private loadedJsonResources;
    private loadedResources;
    private loadedModulesWithComponents;
    private anchor;
    constructor(document: Document, store: Store<AppState>, http: HttpClient, injector: Injector);
    loadJsonResource<T>(url: string, postProcess?: (data: T) => T): Observable<T>;
    loadResource(url: string): Observable<any>;
    downloadResource(downloadUrl: string, config?: RequestConfig): Observable<any>;
    loadModulesWithComponents(resourceId: string | TbResourceId, modulesMap: IModulesMap): Observable<ModulesWithComponents>;
    private extractModulesWithComponents;
    private patchModulesWithFlexLayout;
    private loadResourceByType;
    private getDownloadUrl;
    private getMetaInfo;
    private clearModulesWithComponentsCache;
    static ɵfac: i0.ɵɵFactoryDeclaration<ResourcesService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ResourcesService>;
}
