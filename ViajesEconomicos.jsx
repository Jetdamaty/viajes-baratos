
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menu, MapPin, DollarSign, Lightbulb, Mail, Globe, BookOpen, Map, Languages, SlidersHorizontal } from "lucide-react";

export default function ViajesEconomicos() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="p-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Viajes Económicos</h1>
        <Menu className="w-6 h-6" />
      </header>

      <main className="p-6 grid gap-6">
        <section className="text-center mt-10">
          <h2 className="text-xl font-semibold mb-2">Contacto</h2>
          <p className="mb-4">¿Tienes dudas o quieres colaborar? Escríbeme:</p>
          <Button className="flex items-center gap-2 mx-auto">
            <Mail className="w-4 h-4" /> Contactar
          </Button>
        </section>
      </main>

      <footer className="p-4 text-center text-sm text-gray-500">
        © 2025 Viajes Económicos. Todos los derechos reservados.
      </footer>
    </div>
  );
}
