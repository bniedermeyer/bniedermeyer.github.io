import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setupNodeEvents(on, _config) {
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
        table(message) {
          console.table(message);

          return null;
        },
      });
    },
  },
});
