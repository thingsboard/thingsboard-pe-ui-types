import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class KeyboardShortcutPipe implements PipeTransform {
    private window;
    constructor(window: Window);
    transform(value: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<KeyboardShortcutPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<KeyboardShortcutPipe, "keyboardShortcut", false>;
}
