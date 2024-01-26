import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="h-full d-flex flex-col w-full">
      <Navbar links={["hello", "world"]} />
      <h1>hello world</h1>
    </main>
  );
}
