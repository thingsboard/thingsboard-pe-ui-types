import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class TbIotHubSearchPageComponent implements OnInit {
    private route;
    private router;
    searchText: string;
    constructor(route: ActivatedRoute, router: Router);
    ngOnInit(): void;
    navigateBack(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbIotHubSearchPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbIotHubSearchPageComponent, "tb-iot-hub-search-page", never, {}, {}, never, never, false, never>;
}
