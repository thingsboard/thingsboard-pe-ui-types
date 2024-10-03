import { ResolveFn } from '@angular/router';
import { MailTemplatesSettings } from '@shared/models/settings.models';
import { BreadCrumbLabelFunction } from '@shared/components/breadcrumb';
import { ScadaSymbolComponent } from '@home/pages/scada-symbol/scada-symbol.component';
import { ScadaSymbolData } from '@home/pages/scada-symbol/scada-symbol-editor.models';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export declare const mailTemplateSettingsResolver: ResolveFn<MailTemplatesSettings>;
export declare const scadaSymbolResolver: ResolveFn<ScadaSymbolData>;
export declare const scadaSymbolBreadcumbLabelFunction: BreadCrumbLabelFunction<ScadaSymbolComponent>;
export declare class AdminRoutingModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<AdminRoutingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<AdminRoutingModule, never, [typeof i1.RouterModule], [typeof i1.RouterModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<AdminRoutingModule>;
}
