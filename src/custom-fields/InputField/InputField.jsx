import React from 'react';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import { ErrorMessage } from 'formik';


InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    lable: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

InputField.defaultProps = {
    type: 'text',
    lable: '',
    placeholder: '',
    disabled: false,
};

function InputField(props) {
    const {field, type, lable, placeholder, disabled, form} = props;
    const {name, value, onChange, onBlur} = field;

    const {errors, touched} = form;
    const showError = errors[name] && touched[name];

    return (
        <FormGroup>
            {lable && <Label for={name}>{lable}</Label>}
            <Input 
                name={name} 
                id={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur} 
                placeholder={placeholder}
                type={type}
                disabled={disabled}

                invalid={showError}
            />
            {/* {showError && <FormFeedback>{errors[name]}</FormFeedback>} */}
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
}

export default InputField;