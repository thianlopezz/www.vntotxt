/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly PUBLIC_VNTOTXT_API: string;
    readonly PUBLIC_PAYPAL_CLIENT_ID: string;
    readonly PUBLIC_PAYPAL_PRO_PLAN_ID: string;
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }