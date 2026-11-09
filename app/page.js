
import Link from "next/link";
import coffees from "../data/coffees.json";
import CoffeeSearch from "../components/CoffeeSearch";
import CartLink from "../components/CartLink";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F1E8]">
      <div className="bg-[#33271F] text-[#F5F1E8] text-center py-2.5 text-[10px] tracking-[0.2em]">
        FRESHLY ROASTED COFFEE · DELIVERED WITH CARE
      </div>

      <header className="sticky top-0 z-50 bg-[#F5F1E8]/95 backdrop-blur-md border-b border-[#33271F]/10">
        <div className="flex items-center justify-between px-6 md:px-16 py-6">
          <Link href="/" className="font-serif text-2xl tracking-[0.18em]">
            ROASTERY<span className="text-[#78816A]">.</span>
          </Link>

          <nav className="hidden md:flex items-center gap-10 text-[11px] tracking-[0.15em]">
            <Link href="/" className="hover:text-[#78816A] transition-colors">
              HOME
            </Link>
            <a href="#collection" className="hover:text-[#78816A] transition-colors">
              OUR COFFEE
            </a>
            <a href="#about" className="hover:text-[#78816A] transition-colors">
              OUR STORY
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#collection"
              className="border border-[#33271F] px-5 py-3 text-[10px] tracking-[0.15em] hover:bg-[#33271F] hover:text-white transition-all"
            >
              SHOP COFFEE ↗
            </a>

            <CartLink />
          </div>
        </div>
      </header>

      <section className="grid md:grid-cols-2 min-h-[650px] items-center px-6 md:px-16 py-16 md:py-20 gap-12">
        <div className="max-w-xl">
          <p className="text-[#78816A] text-[10px] tracking-[0.35em] mb-8">
            SPECIALTY COFFEE · EST. 2026
          </p>

          <h1 className="font-serif text-6xl md:text-8xl leading-[1.02] mb-8">
            A better
            <br />
            kind of
            <br />
            <span className="italic text-[#78816A]">coffee.</span>
          </h1>

          <p className="text-[#33271F]/65 text-sm md:text-base leading-8 max-w-md mb-10">
            Exceptional beans. Thoughtful roasting.
            A coffee experience made for those who
            appreciate the little details.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#collection"
              className="inline-flex items-center gap-5 bg-[#33271F] text-white px-8 py-4 text-[11px] tracking-widest hover:bg-[#78816A] transition-all"
            >
              EXPLORE OUR COFFEE
              <span className="text-lg">→</span>
            </a>

            <a
              href="#about"
              className="text-[10px] tracking-widest border-b border-[#33271F]/40 pb-2 hover:text-[#78816A] transition-colors"
            >
              OUR STORY
            </a>
          </div>

          <div className="flex gap-12 mt-20 pt-8 border-t border-[#33271F]/15">
            <div>
              <p className="font-serif text-3xl">100%</p>
              <p className="text-[9px] tracking-widest mt-2 text-[#33271F]/50">
                QUALITY FOCUSED
              </p>
            </div>

            <div>
              <p className="font-serif text-3xl">Fresh</p>
              <p className="text-[9px] tracking-widest mt-2 text-[#33271F]/50">
                SMALL BATCH ROASTED
              </p>
            </div>
          </div>
        </div>

        <div className="relative md:ml-8">
          <img
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200"
            alt="Premium roasted coffee beans"
            className="w-full h-[430px] md:h-[580px] object-cover"
          />

          <div className="absolute bottom-6 left-6 bg-[#F5F1E8] px-6 py-5">
            <p className="text-[9px] tracking-[0.2em] text-[#78816A]">
              THE ART OF ROASTING
            </p>
            <p className="font-serif text-xl mt-2">
              Made with intention.
            </p>
          </div>

          <div className="absolute -top-5 -right-5 border border-[#78816A]/50 w-24 h-24 hidden md:flex items-center justify-center rounded-full">
            <span className="font-serif italic text-sm text-[#78816A] text-center">
              Crafted
              <br />
              for coffee
              <br />
              lovers
            </span>
          </div>
        </div>
      </section>

      <section className="bg-[#EAE3D6] px-6 md:px-16 py-20 text-center">
        <p className="text-[#78816A] text-[10px] tracking-[0.35em] mb-6">
          BEYOND THE ORDINARY
        </p>

        <h2 className="font-serif text-3xl md:text-5xl max-w-3xl mx-auto leading-tight">
          Not just coffee.
          <br />
          <span className="italic text-[#78816A]">
            A moment worth slowing down for.
          </span>
        </h2>
      </section>

      <section
        id="collection"
        className="px-6 md:px-16 py-24 scroll-mt-24"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[#78816A] text-[10px] tracking-[0.35em] mb-5">
              DISCOVER OUR SELECTION
            </p>

            <h2 className="font-serif text-4xl md:text-6xl">
              Coffee Collection
            </h2>

            <p className="text-[#33271F]/60 text-sm mt-5 max-w-lg leading-7">
              Explore carefully selected coffee beans,
              sourced from exceptional growing regions.
            </p>
          </div>

          <p className="text-[10px] tracking-widest text-[#33271F]/50">
            FIND YOUR PERFECT CUP ↗
          </p>
        </div>

        <CoffeeSearch coffees={coffees} />
      </section>

      <section
        id="about"
        className="bg-[#33271F] text-[#F5F1E8] px-6 md:px-16 py-24"
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#B5BE9E] text-[10px] tracking-[0.35em] mb-7">
              OUR PHILOSOPHY
            </p>

            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              Every bean has a story.
              <span className="italic text-[#B5BE9E]">
                {" "}We bring it to life.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-white/60 text-sm leading-8 mb-8">
              We believe great coffee is the result of care at every step.
              From the origin of each bean to the roasting process,
              every detail contributes to a better cup.
            </p>

            <p className="text-white/60 text-sm leading-8">
              Our passion is simple: bringing exceptional coffee
              closer to the people who appreciate it.
            </p>

            <div className="mt-10">
              <a
                href="#collection"
                className="inline-block border-b border-[#B5BE9E] pb-2 text-xs tracking-widest text-[#B5BE9E] hover:text-white transition-colors"
              >
                DISCOVER OUR COFFEE →
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#F5F1E8] px-6 md:px-16 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <Link href="/" className="font-serif text-2xl tracking-[0.18em]">
              ROASTERY<span className="text-[#78816A]">.</span>
            </Link>

            <p className="text-xs text-[#33271F]/50 mt-4">
              Crafted with passion for coffee.
            </p>
          </div>

          <div className="flex gap-8 text-[10px] tracking-widest">
            <a href="#collection" className="hover:text-[#78816A]">
              COFFEE
            </a>
            <a href="#about" className="hover:text-[#78816A]">
              ABOUT
            </a>
            <a href="mailto:hello@roastery.com" className="hover:text-[#78816A]">
              CONTACT
            </a>
          </div>
        </div>

        <div className="border-t border-[#33271F]/15 mt-12 pt-6 text-[9px] tracking-widest text-[#33271F]/40">
          © 2026 ROASTERY. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </main>
  );
}
