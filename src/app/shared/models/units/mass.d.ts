import { TbMeasure } from '@shared/models/unit.models';
export type MassUnits = MassMetricUnits | MassImperialUnits;
export type MassMetricUnits = 'ng' | 'mcg' | 'mg' | 'g' | 'kg' | 't' | 'Da' | 'ct';
export type MassImperialUnits = 'oz' | 'lb' | 'st' | 'short tons' | 'gr' | 'dr' | 'qr' | 'cwt' | 'slug';
declare const measure: TbMeasure<MassUnits>;
export default measure;
