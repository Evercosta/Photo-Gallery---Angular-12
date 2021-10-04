// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'https://serviceapp.azurraweb.com.br/api/v1',
  firebase: {
    apiKey: "AIzaSyBt7zIy3e8UXm1OHXLULZK87yuZIlxNVCw",
    authDomain: "click-lead.firebaseapp.com",
    databaseURL: "https://click-lead.firebaseio.com",
    projectId: "click-lead",
    storageBucket: "click-lead.appspot.com",
    messagingSenderId: "296788575281",
    appId: "1:296788575281:web:d87c5fa450de9b61a08110"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
