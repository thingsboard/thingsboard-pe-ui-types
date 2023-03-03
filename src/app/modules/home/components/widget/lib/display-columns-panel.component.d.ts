import { InjectionToken } from '@angular/core';
import { DisplayColumn } from '@home/components/widget/lib/table-widget.models';
import * as i0 from "@angular/core";
export declare const DISPLAY_COLUMNS_PANEL_DATA: InjectionToken<any>;
export interface DisplayColumnsPanelData {
    columns: DisplayColumn[];
    columnsUpdated: (columns: DisplayColumn[]) => void;
}
export declare class DisplayColumnsPanelComponent {
    data: DisplayColumnsPanelData;
    columns: DisplayColumn[];
    constructor(data: DisplayColumnsPanelData);
    update(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DisplayColumnsPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DisplayColumnsPanelComponent, "tb-display-columns-panel", never, {}, {}, never, never, false, never>;
}
