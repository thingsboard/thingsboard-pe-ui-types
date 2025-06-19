import { TbMeasure } from '@shared/models/unit.models';
export type ChargeUnits = ChargeMetricUnits;
export type ChargeMetricUnits = 'c' | 'mC' | 'μC' | 'nC' | 'pC' | 'mAh' | 'Ah' | 'kAh';
declare const measure: TbMeasure<ChargeUnits>;
export default measure;
