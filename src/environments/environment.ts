// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  backEndApi:'http://api.appname.local/api',
  login:{
    userName:'أسم المستخدم',
    password:'كلمة السر',
    userNameRequired:'الأيميل مطلوب',
    userNameEmail:'من فضلك ادخل صيغة ايميل صحيحة',
    passwordRequired:'كلمة السر مطلوبة',
    forgetPassword:' نسيت كلمة المرور',
    rememberMe:'تذكرنى',
    login:'الدخول',
    register:'تسجيل مستخدم جديد',
    skip:'تخطى التسجيل',
    invalidCredintails:'خطأ ف اسم المستخدم او كلمة المرور'
  },
  pusher: {
    key: 'marriagepublic',
    cluster: 'eu',
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
