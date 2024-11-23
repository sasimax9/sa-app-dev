import { Search } from "@/components/search"

export function Hero() {
  return (
    <div className="bg-accent py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4 magic-text">Find Any Service You Need</h1>
        <p className="text-xl text-muted-foreground mb-8">From home repairs to event planning, we've got you covered.</p>
        <div className="max-w-md mx-auto">
          <Search />
        </div>
      </div>
    </div>
  )
}

