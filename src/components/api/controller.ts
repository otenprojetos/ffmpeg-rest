import type { OpenAPIHono } from '@hono/zod-openapi';
import { getReadmeRoute, getEndpointsRoute } from './schemas';

export function registerApiRoutes(app: OpenAPIHono) {
  app.openapi(getReadmeRoute, (c) => {
    return c.html(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>FFmpeg REST API</title>
          <style>
            body { font-family: system-ui, sans-serif; max-width: 800px; margin: 40px auto; padding: 20px; }
            h1 { color: #333; }
            .endpoint { background: #f5f5f5; padding: 15px; margin: 10px 0; border-radius: 5px; }
            code { background: #e0e0e0; padding: 2px 6px; border-radius: 3px; }
          </style>
        </head>
        <body>
          <h1>FFmpeg REST API</h1>
          <p>A REST API wrapper for FFmpeg operations.</p>
          <h2>Documentation</h2>
          <ul>
            <li><a href="/reference">API Reference (Scalar)</a></li>
            <li><a href="/doc">OpenAPI Specification (JSON)</a></li>
            <li><a href="/llms.txt">LLM-Friendly Documentation (Markdown)</a></li>
            <li><a href="/endpoints">Available Endpoints (JSON)</a></li>
          </ul>
        </body>
      </html>
    `);
  });

  app.openapi(getEndpointsRoute, (c) => {
    const endpoints = [
      { path: '/', method: 'GET', description: 'API documentation homepage' },
      { path: '/endpoints', method: 'GET', description: 'List all endpoints' },
      { path: '/doc', method: 'GET', description: 'OpenAPI specification (JSON)' },
      { path: '/reference', method: 'GET', description: 'Scalar API reference UI' },
      { path: '/llms.txt', method: 'GET', description: 'LLM-friendly documentation (Markdown)' },
      { path: '/audio/mp3', method: 'POST', description: 'Convert audio to MP3' },
      { path: '/audio/wav', method: 'POST', description: 'Convert audio to WAV' },
      { path: '/video/mp4', method: 'POST', description: 'Convert video to MP4' },
      { path: '/video/audio', method: 'POST', description: 'Extract audio from video' },
      { path: '/video/frames', method: 'POST', description: 'Extract frames from video' },
      { path: '/video/frames/:filename', method: 'GET', description: 'Download extracted frame' },
      { path: '/image/jpg', method: 'POST', description: 'Convert image to JPG' },
      { path: '/media/info', method: 'POST', description: 'Probe media file metadata' }
    ];

    return c.json({ endpoints }, 200);
  });
}
