import { ChangeDetectorRef, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';
import { AliasInfo, IAliasController } from '@core/api/widget-api.models';
import { CdkOverlayOrigin, Overlay } from '@angular/cdk/overlay';
import { TranslateService } from '@ngx-translate/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import * as i0 from "@angular/core";
export declare class AliasesEntitySelectComponent implements OnInit, OnDestroy {
    private translate;
    private overlay;
    private cd;
    private breakpointObserver;
    private viewContainerRef;
    aliasesEntitySelectClass: string;
    aliasControllerValue: IAliasController;
    set aliasController(aliasController: IAliasController);
    get aliasController(): IAliasController;
    tooltipPosition: TooltipPosition;
    disabled: boolean;
    aliasEntitySelectPanelOrigin: CdkOverlayOrigin;
    displayValue: string;
    entityAliasesInfo: {
        [aliasId: string]: AliasInfo;
    };
    hasSelectableAliasEntities: boolean;
    private rxSubscriptions;
    constructor(translate: TranslateService, overlay: Overlay, cd: ChangeDetectorRef, breakpointObserver: BreakpointObserver, viewContainerRef: ViewContainerRef);
    private setupAliasController;
    ngOnInit(): void;
    ngOnDestroy(): void;
    openEditMode(): void;
    private _createAliasesEntitySelectPanelInjector;
    private updateDisplayValue;
    private updateEntityAliasesInfo;
    static ɵfac: i0.ɵɵFactoryDeclaration<AliasesEntitySelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AliasesEntitySelectComponent, "tb-aliases-entity-select", never, { "aliasController": { "alias": "aliasController"; "required": false; }; "tooltipPosition": { "alias": "tooltipPosition"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
