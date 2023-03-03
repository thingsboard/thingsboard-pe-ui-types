import { InjectionToken } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { OverlayRef } from '@angular/cdk/overlay';
import { RpcStatus } from '@shared/models/rpc.models';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare const PERSISTENT_FILTER_PANEL_DATA: InjectionToken<any>;
export interface PersistentFilterPanelData {
    rpcStatus: RpcStatus;
}
export declare class PersistentFilterPanelComponent {
    data: PersistentFilterPanelData;
    overlayRef: OverlayRef;
    private fb;
    private translate;
    persistentFilterFormGroup: UntypedFormGroup;
    result: PersistentFilterPanelData;
    rpcSearchStatusTranslationMap: Map<RpcStatus, string>;
    rpcSearchPlaceholder: string;
    persistentSearchStatuses: string[];
    constructor(data: PersistentFilterPanelData, overlayRef: OverlayRef, fb: UntypedFormBuilder, translate: TranslateService);
    update(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PersistentFilterPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PersistentFilterPanelComponent, "tb-persistent-filter-panel", never, {}, {}, never, never, false, never>;
}
