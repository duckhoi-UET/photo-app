import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';

import React from 'react';
import { Button, FormGroup } from 'reactstrap';
import { Formik, Form, FastField } from 'formik';
import PropTypes from 'prop-types';
import InputField from '../../../../custom-fields/InputField/InputField';
import SelectField from '../../../../custom-fields/SelectField/SelectField';
import RandomPhotoField from '../../../../custom-fields/RandomPhotoField/RandomPhotoField';


PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {  
  onSubmit: null,
}

function PhotoForm(props) {
    const initialValues={
        title: '',
        categoryId: null,
    };
  
    return (
        <Formik
            initialValues = {initialValues}
            onSubmit={values => console.log('Submit: ', values)}
        >
            {formikProps => {

                const {values, errors, touched} = formikProps;
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
                            <Button type="submit" color="primary">Add to album</Button>
                        </FormGroup>

                    </Form>
                );
            }}
        </Formik>
    );
}

export default PhotoForm;