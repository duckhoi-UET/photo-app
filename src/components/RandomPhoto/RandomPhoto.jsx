import React from 'react';
import PropTypes from 'prop-types';
import './RandomPhoto.scss';
import { Button } from 'reactstrap';


RandomPhoto.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    onImageUrlChange: PropTypes.func,
    onRandomButtonBlur: PropTypes.func,
    clName: PropTypes.string,
};

RandomPhoto.defaultProps = {
    name: '',
    imageUrl: '',
    onImageUrlChange: null,
    onRandomButtonBlur: null,
    clName: null,
}

const getRandomImageUrl = () => {
    const randomId = Math.trunc(Math.random() * 2000);
    return `https://picsum.photos/id/${randomId}/300/300`;
};

function RandomPhoto(props) {
    const {name, imageUrl, onImageUrlChange, onRandomButtonBlur, clName} = props;

    const handleRandomPhotoClick = async () => {
        if(onImageUrlChange) {
            const randomImageUrl = getRandomImageUrl();
            onImageUrlChange(randomImageUrl);
        }
    };
    return (
        <div className={clName + " random-photo"} >
            <div className="random-photo__button">
                <Button
                    outline
                    name={name}
                    color="primary"
                    onBlur={onRandomButtonBlur}
                    onClick={handleRandomPhotoClick}
                >
                    Random a photo
                </Button>
            </div>

            <div className="random-photo__photo">
                {imageUrl && (
                    <img src={imageUrl} 
                        alt='Ooop... Not found, please click again!'
                        
                    />
                )}
            </div>
        </div>
    );
}

export default RandomPhoto;