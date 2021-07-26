import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import Banner from '../../../../components/Banner/Banner';
import Images from '../../../../constants/images';
import PhotoList from '../../components/PhotoList/PhotoList';
import { removePhoto } from '../../photoSlice';
import './MainPage.scss';

MainPage.propTypes = {
    
};

function MainPage(props) {
    const dispatch = useDispatch();
    const photos = useSelector(state => state.photos);
    localStorage.setItem('photo', JSON.stringify(photos));

    const history = useHistory();


    const handlePhotoEditClick = (photo) => {
        const editPhotoUrl = `/photos/${photo.id}`;
        history.push(editPhotoUrl);
    }

    const handlePhotoRemoveClick = (photo) => {
        console.log('Remove: ', photo);
        
        const removephotoId = photo.id;
        
        const action = removePhoto(removephotoId);
        dispatch(action);

    }

    return (
        <div className="photo-main">
           <Banner title="Your life!" backgroundUrl={Images.PINK_BG}/>
           <Container className="text-center">
               <br/>
               <Button color="success"><Link to="/photos/add">Add new photo</Link></Button>
           </Container>
            <br/>
           <PhotoList
                photoList={photos}
                onPhotoEditClick={handlePhotoEditClick}
                onPhotoRemoveClick={handlePhotoRemoveClick}
            />
        </div>
    );
}

export default MainPage;