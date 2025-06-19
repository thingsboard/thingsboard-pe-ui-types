import { TbMeasure } from '@shared/models/unit.models';
export type CapacitanceUnits = 'F' | 'mF' | 'μF' | 'nF' | 'pF' | 'kF' | 'MF' | 'GF' | 'TF';
declare const measure: TbMeasure<CapacitanceUnits>;
export default measure;
