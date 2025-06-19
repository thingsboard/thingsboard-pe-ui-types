import { TbMeasure } from '@shared/models/unit.models';
export type DigitalUnits = 'bit' | 'B' | 'KB' | 'MB' | 'GB' | 'TB' | 'PB' | 'EB' | 'ZB' | 'YB';
declare const measure: TbMeasure<DigitalUnits>;
export default measure;
