import Link from "next/link"

export default function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <Link href="/" className="inline-block">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">BrainBoost Games</h1>
        </Link>
      </div>
    </header>
  )
}
