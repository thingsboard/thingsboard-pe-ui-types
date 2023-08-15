/// <reference types="src/typings/rawloader.typings" />
import { ElementRef, NgZone } from '@angular/core';
import { ExceptionData } from '@app/shared/models/error.models';
import { TranslateService } from '@ngx-translate/core';
import { DataKey, Datasource, KeyInfo } from '@shared/models/widget.models';
import { DataKeyType } from '@app/shared/models/telemetry/telemetry.models';
import { WidgetInfo } from '@home/models/widget-component.models';
import { Observable, Subscription } from 'rxjs';
import { WidgetContext } from '@app/modules/home/models/widget-component.models';
import { AttributeData, TelemetryType } from '@shared/models/telemetry/telemetry.models';
import { EntityId } from '@shared/models/id/entity-id';
import { DatePipe } from '@angular/common';
import { OverlayRef } from '@angular/cdk/overlay';
import * as i0 from "@angular/core";
export declare class UtilsService {
    private window;
    private zone;
    private datePipe;
    private translate;
    iframeMode: boolean;
    widgetEditMode: boolean;
    editWidgetInfo: WidgetInfo;
    stateSelectView: boolean;
    defaultDataKey: DataKey;
    defaultDatasource: Datasource;
    defaultAlarmDataKeys: Array<DataKey>;
    constructor(window: Window, zone: NgZone, datePipe: DatePipe, translate: TranslateService);
    getPredefinedFunctionsList(): Array<string>;
    getPredefinedFunctionBody(func: string): string;
    getDefaultDatasource(dataKeySchema: any): Datasource;
    private initDefaultAlarmDataKeys;
    getDefaultAlarmDataKeys(): Array<DataKey>;
    defaultAlarmFieldContent(key: DataKey | {
        name: string;
    }, value: any): string;
    generateObjectFromJsonSchema(schema: any): any;
    processWidgetException(exception: any): ExceptionData;
    parseException(exception: any, lineOffset?: number): ExceptionData;
    customTranslation(translationValue: string, defaultValue: string): string;
    private doTranslate;
    guid(): string;
    validateDatasources(datasources: Array<Datasource>): Array<Datasource>;
    getMaterialColor(index: number): string;
    createKey(keyInfo: KeyInfo, type: DataKeyType, index?: number): DataKey;
    createLabelFromDatasource(datasource: Datasource, pattern: string): string;
    generateColors(datasources: Array<Datasource>): void;
    stringToHslColor(str: string, saturationPercentage: number, lightnessPercentage: number): string;
    currentPerfTime(): number;
    getQueryParam(name: string): string;
    removeQueryParams(keys: Array<string>): void;
    updateQueryParam(name: string, value: string | null): void;
    private updateUrlQueryString;
    baseUrl(): string;
    deepClone<T>(target: T, ignoreFields?: string[]): T;
    isUndefined(value: any): boolean;
    isDefined(value: any): boolean;
    defaultValue(value: any, defaultValue: any): any;
    translateText(text: string): string;
    private getEntityIdFromDatasource;
    subscribeToEntityTelemetry(ctx: WidgetContext, entityId?: EntityId, type?: TelemetryType, keys?: string[]): Observable<Array<AttributeData>>;
    objToBase64(obj: any): string;
    base64toString(b64Encoded: string): string;
    objToBase64URI(obj: any): string;
    base64toObj(b64Encoded: string): any;
    updateOverlayMaxHeigth(overlay: OverlayRef, observeElementRef?: ElementRef): Subscription;
    plainColorFromVariable(variable: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<UtilsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UtilsService>;
}
