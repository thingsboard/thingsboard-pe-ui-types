import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { Resolve, Router } from '@angular/router';
import { Resource, ResourceInfo } from '@shared/models/resource.models';
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { ResourceService } from '@core/http/resource.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageLink } from '@shared/models/page/page-link';
import { EntityAction } from '@home/models/entity/entity-component.models';
import * as i0 from "@angular/core";
export declare class ResourcesLibraryTableConfigResolver implements Resolve<EntityTableConfig<Resource, PageLink, ResourceInfo>> {
    private store;
    private resourceService;
    private translate;
    private router;
    private datePipe;
    private readonly config;
    private readonly resourceTypesTranslationMap;
    constructor(store: Store<AppState>, resourceService: ResourceService, translate: TranslateService, router: Router, datePipe: DatePipe);
    saveResource(resource: any): import("rxjs").Observable<Resource>;
    resolve(): EntityTableConfig<Resource, PageLink, ResourceInfo>;
    private openResource;
    downloadResource($event: Event, resource: ResourceInfo): void;
    onResourceAction(action: EntityAction<ResourceInfo>): boolean;
    private isResourceEditable;
    static ɵfac: i0.ɵɵFactoryDeclaration<ResourcesLibraryTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ResourcesLibraryTableConfigResolver>;
}
