import { TbMeasure } from '@shared/models/unit.models';
export type AreaMetricUnits = 'mm²' | 'cm²' | 'm²' | 'a' | 'ha' | 'km²' | 'barn';
export type AreaImperialUnits = 'in²' | 'yd²' | 'ft²' | 'ac' | 'ml²' | 'cin';
export type AreaUnits = AreaMetricUnits | AreaImperialUnits;
declare const measure: TbMeasure<AreaUnits>;
export default measure;
