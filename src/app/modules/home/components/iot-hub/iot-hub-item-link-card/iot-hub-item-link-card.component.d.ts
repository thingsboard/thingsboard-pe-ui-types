import { OnInit } from '@angular/core';
import { IotHubApiService } from '@core/http/iot-hub-api.service';
import { MpItemVersionView } from '@shared/models/iot-hub/iot-hub-version.models';
import * as i0 from "@angular/core";
type CardState = 'loading' | 'loaded' | 'unavailable';
export declare class TbIotHubItemLinkCardComponent implements OnInit {
    private iotHubApiService;
    itemId: string;
    state: CardState;
    item: MpItemVersionView | null;
    constructor(iotHubApiService: IotHubApiService);
    ngOnInit(): void;
    isCompact(): boolean;
    getImageUrl(): string | null;
    getCompactIcon(): string;
    getTypeIcon(): string;
    getCompactColor(): string;
    getHref(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbIotHubItemLinkCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbIotHubItemLinkCardComponent, "tb-iot-hub-item-link-card", never, { "itemId": { "alias": "itemId"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
