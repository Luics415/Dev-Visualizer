import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <span>404</span>
      <h1>Esta ruta no existe</h1>
      <p>La colección pudo cambiar de dirección o todavía no forma parte del atlas.</p>
      <Link href="/colecciones">Abrir biblioteca de colecciones</Link>
    </main>
  );
}
