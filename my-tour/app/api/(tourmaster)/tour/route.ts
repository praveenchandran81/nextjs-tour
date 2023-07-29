import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function POST(request: Request) {
  const data:TourMaster = await request.json();
 
  try {
    if (!data.name  || !data.date ||!data.description ){
        return NextResponse.json({error:"Provide all the required inputs in the body" }, { status: 500 });
    }
    await sql`INSERT INTO TourMaster (Name,Description,Date) VALUES(${data.name}, ${data.description}, ${data.date})`;
   
  } catch (error) {
    return NextResponse.json({ error:error}, { status: 500 });
  }
 
  const tours:TourResponse= await sql`SELECT * FROM TourMaster;`;
   
  const newTour:TourMaster = tours.rows.slice(tours.rowCount-1)[0]
  
  
  return NextResponse.json({ 'MyTour':newTour }, { status: 200 });
}

export async function GET(request:Request) {
  const tours = await sql`SELECT * FROM TourMaster;`;
  return NextResponse.json({ tours }, { status: 200 });
}