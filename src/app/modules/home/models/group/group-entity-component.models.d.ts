import { BaseData, HasId } from '@shared/models/base-data';
import { GroupEntityTableConfig } from '@home/models/group/group-entities-table-config.models';
export interface AddGroupEntityDialogData<T extends BaseData<HasId>> {
    entitiesTableConfig: GroupEntityTableConfig<T>;
}
