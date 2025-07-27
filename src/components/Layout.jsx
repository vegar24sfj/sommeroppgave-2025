import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div
      className="relative flex flex-col min-h-screen text-white"
      style={{
        backgroundColor: "#000",
        backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')`,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundBlendMode: "normal",
      }}
    >
      {/* Header */}
      <header className="text-center text-3xl font-bold flex justify-around items-center px-20 py-6 relative z-30">
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

      {/* Hovedinnhold med planeter */}
      <main className="flex-grow relative z-50 bg-transparent overflow-visible">
        <div className="relative max-w-7xl mx-auto px-4 pt-16 pb-24">
          <Outlet />
        </div>
      </main>

      {/* Fade og ozonlag – under planetene men over bakgrunn */}
      <div className="relative z-40">
        {/* Svak svart fade */}
        <div className="w-full h-6 bg-gradient-to-t from-black/30 to-transparent z-40 -mb-6 pointer-events-none" />

        {/* Ozonlag med animasjon */}
        <div className="w-full h-24 bg-gradient-to-t from-white via-[#0077cc]/70 to-transparent pointer-events-none animate-pulse-ozone" />
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-[#001f3f] via-[#0077cc] to-white text-white text-center py-10 relative z-10">
        <div className="space-y-4">
          <p className="text-sm text-black">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">Planetside</span> laget
            av Vegar.
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
