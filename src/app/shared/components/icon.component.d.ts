import { CanColor } from '@angular/material/core';
import { AfterContentInit, AfterViewChecked, ElementRef, ErrorHandler, OnDestroy, Renderer2 } from '@angular/core';
import { MatIconLocation, MatIconRegistry } from '@angular/material/icon';
import { ContentObserver } from '@angular/cdk/observers';
import * as i0 from "@angular/core";
declare const _TbIconBase: import("@angular/material/core")._Constructor<CanColor> & import("@angular/material/core")._AbstractConstructor<CanColor> & {
    new (_elementRef: ElementRef): {
        _elementRef: ElementRef;
    };
};
export declare class TbIconComponent extends _TbIconBase implements AfterContentInit, AfterViewChecked, CanColor, OnDestroy {
    private contentObserver;
    private renderer;
    private _iconRegistry;
    private _location;
    private readonly _errorHandler;
    _iconNameContent: ElementRef;
    private icon;
    get viewValue(): string;
    private _contentChanges;
    private _previousFontSetClass;
    _useSvgIcon: boolean;
    _svgName: string | null;
    _svgNamespace: string | null;
    private _textElement;
    private _previousPath?;
    private _elementsWithExternalReferences?;
    private _currentIconFetch;
    constructor(elementRef: ElementRef<HTMLElement>, contentObserver: ContentObserver, renderer: Renderer2, _iconRegistry: MatIconRegistry, _location: MatIconLocation, _errorHandler: ErrorHandler);
    ngAfterContentInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    private _updateIcon;
    private _updateFontIcon;
    private _clearFontIcon;
    private _updateSvgIcon;
    private _setSvgElement;
    private _clearSvgElement;
    private _cacheChildrenWithExternalReferences;
    private _prependPathToReferences;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbIconComponent, "tb-icon", ["tbIcon"], { "color": { "alias": "color"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export {};
