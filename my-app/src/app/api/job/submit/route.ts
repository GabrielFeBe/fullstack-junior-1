import { NextResponse, NextRequest } from 'next/server'
import Job, { jobClassForRef } from '@/interface/job';
import { validateRequestBody } from '@/utils/validRequestBody';

export async function POST(req: NextRequest) {
  const body:Job = await req.json();
 
  if(!body || typeof body !== 'object') {
    return NextResponse.json({message: 'Corpo com formato invalido'},{status:404});
  }

    const arrayOfErrors = validateRequestBody<Job>(body, jobClassForRef);
    if(arrayOfErrors.length > 0 ) {
      return NextResponse.json(
        {message: `Corpo invalido, os itens: ${arrayOfErrors} vieram com formato invalido ou inexistentes.`}
        , {status:404});
    }
    return NextResponse.json({
      message: `Thank you for your application, ${body.name}`
    })
}

