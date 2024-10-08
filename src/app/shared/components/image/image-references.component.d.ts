import { ChangeDetectorRef, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ImageReferences } from '@shared/models/resource.models';
import { TranslateService } from '@ngx-translate/core';
import { EntityService } from '@core/http/entity.service';
import { BaseData, HasId } from '@shared/models/base-data';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { WhiteLabeling } from '@shared/models/white-labeling.models';
import { EntityId } from '@shared/models/id/entity-id';
import * as i0 from "@angular/core";
interface ReferencedEntityInfo {
    entity: BaseData<HasId> | WhiteLabeling;
    typeName: string;
    detailsUrl: string;
    isWl: boolean;
}
interface HolderReferencedEntities {
    name?: string;
    detailsUrl?: string;
    currentHolder: boolean;
    entities: ReferencedEntityInfo[];
}
type ReferencedEntitiesEntry = [EntityId, HolderReferencedEntities];
export declare class ImageReferencesComponent implements OnInit {
    protected store: Store<AppState>;
    private entityService;
    private cd;
    private translate;
    references: ImageReferences;
    popoverComponent: TbPopoverComponent<ImageReferencesComponent>;
    contentReady: boolean;
    authUser: import("../../public-api").AuthUser;
    simpleList: boolean;
    referencedEntitiesList: ReferencedEntityInfo[];
    referencedEntitiesEntries: ReferencedEntitiesEntry[];
    constructor(store: Store<AppState>, entityService: EntityService, cd: ChangeDetectorRef, translate: TranslateService);
    ngOnInit(): void;
    isSystem(id: EntityId): boolean;
    holderName(id: EntityId): string;
    private hasNotSameAuthLevelEntities;
    private toReferencedEntitiesList;
    private toReferencedEntitiesEntries;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImageReferencesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImageReferencesComponent, "tb-image-references", never, { "references": { "alias": "references"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
