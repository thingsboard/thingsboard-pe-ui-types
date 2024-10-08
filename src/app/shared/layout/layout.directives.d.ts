import { LayoutAlignDirective, LayoutDirective, LayoutGapDirective, ShowHideDirective } from '@angular/flex-layout';
import * as i0 from "@angular/core";
export declare const TbBreakPointsProvider: {
    provide: import("@angular/core").InjectionToken<import("@angular/flex-layout").BreakPoint | import("@angular/flex-layout").BreakPoint[]>;
    useValue: {
        alias: string;
        mediaQuery: string;
        priority: number;
    }[];
    multi: boolean;
};
export declare class MdLgLayoutDirective extends LayoutDirective {
    protected inputs: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<MdLgLayoutDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MdLgLayoutDirective, "[fxLayout.md-lg]", never, { "fxLayout.md-lg": { "alias": "fxLayout.md-lg"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class MdLgLayoutAlignDirective extends LayoutAlignDirective {
    protected inputs: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<MdLgLayoutAlignDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MdLgLayoutAlignDirective, "[fxLayoutAlign.md-lg]", never, { "fxLayoutAlign.md-lg": { "alias": "fxLayoutAlign.md-lg"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class MdLgLayoutGapDirective extends LayoutGapDirective {
    protected inputs: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<MdLgLayoutGapDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MdLgLayoutGapDirective, "[fxLayoutGap.md-lg]", never, { "fxLayoutGap.md-lg": { "alias": "fxLayoutGap.md-lg"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class MdLgShowHideDirective extends ShowHideDirective {
    protected inputs: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<MdLgShowHideDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MdLgShowHideDirective, "[fxHide.md-lg]", never, { "fxHide.md-lg": { "alias": "fxHide.md-lg"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class GtMdLgLayoutDirective extends LayoutDirective {
    protected inputs: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<GtMdLgLayoutDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<GtMdLgLayoutDirective, "[fxLayout.gt-md-lg]", never, { "fxLayout.gt-md-lg": { "alias": "fxLayout.gt-md-lg"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class GtMdLgLayoutAlignDirective extends LayoutAlignDirective {
    protected inputs: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<GtMdLgLayoutAlignDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<GtMdLgLayoutAlignDirective, "[fxLayoutAlign.gt-md-lg]", never, { "fxLayoutAlign.gt-md-lg": { "alias": "fxLayoutAlign.gt-md-lg"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class GtMdLgLayoutGapDirective extends LayoutGapDirective {
    protected inputs: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<GtMdLgLayoutGapDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<GtMdLgLayoutGapDirective, "[fxLayoutGap.gt-md-lg]", never, { "fxLayoutGap.gt-md-lg": { "alias": "fxLayoutGap.gt-md-lg"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class GtMdLgShowHideDirective extends ShowHideDirective {
    protected inputs: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<GtMdLgShowHideDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<GtMdLgShowHideDirective, "[fxHide.gt-md-lg]", never, { "fxHide.gt-md-lg": { "alias": "fxHide.gt-md-lg"; "required": false; }; }, {}, never, never, false, never>;
}
