# Saved Dreams Foundation Website
### Website Development, Design and Implementation

## Student Information

- **Name:** Ntombozuko Mangcingwana
- **Student ID:** ST10504583
- **Project:** Saved Dreams Foundation Website
- **Technology Stack:** HTML5, CSS3 and JavaScript
- **Development Environment:** Visual Studio Code
- **Hosting Platform:** GitHub Pages

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [About the Organisation](#about-the-organisation)
3. [Project Goals and Objectives](#project-goals-and-objectives)
4. [Target Audience](#target-audience)
5. [Website Features and Functionality](#website-features-and-functionality)
6. [Website Design and User Experience](#website-design-and-user-experience)
7. [Search Engine Optimisation (SEO)](#search-engine-optimisation-seo)
8. [Technologies and Tools](#technologies-and-tools)
9. [Website Structure and Sitemap](#website-structure-and-sitemap)
10. [Installation and Usage](#installation-and-usage)
11. [Testing and Validation](#testing-and-validation)
12. [Project Milestones](#project-milestones)
13. [Future Improvements](#future-improvements)
14. [References](#references)
15. [Author](#author)

---

## Project Overview

The Saved Dreams Foundation Website is a web development project created to establish a professional online presence for Saved Dreams Foundation, a non-profit organisation based in Somerset East, Eastern Cape, South Africa.

The project originated from the need to provide the organisation with a dedicated website through which it can communicate its mission, showcase its community initiatives, share information about its programmes and encourage public participation.

The website was developed using HTML5, CSS3 and JavaScript in Visual Studio Code. The development process included research, requirements gathering, project planning, wireframing, interface design, implementation, responsive styling, JavaScript functionality, testing and SEO improvements.

The website aims to improve the organisation's visibility, strengthen communication with stakeholders and make information about its activities more accessible to the public.

---

## About the Organisation

Saved Dreams Foundation is a community-focused non-profit organisation working towards building resilient learners, empowered educators and stronger communities.

Its community development activities focus on supporting vulnerable individuals and families, promoting youth empowerment, improving access to education and raising awareness about important social and health-related issues.

The website provides information about the organisation, its programmes, volunteering opportunities, sponsorship enquiries and contact details.

**Official social media presence:**
- [Saved Dreams Foundation on Facebook](https://www.facebook.com/61552654822376/)

---

## Project Goals and Objectives

The primary goal is to develop an accessible, responsive and user-friendly website that communicates the Foundation's purpose and encourages community involvement.

### Objectives

- Establish a professional online presence for Saved Dreams Foundation.
- Increase awareness of the organisation and its community initiatives.
- Provide information about the Foundation's history, mission and vision.
- Showcase programmes and services offered by the organisation.
- Encourage volunteer participation and sponsorship opportunities.
- Improve communication through accessible contact and enquiry forms.
- Provide location information through an interactive map.
- Improve search engine discoverability through SEO implementation.
- Create a consistent visual identity across all website pages.

### Key Performance Indicators (KPIs)

The following are proposed performance targets for evaluating the website after deployment:

| KPI | Target |
|---|---|
| Website visitors | 1,000 visitors per month within six months |
| Volunteer enquiries | Increase by 25% |
| Sponsorship enquiries | Increase by 20% |
| Contact form completion rate | 10% |
| Social media engagement | Increase referrals from the website to Facebook |

These are project targets and are not claimed as achieved results.

---

## Target Audience

The website is intended for:

- Community members seeking information about the Foundation.
- Individuals interested in volunteering.
- Businesses and organisations interested in sponsorship.
- Potential donors and community partners.
- Parents, learners, educators and beneficiaries.
- Stakeholders interested in community development initiatives.

---

## Website Features and Functionality

The website consists of five main pages, supported by shared navigation, styling and JavaScript functionality.

### 1. Home Page (`index.html`)

The home page introduces Saved Dreams Foundation and communicates its purpose through:

- Welcome message and organisation introduction.
- Main promotional banner.
- Calls to action for getting involved.
- Links to other website sections.
- Organisation branding and imagery.

### 2. About Us (`about.html`)

The About page provides information about the Foundation, including:

- Organisation background.
- Mission and vision.
- Community development objectives.
- Information about the Foundation's work.
- Interactive FAQ section.

The FAQ accordion allows visitors to expand and collapse answers to frequently asked questions.

### 3. Programmes and Services (`program.html`)

This page showcases the Foundation's community initiatives, including:

- Youth Mentorship and Skills Development.
- Food Relief Initiatives.
- Health and Community Awareness.
- Menstrual Dignity and Period Poverty initiatives.

JavaScript programme filters allow visitors to view programmes according to selected categories.

### 4. Get Involved (`enquiry.html`)

The Get Involved page provides opportunities for visitors to express interest in supporting the organisation.

It includes an enquiry form for:

- Volunteering.
- Sponsorship.
- General enquiries.

The form uses input validation and conditional fields to collect relevant information depending on the visitor's selected enquiry type.

### 5. Contact Us (`contacts.html`)

The Contact page provides the organisation's contact information and communication facilities.

Features include:

- Main office contact details.
- Youth Centre branch information.
- Telephone links using the `tel:` protocol.
- Email links using the `mailto:` protocol.
- Facebook social media link.
- Interactive Leaflet map.
- Direct contact form.

The contact form includes:
- Full name input.
- Email address input.
- Enquiry type selection.
- Full message field.
- Client-side validation.
- AJAX form submission using the JavaScript Fetch API.
- Loading, success and error feedback.

The form uses the HTML `action` attribute and `POST` method to identify its submission endpoint. JavaScript intercepts the normal form submission and sends the form data asynchronously using `fetch()`.

**Form processing:** The contact form is designed to use Formspree as its external form-processing service. The actual Formspree endpoint must be configured and the recipient email verified before live submissions can be received. The intended recipient is `saveddreamsngo@gmail.com`.

---

## Website Design and User Experience

The website follows a consistent visual identity inspired by the Foundation's community-focused purpose.

### Colour Palette

The design uses a combination of green, gold, neutral and white tones.

| Colour | Hex Code | Purpose |
|---|---|---|
| Dark Green | `#153d34` | Primary headings and branding |
| Medium Green | `#1d5f4a` | Buttons and interactive elements |
| Soft Green | `#edf7f1` | Background sections |
| Gold | `#d4a437` | Accent colour and highlights |
| Soft Gold | `#f7ebc8` | Supporting backgrounds |
| Dark Text | `#1f2b2a` | Main body text |
| Light Background | `#f5f7f6` | Page backgrounds |
| White | `#ffffff` | Cards and content areas |

### Responsive Design

CSS media queries and responsive layout techniques are used to adapt the website to different screen sizes.

The implementation includes:

- Responsive navigation.
- Mobile navigation menu.
- Flexible layouts using Flexbox and CSS Grid.
- Responsive typography and spacing.
- Adaptable images and content sections.
- Mobile-friendly forms and interactive elements.

### Accessibility and Usability

The website incorporates usability and accessibility considerations, including:

- Semantic HTML elements.
- Descriptive image alternative text.
- Labels associated with form fields.
- Keyboard-accessible navigation controls.
- ARIA attributes for interactive elements.
- Visible focus states.
- Appropriate feedback for form validation and submission.
- Reduced-motion considerations for animations.

---

## Search Engine Optimisation (SEO)

SEO improvements were implemented to help search engines understand the website's content and improve its discoverability.

### On-Page SEO

The website includes:

- Unique page titles.
- Meta descriptions for individual pages.
- Structured heading hierarchy.
- Descriptive image alternative text.
- Internal navigation links.
- Descriptive page content.
- Responsive page layouts.

### Social Media Integration

A Facebook link was added to the website footer to direct visitors to the Foundation's Facebook page.

The website also includes social-sharing considerations through metadata and organisation branding.

### Robots.txt

A `robots.txt` file was added to the project root to provide crawling instructions for search engine bots.

It allows crawling of the website and references the sitemap.

### XML Sitemap

A `sitemap.xml` file was created to identify the main website pages and help search engines discover their URLs.

The sitemap is intended to support submission through Google Search Console.

**Note:** Robots.txt and sitemap files assist search engine crawling and URL discovery. They do not guarantee that pages will be indexed or appear in search results.

---

## Technologies and Tools

| Technology / Tool | Purpose |
|---|---|
| HTML5 | Website structure and content |
| CSS3 | Styling, layouts and responsive design |
| JavaScript | Interactive functionality and form validation |
| Visual Studio Code | Development environment |
| Git and GitHub | Version control and project repository |
| GitHub Pages | Website hosting |
| Leaflet.js | Interactive map implementation |
| OpenStreetMap | Map tile data |
| Font Awesome | Icons and visual elements |
| Formspree | External contact form processing |
| Google Search Console | Website search performance and sitemap submission |

---

## Website Structure and Sitemap

The project uses a simple file structure to organise HTML pages, styling, JavaScript functionality, images and supporting documents.

```text
SavedDreamsFoundation/
│
├── index.html
├── about.html
├── program.html
├── enquiry.html
├── contacts.html
│
├── style.css
├── script.js
│
├── robots.txt
├── sitemap.xml
│
├── images/
│   ├── logo.jpg
│   ├── project1.jpg
│   ├── project2.jpg
│   ├── project3.jpg
│   ├── project4.jpg
│   ├── project5.jpg
│   └── ...
│
├── css/
│   └── [additional CSS resources, if used]
│
├── .github/
│   └── workflows/
│
├── .changeset/
│
├── package.json
├── package-lock.json
├── CHANGELOG.md
└── README.md
```

**Note:** The primary stylesheet and JavaScript file are located in the project root as `style.css` and `script.js`. The `css/` directory is included for any additional resources actually maintained there.

### Website Navigation

```text
Home
│
├── About Us
│   └── Organisation background, mission, vision and FAQs
│
├── Programmes & Services
│   └── Community programmes and programme filters
│
├── Get Involved
│   └── Volunteer, sponsorship and general enquiries
│
└── Contact Us
    └── Contact details, interactive map and contact form
```

---

## Installation and Usage

### Requirements

- A computer with a modern web browser.
- Visual Studio Code.
- Git (optional, for repository management).
- An internet connection for external resources such as Leaflet, Font Awesome, OpenStreetMap tiles and the form-processing service.

### Running the Project Locally

1. Clone or download the repository.
2. Open the project folder in Visual Studio Code.
3. Locate `index.html`.
4. Open the file in a web browser or use the Live Server extension.
5. Navigate through the website using the main navigation menu.

### Repository

[Saved Dreams Foundation GitHub Repository](https://github.com/Ntombii/SavedDreamsFoundation)

### Live Website

[Visit Saved Dreams Foundation Website](https://ntombii.github.io/SavedDreamsFoundation/)

### Form Configuration

Before using the contact form in production:

1. Create a form using Formspree.
2. Configure `saveddreamsngo@gmail.com` as the recipient.
3. Copy the generated form endpoint.
4. Replace the placeholder URL in the HTML form's `action` attribute.
5. Test successful and unsuccessful submissions.

---

## Testing and Validation

Testing is an important part of ensuring that the website functions correctly and provides a consistent user experience.

The following areas should be tested:

| Test Area | Testing Objective |
|---|---|
| HTML validation | Identify structural and markup errors |
| CSS validation | Check stylesheet syntax and compatibility |
| Responsive design | Verify layouts on desktop, tablet and mobile |
| Navigation | Confirm all navigation links work |
| Mobile menu | Verify opening, closing and keyboard interaction |
| FAQ accordion | Check that questions expand and collapse |
| Programme filters | Verify category filtering |
| Interactive map | Confirm map loads and responds to user interaction |
| Contact form | Test required fields and invalid input |
| AJAX submission | Verify successful and unsuccessful server responses |
| SEO files | Check that robots.txt and sitemap.xml are accessible |
| Accessibility | Check labels, keyboard navigation, focus and alternative text |

---

## Project Milestones

The project was completed through the following development phases:

| Phase | Activities |
|---|---|
| Project Initiation and Planning | Organisation research, project proposal, objectives and planning |
| Requirements Gathering | Stakeholder information, content collection and requirements |
| Design and Wireframing | Page layouts, wireframes and visual planning |
| HTML Development | Semantic structure and website page creation |
| CSS Implementation | Visual styling, layouts and responsive breakpoints |
| JavaScript Development | Navigation, animations, FAQs, filters and form interactions |
| Form Development | Client-side validation, AJAX submission and error handling |
| SEO Implementation | Meta descriptions, robots.txt, sitemap.xml and social links |
| Testing and Improvements | Functional, responsive, accessibility and content checks |
| Deployment | Publishing the website using GitHub Pages |

---

## Future Improvements

Possible future enhancements include:

- Integrating a secure online donation and payment facility.
- Adding a content management system for easier updates.
- Developing an events and news section.
- Adding an online volunteer registration system.
- Providing a dedicated sponsorship information page.
- Integrating website analytics to monitor traffic and user engagement.
- Improving search engine performance through ongoing content development.
- Expanding the website with additional programme information and community impact stories.

---

## References

The following references were consulted during the research, design and development of the website. References are presented in Harvard Anglia style.

1. Google (n.d.) *Introduction to robots.txt*. Google Search Central. Available at: https://developers.google.com/search/docs/crawling-indexing/robots/intro (Accessed: 2 November 2026).

2. Google (n.d.) *Learn about sitemaps*. Google Search Central. Available at: https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview (Accessed: 2 November 2026).

3. Google (n.d.) *Build and submit a sitemap*. Google Search Central. Available at: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap (Accessed: 2 November 2026).

4. Mozilla Developer Network (MDN) (n.d.) *Using the Fetch API*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch (Accessed: 2 November 2026).

5. Mozilla Developer Network (MDN) (n.d.) *Using FormData Objects*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects (Accessed: 2 November 2026).

6. Formspree (n.d.) *Submit forms with JavaScript (AJAX)*. Available at: https://help.formspree.io/articles/building-your-form/submit-forms-with-javascript-ajax (Accessed: 2 November 2026).

7. Leaflet (n.d.) *Leaflet Quick Start Guide*. Available at: https://leafletjs.com/examples/quick-start/ (Accessed: 2 November 2026).

8. OpenStreetMap (n.d.) *Copyright and attribution*. Available at: https://www.openstreetmap.org/copyright (Accessed: 2 November 2026).

9. Font Awesome (n.d.) *Font Awesome documentation*. Available at: https://fontawesome.com/docs (Accessed: 2 November 2026).

10. Saved Dreams Foundation (n.d.) *Official Facebook page*. Available at: https://www.facebook.com/61552654822376/ (Accessed: 2 November 2026).

11. Mangcingwana, N. (2026) *Saved Dreams Foundation website: Project research, wireframes, design, development and implementation*. Unpublished student project.

12. Mangcingwana, N. (2026) *Saved Dreams Foundation website: Project timeline, milestones and planning documentation*. Unpublished student documentation.

---

## Author

**Ntombozuko Mangcingwana**

Mobile Application and Web Development Student

This project was developed as part of my practical web development learning and aims to contribute to the online visibility and communication of Saved Dreams Foundation.

**Project Repository:** [GitHub](https://github.com/Ntombii/SavedDreamsFoundation)

**Live Website:** [Saved Dreams Foundation](https://ntombii.github.io/SavedDreamsFoundation/)
