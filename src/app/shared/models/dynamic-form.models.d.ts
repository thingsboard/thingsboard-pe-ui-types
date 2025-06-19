import { CustomTranslatePipe } from '@shared/pipe/custom-translate.pipe';
import { TbEditorCompletion, TbEditorCompletions } from '@shared/models/ace/completion.models';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
export declare enum FormPropertyType {
    text = "text",
    number = "number",
    password = "password",
    textarea = "textarea",
    switch = "switch",
    select = "select",
    radios = "radios",
    datetime = "datetime",
    image = "image",
    javascript = "javascript",
    json = "json",
    html = "html",
    css = "css",
    markdown = "markdown",
    color = "color",
    color_settings = "color_settings",
    font = "font",
    units = "units",
    icon = "icon",
    fieldset = "fieldset",
    array = "array",
    htmlSection = "htmlSection"
}
export declare const formPropertyTypes: FormPropertyType[];
export declare const formPropertyTypeTranslations: Map<FormPropertyType, string>;
export declare const formPropertyRowClasses: string[];
export declare const formPropertyFieldClasses: string[];
export type PropertyConditionFunction = (property: FormProperty, model: any) => boolean;
export interface FormPropertyBase {
    id: string;
    name: string;
    hint?: string;
    group?: string;
    type: FormPropertyType;
    default: any;
    required?: boolean;
    subLabel?: string;
    divider?: boolean;
    fieldSuffix?: string;
    disableOnProperty?: string;
    condition?: string;
    conditionFunction?: PropertyConditionFunction;
    disabled?: boolean;
    visible?: boolean;
    rowClass?: string;
    fieldClass?: string;
}
export interface FormTextareaProperty extends FormPropertyBase {
    rows?: number;
}
export interface FormNumberProperty extends FormPropertyBase {
    min?: number;
    max?: number;
    step?: number;
}
export interface FormFieldSetProperty extends FormPropertyBase {
    properties?: FormProperty[];
}
export interface FormArrayProperty extends FormPropertyBase {
    arrayItemName?: string;
    arrayItemType?: FormPropertyType;
}
export interface FormSelectItem {
    value: any;
    label: string;
}
export interface FormSelectProperty extends FormPropertyBase {
    multiple?: boolean;
    allowEmptyOption?: boolean;
    items?: FormSelectItem[];
    minItems?: number;
    maxItems?: number;
}
export type FormPropertyDirection = 'row' | 'column';
export interface FormRadiosProperty extends FormPropertyBase {
    direction?: FormPropertyDirection;
    items?: FormSelectItem[];
}
export type FormPropertyDateTimeType = 'date' | 'time' | 'datetime';
export interface FormDateTimeProperty extends FormPropertyBase {
    allowClear?: boolean;
    dateTimeType?: FormPropertyDateTimeType;
}
export interface FormJavascriptProperty extends FormPropertyBase {
    helpId?: string;
}
export interface FormMarkdownProperty extends FormPropertyBase {
    helpId?: string;
}
export interface FormHtmlSection extends FormPropertyBase {
    htmlClassList?: string[];
    htmlContent?: string;
}
export interface FormUnitProperty extends FormPropertyBase {
    supportsUnitConversion?: boolean;
}
export type FormProperty = FormPropertyBase & FormTextareaProperty & FormNumberProperty & FormSelectProperty & FormRadiosProperty & FormDateTimeProperty & FormJavascriptProperty & FormMarkdownProperty & FormFieldSetProperty & FormArrayProperty & FormHtmlSection & FormUnitProperty;
export declare const cleanupFormProperties: (properties: FormProperty[]) => FormProperty[];
export declare const cleanupFormProperty: (property: FormProperty) => FormProperty;
export declare enum FormPropertyContainerType {
    field = "field",
    row = "row",
    fieldset = "fieldset",
    array = "array",
    htmlSection = "htmlSection"
}
export interface FormPropertyContainerBase {
    type: FormPropertyContainerType;
    label: string;
    visible: boolean;
}
export interface FormPropertyRow extends FormPropertyContainerBase {
    hint?: string;
    properties?: FormProperty[];
    switch?: FormProperty;
    rowClass?: string;
    propertiesRowClass?: string;
}
export interface FormPropertyField extends FormPropertyContainerBase {
    property?: FormProperty;
}
export interface FormPropertyFieldset extends FormPropertyContainerBase {
    property?: FormProperty;
    properties?: FormProperty[];
}
export interface FormPropertyArray extends FormPropertyContainerBase {
    property?: FormProperty;
    arrayItemProperty?: FormProperty;
}
export interface FormPropertyHtml extends FormPropertyContainerBase {
    property?: FormProperty;
    safeHtml?: SafeHtml;
    htmlClass?: string;
}
export type FormPropertyContainer = FormPropertyField & FormPropertyRow & FormPropertyFieldset & FormPropertyHtml;
export interface FormPropertyGroup {
    title?: string;
    containers: FormPropertyContainer[];
    visible: boolean;
}
export declare const toPropertyGroups: (properties: FormProperty[], isArrayItem: boolean, customTranslate: CustomTranslatePipe, sanitizer: DomSanitizer) => FormPropertyGroup[];
export declare const isPropertyTypeAllowedForRow: (type: FormPropertyType) => boolean;
export declare const isSingleFieldPropertyType: (type: FormPropertyType) => boolean;
export declare const isInputFieldPropertyType: (type: FormPropertyType) => boolean;
export declare const defaultFormProperties: (properties: FormProperty[]) => {
    [id: string]: any;
};
export declare const defaultFormPropertyValue: (property: FormProperty) => any;
export declare const propertyValid: (property: FormProperty) => boolean;
export declare const defaultPropertyValue: (type: FormPropertyType) => any;
export declare const formPropertyCompletions: (properties: FormProperty[], customTranslate: CustomTranslatePipe) => TbEditorCompletions;
export declare const formPropertyCompletion: (property: FormProperty, customTranslate: CustomTranslatePipe) => TbEditorCompletion;
export declare const jsonFormSchemaToFormProperties: (rawSchema: string | any) => FormProperty[];
