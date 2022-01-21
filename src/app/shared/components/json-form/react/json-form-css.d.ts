import * as React from 'react';
import { JsonFormFieldProps, JsonFormFieldState } from '@shared/components/json-form/react/json-form.models';
import { Observable } from 'rxjs/internal/Observable';
declare class ThingsboardCss extends React.Component<JsonFormFieldProps, JsonFormFieldState> {
    constructor(props: any);
    onTidyCss(css: string): Observable<string>;
    render(): JSX.Element;
}
export default ThingsboardCss;
