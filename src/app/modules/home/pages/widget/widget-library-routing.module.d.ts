import { ActivatedRouteSnapshot, Resolve, Routes } from '@angular/router';
import { BreadCrumbLabelFunction } from '@shared/components/breadcrumb';
import { Observable } from 'rxjs';
import { WidgetsBundle } from '@shared/models/widgets-bundle.model';
import { WidgetService } from '@core/http/widget.service';
import { WidgetEditorComponent } from '@home/pages/widget/widget-editor.component';
import { WidgetInfo } from '@home/models/widget-component.models';
import { WidgetTypeDetails, WidgetTypeInfo } from '@app/shared/models/widget.models';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export interface WidgetEditorData {
    widgetTypeDetails: WidgetTypeDetails;
    widget: WidgetInfo;
}
export declare class WidgetsBundleResolver implements Resolve<WidgetsBundle> {
    private widgetsService;
    constructor(widgetsService: WidgetService);
    resolve(route: ActivatedRouteSnapshot): Observable<WidgetsBundle>;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetsBundleResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WidgetsBundleResolver>;
}
export declare class WidgetsBundleWidgetsResolver implements Resolve<Array<WidgetTypeInfo>> {
    private widgetsService;
    constructor(widgetsService: WidgetService);
    resolve(route: ActivatedRouteSnapshot): Observable<Array<WidgetTypeInfo>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetsBundleWidgetsResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WidgetsBundleWidgetsResolver>;
}
export declare class WidgetEditorDataResolver implements Resolve<WidgetEditorData> {
    private widgetsService;
    constructor(widgetsService: WidgetService);
    resolve(route: ActivatedRouteSnapshot): Observable<WidgetEditorData>;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetEditorDataResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WidgetEditorDataResolver>;
}
export declare const widgetsBundleWidgetsBreadcumbLabelFunction: BreadCrumbLabelFunction<any>;
export declare const widgetEditorBreadcumbLabelFunction: BreadCrumbLabelFunction<WidgetEditorComponent>;
export declare const widgetsLibraryRoutes: Routes;
export declare class WidgetLibraryRoutingModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetLibraryRoutingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<WidgetLibraryRoutingModule, never, [typeof i1.RouterModule], [typeof i1.RouterModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<WidgetLibraryRoutingModule>;
}
