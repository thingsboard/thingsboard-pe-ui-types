import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { RuleChain, RuleChainParams } from '@shared/models/rule-chain.models';
import { RuleChainService } from '@core/http/rule-chain.service';
import { DialogService } from '@core/services/dialog.service';
import { ImportExportService } from '@shared/import-export/import-export.service';
import { ItemBufferService } from '@core/services/item-buffer.service';
import { EdgeService } from '@core/http/edge.service';
import { MatDialog } from '@angular/material/dialog';
import { UtilsService } from '@core/services/utils.service';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { HomeDialogsService } from '@home/dialogs/home-dialogs.service';
import * as i0 from "@angular/core";
export declare class RuleChainsTableConfigResolver {
    private ruleChainService;
    private dialogService;
    private dialog;
    private importExport;
    private itembuffer;
    private edgeService;
    private homeDialogs;
    private translate;
    private datePipe;
    private router;
    private utils;
    private userPermissionsService;
    constructor(ruleChainService: RuleChainService, dialogService: DialogService, dialog: MatDialog, importExport: ImportExportService, itembuffer: ItemBufferService, edgeService: EdgeService, homeDialogs: HomeDialogsService, translate: TranslateService, datePipe: DatePipe, router: Router, utils: UtilsService, userPermissionsService: UserPermissionsService);
    resolve(route: ActivatedRouteSnapshot): EntityTableConfig<RuleChain>;
    resolveRuleChainsTableConfig(params: ActivatedRouteSnapshot | RuleChainParams): EntityTableConfig<RuleChain>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RuleChainsTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RuleChainsTableConfigResolver>;
}
