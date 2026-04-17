import { useEffect, useRef, useState } from 'react';
import {
  Brain,
  Building2,
  HeartHandshake,
  Stethoscope,
  Users,
  GraduationCap,
  Briefcase,
  HeartPulse,
  HandHeart,
  Wrench,
  BookOpen,
  FileText,
  Activity,
  Sparkles,
} from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'Psicología Clínica',
    description:
      'Atención psicológica personalizada para el bienestar emocional y mental.',
    items: [
      { icon: Stethoscope, text: 'Consultas privadas (atención individual y personalizada)' },
      { icon: Users, text: 'Evaluaciones psicométricas (diagnósticas y profesionales)' },
    ],
    color: 'from-turquoise/20 to-turquoise/5',
  },
  {
    icon: Building2,
    title: 'Servicios Empresariales',
    description:
      'Soluciones integrales para el desarrollo y crecimiento organizacional.',
    items: [
      { icon: Building2, text: 'Desarrollo organizacional (transformación y crecimiento)' },
      { icon: Users, text: 'Gestión de Recursos Humanos (gestión del talento)' },
      { icon: Briefcase, text: 'Capacitación empresarial (formación para equipos)' },
    ],
    color: 'from-blue-100 to-blue-50',
  },
  {
    icon: HeartHandshake,
    title: 'Servicio Social',
    description:
      'Compromiso con la comunidad y apoyo en situaciones de crisis.',
    items: [
      { icon: HeartPulse, text: 'Primeros auxilios psicológicos (atención en crisis y emergencias)' },
      { icon: HandHeart, text: 'Voluntariado (compromiso con la comunidad)' },
    ],
    color: 'from-rose-100 to-rose-50',
  },
  {
    icon: Wrench,
    title: 'Herramientas Prácticas',
    description:
      'Metodologías y recursos diseñados para facilitar la aplicación del conocimiento.',
    items: [
      { icon: GraduationCap, text: 'Talleres y conferencias (espacios de aprendizaje y crecimiento)' },
      { icon: BookOpen, text: 'Manuales' },
      { icon: FileText, text: 'Guías' },
    ],
    color: 'from-amber-100 to-amber-50',
  },
  {
    icon: Activity,
    title: 'Neuropsicología',
    description:
      'Intervenciones basadas en la neurociencia para optimizar procesos cognitivos.',
    items: [
      { icon: Brain, text: 'Evaluación neuropsicológicas' },
      { icon: Sparkles, text: 'EMT (Estimulación Magnética Transcraneal)' },
    ],
    color: 'from-purple-100 to-purple-50',
  },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

  const renderServiceCard = (service: any, index: number) => (
    <div
      key={index}
      className={`group relative bg-white rounded-3xl p-8 shadow-soft hover:shadow-hover transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{
        transitionDelay: isVisible ? `${300 + index * 100}ms` : '0ms',
      }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div
          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300 ${
            hoveredIndex === index
              ? 'bg-turquoise text-white scale-110'
              : 'bg-turquoise/10 text-turquoise'
          }`}
        >
          <service.icon className="w-8 h-8" />
        </div>

        {/* Title */}
        <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-6">{service.description}</p>

        {/* Service Items */}
        <ul className="space-y-3">
          {service.items.map((item: any, itemIndex: number) => (
            <li key={itemIndex} className="flex items-start gap-3 text-gray-700">
              <item.icon className="w-5 h-5 text-turquoise mt-0.5 flex-shrink-0" />
              <span className="text-sm leading-relaxed">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Hover border effect */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-turquoise/20 transition-colors duration-300" />
    </div>
  );

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block text-turquoise font-medium tracking-wider uppercase text-sm mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Mis Servicios
          </span>
          <h2
            className={`font-heading text-4xl lg:text-5xl font-bold text-gray-900 mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            ¿Cómo puedo <span className="text-turquoise">ayudarte</span>?
          </h2>
          <p
            className={`text-gray-600 text-lg transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Ofrezco un enfoque integral que abarca diferentes áreas de la
            psicología, adaptado a tus necesidades específicas.
          </p>
        </div>

        {/* Top Services Grid (3 items) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {services.slice(0, 3).map((service, index) => renderServiceCard(service, index))}
        </div>

        {/* Bottom Services Grid (2 items centered) */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto lg:px-24">
          {services.slice(3).map((service, index) => renderServiceCard(service, index + 3))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="flex flex-col items-center gap-6">
            <p className="text-gray-600 text-lg">
              ¿Tienes alguna pregunta sobre mis servicios?
            </p>
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector('#contacto')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center bg-turquoise text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-turquoise-dark transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Contáctame
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
