// SEO helper functions
import { SITE_CONFIG } from './config';

/**
 * Update document meta tags for SEO
 */
export const updateMetaTags = (title, description, pageUrl, imageUrl, type = 'website') => {
  // Update title
  document.title = title;

  // Update or create meta tags
  updateMetaTag('name', 'description', description);
  updateMetaTag('property', 'og:title', title);
  updateMetaTag('property', 'og:description', description);
  updateMetaTag('property', 'og:url', pageUrl || SITE_CONFIG.url);
  updateMetaTag('property', 'og:type', type);
  updateMetaTag('property', 'twitter:title', title);
  updateMetaTag('property', 'twitter:description', description);
  updateMetaTag('property', 'twitter:card', 'summary_large_image');

  if (imageUrl) {
    updateMetaTag('property', 'og:image', imageUrl);
    updateMetaTag('property', 'twitter:image', imageUrl);
  }
};

/**
 * Create or update a meta tag
 */
const updateMetaTag = (attrType, attrName, content) => {
  let tag = document.querySelector(`meta[${attrType}="${attrName}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attrType, attrName);
    document.head.appendChild(tag);
  }
  tag.content = content;
};

/**
 * Generate JSON-LD structured data for Organization
 */
export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Laboratory for Hypersonic and Shock Wave Research',
  url: SITE_CONFIG.url,
  description: SITE_CONFIG.description,
  department: {
    '@type': 'Organization',
    name: SITE_CONFIG.department,
    parentOrganization: {
      '@type': 'EducationalOrganization',
      name: SITE_CONFIG.institution,
      url: 'https://iisc.ac.in',
    },
  },
  email: SITE_CONFIG.email,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: SITE_CONFIG.phone,
    contactType: 'Customer Service',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Department of Aerospace Engineering',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560012',
    addressCountry: 'IN',
  },
});

/**
 * Generate JSON-LD structured data for ResearchAction
 */
export const generateResearchActionSchema = (research) => ({
  '@context': 'https://schema.org',
  '@type': 'ResearchAction',
  name: research.title,
  description: research.desc,
  agent: {
    '@type': 'Organization',
    name: 'Laboratory for Hypersonic and Shock Wave Research',
    url: SITE_CONFIG.url,
  },
});

/**
 * Generate JSON-LD structured data for ScholarlyArticle
 */
export const generateScholarlyArticleSchema = (publication) => ({
  '@context': 'https://schema.org',
  '@type': 'ScholarlyArticle',
  headline: publication.title,
  author: parseAuthors(publication.authors),
  datePublished: publication.year,
  publication: publication.meta,
  url: publication.link,
});

/**
 * Parse author string into schema format
 */
const parseAuthors = (authorString) => {
  if (!authorString) return [];
  return authorString.split(',').map((author) => ({
    '@type': 'Person',
    name: author.trim(),
  }));
};

/**
 * Inject JSON-LD schema into page
 */
export const injectSchema = (schema) => {
  let script = document.querySelector('script[type="application/ld+json"]');
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schema);
};
