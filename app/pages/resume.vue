<script setup lang="ts">
// SEO
useSeoMeta({
  title: 'Resume - Arckie Zeth Jadulco',
  description: 'Senior Software Engineer resume',
  robots: 'noindex', // Don't index resume page
})

const handlePrint = () => {
  window.print()
}
</script>

<template>
  <div class="resume-page">
    <!-- Print Button (hidden when printing) -->
    <div class="print-controls no-print">
      <button @click="handlePrint" class="print-btn">
        Print / Save as PDF
      </button>
      <p class="print-hint">Use "Save as PDF" in print dialog for best results</p>
    </div>

    <!-- Resume Content -->
    <div class="resume-content">
      <!-- Page 1 -->
      <section class="page">
        <!-- Header -->
        <header class="resume-header">
          <h1>ARCKIE ZETH JADULCO</h1>
          <p class="title">Senior Software Engineer</p>
          <div class="contact-row">
            <span>arckie.jadulco@gmail.com</span>
            <span>+63 9667 424 504</span>
            <span>Cebu, Philippines</span>
            <span>linkedin.com/in/arckie-jadulco</span>
          </div>
        </header>

        <!-- Summary -->
        <section class="resume-section">
          <h2>SUMMARY</h2>
          <p>
            Senior Software Engineer with 7+ years of experience building scalable backend systems
            and full-stack applications. Expertise in Python, C#/.NET, and cloud infrastructure
            (Azure, GCP, Oracle Cloud). Track record of delivering production systems from startup
            MVPs to enterprise-scale platforms. Strong foundation in DevOps practices, database
            optimization, and cross-functional team collaboration.
          </p>
        </section>

        <!-- Experience -->
        <section class="resume-section">
          <h2>PROFESSIONAL EXPERIENCE</h2>

          <div class="job">
            <div class="job-header">
              <strong>Senior Software Engineer</strong>
              <span class="company">Arch Global Services (Philippines) Inc.</span>
              <span class="period">2024 - Present</span>
            </div>
            <ul>
              <li>Design and implement backend services for insurance claims orchestration platform processing thousands of claims daily</li>
              <li>Build serverless Azure Functions with Python for automated claim scoring and routing workflows</li>
              <li>Develop RESTful APIs integrating with legacy systems and third-party insurance data providers</li>
              <li>Optimize MSSQL database queries and stored procedures, improving claim processing performance</li>
              <li>Collaborate with claims specialists to translate business requirements into technical solutions</li>
            </ul>
          </div>

          <div class="job">
            <div class="job-header">
              <strong>Full Stack Developer</strong>
              <span class="company">TV Startup Inc.</span>
              <span class="period">Nov 2023 - 2024</span>
            </div>
            <ul>
              <li>Architected and built content management system with Django REST APIs serving Angular frontend</li>
              <li>Deployed containerized applications on Kubernetes clusters hosted on Oracle Cloud bare metal servers</li>
              <li>Established CI/CD pipelines using Jenkins, reducing deployment time from hours to minutes</li>
              <li>Configured Docker-based development environments ensuring parity between local and production</li>
              <li>Set up monitoring, logging, and alerting infrastructure for production reliability</li>
            </ul>
          </div>

          <div class="job">
            <div class="job-header">
              <strong>Full Stack Developer</strong>
              <span class="company">Navagis</span>
              <span class="period">Oct 2021 - Nov 2023</span>
            </div>
            <ul>
              <li>Developed location-based business applications integrating Google Maps APIs for fleet tracking and geofencing</li>
              <li>Built backend services with C#/.NET and Python/Django, connecting to PostgreSQL databases</li>
              <li>Led frontend development with ReactJS, implementing responsive designs and real-time data visualization</li>
              <li>Upgraded legacy applications to modern frameworks, improving performance and maintainability</li>
              <li>Managed GCP infrastructure including Compute Engine instances, Cloud SQL, and Cloud Storage</li>
            </ul>
          </div>

          <div class="job">
            <div class="job-header">
              <strong>SQL Developer</strong>
              <span class="company">Signant Health (Part-time)</span>
              <span class="period">Nov 2021 - Aug 2022</span>
            </div>
            <ul>
              <li>Developed data applications to digitize and validate clinical trial customer records</li>
              <li>Wrote complex stored procedures and functions for data transformation and validation</li>
              <li>Performed database migrations ensuring data integrity across multiple environments</li>
              <li>Collaborated with QA and business analysts to meet strict SLA requirements</li>
            </ul>
          </div>
        </section>
      </section>

      <!-- Page 2 -->
      <section class="page">
        <div class="job">
          <div class="job-header">
            <strong>Full Stack Developer</strong>
            <span class="company">Accenture</span>
            <span class="period">2018 - 2021</span>
          </div>
          <ul>
            <li>Developed CRM web application features for a global consumer goods company using C#/.NET and ReactJS</li>
            <li>Built and maintained MSSQL database schemas, stored procedures, and reporting queries</li>
            <li>Implemented CI/CD pipelines with TFS and Azure DevOps, automating build and deployment processes</li>
            <li>Led requirements gathering sessions with client stakeholders, translating business needs into user stories</li>
            <li>Mentored junior developers on coding standards, code reviews, and agile practices</li>
          </ul>
        </div>

        <!-- Skills -->
        <section class="resume-section">
          <h2>TECHNICAL SKILLS</h2>
          <div class="skills-grid">
            <div class="skill-category">
              <strong>Languages:</strong>
              <span>Python, C#, TypeScript, JavaScript, SQL</span>
            </div>
            <div class="skill-category">
              <strong>Frameworks:</strong>
              <span>Django, .NET Core, Node.js, NestJS, ReactJS, Angular</span>
            </div>
            <div class="skill-category">
              <strong>Databases:</strong>
              <span>MSSQL, PostgreSQL, MongoDB</span>
            </div>
            <div class="skill-category">
              <strong>Cloud & DevOps:</strong>
              <span>Azure, GCP, AWS, Docker, Kubernetes, Jenkins, GitLab CI/CD</span>
            </div>
            <div class="skill-category">
              <strong>Tools:</strong>
              <span>Git, Azure DevOps, TFS, Linux, REST APIs, Agile/Scrum</span>
            </div>
          </div>
        </section>

        <!-- Education -->
        <section class="resume-section">
          <h2>EDUCATION</h2>
          <div class="education">
            <strong>Bachelor of Science in Computer Engineering</strong>
            <p>University of San Carlos | 2013 - 2018</p>
          </div>
        </section>

        <!-- Projects -->
        <section class="resume-section">
          <h2>PROJECTS</h2>
          <div class="project">
            <div class="project-header">
              <strong>JTransit</strong>
              <span class="project-link">jtransit.github.io</span>
            </div>
            <p class="project-desc">Navigation app helping Cebu commuters find jeepney routes. Built with collaborative mapping and route optimization.</p>
          </div>
          <div class="project">
            <div class="project-header">
              <strong>Tela At Iba Pa</strong>
              <span class="project-link">zethcode.github.io/tabp-clothing</span>
            </div>
            <p class="project-desc">E-commerce platform built with React and Firebase. Features product catalog, cart, and checkout functionality.</p>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>

