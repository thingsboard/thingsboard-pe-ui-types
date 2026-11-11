import { OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatOptionSelectionChange } from '@angular/material/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MpItemVersionView } from '@shared/models/iot-hub/iot-hub-version.models';
import { ItemType } from '@shared/models/iot-hub/iot-hub-item.models';
import { IotHubInstalledItem } from '@shared/models/iot-hub/iot-hub-installed-item.models';
import { IotHubApiService } from '@core/http/iot-hub-api.service';
import { TranslateService } from '@ngx-translate/core';
import { IotHubActionsService } from '@home/components/iot-hub/iot-hub-actions.service';
import * as i0 from "@angular/core";
interface CategoryCard {
    type: ItemType;
    titleKey: string;
    icon: string;
    cssClass: string;
    image: string;
}
interface HeroTypeConfig {
    type: ItemType;
    labelKey: string;
    color: string;
    icon: string;
}
export declare class TbIotHubHomeComponent implements OnInit, OnDestroy {
    private router;
    private iotHubApiService;
    private iotHubActions;
    private translate;
    private breakpointObserver;
    readonly ItemType: typeof ItemType;
    readonly isCompactType: (type?: string | null) => boolean;
    searchText: string;
    searchResults: MpItemVersionView[];
    /** Everything the search matched, for the footer's "See all N results". */
    searchTotal: number;
    searchLoaded: boolean;
    searchLoading: boolean;
    searchFailed: boolean;
    searchAutoTrigger: MatAutocompleteTrigger;
    searchInputRef: ElementRef;
    private searchSubject;
    private searchSubscription;
    heroTypes: HeroTypeConfig[];
    activeHeroType: HeroTypeConfig;
    heroIconsReady: boolean;
    private heroInterval;
    categoryCards: CategoryCard[];
    popularWidgets: MpItemVersionView[];
    popularSolutionTemplates: MpItemVersionView[];
    popularCalcFields: MpItemVersionView[];
    popularAlarmRules: MpItemVersionView[];
    popularRuleChains: MpItemVersionView[];
    popularDevices: MpItemVersionView[];
    installedWidgets: IotHubInstalledItem[];
    installedSolutionTemplates: IotHubInstalledItem[];
    installedDeviceCounts: Record<string, number>;
    installedCalcFieldCounts: Record<string, number>;
    installedAlarmRuleCounts: Record<string, number>;
    installedRuleChainCounts: Record<string, number>;
    installedItemsCount: number;
    isLoading: boolean;
    hasError: boolean;
    private retryTimer;
    bigCardCount: number;
    compactCardCount: number;
    private breakpointSubscription;
    constructor(router: Router, iotHubApiService: IotHubApiService, iotHubActions: IotHubActionsService, translate: TranslateService, breakpointObserver: BreakpointObserver);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onHeroTypeHover(config: HeroTypeConfig): void;
    onHeroTypeLeave(): void;
    private startHeroCycle;
    private stopHeroCycle;
    onSearchInput(): void;
    onSearchFocus(): void;
    searchDisplayFn: (value: any) => string;
    clearSearch(): void;
    onRowSelected(event: MatOptionSelectionChange, item: MpItemVersionView): void;
    onFooterSelected(event: MatOptionSelectionChange): void;
    /**
     * Enter in the field opens the search page - unless the autocomplete has just used this press
     * to select a highlighted row, which it marks with preventDefault before this handler runs.
     */
    onSearchEnter(event: KeyboardEvent): void;
    seeAllResults(): void;
    getCompactIcon(item: MpItemVersionView): string;
    getItemImage(item: MpItemVersionView): string | null;
    getItemTypeIcon(type: ItemType): string;
    getItemTypeColor(type: ItemType): string;
    getItemTypeLabel(type: ItemType): string;
    navigateToBrowse(type: ItemType): void;
    hasAnyPopularItems(): boolean;
    private getTypeRoute;
    navigateToInstalledItems(): void;
    openItemDetail(item: MpItemVersionView): void;
    private reloadInstalledItems;
    private findInstalledItem;
    findInstalledItemsCount(item: MpItemVersionView): number;
    installItem(item: MpItemVersionView): void;
    updateItem(item: MpItemVersionView): void;
    navigateToCreator(creatorId: string): void;
    getInstalledWidget(item: MpItemVersionView): IotHubInstalledItem | undefined;
    getInstalledSolutionTemplate(item: MpItemVersionView): IotHubInstalledItem | undefined;
    deleteInstalledItem(item: MpItemVersionView): void;
    openSignup(): void;
    private updateCardCounts;
    retryLoadPopularItems(): void;
    private loadPopularItems;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbIotHubHomeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbIotHubHomeComponent, "tb-iot-hub-home", never, {}, {}, never, never, false, never>;
}
export {};
