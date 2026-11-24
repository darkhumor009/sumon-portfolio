export function getSiteUrl(): URL | undefined {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

  return configuredUrl ? new URL(configuredUrl) : undefined;
}
