import { ChangeDetectorRef } from '@angular/core';
import { EntityType } from '@shared/models/entity-type.models';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EntityComponent } from '@home/components/entity/entity.component';
import { QueueInfo } from '@shared/models/queue.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import * as i0 from "@angular/core";
export declare class QueueComponent extends EntityComponent<QueueInfo> {
    protected store: Store<AppState>;
    protected translate: TranslateService;
    protected entityValue: QueueInfo;
    protected entitiesTableConfigValue: EntityTableConfig<QueueInfo>;
    protected cd: ChangeDetectorRef;
    fb: FormBuilder;
    entityForm: FormGroup;
    entityType: typeof EntityType;
    submitStrategies: string[];
    processingStrategies: string[];
    constructor(store: Store<AppState>, translate: TranslateService, entityValue: QueueInfo, entitiesTableConfigValue: EntityTableConfig<QueueInfo>, cd: ChangeDetectorRef, fb: FormBuilder);
    ngOnInit(): void;
    buildForm(entity: QueueInfo): FormGroup;
    hideDelete(): boolean;
    updateForm(entity: QueueInfo): void;
    prepareFormValue(formValue: any): any;
    onQueueIdCopied($event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<QueueComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QueueComponent, "tb-queue", never, {}, {}, never, never>;
}
