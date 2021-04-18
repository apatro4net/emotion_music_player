import React from 'react'
import logo from '../logo.png'
import {useState, useEffect} from 'react';
import Player from './Player/Player';
import './Player.css'


//importing songs
  import Happier from '../songs/Happy/Tensorflow_songs_Happy_Happy.mp3';
  import Angry from '../songs/Angry/alex-productions.mp3';
  import Sad from '../songs/Sad/scott-buckle.mp3';
  import Neutral from '../songs/Neutral/Tensorflow_songs_Happy_Happy.mp3';
  import Fearful from '../songs/Fearful/glitch-process.mp3';
  import Surprised from '../songs/Surprised/Tensorflow_songs_Happy_Happy.mp3';
  import Disgusted from '../songs/Disgusted/Tensorflow_songs_Happy_Happy.mp3';

function MultiPlayer({emotion}) {

  const dict={"Happier": Happier,
  "Angry": Angry,
  "Sad": Sad,
  "Neutral": Neutral,
  "Fearful": Fearful,
  "Surprised": Surprised,
  "Disgusted": Disgusted,
}

var cur=dict[emotion]

  const [songs] = useState([
    {
      title: "Forget me too ft. Halsey",
      artist: emotion,
      img_src: logo,
      src: cur
    },  
    {
      title: "Song 2",
      artist: "Artist 2",
      img_src: "./images/song-2.jpg",
      src: "./music/somebody-new.mp3"
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      img_src: "./images/song-3.jpg",
      src: "./music/on-n-on.mp3"
    },
    {
      title: "Song 4",
      artist: "Artist 4",
      img_src: "./images/song-4.jpg",
      src: "./music/somebody-new.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="playercontainer">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
        srrc={cur}
        dd={emotion}
      />
    </div>
  );
}

export default MultiPlayer

