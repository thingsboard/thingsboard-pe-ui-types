import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AppState } from '@core/core.state';
import { IotHubApiService } from '@core/http/iot-hub-api.service';
import * as i0 from "@angular/core";
export declare class TbIotHubItemResolverComponent implements OnInit {
    private route;
    private router;
    private dialog;
    private store;
    private translate;
    private iotHubApi;
    constructor(route: ActivatedRoute, router: Router, dialog: MatDialog, store: Store<AppState>, translate: TranslateService, iotHubApi: IotHubApiService);
    ngOnInit(): void;
    private showMinTbVersionRequired;
    private handleResolved;
    private openOnTypePage;
    private failTo;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbIotHubItemResolverComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbIotHubItemResolverComponent, "tb-iot-hub-item-resolver", never, {}, {}, never, never, false, never>;
}
