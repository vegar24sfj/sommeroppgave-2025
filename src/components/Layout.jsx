// src/components/Layout.jsx
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div
      className="flex flex-col min-h-screen text-white"
      style={{
        backgroundColor: "#000",
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/stardust.png')",
        backgroundRepeat: "repeat",
      }}
    >
      <header className="text-center text-3xl font-bold mb-10 flex justify-between items-center p-6 relative z-30">
        {/* Gjør "Planetside" klikkbar */}
        <Link to="/" className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">
          🌌 Planetside
        </Link>

        <nav>
          <Link to="/contact" className="text-blue-400 hover:underline">
            Kontakt
          </Link>
        </nav>
      </header>

      {/* Gradient-bakgrunn rundt alt innhold */}
      <div className="bg-gradient-to-b from-black via-blue-900 to-white text-black py-20 px-6 relative z-30 flex-grow">
        <main className="max-w-7xl mx-auto">
          <Outlet />
        </main>
      </div>

      {/* Svart fade over stjernene */}
      <div
        className="w-full h-32 relative z-20 -mt-32"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #000 100%)",
        }}
      />

      <footer className="bg-gradient-to-t from-[#001f3f] via-[#0077cc] to-white text-white text-center py-10 relative z-40">
        <div className="space-y-4">
          <p className="text-sm text-black">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">Planetside</span> 🌍 Alle
            rettigheter reservert.
          </p>
          <Link
            to="/"
            className="inline-block text-sm text-blue-200 hover:text-white hover:underline transition"
          >
            ⬆ Til toppen
          </Link>
        </div>
      </footer>
    </div>
  );
}
