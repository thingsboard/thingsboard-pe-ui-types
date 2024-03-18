import { DataEntry, DataKey, Datasource, DatasourceData, TargetDevice } from '@shared/models/widget.models';
import { Injector } from '@angular/core';
import { AlarmFilterConfig } from '@shared/models/query/query.models';
import { Observable } from 'rxjs';
import { ImagePipe } from '@shared/pipe/image.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { Interval } from '@shared/models/time/time.models';
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
export declare enum ColorType {
    constant = "constant",
    range = "range",
    function = "function"
}
export declare const colorTypeTranslations: Map<ColorType, string>;
export interface ColorRange {
    from?: number;
    to?: number;
    color: string;
}
export declare const colorRangeIncludes: (range: ColorRange, toCheck: ColorRange) => boolean;
export declare const filterIncludingColorRanges: (ranges: Array<ColorRange>) => Array<ColorRange>;
export declare const sortedColorRange: (ranges: Array<ColorRange>) => Array<ColorRange>;
export interface ColorSettings {
    type: ColorType;
    color: string;
    rangeList?: ColorRange[];
    colorFunction?: string;
}
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
export declare const defaultColorFunction: string;
export declare const cssSizeToStrSize: (size?: number, unit?: cssUnit) => string;
export declare const resolveCssSize: (strSize?: string) => [number, cssUnit];
export declare const validateCssSize: (strSize?: string) => string | undefined;
export declare abstract class ColorProcessor {
    protected settings: ColorSettings;
    static fromSettings(color: ColorSettings): ColorProcessor;
    color: string;
    protected constructor(settings: ColorSettings);
    abstract update(value: any): void;
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
export {};
