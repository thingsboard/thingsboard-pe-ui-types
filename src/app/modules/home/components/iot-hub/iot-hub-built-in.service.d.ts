import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { WidgetService } from '@core/http/widget.service';
import { MpItemVersionView } from '@shared/models/iot-hub/iot-hub-version.models';
import { WidgetType, WidgetTypeInfo } from '@shared/models/widget.models';
import * as i0 from "@angular/core";
/**
 * Result of looking up the local component a built-in Hub item mirrors. `failed` separates
 * "the lookup itself did not answer" (network error, 5xx, no read permission) from "the component
 * is not here": only the latter may be offered as an install, otherwise a transient error would
 * hand the tenant a duplicate of a component that is still in place.
 */
export interface IotHubLocalLookup<T> {
    value: T | null;
    failed: boolean;
}
/**
 * Outcome of trying to open the local component of a built-in item. 'cancelled' means the component
 * is there but the router did not go — typically a route guard blocked it (unsaved changes) — so
 * there is nothing to install and nothing to report.
 */
export type IotHubOpenLocalOutcome = 'opened' | 'cancelled' | 'missing' | 'failed';
/**
 * Handles IoT Hub items marked `builtIn` — content that already ships inside ThingsBoard.
 * Such an item is never installed: its `fqn` is deliberately identical to the fqn of the
 * platform's own component, which is used as the match key to reach the local copy.
 */
export declare class IotHubBuiltInService {
    private router;
    private widgetService;
    constructor(router: Router, widgetService: WidgetService);
    /**
     * Resolves the platform's own widget type mirroring a built-in Hub item, matched by fqn.
     *
     * There is no API to test a batch of fqns at once — `GET /api/widgetType?fqn=` is per fqn and
     * carries the full descriptor, and `/api/widgetTypeFqns` is scoped to a bundle the Hub payload
     * does not name — so this must stay a per-item check triggered by a click, never a prefetch
     * across a catalogue page.
     */
    resolveLocalWidgetType(item: MpItemVersionView): Observable<IotHubLocalLookup<WidgetType>>;
    /** Same match, resolved to the info projection widget pickers need (image, description, type). */
    resolveLocalWidgetTypeInfo(item: MpItemVersionView): Observable<IotHubLocalLookup<WidgetTypeInfo>>;
    /** Navigates to the local component a built-in item mirrors, reporting why it could not. */
    openLocalComponent(item: MpItemVersionView): Observable<IotHubOpenLocalOutcome>;
    private resolveLocalComponentUrl;
    private lookupResult;
    private lookupFailure;
    static ɵfac: i0.ɵɵFactoryDeclaration<IotHubBuiltInService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IotHubBuiltInService>;
}
