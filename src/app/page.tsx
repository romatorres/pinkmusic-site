import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="relative w-full">
        <Header />
        <Hero />
      </div>
    </main>
  );
}

{
  /* <h1 className="text-4xl font-bold mb-8">Bem-vindo ao Projeto Gemini</h1>
      <div className="flex space-x-4">
        <Link href="/login" passHref>
          <Button>Login</Button>
        </Link>
        <Link href="/register" passHref>
          <Button variant="secondary">Registro</Button>
        </Link>
      </div> */
}
