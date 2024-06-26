import { OnDestroy, Renderer2, ViewContainerRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import { BaseData, HasId } from '@shared/models/base-data';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { ConvertorType, DeviceInfoType, MappingInfo, MappingKeysType, MappingType, RequestType, ServerSideRPCType, SourceTypes } from '@home/components/widget/lib/gateway/gateway-widget.models';
import { MatButton } from '@angular/material/button';
import { TbPopoverService } from '@shared/components/popover.service';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class MappingDialogComponent extends DialogComponent<MappingDialogComponent, BaseData<HasId>> implements OnDestroy {
    protected store: Store<AppState>;
    protected router: Router;
    data: MappingInfo;
    dialogRef: MatDialogRef<MappingDialogComponent, {
        [key: string]: any;
    }>;
    private fb;
    private popoverService;
    private renderer;
    private viewContainerRef;
    private translate;
    mappingForm: UntypedFormGroup;
    MappingType: typeof MappingType;
    qualityTypes: number[];
    QualityTranslationsMap: Map<number, string>;
    convertorTypes: ConvertorType[];
    ConvertorTypeEnum: typeof ConvertorType;
    ConvertorTypeTranslationsMap: Map<ConvertorType, string>;
    sourceTypes: SourceTypes[];
    sourceTypesEnum: typeof SourceTypes;
    SourceTypeTranslationsMap: Map<SourceTypes, string>;
    requestTypes: RequestType[];
    RequestTypeEnum: typeof RequestType;
    RequestTypesTranslationsMap: Map<RequestType, string>;
    DeviceInfoType: typeof DeviceInfoType;
    ServerSideRPCType: typeof ServerSideRPCType;
    MappingKeysType: typeof MappingKeysType;
    MappingHintTranslationsMap: Map<MappingType, string>;
    MappingTypeTranslationsMap: Map<MappingType, string>;
    DataConversionTranslationsMap: Map<ConvertorType, string>;
    hiddenAttributesCount: number;
    keysPopupClosed: boolean;
    submitted: boolean;
    private destroy$;
    constructor(store: Store<AppState>, router: Router, data: MappingInfo, dialogRef: MatDialogRef<MappingDialogComponent, {
        [key: string]: any;
    }>, fb: FormBuilder, popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef, translate: TranslateService);
    get converterAttributes(): Array<string>;
    get converterTelemetry(): Array<string>;
    get converterType(): ConvertorType;
    get customKeys(): Array<string>;
    get requestMappingType(): RequestType;
    get responseTimeoutErrorTooltip(): string;
    ngOnDestroy(): void;
    private createMappingForm;
    helpLinkId(): string;
    cancel(): void;
    add(): void;
    manageKeys($event: Event, matButton: MatButton, keysType: MappingKeysType): void;
    private prepareMappingData;
    private prepareFormValueData;
    static ɵfac: i0.ɵɵFactoryDeclaration<MappingDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MappingDialogComponent, "tb-mapping-dialog", never, {}, {}, never, never, false, never>;
}
