import { OnDestroy } from '@angular/core';
import { GitHubService } from '@core/http/git-hub.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { LocalStorageService } from '@core/local-storage/local-storage.service';
import * as i0 from "@angular/core";
export declare class GithubBadgeComponent implements OnDestroy {
    private gitHubService;
    private localStorageService;
    private store;
    githubStar: number;
    private stopWatch$;
    constructor(gitHubService: GitHubService, localStorageService: LocalStorageService, store: Store<AppState>);
    hideGithubStar($event: Event): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GithubBadgeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GithubBadgeComponent, "tb-github-badge", never, {}, {}, never, never, false, never>;
}
