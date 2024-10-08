import { OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';
import { IAliasController } from '@core/api/widget-api.models';
import { CdkOverlayOrigin, Overlay } from '@angular/cdk/overlay';
import { TranslateService } from '@ngx-translate/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { FilterInfo } from '@shared/models/query/query.models';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class FiltersEditComponent implements OnInit, OnDestroy {
    private translate;
    private overlay;
    private breakpointObserver;
    private viewContainerRef;
    private dialog;
    filtersEditClass: string;
    aliasControllerValue: IAliasController;
    set aliasController(aliasController: IAliasController);
    get aliasController(): IAliasController;
    tooltipPosition: TooltipPosition;
    disabled: boolean;
    filtersEditPanelOrigin: CdkOverlayOrigin;
    displayValue: string;
    filtersInfo: {
        [filterId: string]: FilterInfo;
    };
    hasEditableFilters: boolean;
    private rxSubscriptions;
    constructor(translate: TranslateService, overlay: Overlay, breakpointObserver: BreakpointObserver, viewContainerRef: ViewContainerRef, dialog: MatDialog);
    private setupAliasController;
    ngOnInit(): void;
    ngOnDestroy(): void;
    openEditMode(): void;
    private _createFiltersEditPanelInjector;
    private updateFiltersInfo;
    static ɵfac: i0.ɵɵFactoryDeclaration<FiltersEditComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FiltersEditComponent, "tb-filters-edit", never, { "aliasController": { "alias": "aliasController"; "required": false; }; "tooltipPosition": { "alias": "tooltipPosition"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
