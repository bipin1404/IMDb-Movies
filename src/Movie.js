import React from 'react';
import PropTypes from 'prop-types';

const Movie = props => (
    <div className="movie">
      <figure>
        <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${props.poster_path}`} />
        <figcaption>
          <h2 className="movie__title">{props.title}</h2>
        </figcaption>
      </figure>
    </div>
  );
  
  Movie.propTypes = {
    id         : PropTypes.number.isRequired,
    title      : PropTypes.string.isRequired,
    poster_path: PropTypes.string
  };
  
  export default Movie;