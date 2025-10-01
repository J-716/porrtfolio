/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly RESEND_API_KEY: string;
  readonly PUBLIC_SITE_URL: string;
  readonly NODE_ENV: 'development' | 'production';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

