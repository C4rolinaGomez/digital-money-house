import { Button } from "@/components/shared/button/button";

export default function NotFound() {
  return (
    <div className="p-4 my-auto flex flex-col items-center justify-center">
      <h1 className="text-white text-5xl text-center mt-4">
        Página no encontrada
      </h1>
      <p className="text-white my-16">
        Esta dirección no existe porfavor revisa la URL
      </p>
      <Button type="link" size="large" color="primary" href={"/dashboard"}>
        Volver a la página de inicio
      </Button>
    </div>
  );
}
