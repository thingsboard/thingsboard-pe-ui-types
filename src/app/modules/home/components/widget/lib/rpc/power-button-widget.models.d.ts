import { BackgroundSettings } from '@shared/models/widget-settings.models';
import { GetValueSettings, SetValueSettings } from '@shared/models/action-widget-settings.models';
import { Circle, Element, G, Path, Svg, Text, Timeline } from '@svgdotjs/svg.js';
import '@svgdotjs/svg.filter.js';
import { WidgetContext } from '@home/models/widget-component.models';
import { Observable } from 'rxjs';
import { MatIconRegistry } from '@angular/material/icon';
export declare enum PowerButtonLayout {
    default = "default",
    simplified = "simplified",
    outlined = "outlined",
    default_volume = "default_volume",
    simplified_volume = "simplified_volume",
    outlined_volume = "outlined_volume",
    default_icon = "default_icon",
    simplified_icon = "simplified_icon",
    outlined_icon = "outlined_icon"
}
export declare const powerButtonLayouts: PowerButtonLayout[];
export declare const powerButtonLayoutTranslations: Map<PowerButtonLayout, string>;
export declare const powerButtonLayoutImages: Map<PowerButtonLayout, string>;
export interface ButtonIconSettings {
    showIcon: boolean;
    iconSize: number;
    iconSizeUnit: string;
    icon: string;
}
export interface PowerButtonWidgetSettings {
    initialState?: GetValueSettings<boolean>;
    disabledState?: GetValueSettings<boolean>;
    onUpdateState?: SetValueSettings;
    offUpdateState?: SetValueSettings;
    layout: PowerButtonLayout;
    onButtonIcon: ButtonIconSettings;
    offButtonIcon: ButtonIconSettings;
    mainColorOn: string;
    backgroundColorOn: string;
    mainColorOff: string;
    backgroundColorOff: string;
    mainColorDisabled: string;
    backgroundColorDisabled: string;
    background?: BackgroundSettings;
    padding?: string;
}
export declare const powerButtonDefaultSettings: PowerButtonWidgetSettings;
interface PowerButtonColor {
    hex: string;
    opacity: number;
}
type PowerButtonState = 'on' | 'off' | 'disabled';
interface PowerButtonColorState {
    mainColor: PowerButtonColor;
    backgroundColor: PowerButtonColor;
}
interface ButtonsIconSettings {
    onButtonIcon: ButtonIconSettings;
    offButtonIcon: ButtonIconSettings;
}
type PowerButtonShapeColors = Record<PowerButtonState, PowerButtonColorState>;
export declare const powerButtonShapeSize = 110;
export declare abstract class PowerButtonShape {
    protected widgetContext: WidgetContext;
    protected svgShape: Svg;
    protected iconRegistry: MatIconRegistry;
    protected settings: PowerButtonWidgetSettings;
    protected value: boolean;
    protected disabled: boolean;
    protected onClick: () => void;
    static fromSettings(ctx: WidgetContext, svgShape: Svg, iconRegistry: MatIconRegistry, settings: PowerButtonWidgetSettings, value: boolean, disabled: boolean, onClick: () => void): PowerButtonShape;
    protected readonly colors: PowerButtonShapeColors;
    protected readonly icons: ButtonsIconSettings;
    protected readonly onLabel: string;
    protected readonly offLabel: string;
    protected backgroundShape: Circle;
    protected hoverShape: Circle;
    protected hovered: boolean;
    protected pressed: boolean;
    protected forcePressed: boolean;
    protected offPowerSymbolIcon: Element;
    protected onPowerSymbolIcon: Element;
    protected offLabelShape: Text;
    protected onLabelShape: Text;
    protected offPowerSymbolCircle: Path;
    protected offPowerSymbolLine: Path;
    protected onPowerSymbolCircle: Path;
    protected onPowerSymbolLine: Path;
    protected constructor(widgetContext: WidgetContext, svgShape: Svg, iconRegistry: MatIconRegistry, settings: PowerButtonWidgetSettings, value: boolean, disabled: boolean, onClick: () => void);
    createIconElement(icon: string, size: number): Observable<Element>;
    setValue(value: boolean): void;
    setDisabled(disabled: boolean): void;
    setPressed(pressed: boolean): void;
    drawOffShape(centerGroup: G, label: boolean, labelWeight?: string, circleStroke?: boolean): void;
    drawOnShape(onCenterGroup?: G, label?: boolean, labelWeight?: string, circleStroke?: boolean, mask?: Circle): void;
    onCenterTimeLine(timeline: Timeline, label: boolean): void;
    offCenterColor(mainColor: PowerButtonColor, label: boolean): void;
    onCenterColor(mainColor: PowerButtonColor, label: boolean): void;
    buttonAnimation(scale: number, label: boolean): void;
    private _drawShape;
    private _cancelPressed;
    private _drawState;
    private drawBackgroundState;
    protected drawShape(): void;
    protected drawColorState(_mainColor: PowerButtonColor): void;
    protected drawOff(): void;
    protected drawOn(): void;
    protected onPressStart(): void;
    protected onPressEnd(): void;
    protected createMask(shape: Element, maskElements: Element[]): void;
    protected createOnLabel(fontWeight?: string): Text;
    protected createOffLabel(fontWeight?: string): Text;
    private createLabel;
}
export {};
