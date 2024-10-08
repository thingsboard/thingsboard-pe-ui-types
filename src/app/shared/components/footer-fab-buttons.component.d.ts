import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export interface FooterFabButton {
    name: string;
    icon: string;
    onAction: ($event: Event) => void;
}
export interface FooterFabButtons {
    fabTogglerName: string;
    fabTogglerIcon: string;
    buttons: Array<FooterFabButton>;
}
export declare class FooterFabButtonsComponent extends PageComponent {
    protected store: Store<AppState>;
    footerFabButtons: FooterFabButtons;
    private relativeValue;
    get relative(): boolean;
    set relative(value: boolean);
    buttons: Array<FooterFabButton>;
    fabTogglerState: string;
    closeTimeout: any;
    onFocusOut($event: any): void;
    onFocusIn($event: any): void;
    constructor(store: Store<AppState>);
    showItems(): void;
    hideItems(): void;
    onToggleFab(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FooterFabButtonsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FooterFabButtonsComponent, "tb-footer-fab-buttons", never, { "footerFabButtons": { "alias": "footerFabButtons"; "required": false; }; "relative": { "alias": "relative"; "required": false; }; }, {}, never, never, false, never>;
}
