import { createSlice } from "@reduxjs/toolkit";

const initialPhotos = JSON.parse(localStorage.getItem('photo'));

const photo = createSlice({
    name: 'photo',
    initialState: initialPhotos,
    reducers: {
        addPhoto: (state, action) => {
          state.push(action.payload)
        },
        removePhoto: (state, action) => {
          const removePhotoId = action.payload;
          state = state.filter(photo => photo.id !== removePhotoId);
          return state;
        },
        updatePhoto: (state, action) => {
          const newPhoto = action.payload;
          const photoIndex = state.findIndex(photo => photo.id === newPhoto.id);

          if(photoIndex >= 0) {
            state[photoIndex] = newPhoto;
          }
        }
    }
});

const {reducer, actions } =  photo;
export const {addPhoto, removePhoto, updatePhoto} = actions;
export default reducer;