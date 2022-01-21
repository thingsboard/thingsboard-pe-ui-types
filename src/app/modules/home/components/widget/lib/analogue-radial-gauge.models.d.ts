import { JsonSettingsSchema } from '@shared/models/widget.models';
import { AnalogueGaugeSettings } from '@home/components/widget/lib/analogue-gauge.models';
export interface AnalogueRadialGaugeSettings extends AnalogueGaugeSettings {
    startAngle: number;
    ticksAngle: number;
    needleCircleSize: number;
}
export declare function getAnalogueRadialGaugeSettingsSchema(): JsonSettingsSchema;
