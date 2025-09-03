import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const baseUrl = 'https://sumaqagro.com'; // Cambiar por tu dominio real
  
  const staticPages = [
    '',
    '/nosotros',
    '/productos',
    '/blog',
    '/contacto',
    '/blog/diatomaq-ventajas-agricultura-moderna'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page === '' ? 'daily' : page.includes('blog') ? 'weekly' : 'monthly'}</changefreq>
    <priority>${page === '' ? '1.0' : page.includes('blog') ? '0.8' : '0.9'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400' // Cache por 24 horas
    }
  });
};
