import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HomeDashboard } from '@shared/models/dashboard.models';
import { DashboardService } from '@core/http/dashboard.service';
import * as i0 from "@angular/core";
export declare class IFrameViewComponent implements OnInit, OnDestroy {
    private sanitizer;
    private route;
    private dashboardService;
    width: string;
    height: string;
    safeIframeUrl: SafeResourceUrl;
    dashboard: HomeDashboard;
    loading: boolean;
    private sub;
    constructor(sanitizer: DomSanitizer, route: ActivatedRoute, dashboardService: DashboardService);
    ngOnInit(): void;
    private isDashboard;
    private resolveDashboard;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IFrameViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IFrameViewComponent, "tb-iframe-view", never, {}, {}, never, never, false>;
}
