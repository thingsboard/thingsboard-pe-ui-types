import * as React from 'react';
import { JsonFormFieldProps, JsonFormFieldState } from '@shared/components/json-form/react/json-form.models';
import { Observable } from 'rxjs/internal/Observable';
declare class ThingsboardJavaScript extends React.Component<JsonFormFieldProps, JsonFormFieldState> {
    constructor(props: JsonFormFieldProps);
    onTidyJavascript(javascript: string): Observable<string>;
    render(): React.JSX.Element;
}
export default ThingsboardJavaScript;
