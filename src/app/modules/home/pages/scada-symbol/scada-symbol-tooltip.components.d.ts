import { ViewContainerRef } from '@angular/core';
import { ScadaSymbolElement } from '@home/pages/scada-symbol/scada-symbol-editor.models';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@shared/shared.module";
export declare class ScadaSymbolTooltipComponentsModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ScadaSymbolTooltipComponentsModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ScadaSymbolTooltipComponentsModule, [typeof ScadaSymbolAddTagPanelComponent, typeof ScadaSymbolTagInputPanelComponent, typeof ScadaSymbolTagPanelComponent, typeof ScadaSymbolRemoveTagConfirmComponent, typeof ScadaSymbolTagSettingsComponent], [typeof i1.CommonModule, typeof i2.SharedModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ScadaSymbolTooltipComponentsModule>;
}
export declare const setupAddTagPanelTooltip: (symbolElement: ScadaSymbolElement, container: ViewContainerRef) => void;
export declare const setupTagPanelTooltip: (symbolElement: ScadaSymbolElement, container: ViewContainerRef) => void;
