import { PipeTransform } from '@angular/core';
import { KeyValue } from '@angular/common';
import * as i0 from "@angular/core";
export declare class KeyValueIsNotEmptyPipe implements PipeTransform {
    private differs;
    private differ;
    private keyValues;
    transform(input: Record<string, unknown>): Array<KeyValue<string, unknown>>;
    private makeKeyValuePair;
    static ɵfac: i0.ɵɵFactoryDeclaration<KeyValueIsNotEmptyPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<KeyValueIsNotEmptyPipe, "keyValueIsNotEmpty", true>;
}
