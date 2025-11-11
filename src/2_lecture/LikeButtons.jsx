import React, {useState} from "react";

import {FaHeart, FaStar, FaThumbsUp} from "react-icons/fa";

const LikeButtons = () => {

    const [heartsLikes, setHeartlikes] = useState(0);
    const [starLikes, setStarlikes] = useState(0);
    const [thumbsLikes, setThumbslikes] = useState(0);

    const totalLikes = heartsLikes + starLikes + thumbsLikes;

    



  return (
    <>
      <div className="container mt-4 text-center">
        <div className="card p-4 shadow-sm">
          <h4 className="mb-3">React Like Buttons</h4>

          <div className="row mb-3">
            <div className="col-md-3">
              <div className="card p-3">
                <p className="lead mb-2">Hearts: {heartsLikes}</p>
                <button className="btn btn-danger d-flex align-items-center justify-content-center gap-2"
                onClick={() => setHeartlikes(heartsLikes + 1)}>
                  <FaHeart key="heart" />
                  Heart
                </button>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3">
                <p className="lead mb-2">Stars: {starLikes}</p>
                <button className="btn btn-warning d-flex align-items-center justify-content-center gap-2"
                onClick={() => setStarlikes(starLikes + 1)}>
                  <FaStar key="star" />
                  Star
                </button>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3">
                <p className="lead mb-2">Thumbs: {thumbsLikes}</p>
                <button className="btn btn-primary d-flex align-items-center justify-content-center gap-2"
                onClick={() => setThumbslikes(thumbsLikes + 1)}>
                  <FaThumbsUp key="thumbs-up" />
                  Thumbs Up
                </button>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3">
                <h5>Total Likes</h5>
                <p className="display-4">{totalLikes}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LikeButtons;
