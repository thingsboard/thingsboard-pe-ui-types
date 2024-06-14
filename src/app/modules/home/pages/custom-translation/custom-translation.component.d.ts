import { ContentType } from '@shared/models/constants';
import { ActivatedRoute, Router } from '@angular/router';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class CustomTranslationComponent {
    private route;
    private router;
    private userPermissionsService;
    private fb;
    isDirty: boolean;
    readonly: boolean;
    contentType: typeof ContentType;
    mode: import("@angular/forms").FormControl<string>;
    translation: object;
    tableFullScreen: boolean;
    editorFullScreen: boolean;
    localeCode: string;
    localeName: string;
    countryName: string;
    constructor(route: ActivatedRoute, router: Router, userPermissionsService: UserPermissionsService, fb: FormBuilder);
    goBack(): void;
    changeTableFullScreen($event: boolean): void;
    changeditorFullScreen($event: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomTranslationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomTranslationComponent, "tb-custom-translation", never, {}, {}, never, never, false, never>;
}
