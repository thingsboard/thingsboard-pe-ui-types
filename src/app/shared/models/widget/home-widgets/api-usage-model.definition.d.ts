import { EntityAliasInfo } from '@shared/models/alias.models';
import { FilterInfo } from '@shared/models/query/query.models';
import { WidgetModelDefinition } from '@shared/models/widget/widget-model.definition';
interface AliasFilterPair {
    alias?: EntityAliasInfo;
    filter?: FilterInfo;
}
interface ApiUsageDatasourcesInfo {
    ds?: AliasFilterPair;
}
export declare const ApiUsageModelDefinition: WidgetModelDefinition<ApiUsageDatasourcesInfo>;
export {};
