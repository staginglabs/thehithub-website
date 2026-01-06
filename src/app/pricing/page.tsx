import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Turf Booking Prices in Shajapur | Affordable Turf Near Indore",
  description: "Check affordable turf booking prices in Shajapur at The Hit Hub. Best rates for football, cricket & box cricket. Trusted by players from Indore.",
};


export default function Pricing() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-4xl font-bold text-black dark:text-zinc-50">
          Pricing Page
        </h1>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          This is the Pricing page of the application. Here you can find more
          information Pricing the app and its purpose.
        </p>
      </main>
    </div>
  );
}