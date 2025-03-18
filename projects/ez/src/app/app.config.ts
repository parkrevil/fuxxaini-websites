import { mergeApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appConfig as coreAppConfig } from 'core';

import { routes } from './app.routes';

export const appConfig = mergeApplicationConfig(coreAppConfig, {
  providers: [provideRouter(routes)],
});
