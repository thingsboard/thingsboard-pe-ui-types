import { TbMeasure } from '@shared/models/unit.models';
export type InductanceMetricUnits = 'H' | 'mH' | 'µH' | 'nH' | 'T·m/A';
export type InductanceUnits = InductanceMetricUnits;
declare const measure: TbMeasure<InductanceUnits>;
export default measure;
