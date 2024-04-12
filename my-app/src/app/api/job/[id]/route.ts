import { NextResponse, NextRequest } from 'next/server'
import jobs from '@/utils/jobs';

interface Context {
  params: {
    id: string
  }
}

export async function GET(req:NextRequest,context:Context) {

  const {id} = context.params;

  const job = jobs.find((job) => job.id === +id)

  if(!job) {
    return NextResponse.json({
      message: 'O id não existe'
    }, {
      status: 404
    })
  }

  return NextResponse.json({
    ...job
  }, {
    status: 200
  })
}

