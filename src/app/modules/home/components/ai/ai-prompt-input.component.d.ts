import { ElementRef, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import * as i0 from "@angular/core";
export declare class AiPromptInputComponent {
    placeholder: string;
    loading: boolean;
    messageSent: EventEmitter<string>;
    autosize: CdkTextareaAutosize;
    textarea: ElementRef<HTMLTextAreaElement>;
    message: FormControl<string>;
    onEnter(event: Event): void;
    send(): void;
    reset(): void;
    focus(): void;
    setValue(value: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AiPromptInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AiPromptInputComponent, "tb-ai-prompt-input", never, { "placeholder": { "alias": "placeholder"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; }, { "messageSent": "messageSent"; }, never, never, false, never>;
}
