import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// * Middleware
export async function middleware(req: NextRequest) {
  // 1. Create a response object
  const res = NextResponse.next();
  // const { pathname } = req.nextUrl;

  // 4. Return the response
  return res;
}

// * Config
export const config = {
  matcher: [],
};
