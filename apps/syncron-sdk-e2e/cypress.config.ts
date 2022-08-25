import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset';

export default defineConfig({
  e2e: {
    supportFile: './src/support/e2e.ts',
    specPattern: './src/e2e/*.{js,ts}',
    video: true,
    screenshotsFolder: '../../dist/cypress/apps/syncron-sdk-e2e/screenshots',
    videosFolder: '../../dist/cypress/apps/syncron-sdk-e2e/videos',
    trashAssetsBeforeRuns: true,
    screenshotOnRunFailure: true,
  }
});
