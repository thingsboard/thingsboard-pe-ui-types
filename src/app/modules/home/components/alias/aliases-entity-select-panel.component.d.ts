import { InjectionToken } from '@angular/core';
import { AliasInfo, IAliasController } from '@core/api/widget-api.models';
import { EntityInfo } from '@shared/models/entity.models';
import * as i0 from "@angular/core";
export declare const ALIASES_ENTITY_SELECT_PANEL_DATA: InjectionToken<any>;
export interface AliasesEntitySelectPanelData {
    aliasController: IAliasController;
    entityAliasesInfo: {
        [aliasId: string]: AliasInfo;
    };
}
export declare class AliasesEntitySelectPanelComponent {
    data: AliasesEntitySelectPanelData;
    entityAliasesInfo: {
        [aliasId: string]: AliasInfo;
    };
    constructor(data: AliasesEntitySelectPanelData);
    currentAliasEntityChanged(aliasId: string, selected: EntityInfo | null): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AliasesEntitySelectPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AliasesEntitySelectPanelComponent, "tb-aliases-entity-select-panel", never, {}, {}, never, never, false, never>;
}
