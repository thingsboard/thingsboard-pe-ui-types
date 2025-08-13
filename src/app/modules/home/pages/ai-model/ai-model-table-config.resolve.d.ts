import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { ActivatedRouteSnapshot } from '@angular/router';
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { AiModel } from '@shared/models/ai-model.models';
import { AiModelService } from '@core/http/ai-model.service';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import * as i0 from "@angular/core";
export declare class AiModelsTableConfigResolver {
    private datePipe;
    private aiModelService;
    private userPermissionsService;
    private translate;
    private dialog;
    private readonly config;
    constructor(datePipe: DatePipe, aiModelService: AiModelService, userPermissionsService: UserPermissionsService, translate: TranslateService, dialog: MatDialog);
    resolve(_route: ActivatedRouteSnapshot): EntityTableConfig<AiModel>;
    private configureCellActions;
    private editModel;
    private addModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<AiModelsTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AiModelsTableConfigResolver>;
}
