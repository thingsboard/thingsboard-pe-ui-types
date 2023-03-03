import { ControlValueAccessor } from '@angular/forms';
import { EntityAliasFilter } from '@shared/models/alias.models';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class EntityFilterViewComponent implements ControlValueAccessor {
    private translate;
    constructor(translate: TranslateService);
    filterDisplayValue: string;
    filter: EntityAliasFilter;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    writeValue(filter: EntityAliasFilter): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityFilterViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityFilterViewComponent, "tb-entity-filter-view", never, {}, {}, never, never, false, never>;
}
