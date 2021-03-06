import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AdminModule } from './app-admin/app/admin.module';
import { environment } from './environments/environment';

declare var require: any;

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AdminModule);
