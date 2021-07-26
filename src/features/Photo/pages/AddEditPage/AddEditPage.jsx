import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Banner from '../../../../components/Banner/Banner';
import PhotoForm from '../../components/PhotoForm/PhotoForm';
import { addPhoto, updatePhoto } from '../../photoSlice';
import './AddEditPage.scss';

AddEditPage.propTypes = {
    
};

function AddEditPage(props) {

    const dispatch = useDispatch();
    const history = useHistory();
    const { photoId } = useParams();
    const isAddMode = !photoId;

   

    const editedPhoto = useSelector(state => {
        const foundPhoto = state.photos.find(x => x.id === +photoId);
        
        return foundPhoto;
    })
    
    const initialValues = isAddMode
        ?{
            title: '',
            categoryId: null,
            photo: '',
        }
        :editedPhoto;
    const key = Math.floor(Math.random() * 10000);

    const handleSubmit = (values) => {
        return new Promise(resolve => {  
            setTimeout(() => {
                if(isAddMode) {
                    const newPhoto = {
                        ...values,
                        id: key,
                    }
                    const action = addPhoto(newPhoto);
                    console.log({action});
                    dispatch(action);
                }
                else {
                    const action = updatePhoto(values);
                    dispatch(action);
                }
                history.push('/photos');
                resolve(true);
            }, 1000);
        })
        
        
    }

    return (
        <div className="photo-edit">
           <Banner title="Pick your photo " />
           <div className="photo-edit__form">
                <PhotoForm 
                    isAddMode={isAddMode}
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                />
           </div>
        </div>
    );
}

export default AddEditPage;