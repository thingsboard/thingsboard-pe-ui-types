import { DashboardService } from '@core/http/dashboard.service';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { BreakpointId, Dashboard, DashboardLayoutId } from '@shared/models/dashboard.models';
import { EntityAliases } from '@shared/models/alias.models';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DashboardUtilsService } from '@core/services/dashboard-utils.service';
import { EntityService } from '@core/http/entity.service';
import { Widget, WidgetTypeDetails } from '@shared/models/widget.models';
import { ItemBufferService } from '@core/services/item-buffer.service';
import { BulkImportRequest, BulkImportResult, ImportWidgetResult } from './import-export.models';
import { EntityType } from '@shared/models/entity-type.models';
import { UtilsService } from '@core/services/utils.service';
import { WidgetService } from '@core/http/widget.service';
import { WidgetsBundle } from '@shared/models/widgets-bundle.model';
import { ImportEntitiesResultInfo, ImportEntityData, VersionedEntity } from '@shared/models/entity.models';
import { RequestConfig } from '@core/http/http-utils';
import { RuleChainImport, RuleChainType } from '@shared/models/rule-chain.models';
import { RuleChainService } from '@core/http/rule-chain.service';
import { CustomerId } from '@shared/models/id/customer-id';
import { ConverterService } from '@core/http/converter.service';
import { Converter } from '@shared/models/converter.models';
import { DeviceProfileService } from '@core/http/device-profile.service';
import { DeviceProfile } from '@shared/models/device.models';
import { TenantProfile } from '@shared/models/tenant.model';
import { TenantProfileService } from '@core/http/tenant-profile.service';
import { DeviceService } from '@core/http/device.service';
import { AssetService } from '@core/http/asset.service';
import { EdgeService } from '@core/http/edge.service';
import { AssetProfileService } from '@core/http/asset-profile.service';
import { AssetProfile } from '@shared/models/asset.models';
import { ImageService } from '@core/http/image.service';
import { ImageResourceInfo, ImageResourceType } from '@shared/models/resource.models';
import { FormProperty } from '@shared/models/dynamic-form.models';
import { CalculatedFieldsService } from '@core/http/calculated-fields.service';
import { CalculatedField } from '@shared/models/calculated-field.models';
import * as i0 from "@angular/core";
export type editMissingAliasesFunction = (widgets: Array<Widget>, isSingleWidget: boolean, customTitle: string, missingEntityAliases: EntityAliases) => Observable<EntityAliases>;
export declare class ImportExportService {
    private window;
    private document;
    private store;
    private translate;
    private dashboardService;
    private dashboardUtils;
    private widgetService;
    private deviceProfileService;
    private assetProfileService;
    private tenantProfileService;
    private entityService;
    private ruleChainService;
    private converterService;
    private deviceService;
    private assetService;
    private edgeService;
    private imageService;
    private utils;
    private itembuffer;
    private calculatedFieldsService;
    private dialog;
    constructor(window: Window, document: Document, store: Store<AppState>, translate: TranslateService, dashboardService: DashboardService, dashboardUtils: DashboardUtilsService, widgetService: WidgetService, deviceProfileService: DeviceProfileService, assetProfileService: AssetProfileService, tenantProfileService: TenantProfileService, entityService: EntityService, ruleChainService: RuleChainService, converterService: ConverterService, deviceService: DeviceService, assetService: AssetService, edgeService: EdgeService, imageService: ImageService, utils: UtilsService, itembuffer: ItemBufferService, calculatedFieldsService: CalculatedFieldsService, dialog: MatDialog);
    exportFormProperties(properties: FormProperty[], fileName: string): void;
    importFormProperties(): Observable<FormProperty[]>;
    exportImage(type: ImageResourceType, key: string): void;
    importImage(): Observable<ImageResourceInfo>;
    exportCalculatedField(calculatedFieldId: string): void;
    openCalculatedFieldImportDialog(): Observable<CalculatedField>;
    exportDashboard(dashboardId: string): void;
    importDashboard(customerId: CustomerId, onEditMissingAliases: editMissingAliasesFunction, entityGroupId?: string): Observable<Dashboard>;
    exportWidget(dashboard: Dashboard, sourceState: string, sourceLayout: DashboardLayoutId, widget: Widget, widgetTitle: string, breakpoint: BreakpointId): void;
    importWidget(dashboard: Dashboard, targetState: string, onEditMissingAliases: editMissingAliasesFunction, targetLayoutFunction: () => Observable<DashboardLayoutId>, onAliasesUpdateFunction: () => void, onFiltersUpdateFunction: () => void): Observable<ImportWidgetResult>;
    exportWidgetType(widgetTypeId: string): void;
    exportWidgetTypes(widgetTypeIds: string[]): Observable<void>;
    importWidgetType(): Observable<WidgetTypeDetails>;
    exportWidgetsBundle(widgetsBundleId: string): void;
    exportEntity(entityData: VersionedEntity): void;
    private exportSelectedWidgetsBundle;
    private handleExportWidgetsBundle;
    private exportWidgetsBundleWithWidgetTypes;
    private exportWidgetsBundleWithWidgetTypeFqns;
    importWidgetsBundle(): Observable<WidgetsBundle>;
    private prepareWidgetType;
    bulkImportEntities(entitiesData: BulkImportRequest, entityType: EntityType, config?: RequestConfig): Observable<BulkImportResult>;
    importEntities(entitiesData: ImportEntityData[], customerId: CustomerId, entityType: EntityType, entityGroupId: string, updateData: boolean, importEntityCompleted?: () => void, config?: RequestConfig): Observable<ImportEntitiesResultInfo>;
    exportRuleChain(ruleChainId: string): void;
    private onRuleChainExported;
    importRuleChain(expectedRuleChainType: RuleChainType): Observable<RuleChainImport>;
    private processOldRuleChainConnections;
    exportConverter(converterId: string): void;
    importConverter(): Observable<Converter>;
    exportTenantProfile(tenantProfileId: string): void;
    importTenantProfile(): Observable<TenantProfile>;
    exportDeviceProfile(deviceProfileId: string): void;
    importDeviceProfile(): Observable<DeviceProfile>;
    exportAssetProfile(assetProfileId: string): void;
    importAssetProfile(): Observable<AssetProfile>;
    private processCSVCell;
    exportCsv(data: {
        [key: string]: any;
    }[], filename: string): void;
    exportXls(data: {
        [key: string]: any;
    }[], filename: string): void;
    exportXlsx(data: {
        [key: string]: any;
    }[], filename: string, dateFormat?: string): void;
    private formatDataAccordingToLocale;
    private validateImportedConverter;
    exportText(data: string | Array<string>, filename: string): void;
    exportJSZip(data: object, filename: string): Observable<void>;
    private prepareRuleChain;
    private prepareRuleChainMetaData;
    private validateImportedRuleChain;
    private validateImportedDeviceProfile;
    private validateImportedAssetProfile;
    private validateImportedTenantProfile;
    private sumObject;
    private handleExportError;
    private validateImportedFormProperties;
    private validateImportedImage;
    private validateImportedDashboard;
    private validateImportedWidget;
    private validateImportedWidgetTypeDetails;
    private validateImportedWidgetsBundle;
    private saveImportedDashboard;
    private addImportedWidget;
    private processEntityAliases;
    private prepareAliasesInfo;
    private prepareEntityAlias;
    private prepareDashboardExport;
    private prepareExport;
    private prepareImport;
    private openImportDialog;
    private exportToPc;
    private exportJson;
    private downloadFile;
    private prepareProfileExport;
    private prepareCalculatedFieldExport;
    private getIncludeResourcesPreference;
    private openExportDialog;
    private updateUserSettingsIncludeResourcesIfNeeded;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImportExportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ImportExportService>;
}
