import { PokemonSearch } from '@/components/pokemon-search'

export default function Page() {
  return (
    <main className="relative flex min-h-screen overflow-hidden bg-[#f5f7fb] px-5 py-12 sm:px-8 sm:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 -top-32 size-96 rounded-full bg-[#ffd9d2]/70 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -right-24 size-96 rounded-full bg-[#dce7ff]/80 blur-3xl" />
      <div className="relative z-10 mx-auto flex w-full max-w-5xl items-center justify-center">
        <PokemonSearch />
      </div>
    </main>
  )
}
