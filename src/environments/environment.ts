// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAnIUVY172CXrGw_s3aC060UXXXy7aOI-Y',
    authDomain: 'legalorganizer-e.firebaseapp.com',
    databaseURL: 'https://legalorganizer-e.firebaseio.com',
    projectId: 'legalorganizer-e',
    storageBucket: 'legalorganizer-e.appspot.com',
    messagingSenderId: '681607643087'
  }
};
