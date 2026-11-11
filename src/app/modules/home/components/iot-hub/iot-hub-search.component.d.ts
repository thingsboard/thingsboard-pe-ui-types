import { OnInit, OnDestroy, EventEmitter, ElementRef, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MpItemVersionView } from '@shared/models/iot-hub/iot-hub-version.models';
import { IotHubInstalledItem } from '@shared/models/iot-hub/iot-hub-installed-item.models';
import { IotHubApiService } from '@core/http/iot-hub-api.service';
import { IotHubActionsService } from './iot-hub-actions.service';
import * as i0 from "@angular/core";
export declare class TbIotHubSearchComponent implements OnInit, OnDestroy {
    private router;
    private translate;
    private iotHubApiService;
    private iotHubActions;
    private zone;
    searchText: string;
    creatorId: string;
    showCreator: boolean;
    /** Off on the creator profile, which is already scoped to one creator. */
    showFilters: boolean;
    searchTextChange: EventEmitter<string>;
    get searchPlaceholderKey(): string;
    results: MpItemVersionView[];
    totalElements: number;
    isLoading: boolean;
    hasError: boolean;
    private retryTimer;
    pageIndex: number;
    /** A hidden element carrying the real grid's classes, so the column count comes from the CSS. */
    cardGridProbe: ElementRef<HTMLElement>;
    cols: number;
    pageSize: number;
    private resizeObserver?;
    private resizeSubject;
    private resizeSubscription?;
    get pageSizeOptions(): number[];
    /** Narrow widths only: the facet panel is a block above the results, not a sidebar. */
    filtersOpen: boolean;
    readonly typeOptions: string[];
    categoryOptions: string[];
    useCaseOptions: string[];
    activeTypes: Set<string>;
    activeCategories: Set<string>;
    activeUseCases: Set<string>;
    readonly sortOptions: import("@shared/models/iot-hub/iot-hub-item.models").SortOption[];
    selectedSortIndex: number;
    installedWidgets: IotHubInstalledItem[];
    installedSolutionTemplates: IotHubInstalledItem[];
    installedDeviceCounts: Record<string, number>;
    installedCalcFieldCounts: Record<string, number>;
    installedAlarmRuleCounts: Record<string, number>;
    installedRuleChainCounts: Record<string, number>;
    private searchSubject;
    private searchSubscription;
    /** Every reload goes through here, so a newer request cancels an older one still in flight. */
    private loadSubject;
    private loadSubscription;
    constructor(router: Router, translate: TranslateService, iotHubApiService: IotHubApiService, iotHubActions: IotHubActionsService, zone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getTypeLabel: (key: string) => string;
    onTypeToggle(key: string): void;
    onCategoryToggle(key: string): void;
    onUseCaseToggle(key: string): void;
    get activeFilterCount(): number;
    clearFilters(): void;
    /** A new Set rather than a mutation, so the facet list's @Input sees the change. */
    private toggled;
    private reloadFromFirstPage;
    /**
     * filterInfo answers per item type, so the six answers are merged. Each request has its own
     * catchError: one type failing costs that type's options, not the panel.
     */
    private loadFilterInfo;
    /** Keys that have items in any of the per-type answers, sorted. */
    private mergeFacet;
    private observeGridWidth;
    private measureCols;
    onSearchInput(): void;
    clearSearch(): void;
    onSearchEnter(): void;
    onSortChange(index: number): void;
    get totalPages(): number;
    getPageNumbers(): number[];
    goToPage(page: number): void;
    onPageSizeChange(size: number): void;
    getInstalledItem(item: MpItemVersionView): IotHubInstalledItem | undefined;
    getInstalledItemsCount(item: MpItemVersionView): number;
    openItemDetail(item: MpItemVersionView): void;
    installItem(item: MpItemVersionView): void;
    updateItem(item: MpItemVersionView): void;
    deleteInstalledItem(item: MpItemVersionView): void;
    navigateToCreator(creatorId: string): void;
    retryLoadResults(): void;
    private loadResults;
    /** A null result is a failed request. */
    private applyResult;
    private fetchResults;
    private loadInstalledItems;
    private reloadInstalledItems;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbIotHubSearchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbIotHubSearchComponent, "tb-iot-hub-search", never, { "searchText": { "alias": "searchText"; "required": false; }; "creatorId": { "alias": "creatorId"; "required": false; }; "showCreator": { "alias": "showCreator"; "required": false; }; "showFilters": { "alias": "showFilters"; "required": false; }; }, { "searchTextChange": "searchTextChange"; }, never, ["*"], false, never>;
}
