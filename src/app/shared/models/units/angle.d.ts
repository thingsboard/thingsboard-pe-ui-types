import { TbMeasure } from '@shared/models/unit.models';
export type AngleUnits = 'rad' | 'deg' | 'grad' | 'arcmin' | 'arcsec' | 'mrad' | 'rev';
declare const measure: TbMeasure<AngleUnits>;
export default measure;
