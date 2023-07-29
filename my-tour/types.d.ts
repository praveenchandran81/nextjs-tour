type TourMaster={
    id:number,
    name:string,
    description :string,
    date :string,
    // profileimage:string,
    // albumname :string
}
 

type TourResponse={
    rowCount:number,
    rows:TourMaster[]
}