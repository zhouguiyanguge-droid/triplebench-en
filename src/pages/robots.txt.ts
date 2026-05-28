export function GET() {
  return new Response(`User-agent: *
Allow: /

Sitemap: https://triplebench.com/sitemap-index.xml
`);
}
