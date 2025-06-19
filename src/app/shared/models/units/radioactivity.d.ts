import { TbMeasure } from '@shared/models/unit.models';
export type RadioactivityMetricUnits = 'Bq' | 'Ci' | 'Rd' | 'dps';
export type RadioactivityUnits = RadioactivityMetricUnits;
declare const measure: TbMeasure<RadioactivityUnits>;
export default measure;
