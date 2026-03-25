import { useEffect, useRef, useState } from 'react';
import { Award, Globe, Tv } from 'lucide-react';

const stats = [
  { icon: Tv, value: 10, suffix: '+', label: 'Programas de TV' },
  { icon: Globe, value: 2, suffix: '', label: 'Países de alcance' },
  { icon: Award, value: 5, suffix: '+', label: 'Años de experiencia' },
];

function AnimatedCounter({
  value,
  suffix,
  isVisible,
}: {
  value: number;
  suffix: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sobre-mi"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-card group">
              <img
                src="/images/about.jpg"
                alt="Ale Ruiz - Sobre Mí"
                className="w-full h-[500px] lg:h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-turquoise/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-turquoise/10 rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-turquoise/5 rounded-full -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Section label */}
            <div
              className={`transition-all duration-700 delay-100 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="text-turquoise font-medium tracking-wider uppercase text-sm">
                Conóceme
              </span>
            </div>

            {/* Title */}
            <h2
              className={`font-heading text-4xl lg:text-5xl font-bold text-gray-900 transition-all duration-700 delay-200 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              Sobre <span className="text-turquoise">Mí</span>
            </h2>

            {/* Description */}
            <div
              className={`space-y-4 transition-all duration-700 delay-300 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="text-gray-600 text-lg leading-relaxed">
                Soy Ale Ruiz, psicóloga comprometida con transformar vidas a
                través de un enfoque integral que abarca la psicología clínica,
                el desarrollo organizacional y el servicio social.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Mi práctica se fundamenta en la creencia de que cada persona
                tiene el potencial de crecer y superar sus desafíos. A través de
                un enfoque personalizado y basado en evidencia científica,
                acompaño a mis pacientes en su proceso de autodescubrimiento y
                cambio positivo.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                He tenido el privilegio de colaborar con diversas organizaciones
                nacionales e internacionales, compartiendo mi conocimiento en
                medios de comunicación y contribuyendo al bienestar de
                comunidades a través del servicio social.
              </p>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-6 pt-8 transition-all duration-700 delay-400 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-turquoise/10 rounded-xl mb-3">
                    <stat.icon className="w-6 h-6 text-turquoise" />
                  </div>
                  <div className="font-heading text-3xl lg:text-4xl font-bold text-gray-900">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      isVisible={isVisible}
                    />
                  </div>
                  <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
