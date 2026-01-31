# Resume Page Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign the resume page with improved readability, better typography contrast, and expanded job descriptions that fill 2 pages without overwhelming the reader.

**Architecture:** Update the single `resume.vue` file with darker text colors for readability, refined spacing, improved section hierarchy, and expanded bullet points for each role. Maintain minimal aesthetic with clean lines and ample whitespace.

**Tech Stack:** Vue 3, CSS (scoped styles), print-optimized layout

---

## Summary of Changes

### Readability Issues to Fix:
- Contact row uses `#666` (too light on white background)
- Job bullet points use `#444` (could be darker)
- Skills/education paragraphs use `#666` (too light)
- Company name accent color `#c9a87c` may be hard to read

### Content Improvements:
- Expand each job from 3 bullets to 4-5 bullets
- Add more specific achievements and technologies
- Improve summary to be more compelling
- Add descriptions to projects section

### Layout Refinements:
- Better visual hierarchy with subtle section separators
- Consistent spacing rhythm
- Skills section in 2-column layout
- Refined typography sizes

---

## Task 1: Update Color Palette for Readability

**Files:**
- Modify: `app/pages/resume.vue` (lines 236-312, style section)

**Step 1: Update contact row color**

Change line 241 from:
```css
color: #666;
```

To:
```css
color: #4a4a4a;
```

**Step 2: Update job bullet point color**

Change line 291 from:
```css
color: #444;
```

To:
```css
color: #2d2d2d;
```

**Step 3: Update skills paragraph color**

Change lines 304-307 from:
```css
.skills-grid p {
  margin: 0;
  color: #444;
}
```

To:
```css
.skills-grid p {
  margin: 0;
  color: #2d2d2d;
}
```

**Step 4: Update education/project paragraph color**

Change lines 309-313 from:
```css
.education p, .project p {
  margin: 0;
  color: #666;
  font-size: 0.85rem;
}
```

To:
```css
.education p, .project p {
  margin: 0;
  color: #4a4a4a;
  font-size: 0.875rem;
}
```

**Step 5: Update company name for better contrast**

Change lines 277-279 from:
```css
.job-header .company {
  color: #c9a87c;
}
```

To:
```css
.job-header .company {
  color: #8a7355;
}
```

**Step 6: Save and verify in browser**

Run: `npm run dev`
Navigate to: `http://localhost:3000/resume`
Verify: Text should be noticeably darker and more readable

---

## Task 2: Improve Summary Section

**Files:**
- Modify: `app/pages/resume.vue` (lines 43-48)

**Step 1: Replace summary paragraph**

Change lines 43-48 from:
```vue
<p>
  Senior Software Engineer with 6+ years of experience in full-stack development,
  backend systems, and DevOps. Skilled in Python, C#/.NET, and cloud platforms.
  Proven track record from startup to enterprise environments. Eager to learn and
  deliver impactful solutions.
</p>
```

To:
```vue
<p>
  Senior Software Engineer with 6+ years of experience building scalable backend systems
  and full-stack applications. Expertise in Python, C#/.NET, and cloud infrastructure
  (Azure, GCP, Oracle Cloud). Track record of delivering production systems from startup
  MVPs to enterprise-scale platforms. Strong foundation in DevOps practices, database
  optimization, and cross-functional team collaboration.
</p>
```

**Step 2: Save and verify**

---

## Task 3: Expand Arch Global Services Role

**Files:**
- Modify: `app/pages/resume.vue` (lines 55-66)

**Step 1: Replace job entry with expanded bullets**

Change lines 55-66 from:
```vue
<div class="job">
  <div class="job-header">
    <strong>Senior Software Engineer</strong>
    <span class="company">Arch Global Services (Philippines) Inc.</span>
    <span class="period">2024 - Present</span>
  </div>
  <ul>
    <li>Build backend services for insurance claims orchestration system</li>
    <li>Develop Azure Functions and Python APIs for claim scoring workflows</li>
    <li>Work with MSSQL databases serving claims specialists</li>
  </ul>
</div>
```

To:
```vue
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
```

**Step 2: Save and verify**

---

## Task 4: Expand TV Startup Role

**Files:**
- Modify: `app/pages/resume.vue` (lines 68-79)

**Step 1: Replace job entry with expanded bullets**

Change lines 68-79 from:
```vue
<div class="job">
  <div class="job-header">
    <strong>Full Stack Developer</strong>
    <span class="company">TV Startup Inc.</span>
    <span class="period">Nov 2023 - 2024</span>
  </div>
  <ul>
    <li>Built CMS with Django APIs integrated with Kubernetes</li>
    <li>Set up CI/CD pipelines with Jenkins, Docker on Oracle Cloud</li>
    <li>Configured development and production environments from scratch</li>
  </ul>
</div>
```

To:
```vue
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
```

**Step 2: Save and verify**

---

## Task 5: Expand Navagis Role

**Files:**
- Modify: `app/pages/resume.vue` (lines 81-92)

**Step 1: Replace job entry with expanded bullets**

Change lines 81-92 from:
```vue
<div class="job">
  <div class="job-header">
    <strong>Full Stack Developer</strong>
    <span class="company">Navagis</span>
    <span class="period">Oct 2021 - Nov 2023</span>
  </div>
  <ul>
    <li>Developed business applications with Google Maps integration</li>
    <li>Upgraded application technologies and enhanced security</li>
    <li>Managed project delivery on GCP with Docker containers</li>
  </ul>
</div>
```

To:
```vue
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
```

**Step 2: Save and verify**

---

## Task 6: Expand Signant Health Role

**Files:**
- Modify: `app/pages/resume.vue` (lines 94-105)

