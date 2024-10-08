import { OnDestroy, OnInit } from '@angular/core';
import { User } from '@shared/models/user.model';
import { Authority } from '@shared/models/authority.enum';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { AuthService } from '@core/auth/auth.service';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class UserMenuComponent implements OnInit, OnDestroy {
    private store;
    private router;
    private authService;
    displayUserInfo: boolean;
    authorities: typeof Authority;
    authority$: import("rxjs").Observable<Authority>;
    authorityName$: import("rxjs").Observable<string>;
    userDisplayName$: import("rxjs").Observable<string>;
    constructor(store: Store<AppState>, router: Router, authService: AuthService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getAuthorityName(user: User): string;
    getUserDisplayName(user: User): string;
    openAccount(): void;
    logout(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UserMenuComponent, "tb-user-menu", never, { "displayUserInfo": { "alias": "displayUserInfo"; "required": false; }; }, {}, never, never, false, never>;
}
