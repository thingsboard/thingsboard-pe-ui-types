import { TbColorScheme } from '@shared/models/color.models';
import { LinearGradientObject } from 'zrender/lib/graphic/LinearGradient';
import { ComponentStyle, Font } from '@shared/models/widget-settings.models';
import { LabelFormatterCallback, RadialGradientObject } from 'echarts';
import { AnimationOptionMixin, LabelLayoutOption } from 'echarts/types/src/util/types';
import { LabelLayoutOptionCallback } from 'echarts/types/dist/shared';
import { BuiltinTextPosition } from 'zrender/src/core/types';
import { WidgetContext } from '@home/models/widget-component.models';
export declare const chartColorScheme: TbColorScheme;
export declare enum ChartShape {
    emptyCircle = "emptyCircle",
    circle = "circle",
    rect = "rect",
    roundRect = "roundRect",
    triangle = "triangle",
    diamond = "diamond",
    pin = "pin",
    arrow = "arrow",
    none = "none"
}
export declare const chartShapes: ChartShape[];
export declare const chartShapeTranslations: Map<ChartShape, string>;
export declare enum ChartLineType {
    solid = "solid",
    dashed = "dashed",
    dotted = "dotted"
}
export declare const chartLineTypes: ChartLineType[];
export declare const chartLineTypeTranslations: Map<ChartLineType, string>;
export declare enum ChartAnimationEasing {
    linear = "linear",
    quadraticIn = "quadraticIn",
    quadraticOut = "quadraticOut",
    quadraticInOut = "quadraticInOut",
    cubicIn = "cubicIn",
    cubicOut = "cubicOut",
    cubicInOut = "cubicInOut",
    quarticIn = "quarticIn",
    quarticOut = "quarticOut",
    quarticInOut = "quarticInOut",
    quinticIn = "quinticIn",
    quinticOut = "quinticOut",
    quinticInOut = "quinticInOut",
    sinusoidalIn = "sinusoidalIn",
    sinusoidalOut = "sinusoidalOut",
    sinusoidalInOut = "sinusoidalInOut",
    exponentialIn = "exponentialIn",
    exponentialOut = "exponentialOut",
    exponentialInOut = "exponentialInOut",
    circularIn = "circularIn",
    circularOut = "circularOut",
    circularInOut = "circularInOut",
    elasticIn = "elasticIn",
    elasticOut = "elasticOut",
    elasticInOut = "elasticInOut",
    backIn = "backIn",
    backOut = "backOut",
    backInOut = "backInOut",
    bounceIn = "bounceIn",
    bounceOut = "bounceOut",
    bounceInOut = "bounceInOut"
}
export declare const chartAnimationEasings: ChartAnimationEasing[];
export declare enum ChartFillType {
    none = "none",
    opacity = "opacity",
    gradient = "gradient"
}
export declare const chartFillTypes: ChartFillType[];
export declare const chartFillTypeTranslations: Map<ChartFillType, string>;
export declare enum ChartLabelPosition {
    top = "top",
    bottom = "bottom"
}
export declare const chartLabelPositions: ChartLabelPosition[];
export declare const chartLabelPositionTranslations: Map<ChartLabelPosition, string>;
export declare enum PieChartLabelPosition {
    inside = "inside",
    outside = "outside"
}
export declare const pieChartLabelPositions: PieChartLabelPosition[];
export declare const pieChartLabelPositionTranslations: Map<PieChartLabelPosition, string>;
export interface ChartAnimationSettings {
    animation: boolean;
    animationThreshold: number;
    animationDuration: number;
    animationEasing: ChartAnimationEasing;
    animationDelay: number;
    animationDurationUpdate: number;
    animationEasingUpdate: ChartAnimationEasing;
    animationDelayUpdate: number;
}
export declare const chartAnimationDefaultSettings: ChartAnimationSettings;
export interface ChartFillSettings {
    type: ChartFillType;
    opacity: number;
    gradient: {
        start: number;
        end: number;
    };
}
export interface ChartBarSettings {
    showBorder: boolean;
    borderWidth: number;
    borderRadius: number;
    barWidth?: number;
    showLabel: boolean;
    labelPosition: ChartLabelPosition | PieChartLabelPosition | BuiltinTextPosition;
    labelFont: Font;
    labelColor: string;
    enableLabelBackground: boolean;
    labelBackground: string;
    labelFormatter?: string | LabelFormatterCallback;
    labelLayout?: LabelLayoutOption | LabelLayoutOptionCallback;
    additionalLabelOption?: {
        [key: string]: any;
    };
    backgroundSettings: ChartFillSettings;
}
export declare const chartBarDefaultSettings: ChartBarSettings;
export declare const measureSymbolOffset: (symbol: string, symbolSize: any) => number;
export declare const createLinearOpacityGradient: (color: string, gradient: {
    start: number;
    end: number;
}) => LinearGradientObject;
export declare const createRadialOpacityGradient: (color: string, gradient: {
    start: number;
    end: number;
}) => RadialGradientObject;
export declare const createChartTextStyle: (font: Font, color: string, darkMode: boolean, colorKey?: string, fill?: boolean) => ComponentStyle;
export declare const prepareChartThemeColor: (color: string, darkMode: boolean, colorKey?: string) => string;
export declare const toAnimationOption: (ctx: WidgetContext, settings: ChartAnimationSettings) => AnimationOptionMixin;
