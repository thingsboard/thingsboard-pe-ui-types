import { Resolve } from '@angular/router';
import { User } from '@shared/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UserService } from '@core/http/user.service';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export declare class UserProfileResolver implements Resolve<User> {
    private store;
    private userService;
    constructor(store: Store<AppState>, userService: UserService);
    resolve(): Observable<User>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserProfileResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserProfileResolver>;
}
export declare class ProfileRoutingModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ProfileRoutingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ProfileRoutingModule, never, [typeof i1.RouterModule], [typeof i1.RouterModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ProfileRoutingModule>;
}
