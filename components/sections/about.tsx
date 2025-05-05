"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { User, Briefcase, BookOpen } from 'lucide-react'
// Remove useTranslations import
import { useLanguage } from '@/context/LanguageContext'; // Import the context hook

// Define translations for this component
const aboutTranslations = {
  title: { en: 'About Me', es: 'Acerca de Mí' },
  bio: {
    title: { en: 'My Bio', es: 'Mi Biografía' },
    p1: { en: 'Passionate and results-oriented web developer with 5+ years of experience in designing, developing, and deploying web applications.', es: 'Desarrollador web apasionado y orientado a resultados con más de 5 años de experiencia en diseño, desarrollo y despliegue de aplicaciones web.' },
    p2: { en: 'Proficient in modern frontend and backend technologies including React, Next.js, Node.js, and various databases. Proven ability to lead projects and collaborate effectively in team environments.', es: 'Competente en tecnologías modernas de frontend y backend, incluyendo React, Next.js, Node.js y diversas bases de datos. Capacidad demostrada para liderar proyectos y colaborar eficazmente en entornos de equipo.' },
    p3: { en: 'Always eager to learn new technologies and improve my skills to deliver high-quality, scalable solutions.', es: 'Siempre ansioso por aprender nuevas tecnologías y mejorar mis habilidades para entregar soluciones escalables y de alta calidad.' },
  },
  experience: {
    title: { en: 'Experience', es: 'Experiencia' },
    senior: {
      title: { en: 'Senior Web Developer', es: 'Desarrollador Web Senior' },
      company: { en: 'Tech Solutions Inc.', es: 'Soluciones Tecnológicas Inc.' },
      period: { en: '2021 - Present', es: '2021 - Presente' },
      description: { en: 'Led development of key features for enterprise-level applications. Mentored junior developers.', es: 'Lideré el desarrollo de características clave para aplicaciones de nivel empresarial. Mentoré a desarrolladores junior.' },
    },
    web: {
      title: { en: 'Web Developer', es: 'Desarrollador Web' },
      company: { en: 'Web Innovators LLC', es: 'Innovadores Web LLC' },
      period: { en: '2019 - 2021', es: '2019 - 2021' },
      description: { en: 'Developed and maintained client websites using React and Node.js. Collaborated with designers.', es: 'Desarrollé y mantuve sitios web de clientes usando React y Node.js. Colaboré con diseñadores.' },
    },
  },
  education: {
    title: { en: 'Education', es: 'Educación' },
    degree: {
      title: { en: 'B.S. in Computer Science', es: 'Licenciatura en Ciencias de la Computación' },
      school: { en: 'University of Technology', es: 'Universidad de Tecnología' },
      period: { en: '2015 - 2019', es: '2015 - 2019' },
    },
    cert: {
      title: { en: 'Full-Stack Web Development Certification', es: 'Certificación en Desarrollo Web Full-Stack' },
      school: { en: 'Coding Bootcamp Pro', es: 'Coding Bootcamp Pro' },
      period: { en: '2019', es: '2019' },
    },
  },
};


export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { t } = useLanguage(); // Use the language context hook

  return (
    <section id="about" className="py-20 bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            ref={ref}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              {t(aboutTranslations.title)} {/* Use context t function */}
            </h2>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2"
            >
              <div className="flex items-center mb-4">
                <User className="text-primary mr-2" />
                <h3 className="text-xl font-semibold">{t(aboutTranslations.bio.title)}</h3>
              </div>
              <p className="mb-4 text-foreground/80">{t(aboutTranslations.bio.p1)}</p>
              <p className="mb-4 text-foreground/80">{t(aboutTranslations.bio.p2)}</p>
              <p className="text-foreground/80">{t(aboutTranslations.bio.p3)}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2"
            >
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <Briefcase className="text-primary mr-2" />
                  <h3 className="text-xl font-semibold">{t(aboutTranslations.experience.title)}</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-medium">{t(aboutTranslations.experience.senior.title)}</h4>
                    <p className="text-sm text-foreground/70">
                      {t(aboutTranslations.experience.senior.company)} • {t(aboutTranslations.experience.senior.period)}
                    </p>
                    <p className="text-sm text-foreground/80 mt-1">
                      {t(aboutTranslations.experience.senior.description)}
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-medium">{t(aboutTranslations.experience.web.title)}</h4>
                    <p className="text-sm text-foreground/70">
                      {t(aboutTranslations.experience.web.company)} • {t(aboutTranslations.experience.web.period)}
                    </p>
                    <p className="text-sm text-foreground/80 mt-1">
                      {t(aboutTranslations.experience.web.description)}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <BookOpen className="text-primary mr-2" />
                  <h3 className="text-xl font-semibold">{t(aboutTranslations.education.title)}</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-medium">{t(aboutTranslations.education.degree.title)}</h4>
                    <p className="text-sm text-foreground/70">
                      {t(aboutTranslations.education.degree.school)} • {t(aboutTranslations.education.degree.period)}
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-medium">{t(aboutTranslations.education.cert.title)}</h4>
                    <p className="text-sm text-foreground/70">
                      {t(aboutTranslations.education.cert.school)} • {t(aboutTranslations.education.cert.period)}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}