<style scoped>
/* Screen styles */
.resume-page {
  min-height: 100vh;
  background: #f5f5f5;
  padding: 2rem;
}

.print-controls {
  max-width: 210mm;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.print-btn {
  background: #c9a87c;
  color: #1a1a1f;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
}

.print-hint {
  color: #4a4a4a;
  font-size: 0.875rem;
}

.resume-content {
  max-width: 210mm;
  margin: 0 auto;
  background: white;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.page {
  padding: 15mm 20mm;
  min-height: 297mm;
  page-break-after: always;
}

.page:last-child {
  page-break-after: avoid;
}

/* Typography */
.resume-header h1 {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: #1a1a1f;
  margin: 0;
  letter-spacing: 0.1em;
}

.resume-header .title {
  color: #c9a87c;
  font-size: 1.1rem;
  margin: 0.25rem 0 0.75rem;
}

.contact-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.85rem;
  color: #4a4a4a;
  border-bottom: 2px solid #c9a87c;
  padding-bottom: 1rem;
}

.resume-section {
  margin-top: 1.5rem;
}

.resume-section h2 {
  font-family: 'Source Sans 3', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: #8a7355;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 0.35rem;
  margin-bottom: 0.85rem;
}

.job {
  margin-bottom: 1rem;
}

.job-header {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: baseline;
  margin-bottom: 0.35rem;
}

.job-header strong {
  font-size: 0.95rem;
}

.job-header .company {
  color: #8a7355;
}

.job-header .period {
  margin-left: auto;
  color: #4a4a4a;
  font-size: 0.875rem;
}

.job ul {
  margin: 0;
  padding-left: 1.25rem;
  color: #2d2d2d;
  font-size: 0.85rem;
  line-height: 1.5;
}

.job li {
  margin-bottom: 0.2rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.4rem 1.5rem;
  font-size: 0.875rem;
}

.skill-category {
  display: flex;
  gap: 0.5rem;
}

.skill-category strong {
  color: #1a1a1f;
  white-space: nowrap;
}

.skill-category span {
  color: #2d2d2d;
}

.education p, .project p {
  margin: 0;
  color: #4a4a4a;
  font-size: 0.875rem;
}

.project {
  margin-bottom: 0.5rem;
}

.project-header {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
}

.project-header strong {
  color: #1a1a1f;
}

.project-link {
  font-size: 0.8rem;
  color: #8a7355;
}

.project-desc {
  margin: 0.15rem 0 0 0;
  color: #4a4a4a;
  font-size: 0.85rem;
}

/* Print styles */
@media print {
  .no-print {
    display: none !important;
  }

  .resume-page {
    background: white;
    padding: 0;
  }

  .resume-content {
    box-shadow: none;
  }

  .page {
    padding: 10mm 15mm;
    min-height: auto;
  }

  @page {
    size: A4;
    margin: 0;
  }
}
</style>
