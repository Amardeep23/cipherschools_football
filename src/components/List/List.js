import React, {useRef, useState} from 'react'
import './List.scss';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { ListItems } from './../ListItems/ListItems';

export const List = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsmoved] = useState(false)
  const listRef = useRef();

  const handleClick = (direction) => {
    setIsmoved(true)
    let distance = listRef.current.getBoundingClientRect().x - 50   //useful function gives info about the ref height, width, x, y
    if(direction === 'left' && slideNumber > 0){
      setSlideNumber(slideNumber-1)
      listRef.current.style.transform = `translateX(${230 + distance}px)`
    }
    if(direction === 'right' && slideNumber< 5){
      setSlideNumber(slideNumber + 1)
      listRef.current.style.transform = `translateX(${-230 + distance}px)`
    }
  }
  return (
    <div className='list'>
        <sapn className="listTitle">Continue to watch</sapn>
        <div className="wrapper">
            <ArrowBackIosNewOutlinedIcon className='sliderArrow left'style={{display: !isMoved && 'none'}} onClick={()=>handleClick("left")}></ArrowBackIosNewOutlinedIcon>
            <div className="container" ref = {listRef}>
                <ListItems index={0}></ListItems>
                <ListItems index={1}></ListItems>
                <ListItems index={2}></ListItems>
                <ListItems index={3}></ListItems>
                <ListItems index={4}></ListItems>
                <ListItems index={5}></ListItems>
                <ListItems index={6}></ListItems>
                <ListItems index={7}></ListItems>
                <ListItems index={8}></ListItems>
                <ListItems index={9}></ListItems>
            </div>
            <ArrowForwardIosOutlinedIcon className='sliderArrow right' onClick={()=>handleClick("right")}></ArrowForwardIosOutlinedIcon>
        </div>
    </div>
  )
}
