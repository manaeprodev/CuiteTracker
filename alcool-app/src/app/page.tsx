import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <div className="mb-8">
        <div className="text-6xl mb-4">🍺</div>
        <h1 className="text-4xl font-bold mb-2">CuiteTracker</h1>
        <p className="text-zinc-400 text-lg">Suis ton alcoolémie en temps réel</p>
      </div>

      <div className="flex flex-col gap-3 w-full max-w-xs">
        <Link
          href="/login"
          className="bg-white text-black font-semibold py-3 px-6 rounded-xl text-center hover:bg-zinc-200 transition"
        >
          Se connecter
        </Link>
        <Link
          href="/register"
          className="border border-zinc-700 text-white font-semibold py-3 px-6 rounded-xl text-center hover:bg-zinc-900 transition"
        >
          Créer un compte
        </Link>
      </div>

      <p className="text-zinc-600 text-xs mt-12 max-w-xs">
        Cette estimation est approximative et ne doit jamais être utilisée pour déterminer votre aptitude à conduire.
      </p>
    </main>
  )
}