import { TbMeasure } from '@shared/models/unit.models';
export type PowerUnits = PowerMetricUnits | PowerImperialUnits;
export type PowerMetricUnits = 'W' | 'μW' | 'mW' | 'kW' | 'MW' | 'GW' | 'PS';
export type PowerImperialUnits = 'BTU/s' | 'ft-lb/s' | 'hp' | 'BTU/h';
declare const measure: TbMeasure<PowerUnits>;
export default measure;
