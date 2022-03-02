import React, {useState} from 'react';
import './App.css';
import {ReactFormBuilder, Registry} from 'react-form-builder2';
import 'react-form-builder2/dist/app.css';
import { TextField, IconButton, Icon } from '@workforcesoftware/lighthouse-component-library';
import FormElementsEdit from "./FormElementEdit";
const TestComponent = () => <h2>Hello</h2>;
Registry.register('TestComponent', TestComponent);

const MyInput = React.forwardRef((props, ref) => {
    const { name, defaultValue, disabled } = props;
    return <TextField ref={ref} name={name} defaultValue={defaultValue} disabled={disabled} leadingAdornment={
        <IconButton>
            <Icon icon={'search'} fontSize="small" />
        </IconButton>
    } />;
});
Registry.register('MyInput', MyInput);

const items = [{
    key: 'TestComponent',
    element: 'CustomElement',
    component: TestComponent,
    type: 'custom',
    field_name: 'test_component',
    name: 'Something You Want',
    icon: 'fa fa-cog',
    static: true,
    props: { test: 'test_comp' },
    label: 'Label Test',
}, {
    key: 'MyInput',
    element: 'CustomElement',
    component: MyInput,
    type: 'custom',
    forwardRef: true,
    field_name: 'my_input_',
    name: 'My Input',
    icon: 'fa fa-cog',
    props: { test: 'test_input' },
    label: 'Label Input',
},
// Additional standard components, you don't need full definition if no modification is required.
    {
        key: 'Header',
    }, {
        key: 'TextInput',
    }, {
        key: 'TextArea',
    }, {
        key: 'RadioButtons',
    }, {
        key: 'Checkboxes',
    }, {
        key: 'Image',
    }];

function App() {
    const data = useState([]);

    return (
       <div>
         <ReactFormBuilder
             toolbarItems={items}
             // url='data.json'
             // saveUrl='data.json'
             renderEditForm={props => <FormElementsEdit {...props}/>}
         />
       </div>
    );
}

export default App;
