import LottieAnimation from "@/components/Contact/LottieAnimation";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="w-full dark:bg-dark flex justify-center font-mr flex-col">
        <Link
          href="/"
          className="self-center mt-8 inline-block rounded-lg border-2 border-solid bg-dark px-4 py-2
        font-semibold text-light hover:border-dark hover:bg-light hover:text-dark 
        dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
        "
        >
          Go To Home
        </Link>
        <div className="inline-block w-full sm:w-4/5 md:w-2/5 h-full self-center">
        <LottieAnimation src="/404.lottie"/>
      </div>
    </main>
  );
}