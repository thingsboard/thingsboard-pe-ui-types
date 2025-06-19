import { TbMeasure } from '@shared/models/unit.models';
export type VolumeUnits = VolumeMetricUnits | VolumeImperialUnits;
export type VolumeMetricUnits = 'mm³' | 'cm³' | 'µL' | 'mL' | 'L' | 'hL' | 'm³' | 'km³';
export type VolumeImperialUnits = 'tsp' | 'tbsp' | 'in³' | 'fl-oz' | 'cup' | 'pt' | 'qt' | 'gal' | 'ft³' | 'yd³' | 'bbl' | 'gi' | 'hhd';
declare const measure: TbMeasure<VolumeUnits>;
export default measure;
