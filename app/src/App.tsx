import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './ai.css'

type Project = {
  title: string
  description: string
  href: string
}

const projects: Project[] = [
  {
    title: "IA conduite 2D",
    description:
      "Projet Perso : Simulation interactive d'intelligence artificielle d'apprentissage par algos génétiques pour pilotage de voitures virtuelles.",
    href: "https://github.com/Sirteabagg/Projet_AI",
  },
  {
    title: "Aide Immobiliere avec Data Analyse",
    description:
      "Projet d'école : Nettoyage, analyse et visualisation des données immobilières de Lyon.",
    href: "https://github.com/Sirteabagg/aide_immobiliere_lyon",
  },
  
  {
    title: "Refonte Blablacar-like",
    description:
      "Projet d'école : Création d'une plateforme de covoiturage moderne, sécurisée, inspirée de Blablacar.",
    href: "https://github.com/Sirteabagg/blablacar---remaster",
  },
  {
    title: "App de recrutement",
    description:
      "Projet d'école : Création d'une plateforme de mise en relation entre entreprises et candidats moderne, inspirée de HelloWork.",
    href: "https://github.com/Sirteabagg/appRecrutement",
  },
]

function App() {
  const [idx, setIdx] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)

  const next = () => { setDirection(1); setIdx((i) => (i + 1) % projects.length) }
  const prev = () => { setDirection(-1); setIdx((i) => (i - 1 + projects.length) % projects.length) }

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="page">
      <div className="blob tl" />
      <div className="blob br" />

      {/* Navbar */}
      <nav className="navbar">
        <ul className="navlist">
          {[
            { href: '#accueil', label: 'Accueil' },
            { href: '#competences', label: 'Compétences' },
            { href: '#exp', label: 'Expérience' },
            { href: '#formation', label: 'Formation' },
            { href: '#hobbies', label: 'Centres d’intérêt' },
            { href: '#contact', label: 'Contact' },
          ].map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <main className="container">
        {/* Hero */}
        <motion.div
          id="accueil"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          <div className="glass hero">
            <h1 className="h1">Ethan Petain</h1>
            <h2 className="h2">Ingénieur IA & Data Science</h2>
            <p className="p">
              Mettre mes compétences en développement, mon intérêt pour l’IA et la data au service de projets innovants.
            </p>
          </div>
        </motion.div>

        {/* Contact + Accroche */}
        <motion.section
          id="contact"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="glass section">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p>
                <strong>Email :</strong> <span>ethan.petain@gmail.com</span><br />
                <strong>Téléphone :</strong> <span>06 58 67 14 22</span><br />
                <strong>LinkedIn :</strong> <a style={{ color: 'var(--cyan)', textDecoration: 'underline' }} href="http://linkedin.com/in/ethan-petain" target="_blank" rel="noreferrer">linkedin.com/in/ethan-petain</a>
              </p>
              <p style={{ fontStyle: 'italic' }}>
                Mettre mes compétences en développement, mon intérêt pour l’IA et la data au service de projets innovants, avec enthousiasme et esprit d’initiative, pour aider votre entreprise à exploiter la donnée et booster la performance !
              </p>
            </div>
          </div>
        </motion.section>

        {/* Compétences / Outils / Langues */}
        <motion.section
          id="competences"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="glass section">
            <h3 className="section-title">Compétences</h3>
            <div className="badges">
              {['Python','C','Java','SQL','Machine Learning','Deep Learning'].map((s) => (
                <motion.span key={s} whileHover={{ y: -3, scale: 1.02 }} className="badge">{s}</motion.span>
              ))}
            </div>

            <h3 className="section-title" style={{ marginTop: '1rem' }}>Outils</h3>
            <div className="badges">
              {['Git','Clion','Pycharm','Kaggle','VS Code','MongoDB'].map((s) => (
                <motion.span key={s} whileHover={{ y: -3, scale: 1.02 }} className="badge">{s}</motion.span>
              ))}
            </div>

            <h3 className="section-title" style={{ marginTop: '1rem' }}>Langues</h3>
            <div className="badges">
              {['Français (natif)','Anglais (B2)','Allemand (A2)','Japonais (A1)'].map((s) => (
                <motion.span key={s} whileHover={{ y: -3, scale: 1.02 }} className="badge">{s}</motion.span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Formation */}
        <motion.section
          id="formation"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="glass section">
            <h3 className="section-title">Formation</h3>
            <div className="timeline">
              <div className="item">
                <div className="dot" />
                <div className="glass item-card">
                  <span className="date">2022-Présent</span>
                  <strong>Ingénieur IA & Data</strong>
                  <span className="company">- ECE Paris</span>
                </div>
              </div>
              <div className="item">
                <div className="dot" />
                <div className="glass item-card">
                  <span className="date">Automne 2024</span>
                  <strong>Semestre à l'international</strong>
                  <span className="company">- Baruch College New York</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Expérience */}
        <motion.section
          id="exp"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="glass section">
            <h3 className="section-title">Expérience</h3>
            <div className="timeline">
              <div className="item">
                <div className="dot" />
                <div className="glass item-card">
                  <span className="date">Janvier 2024</span>
                  <strong>Stage Dév Full-Stack</strong>
                  <span className="company">- Les Fabricants</span>
                </div>
              </div>
              <div className="item">
                <div className="dot" />
                <div className="glass item-card">
                  <span className="date">Fevrier 2025</span>
                  <strong>R&D Data Analyst & IA</strong>
                  <span className="company">- SII</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Hobbies */}
        <motion.section
          id="hobbies"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="glass section">
            <h3 className="section-title">Centres d’intérêt</h3>
            <div className="badges">
              {['Tennis de table','Sport automobile','Cyclisme','Mécanique','Management associatif'].map((s) => (
                <motion.span key={s} whileHover={{ y: -3, scale: 1.02 }} className="badge">{s}</motion.span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Projets */}
        <motion.section
          id="projets"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="glass section">
            <h3 className="section-title">Projets</h3>
            <div className="carousel-row">
              <button className="navbtn" onClick={prev}>&#8678;</button>
              <div className="glass carousel-card">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={idx}
                    initial={{ x: direction === 1 ? 60 : -60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: direction === 1 ? -60 : 60, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    style={{ maxWidth: '60ch' }}
                  >
                    <h3 style={{ fontFamily: 'Montserrat, system-ui, sans-serif', fontSize: '1.25rem', margin: 0 }}>{projects[idx].title}</h3>
                    <p style={{ marginTop: '.5rem', opacity: .9 }}>{projects[idx].description}</p>
                    <a
                      href={projects[idx].href}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'inline-block', marginTop: '.75rem',
                        borderRadius: 10, padding: '8px 14px',
                        background: 'var(--electric)', color: '#2641a5', fontWeight: 700,
                        textDecoration: 'none', boxShadow: '0 6px 20px rgba(22,156,243,0.25)'
                      }}
                    >
                      Voir sur GitHub
                    </a>
                  </motion.div>
                </AnimatePresence>
              </div>
              <button className="navbtn" onClick={next}>&#8680;</button>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="footer">
          <p>
            Portfolio & Projets IA :{' '}
            <a href="https://github.com/Sirteabagg/" target="_blank" rel="noreferrer">https://github.com/Sirteabagg/</a>
          </p>
        </footer>
      </main>
    </div>
  )
}

export default App
