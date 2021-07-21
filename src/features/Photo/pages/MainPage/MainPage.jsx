import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import Banner from '../../../../components/Banner/Banner';
import Images from '../../../../constants/images';
import './MainPage.scss';

MainPage.propTypes = {
    
};

function MainPage(props) {
    return (
        <div className="photo-main">
           <Banner title="Your life!" backgroundUrl={Images.PINK_BG}/>
           <Container className="text-center">
               <br/>
               <Button color="success"><Link to="/photos/add">Add new photo</Link></Button>
           </Container>
        </div>
    );
}

export default MainPage;