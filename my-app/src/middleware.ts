import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const authorizationHeader = request.headers.get('authorization');

  if (!authorizationHeader) {
    return NextResponse.json({
      message: 'Você não está autorizado nesta rota'
    }, {
      status: 401,
      statusText: 'Unauthorized',
    });
  }

  const token = authorizationHeader.split(' ')[1];
  console.log(authorizationHeader)
  if(token !== 'naranja-labs') {
    return NextResponse.json({
      message: 'Você não está autorizado nesta rota'
    }, {
      status: 401,
      statusText: 'Unauthorized',
    });
  }
  
  return NextResponse.next();
}
export const config = {
  matcher: ['/api/job/:path*', '/api/jobs/:path*']
}
