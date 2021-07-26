import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';

import React from 'react';
import { Button, FormGroup, Spinner } from 'reactstrap';
import { Formik, Form, FastField } from 'formik';
import PropTypes from 'prop-types';
import InputField from '../../../../custom-fields/InputField/InputField';
import SelectField from '../../../../custom-fields/SelectField/SelectField';
import RandomPhotoField from '../../../../custom-fields/RandomPhotoField/RandomPhotoField';
import * as Yup from 'yup';


PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {  
  onSubmit: null,
}

function PhotoForm(props) {
    const {initialValues, isAddMode} = props;

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('This field is required'),
        categoryId: Yup.number().required('This field is required').nullable(),
        photo: Yup.string().when('categoryId', {
            is: 1,
            then: Yup.string().required('This field is required'),
            otherwise: Yup.string().notRequired(),
        })
    })
  
    return (
        <Formik
            initialValues = {initialValues}
            validationSchema = {validationSchema}
            onSubmit={props.onSubmit}
        >
            {formikProps => {

                const {values, errors, touched, isSubmitting} = formikProps;
                console.log({values, errors, touched});

                return (
                    <Form>
                        <FastField
                            name="title"
                            component={InputField}
                            
                            lable="Title"
                            placeholder="Title ..." 

                        />

                        <FastField
                            name="categoryId"
                            component={SelectField}
                            
                            lable="Category"
                            placeholder="Category ..." 
                            options={PHOTO_CATEGORY_OPTIONS}
                        />

                        <FastField
                            name="photo"
                            component={RandomPhotoField}
                            label="Photo"
                        />
                        <br/>
                        <FormGroup>
                            <Button type="submit" color={isAddMode ? "primary" : "success"}>
                                {isSubmitting && <Spinner size="sm" children=""/>}{''}

                                {isAddMode ? 'Add to album' : 'Update'}
                            </Button>
                        </FormGroup>

                    </Form>
                );
            }}
        </Formik>
    );
}

export default PhotoForm;