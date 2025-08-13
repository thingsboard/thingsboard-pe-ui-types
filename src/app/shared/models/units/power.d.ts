import { TbMeasure } from '@shared/models/unit.models';
export type PowerUnits = PowerMetricUnits | PowerImperialUnits;
export type PowerMetricUnits = 'W' | 'μW' | 'mW' | 'kW' | 'MW' | 'GW' | 'PS';
export type PowerImperialUnits = 'ft-lb/s' | 'hp' | 'BTU/s' | 'BTU/h' | 'BTU/d' | 'MBtu/s' | 'MBtu/h' | 'MBtu/d' | 'MMBtu/s' | 'MMBtu/h' | 'MMBtu/d';
declare const measure: TbMeasure<PowerUnits>;
export default measure;
