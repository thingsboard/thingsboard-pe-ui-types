import { BackgroundSettings, ColorSettings, DateFormatSettings, Font } from '@shared/models/widget-settings.models';
import { DataKey, WidgetConfig } from '@shared/models/widget.models';
import { AttributeData, DataKeyType } from '@shared/models/telemetry/telemetry.models';
import { Observable } from 'rxjs';
import { EntityService } from '@core/http/entity.service';
import { IAliasController } from '@core/api/widget-api.models';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ResourcesService } from '@core/services/resources.service';
import { FormGroup } from '@angular/forms';
export interface SvgInfo {
    svg: string;
    limits: SvgLimits;
}
export interface SvgLimits {
    min: number;
    max: number;
}
export interface LevelCardWidgetSettings extends WidgetConfig {
    tankSelectionType: LiquidWidgetDataSourceType;
    selectedShape: Shapes;
    shapeAttributeName: string;
    tankColor: ColorSettings;
    datasourceUnits: CapacityUnits;
    layout: LevelCardLayout;
    volumeSource: LiquidWidgetDataSourceType;
    volumeConstant: number;
    volumeAttributeName: string;
    volumeUnitsSource: LiquidWidgetDataSourceType;
    volumeUnitsAttributeName: string;
    volumeUnits: CapacityUnits;
    volumeFont: Font;
    volumeColor: string;
    liquidColor: ColorSettings;
    valueFont: Font;
    widgetUnitsSource: LiquidWidgetDataSourceType;
    widgetUnitsAttributeName: string;
    valueColor: ColorSettings;
    showBackgroundOverlay: boolean;
    backgroundOverlayColor: ColorSettings;
    showTooltip: boolean;
    showTooltipLevel: boolean;
    tooltipUnits: CapacityUnits;
    tooltipLevelDecimals: number;
    tooltipLevelFont: Font;
    tooltipLevelColor: ColorSettings;
    showTooltipDate: boolean;
    tooltipDateFormat: DateFormatSettings;
    tooltipDateFont: Font;
    tooltipDateColor: string;
    tooltipBackgroundColor: string;
    tooltipBackgroundBlur: number;
    background: BackgroundSettings;
    padding: string;
}
export declare enum Shapes {
    vOval = "Vertical Oval",
    vCylinder = "Vertical Cylinder",
    vCapsule = "Vertical Capsule",
    rectangle = "Rectangle",
    hOval = "Horizontal Oval",
    hEllipse = "Horizontal Ellipse",
    hDishEnds = "Horizontal Dish Ends",
    hCylinder = "Horizontal Cylinder",
    hCapsule = "Horizontal Capsule",
    hElliptical_2_1 = "Horizontal 2:1 Elliptical"
}
export declare enum CapacityUnits {
    percent = "%",
    liters = "L",
    cubicMillimeter = "mm\u00B3",
    cubicCentimeter = "cm\u00B3",
    cubicMeter = "m\u00B3",
    cubicKilometer = "km\u00B3",
    milliliter = "mL",
    hectoliter = "hl",
    cubicInch = "in\u00B3",
    cubicFoot = "ft\u00B3",
    cubicYard = "yd\u00B3",
    fluidOunce = "fl-oz",
    pint = "pt",
    quart = "qt",
    gallon = "gal",
    oilBarrels = "bbl"
}
export declare enum LevelCardLayout {
    simple = "simple",
    percentage = "percentage",
    absolute = "absolute"
}
export declare enum LiquidWidgetDataSourceType {
    static = "static",
    attribute = "attribute"
}
export declare enum ConversionType {
    to = "to",
    from = "from"
}
export declare const svgMapping: Map<Shapes, SvgInfo>;
export declare const levelCardLayoutTranslations: Map<LevelCardLayout, string>;
export declare const LiquidWidgetDataSourceTypeTranslations: Map<LiquidWidgetDataSourceType, string>;
export declare const ShapesTranslations: Map<Shapes, string>;
export declare const levelCardDefaultSettings: LevelCardWidgetSettings;
export declare const convertLiters: (value: number, units: CapacityUnits, conversionType: ConversionType) => number;
export declare const extractValue: <T>(attributes: Array<AttributeData>, attributeName: string) => T | undefined;
export declare const valueContainerStyleDefaults: string;
export declare const valueTextStyleDefaults: string;
export declare const volumeTextStyleDefaults: string;
export declare const createAbsoluteLayout: (values?: {
    inputValue: number | string;
    volume: number | string;
}, styles?: {
    valueStyle: string;
    volumeStyle: string;
}, units?: string) => string;
export declare const createPercentLayout: (value?: number | string, valueTextStyle?: string) => string;
export declare const optionsFilter: (searchText: string) => ((key: DataKey) => boolean);
export declare const fetchEntityKeysForDevice: (deviceId: string, dataKeyTypes: Array<DataKeyType>, entityService: EntityService) => Observable<Array<DataKey>>;
export declare const fetchEntityKeys: (entityAliasId: string, dataKeyTypes: Array<DataKeyType>, entityService: EntityService, aliasController: IAliasController) => Observable<Array<DataKey>>;
export declare const createShapeLayout: (svg: string, layout: LevelCardLayout, sanitizer: DomSanitizer) => SafeUrl;
export declare const loadSvgShapesMapping: (resourcesService: ResourcesService) => Observable<Map<Shapes, string>>;
export declare const updatedFormSettingsValidators: (formGroup: FormGroup) => void;
