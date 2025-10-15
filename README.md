# fabiofranchino.com

Personal website of Fabio Franchino - AI consultant and strategic advisor helping businesses integrate AI and digital transformation.

## Stack

This website is built with:

- **[Eleventy (11ty)](https://www.11ty.dev/)** - Static site generator
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Nunjucks](https://mozilla.github.io/nunjucks/)** - Templating engine
- **[Markdown](https://www.markdownguide.org/)** - Content authoring
- **[React](https://react.dev/)** - Component library (for interactive elements)
- **[Vite](https://vitejs.dev/)** - Build tool

## Project Structure

```
├── src/
│   ├── _data/              # Global data files
│   ├── _includes/          # Layouts and components
│   │   ├── components/     # Reusable components (header, footer, etc.)
│   │   └── layouts/        # Page layouts (base, page, post)
│   ├── assets/             # Static assets (CSS, images)
│   ├── content/            # Content (projects, blog posts)
│   └── *.njk               # Page templates
├── _site/                  # Generated static site (output)
└── scripts/                # Build scripts
```

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:8080` with live reload.

## Build

Build the site for production:

```bash
npm run build
```

The static files will be generated in the `_site/` directory.

## Deployment

This site is configured to deploy on Netlify. The `netlify.toml` file contains the build configuration.

## Scripts

- `npm run dev` - Start Eleventy development server
- `npm run build` - Build CSS and generate static site
- `npm run build:css` - Build and minify Tailwind CSS
- `npm run build:eleventy` - Generate static site with Eleventy
- `npm run normalize-dates` - Normalize date formats in content
- `npm run fix-nunjucks-syntax` - Fix Nunjucks syntax in content files

## License

All rights reserved.
