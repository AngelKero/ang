import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as Sentry from "@sentry/angular";
import { Integrations } from "@sentry/tracing";

Sentry.init({
    dsn: "https://e7297b219d1e4893aa16320f359efa00@o1011274.ingest.sentry.io/5976117",
    integrations: [
        // Registers and configures the Tracing integration,
        // which automatically instruments your application to monitor its
        // performance, including custom Angular routing instrumentation
        new Integrations.BrowserTracing({
            tracingOrigins: ["localhost", "https://platzi-store.herokuapp.com"],
            routingInstrumentation: Sentry.routingInstrumentation,
        }),
    ],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: environment.production ? 1.0 : 0,
    enabled: environment.production ? true : false
});


if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic()
.bootstrapModule(AppModule)
.then(success => console.log(`Bootstrap success`))
.catch(err => console.error(err));
