import React, { Component } from 'react';
import ReactPlayer from 'react-player';


class Videostream extends Component {   
    state = {
        url: null,
        playing: true,
        volume: 0.8,
        muted: false,
        played: 0,
        loaded: 0,
        duration: 0,
        playbackRate: 1.0,
        loop: false
      }
    load = url => {
        this.setState({
          url,
          played: 0,
          loaded: 0
        })
    }
    render () {
      const { url, volume } = this.state
      return (
        <div className='player-wrapper'>
            <ReactPlayer
              ref={this.ref}
              className='react-player'
              width='900px'
              height='500px'
              url={url}
              volume={volume}
            />
          <tr className="dongduoi12">
              <th>MY URL:</th>
              <td>
                <input ref={input => { this.urlInput = input }} type='text' placeholder='Nhập URL' className='nhapurl'/>
                <button className='nuturl' onClick={() => this.setState({ url: this.urlInput.value })}>Load</button>
              </td>
            </tr>
        </div>
      )
    }
  }

export default Videostream;
