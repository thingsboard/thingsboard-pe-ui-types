import { TbMeasure } from '@shared/models/unit.models';
export type MagneticFluxUnits = 'Wb' | 'µWb' | 'mWb' | 'Mx' | 'G·cm²' | 'kG·cm²';
declare const measure: TbMeasure<MagneticFluxUnits>;
export default measure;
