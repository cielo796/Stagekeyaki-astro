import { defineConfig } from 'astro/config';

const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: isGitHubPagesBuild
    ? 'https://cielo796.github.io'
    : 'https://www.kaibara-keyaki.or.jp',
  base: isGitHubPagesBuild ? '/Stagekeyaki-astro' : undefined,
  compressHTML: true,
});
