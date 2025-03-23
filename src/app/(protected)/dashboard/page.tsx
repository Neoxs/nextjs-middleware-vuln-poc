import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6 rounded-lg border p-8 shadow-md">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-xl font-medium text-primary">
            This is a protected route
          </p>
          <p className="text-muted-foreground">
            You can only see this page if you're authenticated
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <Button variant="outline" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
          <Button variant="destructive" asChild>
            <Link href="/logout">Sign Out</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
