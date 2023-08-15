import { EntityComponent } from '@home/components/entity/entity.component';
import { BaseData, HasId } from '@shared/models/base-data';
export interface IEntityDetailsPageComponent {
    entityComponent: EntityComponent<BaseData<HasId>>;
    onToggleEditMode(isEdit: boolean): void;
    reload(): void;
}
