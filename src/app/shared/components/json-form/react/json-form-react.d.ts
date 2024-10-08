import * as React from 'react';
import { JsonFormProps } from './json-form.models';
declare class ReactSchemaForm extends React.Component<JsonFormProps, {}> {
    static defaultProps: JsonFormProps;
    constructor(props: any);
    render(): React.JSX.Element;
}
export default ReactSchemaForm;
