import { DataEntry, DataKey, Datasource, DatasourceData, TargetDevice } from '@shared/models/widget.models';
import { EventEmitter, Injector } from '@angular/core';
import { AlarmFilterConfig } from '@shared/models/query/query.models';
import { Observable } from 'rxjs';
import { ImagePipe } from '@shared/pipe/image.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { Interval } from '@shared/models/time/time.models';
import { WidgetContext } from '@home/models/widget-component.models';
import { DataKeyType } from '@shared/models/telemetry/telemetry.models';
import { IWidgetSubscription, WidgetSubscriptionCallbacks } from '@core/api/widget-api.models';
import { UnitService } from '@core/services/unit.service';
import { TbUnit } from '@shared/models/unit.models';
export type ComponentStyle = {
    [klass: string]: any;
};
export declare const cssUnits: readonly ["px", "em", "%", "rem", "pt", "pc", "in", "cm", "mm", "ex", "ch", "vw", "vh", "vmin", "vmax"];
type cssUnitTuple = typeof cssUnits;
export type cssUnit = cssUnitTuple[number];
export declare const fontWeights: readonly ["normal", "bold", "bolder", "lighter", "100", "200", "300", "400", "500", "600", "700", "800", "900"];
type fontWeightTuple = typeof fontWeights;
export type fontWeight = fontWeightTuple[number];
export declare const fontWeightTranslations: Map<"bold" | "normal" | "lighter" | "900" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "bolder", string>;
export declare const fontStyles: readonly ["normal", "italic", "oblique"];
type fontStyleTuple = typeof fontStyles;
export type fontStyle = fontStyleTuple[number];
export declare const fontStyleTranslations: Map<"normal" | "italic" | "oblique", string>;
export declare const commonFonts: string[];
export interface Font {
    size: number;
    sizeUnit: cssUnit;
    family: string;
    weight: fontWeight;
    style: fontStyle;
    lineHeight: string;
}
export declare enum ValueSourceType {
    constant = "constant",
    latestKey = "latestKey",
    entity = "entity"
}
export declare const ValueSourceTypes: ValueSourceType[];
export declare const ValueSourceTypeTranslation: Map<ValueSourceType, string>;
export interface ValueSourceConfig {
    type: ValueSourceType;
    value?: number;
    latestKeyType?: DataKeyType.attribute | DataKeyType.timeseries;
    latestKey?: string;
    entityKeyType?: DataKeyType.attribute | DataKeyType.timeseries;
    entityAlias?: string;
    entityKey?: string;
}
export declare enum ColorType {
    constant = "constant",
    gradient = "gradient",
    range = "range",
    function = "function"
}
export declare const colorTypeTranslations: Map<ColorType, string>;
interface AdvancedColorMode {
    advancedMode?: boolean;
}
export interface ColorRange {
    from?: number;
    to?: number;
    color: string;
}
export interface AdvancedColorRange {
    from?: ValueSourceConfig;
    to?: ValueSourceConfig;
    color: string;
}
export interface ColorRangeSettings extends AdvancedColorMode {
    range?: ColorRange[];
    rangeAdvanced?: AdvancedColorRange[];
}
export interface ColorGradientSettings extends AdvancedColorMode {
    gradient?: string[];
    gradientAdvanced?: AdvancedGradient[];
    minValue?: number;
    maxValue?: number;
}
export interface AdvancedGradient {
    source: ValueSourceConfig;
    color: string;
}
export interface ColorSettings {
    type: ColorType;
    color: string;
    rangeList?: ColorRangeSettings;
    gradient?: ColorGradientSettings;
    colorFunction?: string;
}
export declare const colorRangeIncludes: (range: ColorRange, toCheck: ColorRange) => boolean;
export declare const filterIncludingColorRanges: (ranges: Array<ColorRange> | ColorRangeSettings) => Array<ColorRange>;
export declare const sortedColorRange: (ranges: Array<ColorRange>) => Array<ColorRange>;
export interface TimewindowStyle {
    showIcon: boolean;
    icon: string;
    iconSize: string;
    iconPosition: 'left' | 'right';
    font?: Font;
    color?: string;
    displayTypePrefix?: boolean;
}
export declare const defaultTimewindowStyle: TimewindowStyle;
export declare const constantColor: (color: string) => ColorSettings;
export declare const gradientColor: (defaultColor: string, colors: string[], minValue?: number, maxValue?: number) => ColorSettings;
export declare const defaultGradient: (minValue?: number, maxValue?: number) => ColorGradientSettings;
export declare const defaultRange: () => ColorRangeSettings;
export declare const defaultColorFunction: string;
export declare const cssSizeToStrSize: (size?: number, unit?: cssUnit) => string;
export declare const resolveCssSize: (strSize?: string) => [number, cssUnit];
export declare const validateCssSize: (strSize?: string) => string | undefined;
export interface ColorProcessorSettings {
    settings: ColorSettings;
    ctx?: WidgetContext;
    minGradientValue?: number;
    maxGradientValue?: number;
}
export declare abstract class ColorProcessor {
    protected settings: ColorSettings;
    static fromSettings(color: ColorSettings, ctx?: WidgetContext): ColorProcessor;
    static fromColorProcessorSettings(setting: ColorProcessorSettings): ColorProcessor;
    color: string;
    colorUpdated?: EventEmitter<void>;
    protected constructor(settings: ColorSettings);
    abstract update(value: any): void;
    destroy(): void;
}
export declare abstract class AdvancedModeColorProcessor extends ColorProcessor {
    protected settings: ColorSettings;
    protected ctx: WidgetContext;
    protected sourcesSubscription: IWidgetSubscription;
    protected advancedMode: boolean;
    private currentValue;
    colorUpdated: EventEmitter<void>;
    protected constructor(settings: ColorSettings, ctx: WidgetContext);
    abstract updatedAdvancedData(data: Array<DatasourceData>): void;
    abstract datasourceConfigs(): Array<ValueSourceConfig>;
    abstract getCurrentConfig(): AdvancedColorMode;
    update(value: any): void;
    destroy(): void;
    private onDataUpdated;
}
export type FormatTimeUnit = 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year';
export declare const formatTimeUnits: FormatTimeUnit[];
export declare const formatTimeUnitTranslations: Map<FormatTimeUnit, string>;
export type AutoDateFormatSettings = {
    [unit in FormatTimeUnit]?: string;
};
export interface DateFormatSettings {
    format?: string;
    lastUpdateAgo?: boolean;
    custom?: boolean;
    auto?: boolean;
    hideLastUpdatePrefix?: boolean;
    autoDateFormatSettings?: AutoDateFormatSettings;
}
export declare const simpleDateFormat: (format: string) => DateFormatSettings;
export declare const lastUpdateAgoDateFormat: () => DateFormatSettings;
export declare const customDateFormat: (format: string) => DateFormatSettings;
export declare const defaultAutoDateFormatSettings: AutoDateFormatSettings;
export declare const autoDateFormat: () => DateFormatSettings;
export declare const dateFormats: DateFormatSettings[];
export declare const dateFormatsWithAuto: DateFormatSettings[];
export declare const compareDateFormats: (df1: DateFormatSettings, df2: DateFormatSettings) => boolean;
export declare abstract class DateFormatProcessor {
    protected $injector: Injector;
    protected settings: DateFormatSettings;
    static fromSettings($injector: Injector, settings: DateFormatSettings): DateFormatProcessor;
    formatted: string;
    protected constructor($injector: Injector, settings: DateFormatSettings);
    abstract update(ts: string | number | Date, interval?: Interval): string;
}
export declare class SimpleDateFormatProcessor extends DateFormatProcessor {
    protected $injector: Injector;
    protected settings: DateFormatSettings;
    private datePipe;
    constructor($injector: Injector, settings: DateFormatSettings);
    update(ts: string | number | Date): string;
}
export declare class LastUpdateAgoDateFormatProcessor extends DateFormatProcessor {
    protected $injector: Injector;
    protected settings: DateFormatSettings;
    private dateAgoPipe;
    private translate;
    constructor($injector: Injector, settings: DateFormatSettings);
    update(ts: string | number | Date): string;
}
export declare class AutoDateFormatProcessor extends DateFormatProcessor {
    protected $injector: Injector;
    protected settings: DateFormatSettings;
    private datePipe;
    private readonly autoDateFormatSettings;
    constructor($injector: Injector, settings: DateFormatSettings);
    update(ts: string | number | Date, interval?: Interval): string;
}
export interface ValueFormatSettings {
    decimals?: number;
    units?: TbUnit;
    showZeroDecimals?: boolean;
    ignoreUnitSymbol?: boolean;
}
export declare abstract class ValueFormatProcessor {
    protected settings: ValueFormatSettings;
    protected isDefinedDecimals: boolean;
    protected hideZeroDecimals: boolean;
    protected unitSymbol: string;
    static fromSettings($injector: Injector, settings: ValueFormatSettings): ValueFormatProcessor;
    static fromSettings(unitService: UnitService, settings: ValueFormatSettings): ValueFormatProcessor;
    protected constructor(settings: ValueFormatSettings);
    abstract format(value: any): string;
    protected formatValue(value: number): string;
}
export declare class SimpleValueFormatProcessor extends ValueFormatProcessor {
    protected settings: ValueFormatSettings;
    constructor(settings: ValueFormatSettings);
    format(value: any): string;
}
export declare class UnitConverterValueFormatProcessor extends ValueFormatProcessor {
    protected unitServiceOrInjector: Injector | UnitService;
    protected settings: ValueFormatSettings;
    private readonly unitConverter;
    constructor(unitServiceOrInjector: Injector | UnitService, settings: ValueFormatSettings);
    format(value: any): string;
}
export declare const createValueFormatterFromSettings: (ctx: WidgetContext) => ValueFormatProcessor;
export declare const tsToFormatTimeUnit: (ts: string | number | Date) => FormatTimeUnit;
export declare enum BackgroundType {
    image = "image",
    color = "color"
}
export declare const backgroundTypeTranslations: Map<BackgroundType, string>;
export interface OverlaySettings {
    enabled: boolean;
    color: string;
    blur: number;
}
export interface BackgroundSettings {
    type: BackgroundType;
    imageUrl?: string;
    color?: string;
    overlay: OverlaySettings;
}
export declare const isBackgroundSettings: (background: any) => background is BackgroundSettings;
export declare const colorBackground: (color: string) => BackgroundSettings;
export declare const iconStyle: (size: number | string, sizeUnit?: cssUnit) => ComponentStyle;
export declare const textStyle: (font?: Font, letterSpacing?: string) => ComponentStyle;
export declare const inlineTextStyle: (font?: Font, letterSpacing?: string) => ComponentStyle;
export declare const cssTextFromInlineStyle: (styleObj: {
    [key: string]: string | number;
}) => string;
export declare const isFontSet: (font: Font) => boolean;
export declare const isFontPartiallySet: (font: Font) => boolean;
export declare const validateAndUpdateBackgroundSettings: (background: BackgroundSettings) => BackgroundSettings;
export declare const backgroundStyle: (background: BackgroundSettings, imagePipe: ImagePipe, sanitizer: DomSanitizer, preview?: boolean) => Observable<ComponentStyle>;
export declare const overlayStyle: (overlay: OverlaySettings) => ComponentStyle;
export declare const getDataKey: (datasources?: Datasource[], index?: number) => DataKey;
export declare const updateDataKeys: (datasources: Datasource[], dataKeys: DataKey[]) => void;
export declare const getDataKeyByLabel: (datasources: Datasource[], label: string) => DataKey;
export declare const updateDataKeyByLabel: (datasources: Datasource[], dataKey: DataKey, label: string) => void;
export declare const getTargetDeviceFromDatasources: (datasources?: Datasource[]) => TargetDevice;
export declare const getAlarmFilterConfig: (datasources?: Datasource[]) => AlarmFilterConfig;
export declare const setAlarmFilterConfig: (config: AlarmFilterConfig, datasources?: Datasource[]) => void;
export declare const getLabel: (datasources?: Datasource[]) => string;
export declare const setLabel: (label: string, datasources?: Datasource[]) => void;
export declare const getSingleTsValue: (data: Array<DatasourceData>) => DataEntry;
export declare const getSingleTsValueByDataKey: (data: Array<DatasourceData>, dataKey: DataKey) => DataEntry;
export declare const getLatestSingleTsValue: (data: Array<DatasourceData>) => DataEntry;
export declare const createValueSubscription: (ctx: WidgetContext, datasourceConfigs: ValueSourceConfig[], onDataUpdated: WidgetSubscriptionCallbacks["onDataUpdated"]) => Observable<IWidgetSubscription>;
export {};
