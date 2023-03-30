import { EntityBooleanFunction } from '@home/models/entity/entities-table-config.models';
import { EntityGroupColumn, ShortEntityView } from '@shared/models/entity-group.models';
import { EntitiesDataSource } from '@home/models/datasource/entity-datasource';
import { NgZone } from '@angular/core';
import { CollectionViewer } from '@angular/cdk/collections';
import { EntityType } from '@shared/models/entity-type.models';
import { TelemetryWebsocketService } from '@core/ws/telemetry-websocket.service';
export declare class GroupEntitiesDataSource extends EntitiesDataSource<ShortEntityView> {
    private columns;
    private entityGroupId;
    private groupType;
    private telemetryService;
    private zone;
    protected selectionEnabledFunction: EntityBooleanFunction<ShortEntityView>;
    protected dataLoadedFunction: (col?: number, row?: number) => void;
    private groupEntitiesSubscription;
    constructor(columns: EntityGroupColumn[], entityGroupId: string, groupType: EntityType, telemetryService: TelemetryWebsocketService, zone: NgZone, selectionEnabledFunction: EntityBooleanFunction<ShortEntityView>, dataLoadedFunction: (col?: number, row?: number) => void);
    disconnect(collectionViewer: CollectionViewer): void;
    protected onEntities(entities: ShortEntityView[]): void;
}
