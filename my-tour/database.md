Table - TourMaster

CREATE TABLE tourmaster (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    date DATE,
    profileimage TEXT,
    albumname VARCHAR(100)
)




https://api.github.com/repos/praveenchandran81/nextjs-tour/contents/tourimages/12/sample.txt
put
{"message": "sample file",
  "content": "aGVsbG8="
}
Content-Type: application/json
Authorization: Bearer token
