import { OnInit } from '@angular/core';
import { ControlValueAccessor, Validator } from '@angular/forms';
import { KvMapConfigOldComponent } from '@home/components/rule-node/common/kv-map-config-old.component';
import * as i0 from "@angular/core";
export declare class KvListConfigComponent extends KvMapConfigOldComponent implements ControlValueAccessor, OnInit, Validator {
    writeValue(kvList: any): void;
    validate(): {
        kvMapRequired: boolean;
        kvFieldsRequired?: undefined;
    } | {
        kvFieldsRequired: boolean;
        kvMapRequired?: undefined;
    };
    protected updateModel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<KvListConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KvListConfigComponent, "tb-kv-list-config", never, {}, {}, never, never, false, never>;
}
