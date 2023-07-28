import React, { useState, useEffect, useRef } from "react";
import Modal from '@material-ui/core/Modal';

export default function GlobalLayout({ movie }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [open, setOpen] = useState(false);
    const modalRef = useRef(null);
    const [isClicked, setIsClicked] = useState(false);

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
        handleOpen();
    };

    const handleFavoriteClick = (event) => {
        event.stopPropagation();

        const favorites = localStorage.getItem('favorites');
        let favoritesArray = [];

        if (favorites) {
            favoritesArray = JSON.parse(favorites);
        }

        const index = favoritesArray.indexOf(movie.Title);
        if (index > -1) {
            // Remove from favorites
            favoritesArray.splice(index, 1);
        } else {
            // Add to favorites
            favoritesArray.push(movie.Title);
        }

        localStorage.setItem('favorites', JSON.stringify(favoritesArray));


        setIsClicked(!isClicked);
    };

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites.forEach((title) => {
            // console.log(title)
            if (movie.Title === title) {
                setIsClicked(!isClicked);
            }
        });
    }, []);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
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
        <div className="global-thumbnail"
        onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleThumbnailClick}>
            

            

            <Modal onClose={handleClose} open={open}>
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

            <div className="global-poster">
            <div className={isExpanded ? "global-movie-hover-details" : "hidden"}>
                <p className="title">{movie.Title}</p>
                <div className="abc">
                    <p className="rated">{movie.Rated}</p>
                    <p className="year">{movie.Year}</p>
                    <p className="runtime">{movie.Runtime}</p>
                </div>
            </div>
                <img
                    src={movie.Poster}
                    alt={movie.Title}
                />
                
            </div>
            <button className={isClicked ? "heart-icon2" : "heart-icon"} onClick={handleFavoriteClick}>&#9829;</button>

            {/* Move the global-title here to position it within the global-thumbnail */}
            <div className="global-title">
                <h5>{movie.Title}</h5>
            </div>
            
        </div>
    );
}
