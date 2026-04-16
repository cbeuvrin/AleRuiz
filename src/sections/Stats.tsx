import { useEffect, useRef, useState } from 'react';
import { Tv, Radio, Globe, Calendar, ChevronDown } from 'lucide-react';

const stats = [
  {
    icon: Tv,
    value: 10,
    suffix: '+',
    label: 'Programas de TV',
  },
  {
    icon: Radio,
    value: 5,
    suffix: '+',
    label: 'Programas de Radio',
  },
  {
    icon: Globe,
    value: 2,
    suffix: '',
    label: 'Países de alcance',
  },
  {
    icon: Calendar,
    value: 5,
    suffix: '+',
    label: 'Años de experiencia',
  },
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
    const duration = 2500;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function - easeOutExpo
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOutExpo * value));

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

export default function Stats() {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-turquoise/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className={`inline-block text-turquoise-light font-medium tracking-wider uppercase text-sm mb-4 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Presencia en Medios
          </span>
          <h2
            className={`font-heading text-3xl lg:text-4xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Experiencia y <span className="text-turquoise">Alcance</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: isVisible ? `${200 + index * 100}ms` : '0ms',
              }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-turquoise/20 rounded-2xl mb-6">
                <stat.icon className="w-8 h-8 text-turquoise" />
              </div>

              {/* Number */}
              <div className="font-heading text-5xl lg:text-6xl font-bold text-white mb-2">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  isVisible={isVisible}
                />
              </div>

              {/* Label */}
              <div className="text-gray-400 text-sm lg:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Media Details Accordion */}
        <div
          className={`max-w-4xl mx-auto space-y-4 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {[
            {
              id: 'venezuela',
              country: 'Venezuela',
              tv: [
                {
                  channel: 'Promar TV (Canal #1 regional)',
                  programs: [
                    'Una buena mañana',
                    'Gaby de noche',
                    'Sin tabú',
                    'Emprendiendo juntos',
                  ],
                },
              ],
              radio: [
                'Fe y alegría',
                'Onda la super estación',
                'Unión Radio (Marcando la pauta)',
              ],
            },
            {
              id: 'queretaro',
              country: 'Querétaro',
              tv: ['Querétaro 24/7', 'Lucero de Mediodía'],
              radio: ['Poder ciudadano Querétaro', 'SM radio'],
            },
          ].map((item, idx) => {
            const [localActive, setLocalActive] = useState(false);
            return (
              <div
                key={item.id}
                className={`group bg-white/5 backdrop-blur-sm rounded-2xl border transition-all duration-300 ${
                  localActive
                    ? 'border-turquoise/40 bg-white/10'
                    : 'border-white/10 hover:border-turquoise/20'
                }`}
              >
                <button
                  onClick={() => setLocalActive(!localActive)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <h3 className="text-white font-heading text-xl font-bold flex items-center gap-3">
                    <span
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        localActive ? 'bg-turquoise scale-125' : 'bg-gray-600'
                      }`}
                    />
                    {item.country}
                  </h3>
                  <div
                    className={`transition-transform duration-300 ${
                      localActive ? 'rotate-180 text-turquoise' : 'text-gray-500'
                    }`}
                  >
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    localActive ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-8 pt-2 grid md:grid-cols-2 gap-8 border-t border-white/5">
                    {/* TV Section */}
                    <div>
                      <h4 className="text-turquoise-light font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                        <Tv className="w-4 h-4" /> Apariciones en TV
                      </h4>
                      {Array.isArray(item.tv[0]) || typeof item.tv[0] === 'string' ? (
                        <ul className="space-y-2">
                          {(item.tv as string[]).map((tv) => (
                            <li
                              key={tv}
                              className="text-gray-300 text-sm flex items-center gap-2"
                            >
                              <span className="w-1 h-1 bg-turquoise/50 rounded-full" />
                              {tv}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="space-y-4">
                          {(item.tv as any[]).map((tvChannel, i) => (
                            <div
                              key={i}
                              className="bg-turquoise/10 rounded-xl p-4 border border-turquoise/20"
                            >
                              <p className="text-white font-bold text-xs mb-2 uppercase tracking-wide">
                                {tvChannel.channel}
                              </p>
                              <ul className="grid grid-cols-1 gap-1">
                                {tvChannel.programs.map((prog: string) => (
                                  <li
                                    key={prog}
                                    className="text-gray-400 text-xs flex items-center gap-2"
                                  >
                                    <span className="w-1 h-px bg-turquoise/30" />
                                    {prog}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Radio Section */}
                    <div>
                      <h4 className="text-turquoise-light font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                        <Radio className="w-4 h-4" /> Radio
                      </h4>
                      <ul className="space-y-3">
                        {item.radio.map((radio) => (
                          <li
                            key={radio}
                            className="text-gray-300 text-sm flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 border border-turquoise/50 rounded-full" />
                            {radio}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
