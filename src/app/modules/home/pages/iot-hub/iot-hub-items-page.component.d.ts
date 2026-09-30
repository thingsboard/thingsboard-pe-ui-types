import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemType } from '@shared/models/iot-hub/iot-hub-item.models';
import { IotHubApiService } from '@core/http/iot-hub-api.service';
import { IotHubActionsService } from '@home/components/iot-hub/iot-hub-actions.service';
import * as i0 from "@angular/core";
interface ItemTypePageConfig {
    type: ItemType;
    titleKey: string;
    descriptionKey: string;
    image: string;
    routeSegment: string;
}
export declare class TbIotHubItemsPageComponent implements OnInit {
    private route;
    private router;
    private iotHubApiService;
    private iotHubActions;
    config: ItemTypePageConfig;
    installedItemsCount: number;
    private browse;
    constructor(route: ActivatedRoute, router: Router, iotHubApiService: IotHubApiService, iotHubActions: IotHubActionsService);
    ngOnInit(): void;
    goBack(): void;
    navigateToInstalledItems(): void;
    openSignup(): void;
    loadInstalledCount(): void;
    private maybeOpenDeepLinkedItem;
    private resolveInstalledItem;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbIotHubItemsPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbIotHubItemsPageComponent, "tb-iot-hub-items-page", never, {}, {}, never, never, false, never>;
}
export {};
