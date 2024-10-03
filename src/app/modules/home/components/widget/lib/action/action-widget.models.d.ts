import { TelemetryType } from '@shared/models/telemetry/telemetry.models';
import { WidgetContext } from '@home/models/widget-component.models';
import { Observable, Observer } from 'rxjs';
import { AfterViewInit, ChangeDetectorRef, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { DataToValueSettings, GetAttributeValueSettings, GetValueSettings, SetValueSettings, TelemetryValueSettings, ValueActionSettings, ValueToDataSettings } from '@shared/models/action-widget-settings.models';
import { ValueType } from '@shared/models/constants';
import { EntityId } from '@shared/models/id/entity-id';
import * as i0 from "@angular/core";
export declare abstract class BasicActionWidgetComponent implements OnInit, OnDestroy, AfterViewInit {
    protected cd: ChangeDetectorRef;
    ctx: WidgetContext;
    widgetTitlePanel: TemplateRef<any>;
    private loadingSubject;
    private valueGetters;
    private valueActions;
    loading$: Observable<boolean>;
    protected constructor(cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onInit(): void;
    clearError(): void;
    protected createValueGetter<V>(getValueSettings: GetValueSettings<V>, valueType: ValueType, valueObserver?: Partial<Observer<V>>): ValueGetter<V>;
    protected createValueSetter<V>(setValueSettings: SetValueSettings): ValueSetter<V>;
    private onError;
    protected updateValue<V>(valueSetter: ValueSetter<V>, value: V, setValueObserver?: Partial<Observer<void>>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BasicActionWidgetComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BasicActionWidgetComponent, never, never, { "ctx": "ctx"; "widgetTitlePanel": "widgetTitlePanel"; }, {}, never, never, false, never>;
}
export declare class DataToValueConverter<V> {
    private settings;
    private valueType;
    private readonly dataToValueFunction;
    private readonly compareToValue;
    constructor(settings: DataToValueSettings, valueType: ValueType);
    dataToValue(data: any): V;
}
export declare abstract class ValueAction {
    protected ctx: WidgetContext;
    protected settings: ValueActionSettings;
    protected constructor(ctx: WidgetContext, settings: ValueActionSettings);
    protected handleError(err: any): Error;
    destroy(): void;
}
export declare abstract class ValueGetter<V> extends ValueAction {
    protected ctx: WidgetContext;
    protected settings: GetValueSettings<V>;
    protected valueType: ValueType;
    protected valueObserver: Partial<Observer<V>>;
    protected simulated: boolean;
    static fromSettings<V>(ctx: WidgetContext, settings: GetValueSettings<V>, valueType: ValueType, valueObserver: Partial<Observer<V>>, simulated: boolean): ValueGetter<V>;
    private readonly dataConverter;
    private getValueSubscription;
    protected constructor(ctx: WidgetContext, settings: GetValueSettings<V>, valueType: ValueType, valueObserver: Partial<Observer<V>>, simulated: boolean);
    getValue(): Observable<V>;
    destroy(): void;
    protected abstract doGetValue(): Observable<any>;
}
export declare class ValueToDataConverter<V> {
    protected settings: ValueToDataSettings;
    private readonly constantValue;
    private readonly valueToDataFunction;
    constructor(settings: ValueToDataSettings);
    valueToData(value: V): any;
}
export declare abstract class ValueSetter<V> extends ValueAction {
    protected ctx: WidgetContext;
    protected settings: SetValueSettings;
    protected simulated: boolean;
    static fromSettings<V>(ctx: WidgetContext, settings: SetValueSettings, simulated: boolean): ValueSetter<V>;
    private readonly valueToDataConverter;
    protected constructor(ctx: WidgetContext, settings: SetValueSettings, simulated: boolean);
    setValue(value: V): Observable<any>;
    protected abstract doSetValue(data: any): Observable<any>;
}
export declare class DefaultValueGetter<V> extends ValueGetter<V> {
    protected ctx: WidgetContext;
    protected settings: GetValueSettings<V>;
    protected valueType: ValueType;
    protected valueObserver: Partial<Observer<V>>;
    protected simulated: boolean;
    private readonly defaultValue;
    constructor(ctx: WidgetContext, settings: GetValueSettings<V>, valueType: ValueType, valueObserver: Partial<Observer<V>>, simulated: boolean);
    protected doGetValue(): Observable<V>;
}
export declare class ExecuteRpcValueGetter<V> extends ValueGetter<V> {
    protected ctx: WidgetContext;
    protected settings: GetValueSettings<V>;
    protected valueType: ValueType;
    protected valueObserver: Partial<Observer<V>>;
    protected simulated: boolean;
    private readonly executeRpcSettings;
    constructor(ctx: WidgetContext, settings: GetValueSettings<V>, valueType: ValueType, valueObserver: Partial<Observer<V>>, simulated: boolean);
    protected doGetValue(): Observable<V>;
}
export declare abstract class TelemetryValueGetter<V, S extends TelemetryValueSettings> extends ValueGetter<V> {
    protected ctx: WidgetContext;
    protected settings: GetValueSettings<V>;
    protected valueType: ValueType;
    protected valueObserver: Partial<Observer<V>>;
    protected simulated: boolean;
    protected targetEntityId: EntityId;
    private telemetrySubscriber;
    protected constructor(ctx: WidgetContext, settings: GetValueSettings<V>, valueType: ValueType, valueObserver: Partial<Observer<V>>, simulated: boolean);
    protected doGetValue(): Observable<V>;
    private subscribeForTelemetryValue;
    protected scope(): TelemetryType;
    protected abstract getTelemetryValueSettings(): S;
    destroy(): void;
}
export declare class AttributeValueGetter<V> extends TelemetryValueGetter<V, GetAttributeValueSettings> {
    protected ctx: WidgetContext;
    protected settings: GetValueSettings<V>;
    protected valueType: ValueType;
    protected valueObserver: Partial<Observer<V>>;
    protected simulated: boolean;
    constructor(ctx: WidgetContext, settings: GetValueSettings<V>, valueType: ValueType, valueObserver: Partial<Observer<V>>, simulated: boolean);
    protected getTelemetryValueSettings(): GetAttributeValueSettings;
    protected scope(): TelemetryType;
}
export declare class TimeSeriesValueGetter<V> extends TelemetryValueGetter<V, TelemetryValueSettings> {
    protected ctx: WidgetContext;
    protected settings: GetValueSettings<V>;
    protected valueType: ValueType;
    protected valueObserver: Partial<Observer<V>>;
    protected simulated: boolean;
    constructor(ctx: WidgetContext, settings: GetValueSettings<V>, valueType: ValueType, valueObserver: Partial<Observer<V>>, simulated: boolean);
    protected getTelemetryValueSettings(): TelemetryValueSettings;
}
export declare class DashboardStateGetter<V> extends ValueGetter<V> {
    protected ctx: WidgetContext;
    protected settings: GetValueSettings<V>;
    protected valueType: ValueType;
    protected valueObserver: Partial<Observer<V>>;
    protected simulated: boolean;
    constructor(ctx: WidgetContext, settings: GetValueSettings<V>, valueType: ValueType, valueObserver: Partial<Observer<V>>, simulated: boolean);
    protected doGetValue(): Observable<string>;
}
export declare class ExecuteRpcValueSetter<V> extends ValueSetter<V> {
    protected ctx: WidgetContext;
    protected settings: SetValueSettings;
    protected simulated: boolean;
    private readonly executeRpcSettings;
    constructor(ctx: WidgetContext, settings: SetValueSettings, simulated: boolean);
    protected doSetValue(data: any): Observable<any>;
}
export declare abstract class TelemetryValueSetter<V> extends ValueSetter<V> {
    protected ctx: WidgetContext;
    protected settings: SetValueSettings;
    protected simulated: boolean;
    protected targetEntityId: EntityId;
    protected constructor(ctx: WidgetContext, settings: SetValueSettings, simulated: boolean);
    protected doSetValue(data: any): Observable<V>;
    protected scope(): TelemetryType;
    protected abstract doSetTelemetryValue(data: any): Observable<V>;
}
export declare class AttributeValueSetter<V> extends TelemetryValueSetter<V> {
    protected ctx: WidgetContext;
    protected settings: SetValueSettings;
    protected simulated: boolean;
    private readonly setAttributeValueSettings;
    constructor(ctx: WidgetContext, settings: SetValueSettings, simulated: boolean);
    protected doSetTelemetryValue(data: any): Observable<any>;
    protected scope(): TelemetryType;
}
export declare class TimeSeriesValueSetter<V> extends TelemetryValueSetter<V> {
    protected ctx: WidgetContext;
    protected settings: SetValueSettings;
    protected simulated: boolean;
    private readonly putTimeSeriesValueSettings;
    constructor(ctx: WidgetContext, settings: SetValueSettings, simulated: boolean);
    protected doSetTelemetryValue(data: any): Observable<any>;
}
