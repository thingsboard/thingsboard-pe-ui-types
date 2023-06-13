import { Compiler, ComponentFactory, Injector, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IModulesMap } from '@modules/common/modules-map.models';
import { TbResourceId } from '@shared/models/id/tb-resource-id';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export interface ModulesWithFactories {
    modules: Type<any>[];
    factories: ComponentFactory<any>[];
}
export declare class ResourcesService {
    private readonly document;
    protected store: Store<AppState>;
    private compiler;
    private http;
    private injector;
    private loadedResources;
    private loadedModules;
    private loadedModulesAndFactories;
    private anchor;
    constructor(document: any, store: Store<AppState>, compiler: Compiler, http: HttpClient, injector: Injector);
    loadResource(url: string): Observable<any>;
    loadFactories(resourceId: string | TbResourceId, modulesMap: IModulesMap): Observable<ModulesWithFactories>;
    loadModules(resourceId: string | TbResourceId, modulesMap: IModulesMap): Observable<Type<any>[]>;
    private extractNgModules;
    private isPrimitive;
    private loadResourceByType;
    private getDownloadUrl;
    private getMetaInfo;
    private clearModulesCache;
    static ɵfac: i0.ɵɵFactoryDeclaration<ResourcesService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ResourcesService>;
}
