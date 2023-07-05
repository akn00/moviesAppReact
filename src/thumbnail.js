import React, { useState, useEffect, useRef } from "react";
import Modal from '@material-ui/core/Modal';

const MovieThumbnail = ({ movie }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleThumbnailClick = () => {
    // Open the modal
    handleOpen();
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        // Clicked outside the modal, so close it
        handleClose();
      }
      setIsExpanded(false);
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      className={`thumbnail ${isExpanded ? "expanded" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleThumbnailClick}
    >
      {/* Modal */}
      <Modal
        onClose={handleClose}
        open={open}
      >
        <div ref={modalRef} className="modalComponent">
          <h1>{movie.Title}</h1>
          <img
            src={movie.Images}
            alt={movie.Title}
            style={{ width: '350px', height: '150px' }}
          />
          <div className="A">
          <p className="A1">Rated: {movie.Rated}</p>
          <p className="A2">Year: {movie.Year}</p>
          <p className="A3">Released: {movie.Released}</p>
          <p className="A4">Runtime: {movie.Runtime}</p>
          </div>
          <div className="B">
          <p className="B1">Genre: {movie.Genre}</p>
          <p className="B2">Director: {movie.Director}</p>
          <p className="B3">Writer: {movie.Writer}</p>
          </div>
          <p>Actors: {movie.Actors}</p>
          <p>Plot: {movie.Plot}</p>
          <p>Language: {movie.Language}</p>
          <p>Country: {movie.Country}</p>
          <p>Awards: {movie.Awards}</p>

        </div>
      </Modal>

      {/* Rest of the code */}
      <div className={isExpanded ? "movie-name" : "hidden"}>
        <p className="title">{movie.Title}</p>
        <div className="abc">
          <p className="rated">{movie.Rated}</p>
          <p className="year">{movie.Year}</p>
          <p className="runtime">{movie.Runtime}</p>
        </div>
      </div>

      <img
        className="poster"
        src={isExpanded ? movie.Images : movie.Poster}
        alt={movie.Title}
      />
      <h5>{movie.Title}</h5>
    </div>
  );
};

export default MovieThumbnail;
