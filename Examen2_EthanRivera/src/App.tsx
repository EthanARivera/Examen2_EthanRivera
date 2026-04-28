import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen text-slate-900">
        <header className="sticky top-0 z-10 border-b border-white/60 bg-white/80 backdrop-blur-xl">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <div>
              <h1 className="mt-1 text-lg font-semibold text-slate-900">Gestor académico de documentos</h1>
            </div>

            <nav className="flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1 shadow-sm">
              <Link
                to="/"
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-900 hover:text-white"
              >
                Inicio
              </Link>
              <Link
                to="/about"
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-900 hover:text-white"
              >
                About
              </Link>
            </nav>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;