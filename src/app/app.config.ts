import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAuth0 } from '@auth0/auth0-angular';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),provideHttpClient(), provideAuth0({
      domain:'dev-sesrcw2du2jgicbo.us.auth0.com',
      clientId:'9v3q8k9DjZItmWrzCGcgTDTK3R7gn7xk',
      authorizationParams: {
        redirect_uri: window.location.origin,
      }
  })]
};
