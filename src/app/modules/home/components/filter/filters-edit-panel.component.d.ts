import { InjectionToken } from '@angular/core';
import { IAliasController } from '@core/api/widget-api.models';
import { FilterInfo } from '@shared/models/query/query.models';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare const FILTER_EDIT_PANEL_DATA: InjectionToken<any>;
export interface FiltersEditPanelData {
    aliasController: IAliasController;
    filtersInfo: {
        [filterId: string]: FilterInfo;
    };
}
export declare class FiltersEditPanelComponent {
    data: FiltersEditPanelData;
    private dialog;
    filtersInfo: {
        [filterId: string]: FilterInfo;
    };
    constructor(data: FiltersEditPanelData, dialog: MatDialog);
    editFilter(filterId: string, filter: FilterInfo): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FiltersEditPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FiltersEditPanelComponent, "tb-filters-edit-panel", never, {}, {}, never, never, false, never>;
}
