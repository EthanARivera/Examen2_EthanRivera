export default function About() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
      <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 px-6 py-10 text-white shadow-2xl shadow-slate-950/10 sm:px-10">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
            Acerca del programa
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            Una herramienta académica para registrar y emitir documentos con mayor orden y claridad.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            Esta aplicación fue desarrollada con React y TypeScript para capturar datos personales,
            organizarlos de forma estructurada y generar documentos en PDF y XML con un flujo simple,
            consistente y fácil de presentar.
          </p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">Objetivo</p>
          <h3 className="mt-3 text-xl font-semibold text-slate-900">Centralizar el registro</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Reunir en un solo flujo la captura de información del estudiante y la generación de
            documentos listos para entregar, revisar o almacenar.
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">Tecnologías</p>
          <h3 className="mt-3 text-xl font-semibold text-slate-900">Base moderna y ligera</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            React, TypeScript, Vite y jsPDF permiten una experiencia rápida, tipada y más confiable
            para construir y exportar documentos académicos.
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">Presentación</p>
          <h3 className="mt-3 text-xl font-semibold text-slate-900">Imagen más profesional</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Se añadió una interfaz con mejor jerarquía visual, navegación clara y un estilo más
            alineado con una herramienta de uso académico.
          </p>
        </article>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h3 className="text-2xl font-semibold text-slate-900">Qué hace la aplicación</h3>
          <div className="mt-5 space-y-4 text-sm leading-6 text-slate-600 sm:text-base">
            <p>
              Permite ingresar datos personales del estudiante mediante un formulario validado y
              mantener la información lista para generar archivos formales.
            </p>
            <p>
              Desde el mismo flujo, el usuario puede exportar un documento en PDF con formato
              académico o descargar una versión XML para interoperabilidad y respaldo de datos.
            </p>
            <p>
              El objetivo principal es demostrar cómo una interfaz sencilla puede verse más
              profesional cuando se organiza con una mejor estructura visual y contenido más claro.
            </p>
          </div>
        </div>

        <aside className="rounded-[1.75rem] border border-cyan-100 bg-cyan-50 p-6 shadow-sm sm:p-8">
          <h3 className="text-xl font-semibold text-slate-900">Flujo de uso</h3>
          <ol className="mt-5 space-y-4 text-sm leading-6 text-slate-700">
            <li>
              <span className="font-semibold text-slate-900">1.</span> Completar el formulario con la información del estudiante.
            </li>
            <li>
              <span className="font-semibold text-slate-900">2.</span> Revisar el resumen antes de confirmar la exportación.
            </li>
            <li>
              <span className="font-semibold text-slate-900">3.</span> Descargar el documento en PDF o XML según la necesidad.
            </li>
          </ol>
        </aside>
      </section>
    </div>
  );
}