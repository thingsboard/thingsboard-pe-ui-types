import { RequestConfig } from './http-utils';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class GitHubService {
    private http;
    constructor(http: HttpClient);
    getGitHubStar(config?: RequestConfig): Observable<number>;
    static ɵfac: i0.ɵɵFactoryDeclaration<GitHubService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GitHubService>;
}
