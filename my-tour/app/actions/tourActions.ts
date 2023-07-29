"use server";

export const makeAlbumInGitHubRepo = async (id: string) => {
  console.log('tourid',id);
  
  const body = {
    message: "sample file",
    content: "aGVsbG8=", // this is just for creating a sample file in the git hub. Because in git hub we can't
    // create just a folder, we need at least one file.
  };
 
  const apiUrl = `https://api.github.com/repos/praveenchandran81/nextjs-tour/contents/tourimages/${id}/sample.txt`;
  
  
  const res = await fetch(apiUrl, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GITHUM_TOKEN_CREATE_ALBUM}`,
    },
  });
};

export const addTourHandler = async (
  tourDetails: Partial<TourMaster>
) => {
  const bodyData: Partial<TourMaster> = {
    name: tourDetails.name,
  //  albumname: tourDetails.albumname,
    description: tourDetails.description,
    date: tourDetails.date,
   // profileimage: tourDetails.profileimage,
  };
  const apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.VERCEL_URL
      : "http://localhost:3000";
  const res = await fetch(`${apiUrl}/api/tour`, {
    method: "POST",
    body: JSON.stringify(bodyData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const newTour: {'MyTour': TourMaster} = await res.json();
   makeAlbumInGitHubRepo(newTour.MyTour.id.toString())
   
};
