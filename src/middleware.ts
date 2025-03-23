import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname

  // Define which paths are protected (require authentication)
  const isProtectedRoute = path.startsWith('/dashboard')

  // Check if user is authenticated by looking for the auth cookie
  const authCookie = request.cookies.get('auth')?.value
  const isAuthenticated = authCookie === 'true'

  // If the route is protected and the user is not authenticated,
  // redirect to the login page
  if (isProtectedRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Continue with the request if authenticated or not a protected route
  return NextResponse.next()
}

// Configure which routes the middleware should run on
export const config = {
  matcher: ['/dashboard/:path*'],
}
