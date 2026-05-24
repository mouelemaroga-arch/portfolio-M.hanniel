import styles from './App.module.css';
import profileImage from '../imports/Hanniel_Maroga_Bach1_-_2.jpg';
import Contact from './contact'; // <-- Import ajouté

export default function App() {
  return (
    <>
      {/* NAVBAR */}
      <div className={styles.navbar}>
        <ul className={styles.navList}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* CONTAINER PRINCIPAL */}
      <div className={styles.container}>

        {/* HERO */}
        <section id="home" className={styles.hero}>
          <h1 className={styles.heroTitle}>
            Hanniel, apprenti développeur informatique
          </h1>
        </section>

        {/* ABOUT */}
        <section id="about" className={styles.about}>
          <div className={styles.aboutText}>
            <p>
              Bonjour, je suis Hanniel, étudiant dans le domaine du développement
              informatique à Epitech. Étudiant en première année, je suis à la recherche
              d'un stage de 2 mois pour juin 2026 afin de renforcer mes compétences
              théoriques au défi du monde professionnel. Formé à la méthodologie par
              projets, j'ai appris plusieurs langages comme le HTML, CSS et JavaScript.
              Mon objectif premier est d'accélérer ma progression technique. Je suis
              convaincu que rien ne remplace l'immersion en entreprise pour confronter
              mon code à des problématiques réelles et apprendre de bonnes pratiques
              auprès de développeurs expérimentés. Passionné de sport collectif, je sais
              que la réussite d'un projet dépend autant de la communication que de la
              qualité du code.
            </p>
          </div>

          <div className={styles.photoWrapper}>
            <img
              src={profileImage}
              className={styles.photo}
              alt="Photo de Hanniel"
            />
          </div>
        </section>

        {/* CV */}
        <div id="cv" className={styles.cvSection}>
          <a
            href="/cv_hanniel.pdf"
            download="cv_hanniel"
            className={styles.cvButton}
          >
            Télécharger CV
          </a>
        </div>

        {/* SKILLS */}
        <section id="skills" className={styles.skillsSection}>
          <h2 className={styles.sectionTitle}>Compétences</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillItem}>HTML</div>
            <div className={styles.skillItem}>CSS</div>
            <div className={styles.skillItem}>JavaScript</div>
            <div className={styles.skillItem}>Python</div>
            <div className={styles.skillItem}>Express.js</div>
            <div className={styles.skillItem}>Git</div>
            <div className={styles.skillItem}>SQL</div>
            <div className={styles.skillItem}>Node.js</div>
          </div>
        </section>


        <section id="Projects" className={styles.skillsSection}>
  <h2 className={styles.sectionTitle}>Projects</h2>
  <div className={styles.projectsGrid}>
    <div className={styles.projectCard}>
      <h3>E-Todo</h3>
      <p>Application web de gestion de tâches full-stack avec authentification JWT, API REST en Node.js/Express et base de données MySQL. Conteneurisée avec Docker.</p>
      <div className={styles.techTags}>
        <span>Node.js</span><span>MySQL</span><span>Docker</span><span>React</span>
      </div>
    </div>
    <div className={styles.projectCard}>
      <h3>Hack & Juice</h3>
      <p>Module de cybersécurité basé sur l'OWASP Juice Shop. Réalisation de challenges de pentesting couvrant les failles du Top 10 OWASP : injection SQL, XSS, broken access control, etc.</p>
      <div className={styles.techTags}>
        <span>Cybersécurité</span><span>OWASP</span><span>Pentest</span><span>Burp Suite</span>
      </div>
    </div>
    <div className={styles.projectCard}>
      <h3>Product Design Hackathon</h3>
      <p>Conception d'une application sociale de A à Z : recherche utilisateur, personas, wireframes, maquettes Figma et développement d'un MVP en suivant une démarche UX professionnelle.</p>
      <div className={styles.techTags}>
        <span>UX Design</span><span>Figma</span><span>MVP</span><span>Product Design</span>
      </div>
    </div>
    <div className={styles.projectCard}>
      <h3>Alice in Wonderland — NLP</h3>
      <p>Moteur NLP en Python analysant des livres du Project Gutenberg : diversité lexicale, modélisation de thèmes, reconnaissance d'entités, résumé automatique et similarité entre livres.</p>
      <div className={styles.techTags}>
        <span>Python</span><span>NLP</span><span>TextRank</span><span>Machine Learning</span>
      </div>
    </div>
  </div>
</section>



        {/* CONTACT */}
        <section id="contact" className={styles.contactSection}>
          <h2 className={styles.sectionTitle}>Contact</h2>
          <div className={styles.contactIntro}>
            <p>Pour plus d'information vous pouvez me contacter via</p>
          </div>

          <div className={styles.contactInfo}>
            <p>📧 mouelemaroga@gmail.com</p>
            <p>📱 0695718424</p>
          </div>

          
          <Contact styles={styles} />

        </section>

      </div>
    </>
  );
}