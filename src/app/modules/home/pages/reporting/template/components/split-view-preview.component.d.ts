import { AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { AbstractReportComponentPreviewContainer, IReportComponent } from '@home/pages/reporting/template/components/report-component.component';
import { ReportComponentConfig, SplitViewReportComponentConfig } from '@shared/models/report-component.models';
import { ReportDropBlockComponent } from '@home/pages/reporting/template/components/report-drop-block.component';
import { alignment } from '@shared/models/widget-settings.models';
import * as i0 from "@angular/core";
export declare class SplitViewPreviewComponent extends AbstractReportComponentPreviewContainer<SplitViewReportComponentConfig> implements AfterViewInit, OnDestroy {
    splitContainerEl: import("@angular/core").Signal<ElementRef<any>>;
    leftView: import("@angular/core").Signal<ReportDropBlockComponent>;
    rightView: import("@angular/core").Signal<ReportDropBlockComponent>;
    private splitContainerResize$;
    leftWidth: string;
    centerWidth: number;
    rightWidth: string;
    leftVerticalAlignment: alignment;
    rightVerticalAlignment: alignment;
    onComponentUpdated(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    childComponentEdit(leftElseRight: boolean): void;
    childComponentRemoved(component: ReportComponentConfig, leftElseRight: boolean): void;
    childComponentAdded(component: ReportComponentConfig, leftElseRight: boolean): void;
    getAllChildReportComponentConfigs(): ReportComponentConfig[];
    protected getAllChildReportComponents(): IReportComponent[];
    protected findChildReportComponent(reportComponent: ReportComponentConfig): IReportComponent;
    static ɵfac: i0.ɵɵFactoryDeclaration<SplitViewPreviewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SplitViewPreviewComponent, "tb-split-view-preview", never, {}, {}, never, never, false, never>;
}
