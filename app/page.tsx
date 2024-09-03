import { AnimatedText } from "@/components/animated-text";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl text-green-500">
        <AnimatedText text="Hello! Im Josh" />.
      </h1>
    </main>
  );
}
