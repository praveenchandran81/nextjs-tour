Table - TourMaster

CREATE TABLE tourmaster (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    date DATE,
    profileimage TEXT,
    albumname VARCHAR(100)
)

