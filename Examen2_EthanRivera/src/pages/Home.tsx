import { useState } from "react";
import { jsPDF } from "jspdf";
import Formulario from "../components/Formulario1";
import Documento1 from "../components/Documento1";
import type { Usuario } from "../types/Usuario.ts";

export default function Home() {
  const [usuarioPendiente, setUsuarioPendiente] = useState<Usuario | null>(null);

  const normalizarNombreArchivo = (usuario: Usuario) =>
    `${usuario.nombre}_${usuario.apellido}`
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "_")
      .replace(/[^a-z0-9_\-]/g, "") || "usuario";

  const generarPdf = (usuario: Usuario) => {
    const documento = new jsPDF();
    const pageWidth = documento.internal.pageSize.getWidth();
    const pageHeight = documento.internal.pageSize.getHeight();
    const leftMargin = 20;
    const contentWidth = pageWidth - leftMargin * 2;
    const safeFileName = normalizarNombreArchivo(usuario);

    let currentY = 20;
    const disclaimer =
      "Por medio del presente se certifica que los datos proporcionados serán usados únicamente con fines académicos y de registro interno.";

    documento.setDrawColor(15, 23, 42);
    documento.setLineWidth(0.6);
    documento.rect(12, 12, pageWidth - 24, pageHeight - 24);

    documento.setFont("helvetica", "bold");
    documento.setFontSize(16);
    documento.text("UNIVERSIDAD - FORMATO DE REGISTRO", pageWidth / 2, currentY, { align: "center" });

    currentY += 8;
    documento.setFont("helvetica", "normal");
    documento.setFontSize(11);
    documento.text("Documento académico generado a partir del formulario", pageWidth / 2, currentY, {
      align: "center"
    });

    currentY += 14;
    documento.setFontSize(12);
    documento.setFont("helvetica", "bold");
    documento.text("Datos del estudiante", leftMargin, currentY);

    currentY += 8;
    documento.setFont("helvetica", "normal");
    const lineHeight = 8;
    const campos = [
      ["Nombre completo", `${usuario.nombre} ${usuario.apellido}`],
      ["Edad", `${usuario.edad} años`],
      ["Correo", usuario.correo],
      ["Dirección", usuario.direccion]
    ];

    campos.forEach(([etiqueta, valor]) => {
      const texto = documento.splitTextToSize(String(valor), contentWidth - 45);
      documento.setFont("helvetica", "bold");
      documento.text(`${etiqueta}:`, leftMargin, currentY);
      documento.setFont("helvetica", "normal");
      documento.text(texto, leftMargin + 42, currentY);
      currentY += Math.max(lineHeight, texto.length * 5);
    });

    currentY += 6;
    const nota = documento.splitTextToSize(disclaimer, contentWidth);

    documento.setFont("helvetica", "bold");
    documento.text("Observación", leftMargin, currentY);
    currentY += 8;
    documento.setFont("helvetica", "normal");
    documento.setTextColor(120, 120, 120);
    documento.text(nota, leftMargin, currentY);
    documento.setTextColor(0, 0, 0);

    documento.setFontSize(10);
    documento.text(`Fecha de emisión: ${new Date().toLocaleDateString("es-ES")}`, leftMargin, pageHeight - 18);
    documento.text("Firma: ________________________________", pageWidth - leftMargin, pageHeight - 18, {
      align: "right"
    });

    documento.save(`formato_universitario_${safeFileName}.pdf`);
  };

  const escaparXml = (valor: string) =>
    valor
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&apos;");

  const generarXml = (usuario: Usuario) => {
    const fecha = new Date().toLocaleDateString("es-ES");
    const disclaimer =
      "Por medio del presente se certifica que los datos proporcionados serán usados únicamente con fines académicos y de registro interno.";
    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<documentoUniversitario>\n  <encabezado>\n    <titulo>UNIVERSIDAD - FORMATO DE REGISTRO</titulo>\n    <fechaEmision>${escaparXml(fecha)}</fechaEmision>\n  </encabezado>\n  <estudiante>\n    <nombre>${escaparXml(usuario.nombre)}</nombre>\n    <apellido>${escaparXml(usuario.apellido)}</apellido>\n    <edad>${usuario.edad}</edad>\n    <correo>${escaparXml(usuario.correo)}</correo>\n    <direccion>${escaparXml(usuario.direccion)}</direccion>\n  </estudiante>\n  <disclaimer>${escaparXml(disclaimer)}</disclaimer>\n</documentoUniversitario>`;

    const blob = new Blob([xml], { type: "application/xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const enlace = document.createElement("a");
    enlace.href = url;
    enlace.download = `formato_universitario_${normalizarNombreArchivo(usuario)}.xml`;
    document.body.appendChild(enlace);
    enlace.click();
    enlace.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <Formulario onSubmit={setUsuarioPendiente} />

        {usuarioPendiente && (
          <Documento1
            data={usuarioPendiente}
            onConfirmPdf={() => {
              generarPdf(usuarioPendiente);
              setUsuarioPendiente(null);
            }}
            onConfirmXml={() => {
              generarXml(usuarioPendiente);
              setUsuarioPendiente(null);
            }}
            onCancel={() => setUsuarioPendiente(null)}
          />
        )}
      </div>
    </div>
  );
}