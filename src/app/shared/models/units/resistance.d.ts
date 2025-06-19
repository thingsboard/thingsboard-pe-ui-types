import { TbMeasure } from '@shared/models/unit.models';
export type ResistanceUnits = 'Ω' | 'μΩ' | 'mΩ' | 'kΩ' | 'MΩ' | 'GΩ';
declare const measure: TbMeasure<ResistanceUnits>;
export default measure;
