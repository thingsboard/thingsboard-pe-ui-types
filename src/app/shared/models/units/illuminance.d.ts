import { TbMeasure } from '@shared/models/unit.models';
export type IlluminanceUnits = IlluminanceMetricUnits | IlluminanceImperialUnits;
export type IlluminanceMetricUnits = 'lx' | 'cd/m²' | 'lm/m²';
export type IlluminanceImperialUnits = 'fc';
declare const measure: TbMeasure<IlluminanceUnits>;
export default measure;
