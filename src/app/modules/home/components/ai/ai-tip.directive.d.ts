import { OnDestroy, OnInit, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class AiTipDirective implements OnInit, OnDestroy {
    private popover;
    private elementRef;
    private renderer;
    template: TemplateRef<void>;
    tipToggle: boolean;
    private pointerType;
    private visibleSubscription;
    private unlistenKeydown;
    private get trigger();
    ngOnInit(): void;
    ngOnDestroy(): void;
    onPointerEnter(event: PointerEvent): void;
    onMouseEnter(event: MouseEvent): void;
    onFocus(): void;
    onBlur(): void;
    onClick(event: MouseEvent): void;
    private onShown;
    private onHidden;
    static ɵfac: i0.ɵɵFactoryDeclaration<AiTipDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AiTipDirective, "[tbAiTip]", never, { "template": { "alias": "tbAiTip"; "required": false; }; "tipToggle": { "alias": "tipToggle"; "required": false; }; }, {}, never, never, false, never>;
}
