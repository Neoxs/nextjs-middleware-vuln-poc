import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6 rounded-lg border p-8 shadow-md">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Welcome to Auth POC</h1>
          <p className="text-muted-foreground">
            A demonstration of Next.js middleware for route protection
          </p>
          <div className="mt-4 rounded-md bg-amber-50 p-3 text-sm text-amber-900">
            <p className="font-medium">CVE-2025-29927 Demonstration</p>
            <p className="mt-1">
              This is a proof of concept for the article &quot;Critical Next.js
              Vulnerability: How a Simple Header Bypasses Authentication&quot;
              that demonstrates how middleware authentication can be bypassed.
            </p>
            <p className="mt-2 text-blue-600 underline">
              <Link
                href="https://www.neoxs.me/blog/critical-nextjs-middleware-vulnerability-cve-2025-29927-authentication-bypass"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the full blog post
              </Link>
            </p>
            <p className="mt-1 text-blue-600 underline">
              <Link
                href="https://github.com/vercel/next.js/security/advisories/GHSA-f82v-jwr5-mffw"
                target="_blank"
                rel="noopener noreferrer"
              >
                View CVE-2025-29927 details
              </Link>
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <Button asChild>
            <Link href="/dashboard">Go to Dashboard (Protected)</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/login">Sign In</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
