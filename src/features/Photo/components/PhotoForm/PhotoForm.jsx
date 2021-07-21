import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';
import Images from '../../../../constants/images';
import Select from 'react-select';
import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';


PhotoForm.propTypes = {
  
};

PhotoForm.defaultProps = {
  
}

function PhotoForm(props) {
  
    return (
        <Form>
            <FormGroup>
                <Label for="titleId">Title</Label>
                <Input name="title" id="titleId" placeholder="Title ..." />
            </FormGroup>

            <FormGroup>
                <Label for="categoryId">Category</Label>
                <Select 
                    id="categoryId"
                    name="categoryId"

                    placeholder="Category ..."
                    options = {PHOTO_CATEGORY_OPTIONS}
                />
            </FormGroup> 

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
}

export default PhotoForm;