import { ScadaSymbolBehavior } from '@home/components/widget/lib/scada/scada-symbol.models';
export interface ScadaSymbolBehaviorGroup {
    title?: string;
    behaviors: ScadaSymbolBehavior[];
}
export declare const toBehaviorGroups: (behaviors: ScadaSymbolBehavior[]) => ScadaSymbolBehaviorGroup[];
