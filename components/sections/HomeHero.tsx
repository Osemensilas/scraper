import Image from "next/image";

const HomeHero = () => {
    return ( 
        <>
        <section className="h-max sm:h-[calc(100vh-50px)] w-screen px-4 sm:px-10 py-20 sm:py-0 flex items-center justify-start relative back-cover">
            <div className="absolute top-0 left-0 h-full w-full">
                <Image src="/images/hero.jpg" fill className="object-cover" alt="hero image" />
            </div>
            <div className="h-max w-full sm:w-3/5 flex flex-col gap-5 relative z-10">
                <h1 className="text-2xl sm:text-4xl font-bold text-foreground">Welcome to Our Web Scraping Service</h1>
                <p className="text-bold text-text text-base">Effortlessly extract data from any website with our powerful and user-friendly web scraping solution.</p>
                <div className="h-max w-max">
                    <button type="button" className="px-6 py-3 bg-primary text-background rounded-md hover:bg-primary/90 transition">Get Started</button>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default HomeHero;