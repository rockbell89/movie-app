import React from "react";
import { Cast } from "../../core";
import { IMAGE_SIZE, imageApi } from "../../uils";

interface DetailCastCrewProps {
  casts: Cast[];
}

const DetailCastCrew: React.FC<DetailCastCrewProps> = ({ casts }) => {
  return (
    <section className="movie-detail-section">
      <h3>Cast & Crew</h3>
      <div className="carousel-list">
        {casts &&
          casts.length > 0 &&
          casts.map((cast) => (
            <div key={cast.id} className="profile-card">
              <figure className="profile-card-image">
                {cast.profile_path ? (
                  <img
                    src={imageApi(cast.profile_path, IMAGE_SIZE.MD)}
                    alt={`${cast.character} 이미지`}
                  />
                ) : (
                  <div className="default-image">BONGFLIX</div>
                )}
              </figure>
              <div className="profile-card-info">
                <h5>{cast.character}</h5>
                {cast.name && (
                  <p>
                    {cast.name} / {cast.known_for_department}
                  </p>
                )}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default DetailCastCrew;
