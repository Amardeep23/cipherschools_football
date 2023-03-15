import React from 'react'
import './Watch.scss'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import dog from '../../assets/video/dog.mp4'

export const Watch = () => {
  return (
    <div className='watch'>
        <div className="back">
            <KeyboardBackspaceIcon></KeyboardBackspaceIcon>
            Home
        </div>
        <video src={dog} className='video' autoPlay progress controls></video>
    </div>
  )
}
