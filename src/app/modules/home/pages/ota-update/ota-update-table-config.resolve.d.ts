import { Router } from '@angular/router';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { OtaPackage, OtaPackageInfo } from '@shared/models/ota-package.models';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { OtaPackageService } from '@core/http/ota-package.service';
import { PageLink } from '@shared/models/page/page-link';
import { EntityAction } from '@home/models/entity/entity-component.models';
import { FileSizePipe } from '@shared/pipe/file-size.pipe';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import * as i0 from "@angular/core";
export declare class OtaUpdateTableConfigResolve {
    private translate;
    private datePipe;
    private otaPackageService;
    private userPermissionsService;
    private router;
    private fileSize;
    private readonly config;
    constructor(translate: TranslateService, datePipe: DatePipe, otaPackageService: OtaPackageService, userPermissionsService: UserPermissionsService, router: Router, fileSize: FileSizePipe);
    resolve(): EntityTableConfig<OtaPackage, PageLink, OtaPackageInfo>;
    private openOtaPackage;
    exportPackage($event: Event, otaPackageInfo: OtaPackageInfo): void;
    checksumText(entity: OtaPackageInfo): string;
    onPackageAction(action: EntityAction<OtaPackageInfo>): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<OtaUpdateTableConfigResolve, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OtaUpdateTableConfigResolve>;
}
