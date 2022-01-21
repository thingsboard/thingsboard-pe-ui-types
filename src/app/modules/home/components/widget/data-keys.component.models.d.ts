import { DataKeyType } from '@shared/models/telemetry/telemetry.models';
import { DataKey } from '@shared/models/widget.models';
import { Observable } from 'rxjs';
export interface DataKeysCallbacks {
    generateDataKey: (chip: any, type: DataKeyType) => DataKey;
    fetchEntityKeys: (entityAliasId: string, types: Array<DataKeyType>) => Observable<Array<DataKey>>;
}
