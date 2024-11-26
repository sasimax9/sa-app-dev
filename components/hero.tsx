import { Search } from "@/components/search"

export function Hero() {
 
    return (
      <div className="bg-gray-400 py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4 bg-clip-text bg-white stroke-black">Welcome To Rajahmundry</h1>
          <h1 className="text-4xl text-foreground mb-4 font-extrabold text-white animate-pulse drop-shadow-[0_0_10px_rgba(128,90,213,0.8)]">Find Any Service You Need</h1>
          <p className="text-xl text-color to-black mb-8">All Services At One Plce, we've got you covered.</p>
          <div className="max-w-md mx-auto">
            <Search />
          </div>
        </div>
      </div>
  )
}

