import { TbMeasure } from '@shared/models/unit.models';
export type FrequencyUnits = FrequencyMetricUnits;
export type FrequencyMetricUnits = 'mHz' | 'Hz' | 'kHz' | 'MHz' | 'GHz' | 'THz' | 'rpm' | 'deg/s' | 'rad/s' | 'RPM' | 'λ' | 'bpm';
declare const measure: TbMeasure<FrequencyUnits>;
export default measure;
