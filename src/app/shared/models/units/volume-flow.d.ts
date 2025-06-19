import { TbMeasure } from '@shared/models/unit.models';
export type VolumeFlowUnits = VolumeFlowMetricUnits | VolumeFlowImperialUnits;
export type VolumeFlowMetricUnits = 'dm³/s' | 'mL/min' | 'L/s' | 'L/min' | 'L/hr' | 'm³/s' | 'm³/hr';
export type VolumeFlowImperialUnits = 'fl-oz/s' | 'ft³/s' | 'ft³/min' | 'gal/hr' | 'GPM';
declare const measure: TbMeasure<VolumeFlowUnits>;
export default measure;
