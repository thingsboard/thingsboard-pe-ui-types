import { ElementRef, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { TrendzSummary, TrendzViewType } from '@shared/models/trendz-analytics.models';
import { TrendzService } from '@app/core/http/trendz.service';
import { ActivatedRoute } from '@angular/router';
import { TbAnchorComponent } from '@shared/components/tb-anchor.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DynamicMatDialog } from '@app/shared/components/dialog/dynamic/dynamic-dialog';
import * as i0 from "@angular/core";
export declare class TrendzAnalyticsComponent extends PageComponent implements OnInit {
    protected store: Store<AppState>;
    private trendzService;
    private route;
    private dialog;
    private elementRef;
    replaceComponentAnchor: TbAnchorComponent;
    authState: import("../../../../core/public-api").AuthState;
    trendzEnabled: boolean;
    trendzSummary: TrendzSummary;
    trendzSynced: any;
    trendzViewTypes: {
        key: string;
        value: TrendzViewType;
    }[];
    getMetricLink: (metric: import("@shared/models/trendz-analytics.models").MetricSummaryItem) => string;
    constructor(store: Store<AppState>, trendzService: TrendzService, route: ActivatedRoute, dialog: DynamicMatDialog, elementRef: ElementRef);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TrendzAnalyticsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TrendzAnalyticsComponent, "tb-trendz-analytics", never, {}, {}, never, never, false, never>;
}
