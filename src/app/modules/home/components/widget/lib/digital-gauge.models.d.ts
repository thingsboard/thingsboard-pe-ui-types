import { GaugeType } from '@home/components/widget/lib/canvas-digital-gauge';
import { AnimationRule } from '@home/components/widget/lib/analogue-gauge.models';
import { FontSettings } from '@home/components/widget/lib/settings.models';
export interface AttributeSourceProperty {
    valueSource: string;
    entityAlias?: string;
    attribute?: string;
    value?: number;
}
export interface FixedLevelColors {
    from?: AttributeSourceProperty;
    to?: AttributeSourceProperty;
    color: string;
}
export interface ColorLevelSetting {
    value: number;
    color: string;
}
export type colorLevel = Array<string | ColorLevelSetting>;
export type attributesGaugeType = 'levelColors' | 'ticks';
export interface DigitalGaugeSettings {
    minValue?: number;
    maxValue?: number;
    gaugeType?: GaugeType;
    donutStartAngle?: number;
    neonGlowBrightness?: number;
    dashThickness?: number;
    roundedLineCap?: boolean;
    title?: string;
    showTitle?: boolean;
    unitTitle?: string;
    showUnitTitle?: boolean;
    showTimestamp?: boolean;
    timestampFormat?: string;
    showValue?: boolean;
    showMinMax?: boolean;
    gaugeWidthScale?: number;
    defaultColor?: string;
    gaugeColor?: string;
    useFixedLevelColor?: boolean;
    levelColors?: colorLevel;
    fixedLevelColors?: FixedLevelColors[];
    animation?: boolean;
    animationDuration?: number;
    animationRule?: AnimationRule;
    titleFont?: FontSettings;
    labelFont?: FontSettings;
    valueFont?: FontSettings;
    minMaxFont?: FontSettings;
    decimals?: number;
    units?: string;
    hideValue?: boolean;
    hideMinMax?: boolean;
    showTicks?: boolean;
    ticksValue?: AttributeSourceProperty[];
    ticks?: number[];
    colorTicks?: string;
    tickWidth?: number;
}
