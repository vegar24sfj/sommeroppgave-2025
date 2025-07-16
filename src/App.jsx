function App() {
  return (
    <div className="text-center p-8 bg-gray-900 text-white min-h-screen">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Planet Mars</h1>
        <nav className="mt-4">
          <a href="#fakta" className="mr-4 hover:underline">Fakta</a>
          <a href="#galleri" className="hover:underline">Galleri</a>
        </nav>
      </header>

      <main>
        <section id="fakta" className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Fakta om Mars</h2>
          <p>Mars er den fjerde planeten fra sola, og kalles ofte den røde planeten.</p>
        </section>

        <section id="galleri" className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Bildegalleri</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img src="/mars1.jpg" alt="Mars landskap" className="rounded shadow" />
            <img src="/mars2.jpg" alt="Mars fra verdensrommet" className="rounded shadow" />
          </div>
        </section>
      </main>

      <footer className="mt-12 text-sm text-gray-400">
        <p>Laget av [Ditt Navn] – Sommeroppgave 2025</p>
      </footer>
    </div>
  )
}

export default App
