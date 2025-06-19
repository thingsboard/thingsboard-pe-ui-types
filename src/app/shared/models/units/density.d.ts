import { TbMeasure } from '@shared/models/unit.models';
export type DensityMetricUnits = 'kg/m³' | 'g/cm³' | 'mg/dL' | 'g/m³' | 'mg/mL' | 'mg/L' | 'mg/m³' | 'µg/m³';
export type DensityImperialUnits = 'lb/ft³' | 'oz/in³' | 'ton/yd³';
export type DensityUnits = DensityMetricUnits | DensityImperialUnits;
declare const measure: TbMeasure<DensityUnits>;
export default measure;
