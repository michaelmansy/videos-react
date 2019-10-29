import axios from 'axios';

const KEY = 'AIzaSyAYA00Bu_nnPZutATktcILR3QIV1DSkQuE';

// export default axios.create({
//     baseURL: 'https://www.googleapis.com/youtube/v3',
//     params: {
//         part: 'snippet',
//         maxResults: 5,
//         key: KEY
//     }
// });


export const baseParams = {
    part: 'snippet',
    maxResults : 5,
    key: KEY
};

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: baseParams
});