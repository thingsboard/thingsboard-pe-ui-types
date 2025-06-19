import { TbMeasure } from '@shared/models/unit.models';
export type ForceUnits = ForceMetricUnits | ForceImperialUnits;
export type ForceMetricUnits = 'N' | 'kN' | 'dyn';
export type ForceImperialUnits = 'lbf' | 'kgf' | 'klbf' | 'pdl' | 'kip';
declare const measure: TbMeasure<ForceUnits>;
export default measure;
