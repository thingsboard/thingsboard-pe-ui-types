import { EntityAliasSelectCallbacks } from '@home/components/alias/entity-alias-select.component.models';
import { FilterSelectCallbacks } from '@home/components/filter/filter-select.component.models';
import { DataKeysCallbacks } from '@home/components/widget/config/data-keys.component.models';
export type DatasourceCallbacks = EntityAliasSelectCallbacks & FilterSelectCallbacks & DataKeysCallbacks;
