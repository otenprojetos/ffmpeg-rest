import type { OpenAPIHono } from '@hono/zod-openapi';
import { probeMediaRoute } from './schemas';

export function registerMediaRoutes(app: OpenAPIHono) {
  app.openapi(probeMediaRoute, (c) => {
    return c.json({ error: 'Not implemented yet' }, 501);
  });
}
