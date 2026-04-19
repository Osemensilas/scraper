import Image from "next/image";

const HomeHero = () => {
    return ( 
        <>
        <section className="h-max sm:h-[calc(100vh-50px)] w-screen px-10 flex items-center justify-start relative">
            <div className="h-max w-full sm:w-3/5 flex flex-col gap-5 relative z-10">
                <h1 className="text-5xl font-bold text-foreground">Welcome to Our Web Scraping Service</h1>
                <p className="text-lg text-foreground/70">Effortlessly extract data from any website with our powerful and user-friendly web scraping solution.</p>
                <div className="h-max w-max">
                    <button type="button" className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition">Get Started</button>
                </div>
            </div>
            <div className="absolute top-0 left-0 h-full w-full">
                <Image src="/images/hero.jpg" fill className="object-cover" alt="hero image" />
            </div>
        </section>
        </>
     );
}
 
export default HomeHero;