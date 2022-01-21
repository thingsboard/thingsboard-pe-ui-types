import { EntityAliasSelectCallbacks } from '../alias/entity-alias-select.component.models';
import { DataKeysCallbacks } from './data-keys.component.models';
import { WidgetActionCallbacks } from './action/manage-widget-actions.component.models';
import { FilterSelectCallbacks } from '@home/components/filter/filter-select.component.models';
export declare type WidgetConfigCallbacks = EntityAliasSelectCallbacks & FilterSelectCallbacks & DataKeysCallbacks & WidgetActionCallbacks;
