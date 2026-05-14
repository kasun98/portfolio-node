import { 
  FiGithub, 
  FiLinkedin, 
  FiArrowDown,
  FiMessageSquare,
  FiEye,
  FiCode,
  FiActivity,
  FiImage,
  FiCpu,
  FiGlobe,
  FiServer,
  FiBriefcase,
  FiArrowUpRight,
  FiClock,
  FiMail,
  FiDatabase,
  FiTrendingUp,
  FiBox,
  FiCloud,
  FiAward,
  FiShield,
  FiWind,
  FiDollarSign,
  FiMap,
  FiBook,
  FiUsers,
  FiSmile,
  FiBarChart2
} from "react-icons/fi";
import {
  SiPython,
  SiRust,
  SiFastapi,
  SiApachespark,
  SiApacheairflow,
  SiApachekafka,
  SiRedis,
  SiGooglecloud,
  SiKubernetes,
  SiDocker,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiKeras,
  SiSnowflake
} from "react-icons/si";
import { FaAws, FaMicrosoft, FaUniversity } from "react-icons/fa";
import { FadeIn } from "./components/FadeIn";
import TerminalHero from "./components/TerminalHero";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <img src="/imgs/ml1k.jpeg" alt="Background" className="hero-bg-img" />
          <div className="hero-bg-gradient" />
        </div>
        <FadeIn delay={0.2} direction="up">
          <div className="hero-content">
            <div className="availability-badge">
              <span className="status-dot"></span>
              Available for new projects
            </div>
            
            <TerminalHero />
            
            <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
            <a href="https://github.com/kasun98" className="btn-icon btn-secondary" target="_blank" rel="noopener noreferrer"><FiGithub size={20} /></a>
            <a href="https://www.linkedin.com/in/kasundewaka" className="btn-icon btn-secondary" target="_blank" rel="noopener noreferrer"><FiLinkedin size={20} /></a>
          </div>
          <div style={{ marginTop: '80px' }}>
            <a href="#about" style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: 'var(--muted)', fontSize: '12px' }}>
              <span className="font-mono">scroll</span>
              <FiArrowDown size={16} className="scroll-arrow" />
            </a>
          </div>
          </div>
        </FadeIn>
      </section>

      {/* About */}
      <section id="about" className="container">
        <FadeIn>
          <div className="section-header">
            <span className="section-tag font-mono">About</span>
            <h2 className="section-title">Engineering Intelligence</h2>
            <p className="section-desc">Transforming raw data into scalable, production-ready ML solutions.</p>
          </div>
        </FadeIn>
        <div className="about-grid">
          <FadeIn direction="right" style={{ height: '100%' }}>
            <div className="about-image-wrapper">
              <img src="/imgs/me.jpeg" alt="Aaabad Touk" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </FadeIn>
          <FadeIn direction="left" style={{ height: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <div className="about-text">
                <p>I’m an AI/ML Engineer focused on building robust, intelligent systems that solve real-world problems. I specialize in the full development lifecycle from architecting complex data ingestion pipelines to deploying real-time predictive models at scale.</p>
                <p>My expertise spans the entire development lifecycle, from architecting efficient data pipelines and engineering backend systems to deploying high-performance web applications. I specialize in bridging the gap between data science and production environments, utilizing a modern tech stack to build intelligent systems that are optimized for real-world performance and seamless integration.</p>

              </div>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-value gradient-text">10+</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value gradient-text">1+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value gradient-text">100+</div>
                  <div className="stat-label">Models Trained</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value gradient-text">∞</div>
                  <div className="stat-label">untitled.ipynb</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="container">
        <FadeIn>
          <div className="section-header">
            <span className="section-tag font-mono">Experience</span>
            <h2 className="section-title">Where I've Worked & Learned</h2>
            <p className="section-desc">My journey in tech and AI - both professional and personal.</p>
          </div>
        </FadeIn>
        <div className="timeline">
          {[
            {
              date: '2025 — Present',
              company: 'SRIQ Corporation Pvt Ltd',
              role: 'AI/ML Engineer',
              desc: 'Developed an end-to-end Marine Fuel Price Forecasting system for Inter Ocean Energy, achieving over 95% prediction accuracy through hybrid ML and LLM models. Built a full-stack solution encompassing automated data ingestion and warehousing while optimizing large-scale processing with PySpark.',
              tags: ['Azure', 'Fabric', 'Python', 'SQL', 'PySpark', 'Time Series', 'LLM']
            },
            {
              date: '2024 — 2025',
              company: 'Dialog Axiata PLC',
              role: 'Data Scientist Intern',
              desc: 'Improved Multi-SIM prediction F1 scores by 17% through advanced feature engineering. Developed and deployed a RAG-based internal knowledge retrieval system using LangChain, Azure OpenAI, and Flask.',
              tags: ['AWS SageMaker', 'Snowflake', 'LangChain', 'Azure OpenAI', 'Flask']
            },
            {
              date: '2017 — 2023',
              company: 'Faculty of Engineering, University of Peradeniya',
              role: 'BSc (Hons) Engineering',
              desc: 'Earned an Honors degree in Engineering Specializing in Civil Engineering. Developed a research project that integrated real-time data from the Google Distance Matrix API with custom-trained YOLOv8 computer vision models on GCP to predict urban traffic flow.',
              tags: ['Engineering', 'Critical Thinking', 'Problem Solving', 'Research']
            }
          ].map((exp, i) => (
            <FadeIn key={i}>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                <div className="timeline-date font-mono"><FiBriefcase size={14} style={{ marginRight: '8px' }} /> {exp.date}</div>
                <h3 className="timeline-title">{exp.company}</h3>
                <p className="timeline-role">{exp.role}</p>
                <p className="project-desc">{exp.desc}</p>
                <div className="tags font-mono">
                  {exp.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}
                </div>
              </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      
{/* Skills */}
      <section id="skills" className="container">
        <FadeIn>
          <div className="section-header">
            <span className="section-tag font-mono">Skills</span>
            <h2 className="section-title">Tech Stack</h2>
            <p className="section-desc">The tools and technologies I work with daily.</p>
          </div>
        </FadeIn>
        <div className="skills-grid">
          <FadeIn delay={0.1}>
            <div className="skill-card">
              <div className="skill-header">
              <div className="project-icon" style={{ marginBottom: 0 }}><FiCpu /></div>
              <h3 className="project-title" style={{ marginBottom: 0 }}>AI / Machine Learning</h3>
            </div>
            <div className="skill-icons-row" style={{ display: 'flex', gap: '20px', marginBottom: '32px', flexWrap: 'wrap' }}>
              <SiPytorch className="skill-icon" style={{ '--hover-color': '#EE4C2C' } as React.CSSProperties} />
              <SiTensorflow className="skill-icon" style={{ '--hover-color': '#FF6F00' } as React.CSSProperties} />
              <SiScikitlearn className="skill-icon" style={{ '--hover-color': '#F7931E' } as React.CSSProperties} />
              <SiKeras className="skill-icon" style={{ '--hover-color': '#D00000' } as React.CSSProperties} />
            </div>
            <div className="tags font-mono">
              {[
                'Data Science',
                'Machine Learning',
                'Deep Learning',
                'Big Data',
                'Generative AI',
              ].map(skill => (
                <span className="tag" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
          </FadeIn>
          <FadeIn delay={0.2}>
          <div className="skill-card">
            <div className="skill-header">
              <div className="project-icon" style={{ marginBottom: 0 }}><FiGlobe /></div>
              <h3 className="project-title" style={{ marginBottom: 0 }}>Software & Data Engineering</h3>
            </div>
            <div className="skill-icons-row" style={{ display: 'flex', gap: '20px', marginBottom: '32px', flexWrap: 'wrap' }}>
              <SiPython className="skill-icon" style={{ '--hover-color': '#3776AB' } as React.CSSProperties} />
              <SiRust className="skill-icon" style={{ '--hover-color': '#DEA584' } as React.CSSProperties} />
              <SiFastapi className="skill-icon" style={{ '--hover-color': '#009688' } as React.CSSProperties} />
              <SiApachespark className="skill-icon" style={{ '--hover-color': '#E25A1C' } as React.CSSProperties} />
              <SiApachekafka className="skill-icon" style={{ '--hover-color': '#b91010ff' } as React.CSSProperties} />
              <SiRedis className="skill-icon" style={{ '--hover-color': '#FF6B35' } as React.CSSProperties} />
            </div>
            <div className="tags font-mono">
              {[
                'Python',
                'Rust',
                'Data Engineering',
                'FastAPI',
                'Flask',
                'SQL', 'Spark', "Redis", "Kafka",
                'ETL', 'Data Pipelines',
              ].map(skill => (
                <span className="tag" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
          </FadeIn>
          <FadeIn delay={0.3}>
          <div className="skill-card">
            <div className="skill-header">
              <div className="project-icon" style={{ marginBottom: 0 }}><FiServer /></div>
              <h3 className="project-title" style={{ marginBottom: 0 }}>Cloud & Infrastructure</h3>
            </div>
            <div className="skill-icons-row" style={{ display: 'flex', gap: '20px', marginBottom: '32px', flexWrap: 'wrap' }}>
              <FiCloud className="skill-icon" style={{ '--hover-color': '#0078D4' } as React.CSSProperties} />
              <FaAws className="skill-icon" style={{ '--hover-color': '#FF9900' } as React.CSSProperties} />
              <SiGooglecloud className="skill-icon" style={{ '--hover-color': '#4285F4' } as React.CSSProperties} />
              <SiKubernetes className="skill-icon" style={{ '--hover-color': '#326CE5' } as React.CSSProperties} />
              <SiDocker className="skill-icon" style={{ '--hover-color': '#2496ED' } as React.CSSProperties} />
            </div>
            <div className="tags font-mono">
              {[
                'Azure',
                'AWS',
                'GCP',
                'Kubernetes',
                'Docker',
                'MLOps',
                'LLMOps',
                'Git',
              ].map(skill => (
                <span className="tag" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
          </FadeIn>
          <FadeIn delay={0.4} style={{ gridColumn: '1 / -1' }}>
          <div className="skill-card">
            <div className="skill-header">
              <div className="project-icon" style={{ marginBottom: 0 }}><FiAward /></div>
              <h3 className="project-title" style={{ marginBottom: 0 }}>Certifications</h3>
            </div>
            <div className="skill-icons-row" style={{ display: 'flex', gap: '20px', marginBottom: '32px', flexWrap: 'wrap' }}>
              <FaMicrosoft className="skill-icon" style={{ '--hover-color': '#00A4EF' } as React.CSSProperties} />
              <SiSnowflake className="skill-icon" style={{ '--hover-color': '#29B5E8' } as React.CSSProperties} />
              <FiCloud className="skill-icon" style={{ '--hover-color': '#F80000' } as React.CSSProperties} />
              <FiCpu className="skill-icon" style={{ '--hover-color': '#FF6F00' } as React.CSSProperties} />
              <FiBox className="skill-icon" style={{ '--hover-color': '#0530AD' } as React.CSSProperties} />
              <FaUniversity className="skill-icon" style={{ '--hover-color': '#A51C30' } as React.CSSProperties} />
            </div>
            <div className="tags font-mono">
              {[
                'Azure Data Scientist Associate (DP-100)',
                'Azure Data Fundamentals (DP-900)',
                'Analytics & AI Intern Certification (Dialog Axiata)',
                'Snowflake Hands-On Essentials (Badge 1, 2 & 3)',
                'Oracle Cloud Infrastructure Foundations Associate',
                'Machine Learning in Production (DeepLearning.AI)',
                'Machine Learning Specialization (Stanford & DeepLearning.AI)',
                'Deep Learning Specialization (DeepLearning.AI)',
                'IBM Data Science Professional Certificate',
                'CS50X: Intro to Computer Science (HarvardX)',
                'CS50P: Intro to Programming with Python (HarvardX)',
                'CS50W: Web Programming (HarvardX)'
              ].map(cert => (
                <span className="tag" key={cert}>{cert}</span>
              ))}
            </div>
          </div>
          </FadeIn>
        </div>
      </section>

      

{/* Projects */}
      <section id="projects" className="container">
        <FadeIn>
          <div className="section-header">
            <span className="section-tag font-mono">Projects</span>
            <h2 className="section-title">What I've Built</h2>
            <p className="section-desc">My Personal Projects</p>
          </div>
        </FadeIn>
        <div className="projects-grid">
          <FadeIn delay={0.1}>
            <a href="https://github.com/kasun98/fraud-scan" target="_blank" rel="noopener noreferrer" className="project-card project-card-neurochat">
              <div className="project-icon"><FiShield /></div>
              <h3 className="project-title">Fraud Scan</h3>
            <p className="project-desc">A production-grade, cloud-native fraud detection platform built on Kubernetes and Kafka. It utilizes XGBoost for real-time transaction scoring and features a live case management dashboard for analyst intervention.</p>
            <div className="tags font-mono">
              <span className="tag">Kubernetes</span><span className="tag">Docker</span><span className="tag">Kafka</span><span className="tag">Redis</span><span className="tag">PostgreSQL</span>
            </div>
          </a>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a href="https://github.com/kasun98/datasystem" target="_blank" rel="noopener noreferrer" className="project-card project-card-visionlab">
              <div className="project-icon"><FiWind /></div>
              <h3 className="project-title">Air Quality</h3>
            <p className="project-desc">An end-to-end ML pipeline for real-time AQI forecasting using Spark Structured Streaming and Airflow. Features automated data ingestion via the WAQI API and model lifecycle management with MLflow and Docker.</p>
            <div className="tags font-mono">
              <span className="tag">Spark</span><span className="tag">Kafka</span><span className="tag">Airflow</span><span className="tag">Docker</span><span className="tag">MLflow</span>
            </div>
          </a>
          </FadeIn>
          <FadeIn delay={0.3}>
            <a href="https://github.com/kasun98/trades" target="_blank" rel="noopener noreferrer" className="project-card project-card-codesensei">
              <div className="project-icon"><FiDollarSign /></div>
              <h3 className="project-title">BTC Trades</h3>
            <p className="project-desc">A production-grade data architecture for BTC/USD market analysis using live Kraken WebSocket streams. Orchestrates the full lifecycle from real-time feature engineering to automated model retraining and observability.</p>
            <div className="tags font-mono">
              <span className="tag">Kafka</span><span className="tag">Redis</span><span className="tag">Airflow</span><span className="tag">MLflow</span><span className="tag">Docker</span>
            </div>
          </a>
          </FadeIn>
          <FadeIn delay={0.4}>
            <a href="https://github.com/kasun98/vehicles_trafficflow" target="_blank" rel="noopener noreferrer" className="project-card project-card-flowml">
              <div className="project-icon"><FiMap /></div>
              <h3 className="project-title">Traffic Management</h3>
            <p className="project-desc">A computer vision system that estimates link-wise traffic using YOLOv8 and the Google Distance Matrix API. It integrates road geometry with custom vehicle detection models on GCP to enable high-accuracy urban flow forecasting.</p>
            <div className="tags font-mono">
              <span className="tag">Python</span><span className="tag">GCP</span><span className="tag">YOLO</span><span className="tag">OpenCV</span><span className="tag">Roboflow</span>
            </div>
          </a>
          </FadeIn>
          <FadeIn delay={0.5}>
            <a href="https://github.com/kasun98/NeuronBitv3" target="_blank" rel="noopener noreferrer" className="project-card project-card-pixelforge">
              <div className="project-icon"><FiCpu /></div>
              <h3 className="project-title">NeuronBit</h3>
            <p className="project-desc">A deep learning platform powered by a DNN architecture designed to predict Bitcoin price direction. Features a LeakyReLU-optimized model and a Flask-based web interface for serving daily market predictions.</p>
            <div className="tags font-mono">
              <span className="tag">DNN</span><span className="tag">TensorFlow</span><span className="tag">CrewAI</span><span className="tag">GeminiAPI</span><span className="tag">Flask</span>
            </div>
          </a>
          </FadeIn>
          <FadeIn delay={0.6}>
            <a href="https://github.com/kasun98/RAGgenAI" target="_blank" rel="noopener noreferrer" className="project-card project-card-neurochat">
              <div className="project-icon"><FiBook /></div>
              <h3 className="project-title">AI RAG</h3>
            <p className="project-desc">A generative AI application utilizing RAG pipelines for sophisticated document interaction. Supports complex analysis and context-aware retrieval across PDFs and CSVs using state-of-the-art Large Language Models.</p>
            <div className="tags font-mono">
              <span className="tag">Ollama</span><span className="tag">Groq LLMs</span><span className="tag">LangChain</span><span className="tag">LangSmith</span><span className="tag">Streamlit</span>
            </div>
          </a>
          </FadeIn>
          <FadeIn delay={0.7}>
            <a href="https://github.com/kasun98/chatapp" target="_blank" rel="noopener noreferrer" className="project-card project-card-visionlab">
              <div className="project-icon"><FiUsers /></div>
              <h3 className="project-title">Groupz</h3>
            <p className="project-desc">A real-time chat ecosystem built with Django, featuring secure multi-user authentication and group management. Integrates AI-driven conversational agents directly into group threads for collaborative intelligence.</p>
            <div className="tags font-mono">
              <span className="tag">Django</span><span className="tag">Postgres</span><span className="tag">Redis</span><span className="tag">Groq LLMs</span><span className="tag">Python</span>
            </div>
          </a>
          </FadeIn>
          <FadeIn delay={0.8}>
            <a href="https://github.com/kasun98/emotion" target="_blank" rel="noopener noreferrer" className="project-card project-card-codesensei">
              <div className="project-icon"><FiSmile /></div>
              <h3 className="project-title">Emotion Analytics</h3>
            <p className="project-desc">A real-time computer vision project using YOLOv8 to detect and track cumulative human emotions. Optimized for live webcam feeds and video analysis via a robust Roboflow-annotated dataset.</p>
            <div className="tags font-mono">
              <span className="tag">PyTorch</span><span className="tag">Ultralytics</span><span className="tag">OpenCV</span><span className="tag">Roboflow</span>
            </div>
          </a>
          </FadeIn>
          <FadeIn delay={0.9}>
            <a href="https://github.com/kasun98/synthetics" target="_blank" rel="noopener noreferrer" className="project-card project-card-flowml">
              <div className="project-icon"><FiBarChart2 /></div>
              <h3 className="project-title">Synthetics Analyzer</h3>
            <p className="project-desc">A quantitative ML project analyzing high-dimensional datasets from Deriv synthetic indices. Implements advanced feature engineering and predictive modeling to forecast volatility in Boom and Crash markets.</p>
            <div className="tags font-mono">
              <span className="tag">Jupyter</span><span className="tag">Data Science</span><span className="tag">Feature Engineering</span><span className="tag">Python</span>
            </div>
          </a>
          </FadeIn>
        </div>
      </section>

      
{/* Contact */}
      <section id="contact" className="container">
        <FadeIn>
          <div className="section-header">
            <span className="section-tag font-mono">Contact</span>
            <h2 className="section-title">Let's Build Something</h2>
            <p className="section-desc">Have a project in mind? I'm always open to discussing new opportunities.</p>
          </div>
        </FadeIn>
        <FadeIn direction="up">
          <div style={{ maxWidth: '600px', margin: '0 auto' }} className="timeline-content">
          <div style={{ textAlign: 'center', padding: '16px' }}>
            <a href="mailto:kdkasundewaka@gmail.com" className="contact-email font-mono">
              <FiMail /> kdkasundewaka@gmail.com <FiArrowUpRight size={20} />
            </a>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
              <a href="https://github.com/kasun98" className="btn btn-secondary" target="_blank" rel="noopener noreferrer"><FiGithub size={16} style={{ marginRight: '8px' }} /> GitHub</a>
              <a href="https://www.linkedin.com/in/kasundewaka" className="btn btn-secondary" target="_blank" rel="noopener noreferrer"><FiLinkedin size={16} style={{ marginRight: '8px' }} /> LinkedIn</a>
            </div>
          </div>
        </div>
        </FadeIn>
      </section>
    </div>
  );
}
