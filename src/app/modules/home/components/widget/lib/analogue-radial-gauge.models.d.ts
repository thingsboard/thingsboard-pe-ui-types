import { AnalogueGaugeSettings } from '@home/components/widget/lib/analogue-gauge.models';
export interface AnalogueRadialGaugeSettings extends AnalogueGaugeSettings {
    startAngle: number;
    ticksAngle: number;
    needleCircleSize: number;
}
