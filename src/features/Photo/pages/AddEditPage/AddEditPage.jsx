import React from 'react';
import Banner from '../../../../components/Banner/Banner';
import PhotoForm from '../../components/PhotoForm/PhotoForm';
import './AddEditPage.scss';

AddEditPage.propTypes = {
    
};

function AddEditPage(props) {
    return (
        <div className="photo-edit">
           <Banner title="Pick your photo " />
           <div className="photo-edit__form">
                <PhotoForm />
           </div>
        </div>
    );
}

export default AddEditPage;