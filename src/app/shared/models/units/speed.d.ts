import { TbMeasure } from '@shared/models/unit.models';
export type SpeedUnits = SpeedMetricUnits | SpeedImperialUnits;
export type SpeedMetricUnits = 'm/s' | 'km/h' | 'mm/min' | 'mm/s';
export type SpeedImperialUnits = 'mph' | 'kt' | 'ft/s' | 'ft/min' | 'in/h';
declare const measure: TbMeasure<SpeedUnits>;
export default measure;
