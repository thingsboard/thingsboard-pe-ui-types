import { ActivatedRouteSnapshot, Router } from '@angular/router';
export declare function resolveAgentIdParam(route: ActivatedRouteSnapshot): string | undefined;
export declare function agentEntityUrl(route: ActivatedRouteSnapshot, agentId: string, ...tail: Array<string>): string;
export declare function currentAgentRouteSnapshot(router: Router): ActivatedRouteSnapshot;
