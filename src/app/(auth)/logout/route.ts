import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  // Clear the auth cookie
  ;(
    await
    cookies()
  ).delete('auth')

  // Redirect to the home page
  return NextResponse.redirect(
    new URL('/', process.env.VERCEL_URL || 'http://localhost:3000')
  )
}
