import { CustomerId } from '@shared/models/id/customer-id';
import { ContactBased } from '@shared/models/contact-based.model';
import { TenantId } from './id/tenant-id';
import { ExportableEntity, GroupEntityInfo } from '@shared/models/base-data';
export interface Customer extends ContactBased<CustomerId>, ExportableEntity<CustomerId> {
    tenantId: TenantId;
    parentCustomerId?: CustomerId;
    title: string;
    additionalInfo?: any;
}
export type CustomerInfo = Customer & GroupEntityInfo<CustomerId>;
export interface ShortCustomerInfo {
    customerId: CustomerId;
    title: string;
    public: boolean;
}
