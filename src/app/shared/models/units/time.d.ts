import { TbMeasure } from '@shared/models/unit.models';
export type TimeUnits = TimeMetricUnits;
export type TimeMetricUnits = 'ns' | 'μs' | 'ms' | 's' | 'min' | 'h' | 'd' | 'wk' | 'mo' | 'yr';
declare const measure: TbMeasure<TimeUnits>;
export default measure;
