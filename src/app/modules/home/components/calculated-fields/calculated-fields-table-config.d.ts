import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { PageLink } from '@shared/models/page/page-link';
import { Observable } from 'rxjs';
import { PageData } from '@shared/models/page/page-data';
import { EntityId } from '@shared/models/id/entity-id';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DestroyRef, Renderer2 } from '@angular/core';
import { CalculatedFieldsService } from '@core/http/calculated-fields.service';
import { CalculatedField } from '@shared/models/calculated-field.models';
import { ImportExportService } from '@shared/import-export/import-export.service';
import { EntityDebugSettingsService } from '@home/components/entity/debug/entity-debug-settings.service';
import { DatePipe } from '@angular/common';
import { TbPopoverService } from '@shared/components/popover.service';
import { UserPermissionsService } from '@core/http/user-permissions.service';
export declare class CalculatedFieldsTableConfig extends EntityTableConfig<CalculatedField> {
    private calculatedFieldsService;
    private translate;
    private dialog;
    private datePipe;
    entityId: EntityId;
    private store;
    private destroyRef;
    private renderer;
    private entityName;
    private ownerId;
    private importExportService;
    private entityDebugSettingsService;
    private readonly;
    private hideClearEventAction;
    private popoverService;
    private userPermissionsService;
    readonly tenantId: string;
    additionalDebugActionConfig: {
        title: any;
        action: (calculatedField: CalculatedField) => any;
    };
    constructor(calculatedFieldsService: CalculatedFieldsService, translate: TranslateService, dialog: MatDialog, datePipe: DatePipe, entityId: EntityId, store: Store<AppState>, destroyRef: DestroyRef, renderer: Renderer2, entityName: string, ownerId: EntityId, importExportService: ImportExportService, entityDebugSettingsService: EntityDebugSettingsService, readonly: boolean, hideClearEventAction: boolean, popoverService: TbPopoverService, userPermissionsService: UserPermissionsService);
    private getExpressionLabel;
    fetchCalculatedFields(pageLink: PageLink): Observable<PageData<CalculatedField>>;
    onOpenDebugConfig($event: Event, calculatedField: CalculatedField): void;
    private editCalculatedField;
    private getCalculatedFieldDialog;
    private openDebugEventsDialog;
    private exportCalculatedField;
    private importCalculatedField;
    private updateImportedCalculatedField;
    private onDebugConfigChanged;
    private getTestScriptDialog;
    private openReprocessing;
}
