import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div
      className="relative flex flex-col min-h-screen text-white"
      style={{
        backgroundColor: "#000",
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/stardust.png')",
        backgroundRepeat: "repeat",
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

      {/* Svart fade – legges over stjernehimmel men under innhold */}
      <div
        className="absolute inset-x-0 bottom-0 h-48 z-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%)",
        }}
      />

      {/* Innhold med padding nederst for popup-plass */}
      <div className="relative z-30 bg-gradient-to-b from-black via-blue-900 to-white text-black flex-grow">
        <main className="max-w-7xl mx-auto relative z-30 pb-40">
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
