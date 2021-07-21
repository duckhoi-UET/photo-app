import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';
import Images from '../../../../constants/images';

import React from 'react';
import { Button, FormGroup, Label } from 'reactstrap';
import { Formik, Form, FastField } from 'formik';
import PropTypes from 'prop-types';
import InputField from '../../../../custom-fields/InputField/InputField';
import SelectField from '../../../../custom-fields/SelectField/SelectField';


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

                        

                        <FormGroup>
                            <Label for="categoryId">Photo</Label>
                            <div><Button type="button" outline color="primary">Random a photo</Button></div>
                            <div>
                                <img width="200px" height="200px" src={Images.COLORFUL_BG} alt="colorful"/>
                            </div>
                        </FormGroup>

                        <FormGroup>
                            <Button color="primary">Add to album</Button>
                        </FormGroup>

                    </Form>
                );
            }}
        </Formik>
    );
}

export default PhotoForm;