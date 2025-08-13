import { TbMeasure } from '@shared/models/unit.models';
export type SpeedUnits = SpeedMetricUnits | SpeedImperialUnits;
export type SpeedMetricUnits = 'm/s' | 'km/h' | 'mm/min' | 'm/min' | 'mm/s';
export type SpeedImperialUnits = 'mph' | 'kt' | 'ft/s' | 'ft/min' | 'in/s' | 'in/h';
declare const measure: TbMeasure<SpeedUnits>;
export default measure;
