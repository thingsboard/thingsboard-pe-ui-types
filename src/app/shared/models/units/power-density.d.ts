import { TbMeasure } from '@shared/models/unit.models';
export type PowerDensityMetricUnits = 'mW/cm²' | 'W/cm²' | 'kW/cm²' | 'mW/m²' | 'W/m²' | 'kW/m²';
export type PowerDensityImperialUnits = 'W/in²' | 'kW/in²';
export type PowerDensityUnits = PowerDensityMetricUnits | PowerDensityImperialUnits;
declare const measure: TbMeasure<PowerDensityUnits>;
export default measure;
