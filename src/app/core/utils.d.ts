import { Type } from '@angular/core';
import { Observable } from 'rxjs';
import { DataKey, Datasource, DatasourceData, FormattedData, ReplaceInfo } from '@app/shared/models/widget.models';
import { EntityId } from '@shared/models/id/entity-id';
import { EntityType } from '@shared/models/entity-type.models';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { SubscriptionEntityInfo } from '@core/api/widget-api.models';
import { CompiledTbFunction, GenericFunction, TbFunction } from '@shared/models/js-function.models';
export declare function onParentScrollOrWindowResize(el: Node): Observable<Event>;
export declare function isLocalUrl(url: string): boolean;
export declare function animatedScroll(element: HTMLElement, scrollTop: number, delay?: number): void;
export declare function isUndefined(value: any): boolean;
export declare function isUndefinedOrNull(value: any): boolean;
export declare function isDefined(value: any): boolean;
export declare function isDefinedAndNotNull(value: any): boolean;
export declare function isEmptyStr(value: any): boolean;
export declare function isNotEmptyStr(value: any): boolean;
export declare function isFunction(value: any): boolean;
export declare function isObject(value: any): boolean;
export declare function isNumber(value: any): boolean;
export declare function isNumeric(value: any): boolean;
export declare function isBoolean(value: any): boolean;
export declare function isString(value: any): boolean;
export declare function isArray(value: any): boolean;
export declare function isLiteralObject(value: any): boolean;
export declare const isDate: (obj: any) => boolean;
export declare const isFile: (obj: any) => boolean;
export declare const formatValue: (value: any, dec?: number, units?: string, showZeroDecimals?: boolean) => string | undefined;
export declare const formatNumberValue: (value: any, dec?: number) => number | undefined;
export declare function objectValues(obj: any): any[];
export declare function deleteNullProperties(obj: any): void;
export declare function objToBase64(obj: any): string;
export declare function stringToBase64(value: string): string;
export declare function base64toString(b64Encoded: string): string;
export declare function objToBase64URI(obj: any): string;
export declare function base64toObj(b64Encoded: string): any;
export declare function checkNumericStringAndConvert(val: string): number | string;
export declare const blobToBase64: (blob: Blob) => Observable<string>;
export declare const blobToText: (blob: Blob) => Observable<string>;
export declare const updateFileContent: (file: File, newContent: string) => File;
export declare const createFileFromContent: (content: string, name: string, type: string) => File;
export declare function hashCode(str: string): number;
export declare function objectHashCode(obj: any): number;
export declare function deepClone<T>(target: T, ignoreFields?: string[]): T;
export declare function extractType<T extends object>(target: any, keysOfProps: (keyof T)[]): T;
export declare const isEqual: (a: any, b: any) => boolean;
export declare const isEmpty: (a: any) => boolean;
export declare const unset: (object: any, path: string | symbol) => boolean;
export declare const setByPath: <T extends object>(object: T, path: string | number | symbol, value: any) => T;
export declare const isEqualIgnoreUndefined: (a: any, b: any) => boolean;
export declare const isArraysEqualIgnoreUndefined: (a: any[], b: any[]) => boolean;
export declare function mergeDeep<T>(target: T, ...sources: T[]): T;
export declare function mergeDeepIgnoreArray<T>(target: T, ...sources: T[]): T;
export declare function guid(): string;
export declare function cloneMetadata<S, T>(sourceType: Type<S>, targetType: Type<T>): void;
export declare function snakeCase(name: string, separator: string): string;
export declare function getDescendantProp(obj: any, path: string): any;
export declare function insertVariable(pattern: string, name: string, value: any): string;
export declare const createLabelFromDatasource: (datasource: Datasource, pattern: string) => string;
export declare const createLabelFromSubscriptionEntityInfo: (entityInfo: SubscriptionEntityInfo, pattern: string) => string;
export declare const hasDatasourceLabelsVariables: (pattern: string) => boolean;
export declare function formattedDataFormDatasourceData<D extends Datasource = Datasource>(input: DatasourceData[], dataIndex?: number, ts?: number, groupFunction?: (el: DatasourceData) => any): FormattedData<D>[];
export declare function formattedDataArrayFromDatasourceData<D extends Datasource = Datasource>(input: DatasourceData[], groupFunction?: (el: DatasourceData) => any): FormattedData<D>[][];
export declare function formattedDataFromDatasource<D extends Datasource = Datasource>(datasource: D, dsIndex: number): FormattedData<D>;
export declare function flatFormattedData(input: FormattedData[]): FormattedData;
export declare function flatDataWithoutOverride(input: FormattedData[]): FormattedData;
export declare function mergeFormattedData(first: FormattedData[], second: FormattedData[]): FormattedData[];
export declare function processDataPattern(pattern: string, data: FormattedData): Array<ReplaceInfo>;
export declare function fillDataPattern(pattern: string, replaceInfo: Array<ReplaceInfo>, data: FormattedData): string;
export declare function createLabelFromPattern(pattern: string, data: FormattedData): string;
export declare function parseFunction(source: any, params?: string[]): (...args: any[]) => any;
export declare function parseTbFunction<T extends GenericFunction>(http: HttpClient, source: TbFunction, params?: string[]): Observable<CompiledTbFunction<T>>;
export declare function safeExecuteTbFunction<T extends GenericFunction>(func: CompiledTbFunction<T>, params?: any[]): any;
export declare function padValue(val: any, dec: number): string;
export declare function removeEmptyObjects(obj: object): object;
export declare function baseUrl(): string;
export declare function coapBaseUrl(dtlsEnabled: boolean): string;
export declare function generateId(length: number): string;
export declare function sortObjectKeys<T>(obj: T): T;
export declare function deepTrim<T>(obj: T): T;
export declare function generateSecret(length?: number): string;
export declare function validateEntityId(entityId: EntityId | null): boolean;
export declare function isMobileApp(): boolean;
export declare function randomAlphanumeric(length: number): string;
export declare function getEntityDetailsPageURL(id: string, entityType: EntityType): string;
export declare function parseHttpErrorMessage(errorResponse: HttpErrorResponse, translate: TranslateService, responseType?: string): {
    message: string;
    timeout: number;
};
export declare const genNextLabel: (name: string, datasources: Datasource[]) => string;
export declare const genNextLabelForDataKeys: (name: string, dataKeys: DataKey[]) => string;
export declare const getOS: () => string;
export declare const isSafari: () => boolean;
export declare const isFirefox: () => boolean;
export declare const plainColorFromVariable: (variable: string) => string;
export declare const camelCase: (str: string) => string;
export declare const capitalize: (str: string) => string;
export declare const convertKeysToCamelCase: (obj: Record<string, any>) => Record<string, any>;
export declare const unwrapModule: (module: any) => any;
