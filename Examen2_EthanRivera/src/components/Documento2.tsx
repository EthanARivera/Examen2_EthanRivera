import type { Usuario } from "../types/Usuario";

export default function Documento2({ data }: { data: Usuario }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h3>Credencial</h3>
      <p>Nombre: {data.nombre} {data.apellido}</p>
      <p>Edad: {data.edad}</p>
      <p>Correo: {data.correo}</p>
    </div>
  );
}