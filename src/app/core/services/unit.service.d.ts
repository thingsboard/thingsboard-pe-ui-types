import { AllMeasures, AllMeasuresUnits, TbUnit, TbUnitConverter, TbUnitMapping, UnitInfo, UnitInfoGroupByMeasure, UnitSystem } from '@shared/models/unit.models';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class UnitService {
    private translate;
    private store;
    private currentUnitSystem;
    private converter;
    constructor(translate: TranslateService, store: Store<AppState>);
    getUnitSystem(): UnitSystem;
    setUnitSystem(unitSystem: UnitSystem): void;
    getUnits(measure?: AllMeasures, unitSystem?: UnitSystem): UnitInfo[];
    getUnitsGroupedByMeasure(measure?: AllMeasures, unitSystem?: UnitSystem, tagFilter?: string): UnitInfoGroupByMeasure<AllMeasures>;
    getUnitInfo(symbol: AllMeasuresUnits | string): UnitInfo;
    getDefaultUnit(measure: AllMeasures, unitSystem: UnitSystem): AllMeasuresUnits;
    geUnitConverter(unit: TbUnit): TbUnitConverter;
    geUnitConverter(from: string, to: string): TbUnitConverter;
    getTargetUnitSymbol(unit: TbUnitMapping | string): string;
    convertUnitValue(value: number, unit: TbUnit): number;
    convertUnitValue(value: number, from: string, to: string): number;
    private getUnitSystemByTimezone;
    static ɵfac: i0.ɵɵFactoryDeclaration<UnitService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UnitService>;
}
