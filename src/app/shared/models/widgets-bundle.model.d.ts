import { BaseData, ExportableEntity } from '@shared/models/base-data';
import { TenantId } from '@shared/models/id/tenant-id';
import { WidgetsBundleId } from '@shared/models/id/widgets-bundle-id';
export interface WidgetsBundle extends BaseData<WidgetsBundleId>, ExportableEntity<WidgetsBundleId> {
    tenantId: TenantId;
    alias: string;
    title: string;
    image: string;
    description: string;
    order: number;
}
