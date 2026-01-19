import { IAliasController } from '@core/api/widget-api.models';
import { WidgetConfigCallbacks } from '@home/components/widget/config/widget-config.component.models';
import { DataKey, Widget, widgetType } from '@shared/models/widget.models';
import { Observable } from 'rxjs';
import { BackgroundSettings } from '@shared/models/widget-settings.models';
export interface ApiUsageSettingsContext {
    aliasController: IAliasController;
    callbacks: WidgetConfigCallbacks;
    widget: Widget;
    editKey: (key: DataKey, entityAliasId: string, WidgetType?: widgetType) => Observable<DataKey>;
    generateDataKey: (key: DataKey) => DataKey;
}
export interface ApiUsageWidgetSettings {
    dsEntityAliasId: string;
    apiUsageDataKeys: ApiUsageDataKeysSettings[];
    targetDashboardState: string;
    background: BackgroundSettings;
    padding: string;
}
export interface ApiUsageDataKeysSettings {
    label: string;
    state: string;
    status: DataKey;
    maxLimit: DataKey;
    current: DataKey;
}
export declare const apiUsageDefaultSettings: ApiUsageWidgetSettings;
export declare const getUniqueDataKeys: (data: ApiUsageDataKeysSettings[]) => DataKey[];
