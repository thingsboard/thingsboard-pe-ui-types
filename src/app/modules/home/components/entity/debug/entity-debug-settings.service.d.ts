import { Renderer2, ViewContainerRef } from '@angular/core';
import { EntityDebugSettings } from '@shared/models/entity.models';
import { TbPopoverService } from '@shared/components/popover.service';
import { TranslateService } from '@ngx-translate/core';
import { DurationLeftPipe } from '@shared/pipe/duration-left.pipe';
import { EntityDebugSettingPanelConfig } from '@home/components/entity/debug/entity-debug-settings.model';
import * as i0 from "@angular/core";
export declare class EntityDebugSettingsService {
    private popoverService;
    renderer: Renderer2;
    viewContainerRef: ViewContainerRef;
    private translate;
    private durationLeft;
    constructor(popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef, translate: TranslateService, durationLeft: DurationLeftPipe);
    openDebugStrategyPanel(panelConfig: EntityDebugSettingPanelConfig, trigger: Element): void;
    getDebugConfigLabel(debugSettings: EntityDebugSettings): string;
    isDebugActive(allEnabledUntil: number): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityDebugSettingsService, [null, { optional: true; }, { optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EntityDebugSettingsService>;
}
