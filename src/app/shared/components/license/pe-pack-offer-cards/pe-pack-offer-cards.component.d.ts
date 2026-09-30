import { EventEmitter } from '@angular/core';
import { PePackOffer } from '@shared/models/subscription.models';
import * as i0 from "@angular/core";
/**
 * Card row used by the Community-Grant flows to let the viewer sample what the Professional Pack adds:
 * White-labeling, Integrations, the Scheduler and Reports. Cards are opt-in per input so the caller can
 * hide the one it is currently offering (e.g. the Integrations screen hides its own card). The grid width
 * follows the number of visible cards up to three columns, and collapses to one on the smallest screens.
 * Set disableNavigation when the button should render without hover affordance and swallow clicks (used
 * for the sysadmin view of the White-labeling dialog).
 */
export declare class PePackOfferCardsComponent {
    showWhiteLabeling: boolean;
    showIntegrations: boolean;
    showScheduler: boolean;
    showReports: boolean;
    disableNavigation: boolean;
    cardClick: EventEmitter<string>;
    PePackOffer: typeof PePackOffer;
    pePackOfferInfoMap: Map<PePackOffer, import("@shared/models/subscription.models").PePackOfferInfo>;
    get visibleOffers(): PePackOffer[];
    onCard($event: Event, offer: PePackOffer): void;
    private isOfferVisible;
    static ɵfac: i0.ɵɵFactoryDeclaration<PePackOfferCardsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PePackOfferCardsComponent, "tb-pe-pack-offer-cards", never, { "showWhiteLabeling": { "alias": "showWhiteLabeling"; "required": false; }; "showIntegrations": { "alias": "showIntegrations"; "required": false; }; "showScheduler": { "alias": "showScheduler"; "required": false; }; "showReports": { "alias": "showReports"; "required": false; }; "disableNavigation": { "alias": "disableNavigation"; "required": false; }; }, { "cardClick": "cardClick"; }, never, never, false, never>;
}
