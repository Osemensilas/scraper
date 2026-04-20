import Image from "next/image";

const HomeHero = () => {
    return ( 
        <>
        <section className="h-screen w-screen px-10 flex items-center justify-center relative">
            <div className="h-max w-max flex flex-col gap-5">
                <h1 className="text-5xl font-bold text-foreground">Welcome to Our Web Scraping Service</h1>
                <p className="text-lg text-foreground/70">Effortlessly extract data from any website with our powerful and user-friendly web scraping solution.</p>
                <div className="h-max w-max">
                    <button type="button" className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition">Get Started</button>
                </div>
            </div>
            <div className="absolute left-0 top-0 -translate-y-1/2">
                <Image src="/images/home-hero.png" alt="Home Hero Image" width={500} height={500} />
            </div>
        </section>
        </>
     );
}
 
export default HomeHero;