import { ResourcesService } from '@core/services/resources.service';
import { Observable } from 'rxjs';
export interface Unit {
    name: string;
    symbol: string;
    tags: string[];
}
export declare enum UnitsType {
    capacity = "capacity"
}
export declare enum Units {
    percent = "%",
    liters = "L"
}
export declare const unitBySymbol: (_units: Array<Unit>, symbol: string) => Unit;
export declare const searchUnits: (_units: Array<Unit>, searchText: string) => Array<Unit>;
export declare const getUnits: (resourcesService: ResourcesService) => Observable<Array<Unit>>;
