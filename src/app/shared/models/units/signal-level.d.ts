import { TbMeasure } from '@shared/models/unit.models';
export type SignalLevelUnits = 'dBmV' | 'dBm' | 'rssi';
declare const measure: TbMeasure<SignalLevelUnits>;
export default measure;
