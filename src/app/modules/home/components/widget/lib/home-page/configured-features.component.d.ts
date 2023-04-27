import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { AdminService } from '@core/http/admin.service';
import { FeaturesInfo } from '@shared/models/settings.models';
import { BreakpointObserver } from '@angular/cdk/layout';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class ConfiguredFeaturesComponent extends PageComponent implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    private cd;
    private adminService;
    private translate;
    private breakpointObserver;
    authUser: import("../../../../../../shared/public-api").AuthUser;
    featuresInfo: FeaturesInfo;
    rowHeight: string;
    gutterSize: string;
    colspan: number;
    private observeBreakpointSubscription;
    constructor(store: Store<AppState>, cd: ChangeDetectorRef, adminService: AdminService, translate: TranslateService, breakpointObserver: BreakpointObserver);
    ngOnInit(): void;
    ngOnDestroy(): void;
    featureTooltip(configured: boolean): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfiguredFeaturesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConfiguredFeaturesComponent, "tb-configured-features", never, {}, {}, never, never, false, never>;
}
