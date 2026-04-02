import { type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Add any middleware logic here (e.g., authentication, redirects, etc.)
  return null;
}

// Configure which routes to run middleware on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