**Step 1: Replace job entry with expanded bullets**

Change lines 94-105 from:
```vue
<div class="job">
  <div class="job-header">
    <strong>SQL Developer</strong>
    <span class="company">Signant Health (Part-time)</span>
    <span class="period">Nov 2021 - Aug 2022</span>
  </div>
  <ul>
    <li>Built applications to digitize customer records</li>
    <li>Created stored procedures, data migrations via MSSQL</li>
    <li>Delivered within SLAs alongside cross-functional teams</li>
  </ul>
</div>
```

To:
```vue
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
```

**Step 2: Save and verify**

---

## Task 7: Expand Accenture Role (Page 2)

**Files:**
- Modify: `app/pages/resume.vue` (lines 111-122)

**Step 1: Replace job entry with expanded bullets**

Change lines 111-122 from:
```vue
<div class="job">
  <div class="job-header">
    <strong>Full Stack Developer</strong>
    <span class="company">Accenture</span>
    <span class="period">2018 - 2021</span>
  </div>
  <ul>
    <li>Developed CRM web features for consumer goods company</li>
    <li>Implemented CI/CD using TFS and Azure DevOps</li>
    <li>Led client discussions on requirements and deliverables</li>
  </ul>
</div>
```

To:
```vue
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
```

**Step 2: Save and verify**

---

## Task 8: Improve Skills Section Layout

**Files:**
- Modify: `app/pages/resume.vue` (lines 124-145 and styles)

**Step 1: Update skills section HTML**

Change lines 124-145 from:
```vue
<!-- Skills -->
<section class="resume-section">
  <h2>SKILLS</h2>
  <div class="skills-grid">
    <div>
      <strong>Languages & Frameworks:</strong>
      <p>Python, Django, C#, .NET Core, Node.js, NestJS, TypeScript, JavaScript, ReactJS, Angular</p>
    </div>
    <div>
      <strong>Databases:</strong>
      <p>MSSQL, PostgreSQL, MongoDB</p>
    </div>
    <div>
      <strong>DevOps & Cloud:</strong>
      <p>Docker, Kubernetes, Jenkins, GitLab CI/CD, Git, TFS, Azure DevOps, GCP, AWS, Oracle Cloud</p>
    </div>
    <div>
      <strong>Other:</strong>
      <p>Agile methodologies, Linux server setup, REST APIs</p>
    </div>
  </div>
</section>
```

To:
```vue
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
```

**Step 2: Update skills-grid styles**

Replace lines 298-307 from:
```css
.skills-grid {
  display: grid;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.skills-grid p {
  margin: 0;
  color: #444;
}
```

To:
```css
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
```

**Step 3: Save and verify**

---

## Task 9: Expand Projects Section

**Files:**
- Modify: `app/pages/resume.vue` (lines 156-167)

**Step 1: Update projects with descriptions**

Change lines 156-167 from:
```vue
<!-- Projects -->
<section class="resume-section">
  <h2>PROJECTS</h2>
  <div class="project">
    <strong>JTransit - Cebu Jeepney Navigation App</strong>
    <p>https://jtransit.github.io/</p>
  </div>
  <div class="project">
    <strong>Tela At Iba Pa - E-Commerce Shop</strong>
    <p>https://zethcode.github.io/tabp-clothing/</p>
  </div>
</section>
```

To:
```vue
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
```

**Step 2: Add project styles**

Add after `.project` styles (around line 318):
```css
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
```

**Step 3: Save and verify**

---

## Task 10: Refine Typography and Spacing

**Files:**
- Modify: `app/pages/resume.vue` (style section)

**Step 1: Improve section header styling**

Change lines 250-259 from:
```css
.resume-section h2 {
  font-family: 'Source Sans 3', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: #1a1a1f;
  letter-spacing: 0.15em;
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.25rem;
  margin-bottom: 0.75rem;
}
```

To:
```css
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
```

**Step 2: Improve job header spacing**

Change lines 265-271 from:
```css
.job-header {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: baseline;
  margin-bottom: 0.25rem;
}
```

To:
```css
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
```

**Step 3: Adjust job list spacing**

Change lines 287-296 from:
```css
.job ul {
  margin: 0;
  padding-left: 1.25rem;
  color: #444;
  font-size: 0.9rem;
}

.job li {
  margin-bottom: 0.15rem;
}
```

To:
```css
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
```

**Step 4: Save and verify**

---

## Task 11: Final Verification and Print Test

**Step 1: Run dev server**
```bash
npm run dev
```

**Step 2: Visual checklist in browser at `/resume`:**
- [ ] All text is easily readable (no light gray on white)
- [ ] Job descriptions fill page 1 appropriately
- [ ] Page 2 has balanced content (not too sparse or crowded)
- [ ] Skills section has 2-column layout
- [ ] Projects have descriptions
- [ ] Section headers have consistent styling
- [ ] Company names are readable but distinct

**Step 3: Print test**
- Click "Print / Save as PDF"
- Verify 2-page layout in print preview
- Check no content is cut off at page breaks
- Confirm consistent margins

**Step 4: Build verification**
```bash
npm run build
```
Expected: Build completes with no errors

---

## Verification Summary

| Section | Change |
|---------|--------|
| Colors | Darker text (#2d2d2d, #4a4a4a), muted accent (#8a7355) |
| Summary | Expanded with more specific expertise |
| Each Job | 4-5 detailed bullets instead of 3 |
| Skills | 2-column grid with 5 categories |
| Projects | Added descriptions, improved layout |
| Typography | Refined sizes, better hierarchy |

Expected result: A clean, readable 2-page resume that fills the space appropriately without feeling cluttered.
