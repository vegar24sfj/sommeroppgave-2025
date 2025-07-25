import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div
      className="relative flex flex-col min-h-screen text-white"
      style={{
        backgroundColor: "#000",
        backgroundImage: `
          linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.1)),
          url('https://www.transparenttextures.com/patterns/stars.png'),
          url('https://www.transparenttextures.com/patterns/stardust.png')
        `,
        backgroundRepeat: "repeat, repeat, repeat",
        backgroundSize: "auto, auto, auto",
        backgroundBlendMode: "overlay, normal, normal",
      }}
    >
      {/* Header */}
      <header className="text-center text-3xl font-bold flex justify-around items-center px-20 py-6 relative z-30 mb-7">
        <Link
          to="/"
          className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          🌌 Planetside
        </Link>

        <nav>
          <Link to="/contact" className="text-blue-400 hover:underline">
            Kontakt
          </Link>
        </nav>
      </header>

      {/* Innhold med økt padding topp og bunn for mer "luft" */}
      <div className="relative z-30 bg-gradient-to-b from-black via-blue-900/80 to-white text-black flex-grow">
        <main className="max-w-7xl mx-auto relative z-30 pt-28 pb-52">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-[#001f3f] via-[#0077cc] to-white text-white text-center py-10 relative z-40">
        <div className="space-y-4">
          <p className="text-sm text-black">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">Planetside</span> Laget av
            Vegar.
          </p>
          <Link
            to="/"
            className="inline-block text-sm text-blue-200 hover:text-white hover:underline transition"
          >
            Til hovedsiden
          </Link>
        </div>
      </footer>
    </div>
  );
}
