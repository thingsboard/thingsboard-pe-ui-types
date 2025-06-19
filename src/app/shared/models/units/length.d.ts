import { TbMeasure } from '@shared/models/unit.models';
export type LengthUnits = LengthMetricUnits | LengthImperialUnits;
export type LengthMetricUnits = 'nm' | 'μm' | 'mm' | 'cm' | 'dm' | 'm' | 'km' | 'angstrom';
export type LengthImperialUnits = 'in' | 'yd' | 'ft-us' | 'ft' | 'fathom' | 'mi' | 'nmi' | 'pouce' | 'thou' | 'barleycorn' | 'hand' | 'ch' | 'fur' | 'league' | 'link' | 'rod' | 'cable' | 'AU';
declare const measure: TbMeasure<LengthUnits>;
export default measure;
