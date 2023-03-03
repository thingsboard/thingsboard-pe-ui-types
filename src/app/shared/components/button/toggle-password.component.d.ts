import { AfterViewInit, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TogglePasswordComponent implements AfterViewInit {
    private hostElement;
    showPassword: boolean;
    hideToggle: boolean;
    private input;
    constructor(hostElement: ElementRef);
    togglePassword($event: Event): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TogglePasswordComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TogglePasswordComponent, "tb-toggle-password", never, {}, {}, never, never, false, never>;
}
