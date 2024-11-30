import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const jsonData = await request.json();
    
    const formattedData = {
      ...jsonData,
      name: jsonData.name?.toUpperCase(),
    };
    
    return NextResponse.json(formattedData, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao processar JSON' }, 
      { status: 400 }
    );
  }
}