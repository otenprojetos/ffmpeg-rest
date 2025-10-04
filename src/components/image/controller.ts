import type { OpenAPIHono } from '@hono/zod-openapi';
import { imageToJpgRoute } from './schemas';

export function registerImageRoutes(app: OpenAPIHono) {
  app.openapi(imageToJpgRoute, (c) => {
    return c.json({ error: 'Not implemented yet' }, 501);
  });
}
