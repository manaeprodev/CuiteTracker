'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  async function handleLogin() {
    setLoading(true)
    setError('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError('Email ou mot de passe incorrect')
    } else {
      router.push('/calculator')
    }
    setLoading(false)
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6">
      <div className="w-full max-w-xs">
        <h1 className="text-2xl font-bold mb-1">Connexion</h1>
        <p className="text-zinc-400 text-sm mb-8">Content de te revoir 🍺</p>

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-zinc-400 mb-1 block">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-zinc-500"
              placeholder="ton@email.com"
            />
          </div>
          <div>
            <label className="text-sm text-zinc-400 mb-1 block">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-zinc-500"
              placeholder="••••••••"
            />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            onClick={handleLogin}
            disabled={loading}
            className="bg-white text-black font-semibold py-3 rounded-xl hover:bg-zinc-200 transition disabled:opacity-50"
          >
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
        </div>

        <p className="text-center text-zinc-500 text-sm mt-6">
          Pas encore de compte ?{' '}
          <Link href="/register" className="text-white underline">S'inscrire</Link>
        </p>
      </div>
    </main>
  )
}