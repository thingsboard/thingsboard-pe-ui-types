import * as React from 'react';
import { JsonFormData, JsonFormProps, onChangeFn, OnColorClickFn, onHelpClickFn, OnIconClickFn, onToggleFullscreenFn } from './json-form.models';
import tinycolor from 'tinycolor2';
import { MouseEvent } from 'react';
declare class ThingsboardSchemaForm extends React.Component<JsonFormProps, any> {
    private hasConditions;
    private conditionFunction;
    private readonly mapper;
    constructor(props: JsonFormProps);
    onChange(key: (string | number)[], val: any, forceUpdate?: boolean): void;
    onColorClick(key: (string | number)[], val: tinycolor.ColorFormats.RGBA, colorSelectedFn: (color: tinycolor.ColorFormats.RGBA) => void): void;
    onIconClick(key: (string | number)[], val: string, iconSelectedFn: (icon: string) => void): void;
    onToggleFullscreen(fullscreenFinishFn?: (el: Element) => void): void;
    onHelpClick(event: MouseEvent, helpId: string, helpVisibleFn: (visible: boolean) => void, helpReadyFn: (ready: boolean) => void): void;
    builder(form: JsonFormData, model: any, index: number, onChange: onChangeFn, onColorClick: OnColorClickFn, onIconClick: OnIconClickFn, onToggleFullscreen: onToggleFullscreenFn, onHelpClick: onHelpClickFn, isHelpEnabled: boolean, mapper: {
        [type: string]: any;
    }): React.JSX.Element;
    createSchema(theForm: any[]): React.JSX.Element;
    render(): React.JSX.Element;
}
export default ThingsboardSchemaForm;
