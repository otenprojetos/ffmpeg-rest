import type { OpenAPIHono } from '@hono/zod-openapi';
import { videoToMp4Route, extractAudioRoute, extractFramesRoute, downloadFrameRoute } from './schemas';

export function registerVideoRoutes(app: OpenAPIHono) {
  app.openapi(videoToMp4Route, (c) => {
    return c.json({ error: 'Not implemented yet' }, 501);
  });

  app.openapi(extractAudioRoute, (c) => {
    return c.json({ error: 'Not implemented yet' }, 501);
  });

  app.openapi(extractFramesRoute, (c) => {
    return c.json({ error: 'Not implemented yet' }, 501);
  });

  app.openapi(downloadFrameRoute, (c) => {
    return c.json({ error: 'Not implemented yet' }, 501);
  });
}
