import markdownIt from 'markdown-it';
import markdownItAnchor from 'markdown-it-anchor';
import pluginRss from '@11ty/eleventy-plugin-rss';
import Prism from 'prismjs';

export default function(eleventyConfig) {
  // Add plugins
  eleventyConfig.addPlugin(pluginRss);

  const baseSlugify = eleventyConfig.getFilter?.('slugify');
  if (baseSlugify) {
    eleventyConfig.addFilter('safeSlug', (value) => {
      if (!value) return value;
      return baseSlugify(value, {
        lower: true,
        strict: true,
        replacement: '-'
      });
    });
  }

  // Configure Markdown
  const mdOptions = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  };

  const mdAnchorOpts = {
    permalink: true,
    permalinkClass: 'anchor-link',
    permalinkSymbol: '#',
    level: [1, 2, 3, 4]
  };

  // Custom syntax highlighting plugin
  const syntaxHighlightPlugin = (md) => {
    const originalFence = md.renderer.rules.fence;
    md.renderer.rules.fence = (tokens, idx, options, env, renderer) => {
      const token = tokens[idx];
      const info = token.info ? md.utils.unescapeAll(token.info).trim() : '';
      const langName = info ? info.split(/\s+/g)[0] : '';
      
      if (langName && Prism.languages[langName]) {
        try {
          const highlighted = Prism.highlight(token.content, Prism.languages[langName], langName);
          return `<pre class="language-${langName}"><code class="language-${langName}">${highlighted}</code></pre>`;
        } catch (err) {
          // Fallback to original if highlighting fails
          return originalFence(tokens, idx, options, env, renderer);
        }
      }
      
      return originalFence(tokens, idx, options, env, renderer);
    };
  };

  eleventyConfig.setLibrary('md', markdownIt(mdOptions)
    .use(markdownItAnchor, mdAnchorOpts)
    .use(syntaxHighlightPlugin));

  // Copy static assets (excluding CSS which is handled by Tailwind)
  eleventyConfig.addPassthroughCopy('src/assets/images');
  eleventyConfig.addPassthroughCopy('src/assets/blog');
  eleventyConfig.addPassthroughCopy('src/assets/log');
  eleventyConfig.addPassthroughCopy('src/public');
  eleventyConfig.ignores.add('src/assets/css/');

  // Layout aliases
  eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');
  eleventyConfig.addLayoutAlias('blog', 'layouts/post.njk');
  eleventyConfig.addLayoutAlias('layouts/blog.njk', 'layouts/post.njk');

  // Normalize front matter dates globally (accepts "YYYY-MM-DD HH:mm:ss +/-TZ")
  eleventyConfig.addGlobalData('eleventyComputed', {
    date: (data) => {
      const raw = data.date;
      if (typeof raw === 'string') {
        const match = raw.match(/(\d{4}-\d{2}-\d{2})/);
        if (match) return match[1];
      }
      return raw;
    }
  });

  eleventyConfig.addCollection('blog', function(collectionApi) {
    return collectionApi.getFilteredByGlob('src/content/blog/*.md')
      .filter(item => !item.data.draft)
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection('log', function(collectionApi) {
    return collectionApi.getFilteredByGlob('src/content/log/*.md')
      .filter(item => !item.data.draft)
      .sort((a, b) => b.date - a.date);
  });
  

  eleventyConfig.addCollection('projects', function(collectionApi) {
    return collectionApi.getFilteredByGlob('src/content/projects/*.md')
      .sort((a, b) => (b.data.order || 0) - (a.data.order || 0));
  });

  eleventyConfig.addCollection('tagList', function(collectionApi) {
    const tagSet = new Set();
    collectionApi.getAll().forEach(item => {
      (item.data.tags || []).forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  });

  // Add filters
  eleventyConfig.addFilter('readableDate', (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return new Date(dateObj).toISOString().split('T')[0];
  });

  eleventyConfig.addFilter('readingTime', (text) => {
    const wordsPerMinute = 200;
    const numberOfWords = text.split(/\s/g).length;
    return Math.ceil(numberOfWords / wordsPerMinute);
  });

  eleventyConfig.addFilter('limit', (array, limit) => {
    return array.slice(0, limit);
  });

  // Don't watch CSS as it's handled by Tailwind separately

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      data: '_data'
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk'
  };
}
