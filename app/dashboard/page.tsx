'use client'; 

import Image from "next/image";
import { useRouter } from "next/navigation";

const Page = () => {

  const router = useRouter();

  const logoClicked = () => {
    router.push("/");
  }

  return (
    <>
      <section className="h-screen min-h-screen flex">
        <div className="h-full w-full sm:w-1/5 bg-background">
          <div className="h-max w-max mx-auto my-10 flex justify-center">
            <div onClick={logoClicked} className="relative h-10 w-15 cursor-pointer">
              <Image src="/images/logo.png" alt="Logo" fill className="object-cover" />
            </div>
          </div>
          <div className="">

          </div>
        </div>
        <div className="h-screen w-full sm:w-4/5 p-4 sm:p-10 bg-accent">
          <h2 className="text-2xl font-bold text-accent">Dashboard</h2>
        </div>
      </section>
    </>
  );
}

export default Page;