import { NextResponse, NextRequest } from 'next/server'
import jobs from '@/utils/jobs';

export async function GET(req:NextRequest) {
   const level =  new URL(req.url).searchParams.get('level');

  if(level) {
    return NextResponse.json(
      jobs.filter((job) => job.level === level )
    , {
      status: 200
    })
  }

  return NextResponse.json(jobs, {
    status: 200
  })
}

