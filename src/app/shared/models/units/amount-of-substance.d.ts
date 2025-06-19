import { TbMeasure } from '@shared/models/unit.models';
export type AmountOfSubstanceUnits = 'mol' | 'nmol' | 'μmol' | 'mmol' | 'kmol';
declare const measure: TbMeasure<AmountOfSubstanceUnits>;
export default measure;
