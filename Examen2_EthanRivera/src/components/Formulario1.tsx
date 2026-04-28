import { useState } from "react";
import type { Usuario } from "../types/Usuario";

interface Props {
  onSubmit: (data: Usuario) => void;
}

export default function Formulario({ onSubmit }: Props) {
  const [form, setForm] = useState<Usuario>({
    nombre: "",
    apellido: "",
    edad: 0,
    correo: "",
    direccion: ""
  });

  const [errores, setErrores] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validar = () => {
    if (!form.nombre || !form.apellido) return "Nombre y apellido requeridos";
    if (form.edad <= 0) return "Edad inválida";
    if (!form.correo.includes("@")) return "Correo inválido";
    if (!form.direccion) return "Dirección requerida";
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const error = validar();

    if (error) {
      setErrores(error);
      return;
    }

    setErrores("");
    onSubmit(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-xl flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold text-slate-900">Datos del usuario</h2>
        <p className="text-sm text-slate-500">Completa los campos en orden para revisar y descargar el PDF.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Nombre
          <input
            name="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
            className="rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Apellido
          <input
            name="apellido"
            placeholder="Apellido"
            value={form.apellido}
            onChange={handleChange}
            className="rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Edad
          <input
            name="edad"
            type="number"
            placeholder="Edad"
            value={form.edad || ""}
            onChange={handleChange}
            className="rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Correo
          <input
            name="correo"
            type="email"
            placeholder="correo@ejemplo.com"
            value={form.correo}
            onChange={handleChange}
            className="rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
        Dirección
        <input
          name="direccion"
          placeholder="Dirección"
          value={form.direccion}
          onChange={handleChange}
          className="rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
        />
      </label>

      <button
        type="submit"
        className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
      >
        Revisar datos
      </button>

      {errores && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {errores}
        </p>
      )}
    </form>
  );
}