import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { EntityComponent } from '@home/components/entity/entity.component';
import { ChecksumAlgorithm, OtaPackage, OtaUpdateType } from '@shared/models/ota-package.models';
import * as i0 from "@angular/core";
export declare class OtaUpdateComponent extends EntityComponent<OtaPackage> implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    protected translate: TranslateService;
    protected entityValue: OtaPackage;
    protected entitiesTableConfigValue: EntityTableConfig<OtaPackage>;
    fb: UntypedFormBuilder;
    protected cd: ChangeDetectorRef;
    private destroy$;
    checksumAlgorithms: ChecksumAlgorithm[];
    checksumAlgorithmTranslationMap: Map<ChecksumAlgorithm, string>;
    packageTypes: OtaUpdateType[];
    otaUpdateTypeTranslationMap: Map<OtaUpdateType, string>;
    constructor(store: Store<AppState>, translate: TranslateService, entityValue: OtaPackage, entitiesTableConfigValue: EntityTableConfig<OtaPackage>, fb: UntypedFormBuilder, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    hideDelete(): boolean;
    buildForm(entity: OtaPackage): UntypedFormGroup;
    updateForm(entity: OtaPackage): void;
    onPackageIdCopied(): void;
    onPackageChecksumCopied(): void;
    onPackageDirectUrlCopied(): void;
    prepareFormValue(formValue: OtaPackage & {
        generateChecksum?: boolean;
    }): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<OtaUpdateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OtaUpdateComponent, "tb-ota-update", never, {}, {}, never, never, false, never>;
}
