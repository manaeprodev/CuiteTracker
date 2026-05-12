'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  async function handleRegister() {
    setLoading(true)
    setError('')
    const { data, error } = await supabase.auth.signUp({ email, password })
    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }
    if (data.user) {
      await supabase.from('profiles').insert({
        id: data.user.id,
        username,
      })
      router.push('/profile/setup')
    }
    setLoading(false)
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6">
      <div className="w-full max-w-xs">
        <h1 className="text-2xl font-bold mb-1">Créer un compte</h1>
        <p className="text-zinc-400 text-sm mb-8">Let's track cette cuite 🎉</p>

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-zinc-400 mb-1 block">Pseudo</label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-zinc-500"
              placeholder="TonPseudo"
            />
          </div>
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
            onClick={handleRegister}
            disabled={loading}
            className="bg-white text-black font-semibold py-3 rounded-xl hover:bg-zinc-200 transition disabled:opacity-50"
          >
            {loading ? 'Création...' : 'Créer mon compte'}
          </button>
        </div>

        <p className="text-center text-zinc-500 text-sm mt-6">
          Déjà un compte ?{' '}
          <Link href="/login" className="text-white underline">Se connecter</Link>
        </p>
      </div>
    </main>
  )
}