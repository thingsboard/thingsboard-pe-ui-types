import { TbMeasure } from '@shared/models/unit.models';
export type EnergyUnits = EnergyMetricUnits | EnergyImperialUnits;
export type EnergyMetricUnits = 'Wm' | 'Wh' | 'mWh' | 'kWh' | 'MWh' | 'GWh' | 'μJ' | 'mJ' | 'J' | 'kJ' | 'MJ' | 'GJ' | 'eV';
export type EnergyImperialUnits = 'kcal' | 'cal' | 'Cal' | 'BTU' | 'MBtu' | 'MMBtu' | 'ft·lb' | 'thm';
declare const measure: TbMeasure<EnergyUnits>;
export default measure;
