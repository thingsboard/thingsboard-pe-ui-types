export interface Unit {
    name: string;
    symbol: string;
    tags: string[];
}
export declare const units: Array<Unit>;
export declare const unitBySymbol: (symbol: string) => Unit;
export declare const searchUnits: (_units: Array<Unit>, searchText: string) => Array<Unit>;
