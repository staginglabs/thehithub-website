import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Sports Turf in Shajapur | Football & Cricket Turf Near Indore",
  description: "Book your sports turf in Shajapur at The Hit Hub. Easy online booking for football, cricket & box cricket. Preferred turf for Indore players nearby.",
};


export default function Sport() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-4xl font-bold text-black dark:text-zinc-50">
          Book Sports Turf in Shajapur | Football & Cricket Turf Near Indore
        </h1>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
         Book your sports turf in Shajapur at The Hit Hub. Easy online booking for football, cricket & box cricket. Preferred turf for Indore players nearby.
        </p>
      </main>
    </div>
  );
}