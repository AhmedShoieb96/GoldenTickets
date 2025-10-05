'use client';
import Image from "next/image";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="p-6 text-center">
      <h2 className="text-red-600 text-xl font-bold mb-2">Something went wrong!</h2>
      <p className="mb-4">{error.message}</p>
      <Image className="w-[20%] mx-auto rounded-2xl shadow-md" src={'/images/error.jpg'} alt='error' width={100} height={100}/>
    </div>
  );
}