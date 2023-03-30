import { DeviceInfo } from '@shared/models/device.models';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { UtilsService } from '@core/services/utils.service';
import { EntityGroupStateConfigFactory, EntityGroupStateInfo, GroupEntityTableConfig } from '@home/models/group/group-entities-table-config.models';
import { DeviceService } from '@core/http/device.service';
import { BroadcastService } from '@core/services/broadcast.service';
import { EntityAction } from '@home/models/entity/entity-component.models';
import { MatDialog } from '@angular/material/dialog';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { EntityGroupParams, ShortEntityView } from '@shared/models/entity-group.models';
import { HomeDialogsService } from '@home/dialogs/home-dialogs.service';
import { GroupConfigTableConfigService } from '@home/components/group/group-config-table-config.service';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class DeviceGroupConfigFactory implements EntityGroupStateConfigFactory<DeviceInfo> {
    private groupConfigTableConfigService;
    private userPermissionsService;
    private translate;
    private utils;
    private dialog;
    private homeDialogs;
    private deviceService;
    private router;
    private broadcast;
    private window;
    constructor(groupConfigTableConfigService: GroupConfigTableConfigService<DeviceInfo>, userPermissionsService: UserPermissionsService, translate: TranslateService, utils: UtilsService, dialog: MatDialog, homeDialogs: HomeDialogsService, deviceService: DeviceService, router: Router, broadcast: BroadcastService, window: Window);
    createConfig(params: EntityGroupParams, entityGroup: EntityGroupStateInfo<DeviceInfo>): Observable<GroupEntityTableConfig<DeviceInfo>>;
    deviceWizard(config: GroupEntityTableConfig<DeviceInfo>): Observable<DeviceInfo>;
    importDevices($event: Event, config: GroupEntityTableConfig<DeviceInfo>): void;
    private openDevice;
    manageCredentials($event: Event, device: DeviceInfo | ShortEntityView, isReadOnly: boolean, config: GroupEntityTableConfig<DeviceInfo>): void;
    manageOwnerAndGroups($event: Event, device: DeviceInfo, config: GroupEntityTableConfig<DeviceInfo>): void;
    onDeviceAction(action: EntityAction<DeviceInfo>, config: GroupEntityTableConfig<DeviceInfo>, params: EntityGroupParams): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceGroupConfigFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DeviceGroupConfigFactory>;
}
