import type { OpenAPIHono } from '@hono/zod-openapi';
import { audioToMp3Route, audioToWavRoute } from './schemas';

export function registerAudioRoutes(app: OpenAPIHono) {
  app.openapi(audioToMp3Route, (c) => {
    return c.json({ error: 'Not implemented yet' }, 501);
  });

  app.openapi(audioToWavRoute, (c) => {
    return c.json({ error: 'Not implemented yet' }, 501);
  });
}
