import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { GitHubService } from '@core/http/git-hub.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { LocalStorageService } from '@core/local-storage/local-storage.service';
import * as i0 from "@angular/core";
export declare class GithubBadgeComponent implements OnInit, OnDestroy {
    private gitHubService;
    private localStorageService;
    private store;
    private cd;
    get hideGithubBadge(): boolean;
    githubStar: number;
    private hide;
    private stopWatch$;
    constructor(gitHubService: GitHubService, localStorageService: LocalStorageService, store: Store<AppState>, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    hideGithubStar($event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GithubBadgeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GithubBadgeComponent, "tb-github-badge", never, {}, {}, never, never, false, never>;
}
