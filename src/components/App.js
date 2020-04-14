import React from "react"
import Searchbar from "./SearchBar"
import youtube from "../APIs/youtube"
import VideoList from "./VideoList"
import Menu from "./Menu"
import VideoDetail from "./VideoDetail"

const KEY = "AIzaSyDzQWZ56mmoOufOVFMxLpIaWM4yLvG1V-s"

class App extends React.Component {
  state = { videos: [], selectedVideo: null }

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: `${KEY}`,
      },
    })
    this.setState({ videos: response.data.items })
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className="ui container">
        <Menu />
        <Searchbar onFormSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    )
  }
}

export default App