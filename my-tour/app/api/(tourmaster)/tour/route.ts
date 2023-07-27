import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function POST(request: Request) {
  const data:TourMaster = await request.json();
 
  try {
    if (!data.name ||!data.albumname || !data.date ||!data.description ||!data.profileimage){
        return NextResponse.json({error:"Provide all the required inputs in the body" }, { status: 500 });
    }
    await sql`INSERT INTO TourMaster (Name,Description,Date,ProfileImage,AlbumName) VALUES(${data.name}, ${data.description}, ${data.date} ,${data.profileimage},${data.albumname})`;
  } catch (error) {
    return NextResponse.json({ error:error}, { status: 500 });
  }
 
  const tours= await sql`SELECT * FROM TourMaster;`;
  return NextResponse.json({ tours }, { status: 200 });
}

export async function GET(request:Request) {
  const tours = await sql`SELECT * FROM TourMaster;`;
  return NextResponse.json({ tours }, { status: 200 });
}