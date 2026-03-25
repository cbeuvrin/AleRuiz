import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Quote } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image - Desktop */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <img
          src="/images/4.png"
          alt="Ale Ruiz - Psicóloga Profesional"
          className="w-full h-full object-cover object-[25%_center]"
        />
        {/* Gradient overlay for desktop to make text on right readable (Black) */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-black/80" />
      </div>

      {/* Background Image - Mobile/Tablet */}
      <div className="lg:hidden absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Ale Ruiz - Psicóloga Profesional"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay for mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen">
          {/* Left side - Empty on desktop (image covers it) */}
          <div className="hidden lg:block" />

          {/* Right side - Content */}
          <div className="text-white space-y-6 lg:space-y-8 lg:pl-8">
            {/* Pre-title */}
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="inline-block px-4 py-2 bg-turquoise/30 lg:bg-turquoise/20 text-turquoise-light rounded-full text-sm font-medium tracking-wider uppercase backdrop-blur-sm">
                Psicóloga Profesional
              </span>
            </div>

            {/* Main Title */}
            <h1
              className={`font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight transition-all duration-700 delay-100 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="text-white">Ale</span>{' '}
              <span className="text-turquoise-light">
                Ruiz
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className={`text-lg sm:text-xl text-white/90 lg:text-white/80 max-w-lg leading-relaxed transition-all duration-700 delay-200 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              Transformando vidas a través de la psicología clínica, el
              desarrollo organizacional y el servicio social.
            </p>

            {/* Quote */}
            <div
              className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transition-all duration-700 delay-300 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <Quote className="absolute -top-3 -left-2 w-8 h-8 text-turquoise-light opacity-60" />
              <p className="text-white italic text-base sm:text-lg pl-4">
                "El primer paso hacia el cambio es la conciencia. El segundo
                paso es la aceptación."
              </p>
            </div>

            {/* CTA Button */}
            <div
              className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-700 delay-400 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center justify-center gap-2 bg-turquoise text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-turquoise-dark transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Agendar Consulta
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#sobre-mi"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector('#sobre-mi')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 text-white hover:text-turquoise transition-colors font-medium"
              >
                Conóceme
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:block">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-turquoise rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
