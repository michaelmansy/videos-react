import React from 'react';
import SearchBar from './SearchBar';
import youtube, { baseParams } from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{

    //defining the properties of our state
    state = {videos:[], selectedVideo: null};

    onTermSubmit = async (term) => {
        // youtube.get('/search', {
        //     params: {
        //         q: term
        //     }
        // });
        
        const response = await youtube.get('/search', {
            params: {
                ...baseParams,
                q: term
            }
        });

        //console.log(response);
        this.setState({videos: response.data.items});
    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        );
    }
}

export default App;