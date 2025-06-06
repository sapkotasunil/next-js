"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

function home() {
  const { data: session } = useSession(); //rename data to session
  {
    if (session != null) {
      return (
        <div className="flex flex-col items-center justify-center h-screen">
          <Image
            src={session.user?.image || "mero.png"}
            alt={"user image"}
            width={80}
            height={80}
          />
          <h1 className="text-4xl font-bold mb-4">
            Welcome {session.user?.name}
          </h1>
          <p className="text-lg">
            This is your email adress: {session.user?.email}.
          </p>
          <button
            className="p-1 bg-green-600 rounded-2xl"
            onClick={() => signOut()}
          >
            Sing nout
          </button>
        </div>
      );
    }
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
      <p className="text-lg">
        This is a simple home page built with Next.js and Tailwind CSS.
      </p>
      <button
        className="p-1 bg-green-600 rounded-2xl"
        onClick={() => signIn("google")}
      >
        Singn with google
      </button>
    </div>
  );
}
export default home;
