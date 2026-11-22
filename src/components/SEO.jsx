import { useEffect } from 'react';

const SEO = ({ title, description, keywords, schema }) => {
  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = `${title} | XPlay Console`;
    }

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    if (description) {
      metaDesc.content = description;
    }

    // 3. Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    if (keywords) {
      metaKeywords.content = keywords;
    }

    // 4. Update OpenGraph Tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    if (title) {
      ogTitle.content = `${title} | XPlay`;
    }

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    if (description) {
      ogDesc.content = description;
    }

    // 5. JSON-LD Structured Data Schema for Search Engines (Google Rich Snippets)
    let schemaScript = document.getElementById('json-ld-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'json-ld-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    if (schema) {
      schemaScript.textContent = JSON.stringify(schema);
    }

    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [title, description, keywords, schema]);

  return null;
};

export default SEO;