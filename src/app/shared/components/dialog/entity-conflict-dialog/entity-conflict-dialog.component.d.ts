import { MatDialogRef } from '@angular/material/dialog';
import { ImportExportService } from '@shared/import-export/import-export.service';
import { VersionedEntity } from '@shared/models/entity.models';
import { EntityId } from '@shared/models/id/entity-id';
import * as i0 from "@angular/core";
interface EntityConflictDialogData {
    message: string;
    entity: VersionedEntity;
}
export declare class EntityConflictDialogComponent {
    data: EntityConflictDialogData;
    private dialogRef;
    private importExportService;
    entityId: EntityId;
    entityTypeLabel: string;
    readonly entityTypeTranslations: Map<import("@shared/models/entity-type.models").EntityType | import("@shared/models/entity-type.models").AliasEntityType, import("@shared/models/entity-type.models").EntityTypeTranslation>;
    private readonly defaultEntityLabel;
    constructor(data: EntityConflictDialogData, dialogRef: MatDialogRef<EntityConflictDialogComponent>, importExportService: ImportExportService);
    onCancel(): void;
    onDiscard(): void;
    onConfirm(): void;
    onLinkClick(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityConflictDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityConflictDialogComponent, "tb-entity-conflict-dialog", never, {}, {}, never, never, true, never>;
}
export {};
