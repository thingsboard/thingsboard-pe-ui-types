import { OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreatorView } from '@shared/models/iot-hub/iot-hub-creator.models';
import { IotHubApiService } from '@core/http/iot-hub-api.service';
import * as i0 from "@angular/core";
export declare class TbIotHubCreatorProfileComponent implements OnInit, OnDestroy {
    private route;
    private router;
    private iotHubApiService;
    creator: CreatorView;
    creatorId: string;
    isLoading: boolean;
    hasError: boolean;
    private retryTimer;
    private destroy$;
    constructor(route: ActivatedRoute, router: Router, iotHubApiService: IotHubApiService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getAvatarUrl(): string | null;
    getWebsiteLabel(): string;
    goBack(): void;
    retryLoadCreator(): void;
    private loadCreator;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbIotHubCreatorProfileComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbIotHubCreatorProfileComponent, "tb-iot-hub-creator-profile", never, {}, {}, never, never, false, never>;
}
