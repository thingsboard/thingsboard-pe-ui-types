import { TbMeasure } from '@shared/models/unit.models';
export type ElectricFluxUnits = 'V·m' | 'kV·m' | 'MV·m' | 'µV·m' | 'mV·m' | 'nV·m';
declare const measure: TbMeasure<ElectricFluxUnits>;
export default measure;
