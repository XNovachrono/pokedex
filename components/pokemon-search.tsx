'use client'

import { FormEvent, useState } from 'react'
import { Search, Sparkles } from 'lucide-react'

type Pokemon = {
  name: string
  sprites: {
    front_default: string | null
  }
}

const API_URL = 'https://pokeapi.co/api/v2/pokemon'

export function PokemonSearch() {
  const [query, setQuery] = useState('ditto')
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')

  async function searchPokemon(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const name = query.trim().toLowerCase()
    if (!name) return

    setStatus('loading')
    setPokemon(null)

    try {
      const response = await fetch(`${API_URL}/${encodeURIComponent(name)}`)
      if (!response.ok) throw new Error('Pokémon no encontrado')
      const data: Pokemon = await response.json()
      setPokemon(data)
      setStatus('idle')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="w-full max-w-2xl">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-2xl bg-[#e74444] text-white shadow-lg shadow-red-500/20">
          <Sparkles aria-hidden="true" className="size-7" />
        </div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#e74444]">Poke explorer</p>
        <h1 className="text-balance text-4xl font-bold tracking-tight text-[#182230] sm:text-5xl">Descubre tu Pokémon</h1>
        <p className="mx-auto mt-4 max-w-md text-pretty text-base leading-7 text-[#647083]">Busca por nombre y consulta sus datos directamente desde PokéAPI.</p>
      </div>

      <form onSubmit={searchPokemon} className="rounded-3xl border border-white/80 bg-white p-3 shadow-xl shadow-slate-900/5 sm:flex sm:items-center sm:gap-3">
        <label htmlFor="pokemon" className="sr-only">Nombre del Pokémon</label>
        <div className="flex flex-1 items-center gap-3 px-3">
          <Search aria-hidden="true" className="size-5 shrink-0 text-[#9aa5b5]" />
          <input id="pokemon" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ej. ditto" className="h-12 w-full bg-transparent text-base text-[#182230] outline-none placeholder:text-[#9aa5b5]" />
        </div>
        <button type="submit" disabled={status === 'loading'} className="mt-2 h-12 w-full rounded-2xl bg-[#e74444] px-6 font-semibold text-white transition hover:bg-[#d63838] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e74444] focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-60 sm:mt-0 sm:w-auto">
          {status === 'loading' ? 'Buscando…' : 'Buscar'}
        </button>
      </form>

      <div className="mt-6 min-h-64">
        {status === 'error' && <div role="alert" className="rounded-3xl border border-red-200 bg-red-50 px-6 py-8 text-center text-red-700">No encontramos ese Pokémon. Revisa el nombre e inténtalo de nuevo.</div>}
        {pokemon && status !== 'error' && <article className="overflow-hidden rounded-3xl border border-white/80 bg-white shadow-xl shadow-slate-900/5">
          <div className="flex flex-col items-center gap-6 p-8 sm:flex-row sm:p-10">
            <div className="flex size-40 items-center justify-center rounded-3xl bg-[#fff1e7]">
              <img src={pokemon.sprites.front_default ?? '/placeholder.svg'} alt={`Imagen de ${pokemon.name}`} className="size-36 object-contain [image-rendering:pixelated]" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#9aa5b5]">Resultado</p>
              <h2 className="mt-2 text-4xl font-bold capitalize tracking-tight text-[#182230]">{pokemon.name}</h2>
              <p className="mt-3 text-[#647083]">Encontrado en PokéAPI</p>
            </div>
          </div>
        </article>}
      </div>
    </section>
  )
}
