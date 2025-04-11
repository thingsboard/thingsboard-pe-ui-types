import { OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormGroup, UntypedFormBuilder } from '@angular/forms';
import { EntityService } from '@app/core/http/entity.service';
import { EntityType } from '@app/shared/models/entity-type.models';
import { EntityId } from '@shared/models/id/entity-id';
import * as i0 from "@angular/core";
export declare class TargetEntityComponent implements ControlValueAccessor, OnInit, OnDestroy {
    private fb;
    private entityService;
    allowedGroupTypes: Array<EntityType>;
    isTypeSelected: boolean;
    private propagateChange;
    targetEntityControlGroup: FormGroup;
    private destroy$;
    constructor(fb: UntypedFormBuilder, entityService: EntityService);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnDestroy(): void;
    writeValue(entityId: EntityId): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TargetEntityComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TargetEntityComponent, "tb-target-entity", never, { "allowedGroupTypes": { "alias": "allowedGroupTypes"; "required": false; }; "isTypeSelected": { "alias": "isTypeSelected"; "required": false; }; }, {}, never, never, false, never>;
}
