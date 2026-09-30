import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Direction } from '@shared/models/page/sort-order';
import { MpItemVersionView } from '@shared/models/iot-hub/iot-hub-version.models';
import { ItemType, FilterParamInfo } from '@shared/models/iot-hub/iot-hub-item.models';
import { IotHubInstalledItem } from '@shared/models/iot-hub/iot-hub-installed-item.models';
import { IotHubApiService } from '@core/http/iot-hub-api.service';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IotHubActionsService } from '@home/components/iot-hub/iot-hub-actions.service';
import { IotHubFilterGroup } from '@home/components/iot-hub/iot-hub-utils';
import * as i0 from "@angular/core";
interface SortOption {
    value: string;
    label: string;
    direction: Direction;
}
export declare class TbIotHubBrowseComponent implements OnInit, AfterViewInit, OnDestroy {
    private iotHubApiService;
    private iotHubActions;
    private translate;
    private router;
    private route;
    private zone;
    private static typeTabLabel;
    readonly ItemType: typeof ItemType;
    creatorId: string;
    embedded: boolean;
    hideTabs: boolean;
    mode: 'default' | 'add';
    fixedSubType: string;
    addItem: EventEmitter<MpItemVersionView>;
    /**
     * Fired whenever an install, update or delete changed what this tenant has installed, so a host
     * page showing its own installed-items counter can refresh it instead of waiting for a reload.
     */
    installedItemsChanged: EventEmitter<void>;
    set activeType(value: ItemType);
    get activeType(): ItemType;
    get isCompactType(): boolean;
    get searchPlaceholderKey(): string;
    items: MpItemVersionView[];
    totalElements: number;
    pageSize: number;
    pageIndex: number;
    isLoading: boolean;
    hasError: boolean;
    filterDrawerOpened: boolean;
    private retryTimer;
    textSearch: string;
    _activeType: ItemType;
    cardGridProbe: ElementRef<HTMLElement>;
    probeCols: number;
    get cols(): number;
    get pageSizeOptions(): number[];
    private resizeObserver?;
    private resize$;
    activeCategories: Set<string>;
    activeUseCases: Set<string>;
    activeCfTypes: Set<string>;
    activeWidgetTypes: Set<string>;
    activeRuleChainTypes: Set<string>;
    activeConnectivity: Set<string>;
    activeHardwareTypes: Set<string>;
    activeVendors: Set<string>;
    sortOptions: SortOption[];
    typeTabs: {
        type: ItemType;
        label: string;
    }[];
    selectedSortIndex: number;
    subtypeOptions: FilterParamInfo[];
    categoryOptions: FilterParamInfo[];
    useCaseOptions: FilterParamInfo[];
    vendorOptions: FilterParamInfo[];
    hardwareTypeOptions: FilterParamInfo[];
    connectivityGroups: {
        group: string;
        values: FilterParamInfo[];
    }[];
    filterSearch: Record<string, string>;
    filterItemsHovered: boolean;
    installedWidgets: IotHubInstalledItem[];
    installedSolutionTemplates: IotHubInstalledItem[];
    installedItemCounts: Record<string, number>;
    private searchSubject;
    private destroy$;
    constructor(iotHubApiService: IotHubApiService, iotHubActions: IotHubActionsService, translate: TranslateService, router: Router, route: ActivatedRoute, zone: NgZone);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private measureProbeCols;
    private adjustPageSize;
    private handleResize;
    onSearchChange(value: string): void;
    onTypeTabChange(type: ItemType): void;
    isSubtypeActive(key: string): boolean;
    isCategoryActive(key: string): boolean;
    isUseCaseActive(key: string): boolean;
    onCategoryToggle(category: string): void;
    onSortChange(index: number): void;
    onPageChange(event: {
        pageIndex: number;
        pageSize: number;
    }): void;
    getTotalPages(): number;
    getPageNumbers(): number[];
    goToPage(page: number): void;
    onPageSizeChange(size: number): void;
    onUseCaseToggle(useCase: string): void;
    onConnectivityToggle(value: string): void;
    isConnectivityActive(value: string): boolean;
    onHardwareTypeToggle(value: string): void;
    isHardwareTypeActive(value: string): boolean;
    onVendorToggle(vendor: string): void;
    isVendorActive(vendor: string): boolean;
    getActiveVendorsArray(): string[];
    getActiveConnectivityArray(): string[];
    getActiveHardwareTypesArray(): string[];
    getActiveSubtypes(): Set<string>;
    onSubtypeToggle(subtype: string): void;
    getActiveSubtypesArray(): string[];
    getActiveCategoriesArray(): string[];
    getActiveUseCasesArray(): string[];
    getFilteredItems(items: FilterParamInfo[], searchKey: string): FilterParamInfo[];
    getGroupedFilterItems(items: FilterParamInfo[], searchKey: string): IotHubFilterGroup[];
    getFilteredConnectivityGroups(searchKey: string): {
        group: string;
        values: FilterParamInfo[];
    }[];
    get allConnectivityCount(): number;
    getSubtypeLabel(key: string): string;
    clearAllFilters(): void;
    private clearActiveFilterSets;
    get activeFilterCount(): number;
    hasActiveDropdownFilters(): boolean;
    hasActiveFilters(): boolean;
    getTitle(): string;
    getInstalledItem(item: MpItemVersionView): IotHubInstalledItem | undefined;
    getInstalledItemsCount(item: MpItemVersionView): number;
    openItemDetail(item: MpItemVersionView): void;
    onItemAdd(item: MpItemVersionView): void;
    installItem(item: MpItemVersionView): void;
    updateItem(item: MpItemVersionView): void;
    deleteInstalledItem(item: MpItemVersionView): void;
    openInstallGuide(item: MpItemVersionView): void;
    navigateToCreator(creatorId: string): void;
    private loadInstalledWidgets;
    private loadInstalledItemCounts;
    private loadInstalledSolutionTemplates;
    /**
     * Re-reads what is installed for the active type and announces the change. Public so a host page
     * that opens the item detail dialog itself can refresh this grid through the same path.
     */
    reloadInstalledItems(): void;
    private loadFilterInfo;
    retryLoadItems(): void;
    loadItems(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbIotHubBrowseComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbIotHubBrowseComponent, "tb-iot-hub-browse", never, { "creatorId": { "alias": "creatorId"; "required": false; }; "embedded": { "alias": "embedded"; "required": false; }; "hideTabs": { "alias": "hideTabs"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "fixedSubType": { "alias": "fixedSubType"; "required": false; }; "activeType": { "alias": "activeType"; "required": false; }; }, { "addItem": "addItem"; "installedItemsChanged": "installedItemsChanged"; }, never, never, false, never>;
}
export {};
