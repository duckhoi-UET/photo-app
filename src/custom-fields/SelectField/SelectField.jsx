import React from 'react';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import Select from 'react-select';
import { ErrorMessage } from 'formik';

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    lable: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array,
}

SelectField.defaultProps = {
    lable: '',
    placeholder: '',
    disabled: false,
    options: [],
};

function SelectField(props) {
    const {field, lable, placeholder, disabled, options, form} = props;
    const {name, value, onBlur} = field;

    const {errors, touched} = form;
    const showError = errors[name] && touched[name];

    const selectedOption = options.find(option => option.value === value)

    const handleSelectedOptionChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;

        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        };
        field.onChange(changeEvent);
    }
    return (
        <FormGroup>
            {lable && <Label for={name}>{lable}</Label>}
            <Select 
                id={name}
                name={name}
                value={selectedOption}
                onChange={handleSelectedOptionChange}
                onBlur={onBlur}
                placeholder={placeholder}
                isDisabled={disabled}
                options = {options}

                className={showError ? 'is-invalid' : ''}
            />
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup> 
    );
}

export default SelectField;