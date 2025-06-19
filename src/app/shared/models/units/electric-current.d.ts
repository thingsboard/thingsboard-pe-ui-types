import { TbMeasure } from '@shared/models/unit.models';
export type ElectricCurrentUnits = 'A' | 'pA' | 'nA' | 'μA' | 'mA' | 'kA' | 'MA' | 'GA';
declare const measure: TbMeasure<ElectricCurrentUnits>;
export default measure;
