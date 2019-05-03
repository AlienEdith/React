import { combineReducers } from 'redux';
// Reducers

const SongsReducer = () => {
    return [
        {title: 'Knock Knock', duration: '3:40'},
        {title: 'TT', duration: '4:20'},
        {title: 'Yes or Yes', duration: '4:40'},
        {title: 'Heart Shaker', duration: '3:45'},
    ]
}

 const SelectedSongReducer = (selectSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectSong;
}

export default combineReducers({
    songs: SongsReducer,    // key show up in state object
    selectedSong: SelectedSongReducer
})