/// <reference types="astro/client" />

type Runtime = {
  env: {
    MAILGUN_API_KEY?: string;
    MAILGUN_DOMAIN?: string;
    MAILGUN_FROM?: string;
    REPORTING_EMAIL?: string;
  };
};

declare namespace App {
  interface Locals {
    runtime: Runtime;
  }
}
