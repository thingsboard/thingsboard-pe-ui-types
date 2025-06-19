import { TbMeasure } from '@shared/models/unit.models';
export type DynamicViscosityMetricUnits = 'Pa·s' | 'cP' | 'P' | 'N·s/m²' | 'dyn·s/cm²' | 'kg/(m·s)';
export type DynamicViscosityImperialUnits = 'lb/(ft·h)';
export type DynamicViscosityUnits = DynamicViscosityMetricUnits | DynamicViscosityImperialUnits;
declare const measure: TbMeasure<DynamicViscosityUnits>;
export default measure;
