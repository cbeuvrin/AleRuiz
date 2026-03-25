import { useEffect, useRef, useState } from 'react';
import { Award, Star, Trophy, Medal } from 'lucide-react';

const recognitions = [
  {
    icon: Trophy,
    year: '2020-2021',
    title: 'Reconocimiento Internacional México',
    description: 'A la trayectoria profesional en el campo de la psicología.',
    side: 'left',
  },
  {
    icon: Award,
    year: '2017',
    title: 'Fundación Pro.Empleo',
    description: 'Reconocimiento por la contribución al desarrollo laboral.',
    side: 'right',
  },
  {
    icon: Star,
    year: 'Noviembre 2013',
    title: 'Investigador PEII',
    description: 'Investigación en psicología aplicada.',
    side: 'left',
  },
  {
    icon: Medal,
    year: 'Actualidad',
    title: 'Asociación Nacional de Promotores y Educadores para la Salud A.C.',
    description: 'Miembro activo y colaboradora en proyectos de salud mental.',
    side: 'right',
  },
];

export default function Recognitions() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="reconocimientos"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block text-turquoise font-medium tracking-wider uppercase text-sm mb-4 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Trayectoria
          </span>
          <h2
            className={`font-heading text-4xl lg:text-5xl font-bold text-gray-900 mb-6 transition-all duration-700 delay-100 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Reconocimientos y <span className="text-turquoise">Logros</span>
          </h2>
          <p
            className={`text-gray-600 text-lg transition-all duration-700 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Un recorrido por los momentos destacados de mi carrera profesional.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line - desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-turquoise via-turquoise-light to-turquoise/20 -translate-x-1/2" />

          {/* Recognition Cards */}
          <div className="space-y-8 lg:space-y-12">
            {recognitions.map((recognition, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: isVisible ? `${300 + index * 150}ms` : '0ms',
                }}
              >
                <div
                  className={`lg:grid lg:grid-cols-2 lg:gap-8 items-center ${
                    recognition.side === 'right'
                      ? ''
                      : 'lg:direction-rtl'
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`${
                      recognition.side === 'right'
                        ? 'lg:col-start-2'
                        : 'lg:col-start-1 lg:text-right'
                    }`}
                  >
                    <div
                      className={`group bg-gray-50 rounded-2xl p-6 lg:p-8 hover:bg-white hover:shadow-card transition-all duration-300 border border-transparent hover:border-turquoise/20 ${
                        recognition.side === 'left' ? 'lg:direction-ltr' : ''
                      }`}
                    >
                      <div
                        className={`flex items-start gap-4 ${
                          recognition.side === 'left'
                            ? 'lg:flex-row-reverse lg:text-right'
                            : ''
                        }`}
                      >
                        {/* Icon */}
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-turquoise/10 rounded-xl flex-shrink-0 group-hover:bg-turquoise group-hover:text-white transition-colors duration-300">
                          <recognition.icon className="w-7 h-7 text-turquoise group-hover:text-white transition-colors" />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          {/* Year Badge */}
                          <span className="inline-block px-3 py-1 bg-turquoise/10 text-turquoise text-sm font-medium rounded-full mb-2">
                            {recognition.year}
                          </span>

                          {/* Title */}
                          <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                            {recognition.title}
                          </h3>

                          {/* Description */}
                          <p className="text-gray-600">{recognition.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center dot - desktop only */}
                  <div
                    className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center ${
                      recognition.side === 'right'
                        ? 'top-1/2 -translate-y-1/2'
                        : 'top-1/2 -translate-y-1/2'
                    }`}
                  >
                    <div className="w-4 h-4 bg-turquoise rounded-full border-4 border-white shadow-lg" />
                  </div>

                  {/* Empty space for other side */}
                  <div
                    className={`hidden lg:block ${
                      recognition.side === 'right'
                        ? 'lg:col-start-1'
                        : 'lg:col-start-2'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          <p className="text-gray-500 text-sm">
            * Los logos de las instituciones serán agregados próximamente
          </p>
        </div>
      </div>
    </section>
  );
}
