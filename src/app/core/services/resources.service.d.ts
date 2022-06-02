import { Compiler, ComponentFactory, Injector, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IModulesMap } from '@modules/common/modules-map.models';
import * as i0 from "@angular/core";
export interface ModulesWithFactories {
    modules: Type<any>[];
    factories: ComponentFactory<any>[];
}
export declare class ResourcesService {
    private readonly document;
    private compiler;
    private http;
    private injector;
    private loadedResources;
    private loadedModules;
    private loadedModulesAndFactories;
    private anchor;
    constructor(document: any, compiler: Compiler, http: HttpClient, injector: Injector);
    loadResource(url: string): Observable<any>;
    loadFactories(url: string, modulesMap: IModulesMap): Observable<ModulesWithFactories>;
    loadModules(url: string, modulesMap: IModulesMap): Observable<Type<any>[]>;
    private extractNgModules;
    private isPrimitive;
    private loadResourceByType;
    static ɵfac: i0.ɵɵFactoryDeclaration<ResourcesService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ResourcesService>;
}
