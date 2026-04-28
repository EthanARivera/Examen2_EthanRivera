import type { Usuario } from "../types/Usuario";

interface Props {
  data: Usuario;
  onConfirmPdf: () => void;
  onConfirmXml: () => void;
  onCancel: () => void;
}

export default function Documento1({ data, onConfirmPdf, onConfirmXml, onCancel }: Props) {
  return (
    <div className="mx-auto flex w-full flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold text-slate-900">Confirmación de datos</h2>
        <p className="text-sm text-slate-500">Revisa la información antes de descargar el PDF.</p>
      </div>

      <div className="grid gap-3 rounded-xl bg-slate-50 p-4 text-sm text-slate-700 sm:grid-cols-2">
        <p><span className="font-semibold text-slate-900">Nombre:</span> {data.nombre}</p>
        <p><span className="font-semibold text-slate-900">Apellido:</span> {data.apellido}</p>
        <p><span className="font-semibold text-slate-900">Edad:</span> {data.edad}</p>
        <p><span className="font-semibold text-slate-900">Correo:</span> {data.correo}</p>
        <p className="sm:col-span-2">
          <span className="font-semibold text-slate-900">Dirección:</span> {data.direccion}
        </p>
      </div>

      <p className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500">
        Por medio del presente se certifica que los datos proporcionados serán usados únicamente con fines académicos y de registro interno.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onConfirmPdf}
          className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Confirmar y descargar PDF
        </button>

        <button
          type="button"
          onClick={onConfirmXml}
          className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
        >
          Descargar XML
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
        >
          Volver al formulario
        </button>
      </div>
    </div>
  );
}