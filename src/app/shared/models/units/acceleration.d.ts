import { TbMeasure } from '@shared/models/unit.models';
export type AccelerationMetricUnits = 'g₀' | 'm/s²' | 'km/h²' | 'Gal';
export type AccelerationImperialUnits = 'ft/s²';
export type AccelerationUnits = AccelerationMetricUnits | AccelerationImperialUnits;
declare const measure: TbMeasure<AccelerationUnits>;
export default measure;
