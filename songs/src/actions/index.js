// Action Creator

// name exports: could export multiple function/class from a single file
export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',   //required
        payload: song
    };
};




 