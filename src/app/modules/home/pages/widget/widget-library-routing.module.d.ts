import { Routes } from '@angular/router';
import { BreadCrumbLabelFunction } from '@shared/components/breadcrumb';
import { WidgetEditorComponent } from '@home/pages/widget/widget-editor.component';
import { WidgetInfo } from '@home/models/widget-component.models';
import { WidgetTypeDetails } from '@app/shared/models/widget.models';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export interface WidgetEditorData {
    widgetTypeDetails: WidgetTypeDetails;
    widget: WidgetInfo;
}
export declare const widgetsBundleWidgetsBreadcumbLabelFunction: BreadCrumbLabelFunction<any>;
export declare const widgetEditorBreadcumbLabelFunction: BreadCrumbLabelFunction<WidgetEditorComponent>;
export declare const widgetsLibraryRoutes: Routes;
export declare class WidgetLibraryRoutingModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetLibraryRoutingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<WidgetLibraryRoutingModule, never, [typeof i1.RouterModule], [typeof i1.RouterModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<WidgetLibraryRoutingModule>;
}
