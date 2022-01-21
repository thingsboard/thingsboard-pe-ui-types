import { CustomerId } from '@shared/models/id/customer-id';
import { ContactBased } from '@shared/models/contact-based.model';
import { TenantId } from './id/tenant-id';
export interface Customer extends ContactBased<CustomerId> {
    tenantId: TenantId;
    title: string;
    additionalInfo?: any;
}
export interface ShortCustomerInfo {
    customerId: CustomerId;
    title: string;
    public: boolean;
}
