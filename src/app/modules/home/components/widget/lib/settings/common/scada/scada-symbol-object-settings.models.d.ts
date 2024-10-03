import { ScadaSymbolBehavior, ScadaSymbolProperty } from '@home/components/widget/lib/scada/scada-symbol.models';
export interface ScadaSymbolBehaviorGroup {
    title?: string;
    behaviors: ScadaSymbolBehavior[];
}
export interface ScadaSymbolPropertyRow {
    label: string;
    properties: ScadaSymbolProperty[];
    switch?: ScadaSymbolProperty;
    rowClass?: string;
}
export declare const toBehaviorGroups: (behaviors: ScadaSymbolBehavior[]) => ScadaSymbolBehaviorGroup[];
export declare const toPropertyRows: (properties: ScadaSymbolProperty[]) => ScadaSymbolPropertyRow[];
