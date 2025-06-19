import { TbMeasure } from '@shared/models/unit.models';
export type RadiationDoseUnits = 'Gy' | 'Sv' | 'Rad' | 'Rem' | 'R' | 'C/kg' | 'cps';
declare const measure: TbMeasure<RadiationDoseUnits>;
export default measure;
