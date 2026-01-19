import { InjectionToken } from '@angular/core';
import { SelectableColumnsPipe } from '@shared/public-api';
import { DisplayColumn } from '@home/components/widget/lib/table-widget.models';
import * as i0 from "@angular/core";
export declare const DISPLAY_COLUMNS_PANEL_DATA: InjectionToken<any>;
export interface DisplayColumnsPanelData {
    columns: DisplayColumn[];
    columnsUpdated: (columns: DisplayColumn[]) => void;
}
export declare class DisplayColumnsPanelComponent {
    data: DisplayColumnsPanelData;
    private selectableColumnsPipe;
    columns: DisplayColumn[];
    constructor(data: DisplayColumnsPanelData, selectableColumnsPipe: SelectableColumnsPipe);
    get allColumnsVisible(): boolean;
    get someColumnsVisible(): boolean;
    toggleAllColumns(event: any): void;
    update(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DisplayColumnsPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DisplayColumnsPanelComponent, "tb-display-columns-panel", never, {}, {}, never, never, false, never>;
}
