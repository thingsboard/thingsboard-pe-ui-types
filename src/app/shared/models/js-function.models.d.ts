import { Observable } from 'rxjs';
import { ResourceInfo } from '@shared/models/resource.models';
import { HttpClient } from '@angular/common/http';
import { TbEditorCompleter } from '@shared/models/ace/completion.models';
import { TranslateService } from '@ngx-translate/core';
export interface TbFunctionWithModules {
    body: string;
    modules: {
        [alias: string]: string;
    };
}
export type TbFunction = string | TbFunctionWithModules;
export declare const isNotEmptyTbFunction: (tbFunction: TbFunction) => boolean;
export declare const compileTbFunction: <T extends GenericFunction>(http: HttpClient, tbFunction: TbFunction, ...args: string[]) => Observable<CompiledTbFunction<T>>;
export declare const loadModulesCompleter: (http: HttpClient, modules: {
    [alias: string]: string;
}) => Observable<TbEditorCompleter | null>;
export declare const loadModuleMarkdownDescription: (http: HttpClient, translate: TranslateService, resource: ResourceInfo) => Observable<string>;
export declare const loadModuleMarkdownSourceCode: (http: HttpClient, translate: TranslateService, resource: ResourceInfo) => Observable<string>;
export type GenericFunction = (...args: any[]) => any;
export declare class CompiledTbFunction<T extends GenericFunction> {
    private compiledFunction;
    private compiledModules;
    execute: T;
    constructor(compiledFunction: Function, compiledModules: System.Module[]);
    private executeImpl;
    apply(thisArg: any, argArray?: any): any;
}
