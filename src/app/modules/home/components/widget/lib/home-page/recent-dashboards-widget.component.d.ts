import { AfterViewInit, ChangeDetectorRef, OnDestroy, OnInit, QueryList } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Authority } from '@shared/models/authority.enum';
import { Observable } from 'rxjs';
import { WidgetContext } from '@home/models/widget-component.models';
import { AbstractUserDashboardInfo, LastVisitedDashboardInfo, UserDashboardsInfo } from '@shared/models/user-settings.models';
import { UserSettingsService } from '@core/http/user-settings.service';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { PageData } from '@shared/models/page/page-data';
import { PageLink } from '@shared/models/page/page-link';
import { MatSort } from '@angular/material/sort';
import { DashboardInfo } from '@shared/models/dashboard.models';
import { DashboardAutocompleteComponent } from '@shared/components/dashboard-autocomplete.component';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import * as i0 from "@angular/core";
export declare class RecentDashboardsWidgetComponent extends PageComponent implements OnInit, AfterViewInit, OnDestroy {
    protected store: Store<AppState>;
    private cd;
    private userPermissionsService;
    private userSettingService;
    ctx: WidgetContext;
    lastVisitedDashboardsSort: QueryList<MatSort>;
    starDashboardAutocomplete: DashboardAutocompleteComponent;
    authority: typeof Authority;
    userDashboardsInfo: UserDashboardsInfo;
    authUser: import("../../../../../../shared/public-api").AuthUser;
    toggleValue: 'last' | 'starred';
    lastVisitedDashboardsColumns: string[];
    lastVisitedDashboardsDataSource: LastVisitedDashboardsDataSource;
    lastVisitedDashboardsPageLink: PageLink;
    starredDashboardValue: any;
    dashboardsLink: string;
    hasDashboardsAccess: boolean;
    dirty: boolean;
    constructor(store: Store<AppState>, cd: ChangeDetectorRef, userPermissionsService: UserPermissionsService, userSettingService: UserSettingsService);
    ngOnInit(): void;
    reload(): void;
    toggleValueChange(value: 'last' | 'starred'): void;
    private initLastVisitedDashboardsDataSource;
    ngAfterViewInit(): void;
    updateLastVisitedDashboardsData(sort: MatSort): void;
    hasLastVisitedDashboards(): boolean;
    toggleDashboardStar(dashboard: AbstractUserDashboardInfo): void;
    onStarDashboard(dashboard: DashboardInfo): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecentDashboardsWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RecentDashboardsWidgetComponent, "tb-recent-dashboards-widget", never, { "ctx": "ctx"; }, {}, never, never, false, never>;
}
export declare class LastVisitedDashboardsDataSource implements DataSource<LastVisitedDashboardInfo> {
    private lastVisitedDashboards;
    private lastVisitedDashboardsSubject;
    private pageDataSubject;
    pageData$: Observable<PageData<LastVisitedDashboardInfo>>;
    constructor(lastVisitedDashboards: Array<LastVisitedDashboardInfo>);
    connect(collectionViewer: CollectionViewer): Observable<LastVisitedDashboardInfo[] | ReadonlyArray<LastVisitedDashboardInfo>>;
    disconnect(collectionViewer: CollectionViewer): void;
    loadData(pageLink: PageLink): void;
    isEmpty(): Observable<boolean>;
    total(): Observable<number>;
}