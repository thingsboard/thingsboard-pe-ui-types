import { Subscription } from 'rxjs';
import { BroadcastListener } from '@core/services/broadcast.models';
import * as i0 from "@angular/core";
export declare class BroadcastService {
    private broadcastSubject;
    broadcast(name: string, ...args: Array<any>): void;
    on(name: string, listener: BroadcastListener): Subscription;
    static ɵfac: i0.ɵɵFactoryDeclaration<BroadcastService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BroadcastService>;
}
