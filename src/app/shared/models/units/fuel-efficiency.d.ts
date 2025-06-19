import { TbMeasure } from '@shared/models/unit.models';
export type FuelEfficiencyMetricUnits = 'km/L' | 'L/100km';
export type FuelEfficiencyImperialUnits = 'mpg' | 'gal/mi';
export type FuelEfficiencyUnits = FuelEfficiencyMetricUnits | FuelEfficiencyImperialUnits;
declare const measure: TbMeasure<FuelEfficiencyUnits>;
export default measure;
