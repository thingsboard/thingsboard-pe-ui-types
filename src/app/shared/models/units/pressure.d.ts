import { TbMeasure } from '@shared/models/unit.models';
export type PressureUnits = PressureMetricUnits | PressureImperialUnits;
export type PressureMetricUnits = 'Pa' | 'kPa' | 'MPa' | 'GPa' | 'hPa' | 'mb' | 'mbar' | 'bar' | 'kbar' | 'Torr' | 'mmHg' | 'atm' | 'Pa/m²' | 'N/mm²' | 'N/m²' | 'kN/m²' | 'kgf/m²' | 'Pa/cm²';
export type PressureImperialUnits = 'psi' | 'ksi' | 'inHg' | 'psi/in²' | 'tonf/in²';
declare const measure: TbMeasure<PressureUnits>;
export default measure;
