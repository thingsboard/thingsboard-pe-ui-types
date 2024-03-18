import { DataKeyType } from '@shared/models/telemetry/telemetry.models';
import { DataKey, JsonSettingsSchema } from '@shared/models/widget.models';
import { Observable } from 'rxjs';
export type DataKeySettingsFunction = (key: DataKey, isLatestDataKey: boolean) => any;
export interface DataKeysCallbacks {
    generateDataKey: (chip: any, type: DataKeyType, datakeySettingsSchema: JsonSettingsSchema, isLatestDataKey: boolean, dataKeySettingsFunction: DataKeySettingsFunction) => DataKey;
    fetchEntityKeys: (entityAliasId: string, types: Array<DataKeyType>) => Observable<Array<DataKey>>;
    fetchEntityKeysForDevice: (deviceId: string, types: Array<DataKeyType>) => Observable<Array<DataKey>>;
}
