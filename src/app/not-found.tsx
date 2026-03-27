import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="mt-4 text-muted">Page not found</p>
        <Link
          href="/en/work/"
          className="mt-8 inline-block text-sm underline hover:text-muted transition-colors"
        >
          Back to Work
        </Link>
      </div>
    </main>
  );
}
