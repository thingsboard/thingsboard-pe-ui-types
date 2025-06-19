import { TbMeasure } from '@shared/models/unit.models';
export type VoltageUnits = VoltageMetricUnits;
export type VoltageMetricUnits = 'pV' | 'nV' | 'μV' | 'mV' | 'V' | 'kV' | 'MV';
declare const measure: TbMeasure<VoltageUnits>;
export default measure;
