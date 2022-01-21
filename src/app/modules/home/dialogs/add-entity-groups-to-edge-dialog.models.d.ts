import { EntityId } from '@shared/models/id/entity-id';
import { EntityType } from '@shared/models/entity-type.models';
export interface AddEntityGroupsToEdgeDialogData {
    ownerId: EntityId;
    groupType: EntityType;
    edgeId: string;
    addEntityGroupsToEdgeTitle: string;
    confirmSelectTitle: string;
    notFoundText: string;
    requiredText: string;
    customerId?: string;
}
