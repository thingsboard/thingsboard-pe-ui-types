import { ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class WidgetsBundleSearchComponent implements ControlValueAccessor {
    searchText: string;
    focus: boolean;
    placeholder: string;
    searchInput: ElementRef<HTMLInputElement>;
    private propagateChange;
    constructor();
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(value: string | null): void;
    updateSearchText(): void;
    private updateView;
    clear($event: Event): void;
    toggleFocus(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetsBundleSearchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetsBundleSearchComponent, "tb-widgets-bundle-search", never, { "placeholder": { "alias": "placeholder"; "required": false; }; }, {}, never, never, false, never>;
}
