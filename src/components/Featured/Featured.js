import React from "react";
import landing_sample from "../../assets/img/landing_sample.jpg";
import "./Featured.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import fifa from '../../assets/img/fifa.jpg'

export const Featured = ({type}) => {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>
                    {type === 'movie' ? "Movies": "Series"}
                    <select name="genre" id="genre">
                        <option value="Genre">Genre</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Crime">Crime</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Historical">Historical</option>
                        <option value="Horror">Horror</option>
                        <option value="Romance">Romance</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Western">Western</option>
                        <option value="Animation">Animation</option>
                        <option value="Drama">Drama</option>
                        <option value="Documentry">Documentry</option>
                    </select>
                </span>
            </div>
        )}
      <img src={landing_sample} alt="" className="landing_sample" />
      <div className="info">
        <img src={fifa} alt="" className="fifa" />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eum
          sint iusto nam velit iure, reiciendis itaque neque quidem illum id
          eaque assumenda dolor iste maxime possimus est libero. Ducimus? Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Temporibus facere
          earum repellendus asperiores deleniti porro in, amet commodi maxime
          aspernatur iste quasi. Doloremque modi ut sit libero sunt! Officia,
          commodi!
        </span>
        <div className="buttons">
            <button className="play">
                <PlayArrowIcon style={{marginRight:'4px'}}></PlayArrowIcon>
                <span>Play</span>
            </button>
            <button className="more">
                <InfoOutlinedIcon style={{marginRight:'4px'}}></InfoOutlinedIcon>
                <span>Info</span>
            </button>
        </div>
      </div>
    </div>
  );
};
