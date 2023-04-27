/*

*----------------------------iNITIAL SETuP
1. visit :  console.firebase.google.com
2. create project (skip google anylytics)
3. register app (create config)
4.  install firebase : npm install firebase
5. add config file to your project 
6. DANGER : Do not publish or make public firebase config by pushing code in github


 


*-----------------------INTEGRATION ---------------------*

7.  Visit : go to docs > build > Authentication > web > get started
8. export app from the firebase.config.js file : export default app 
9 . Login,jsx : import getAuth from firebase/auth
10. create const auth = getAuth(app)



*-----------------PROVIDER SETUP ---------------*



11. import googleAuthorProvider and create a new provider
12. use SignWithPopUp and pass auth and provider
13. activate sign-in method (google, facebook github etc)
14 . [vite] : change 127.0.0.1 to localhost


*---------------------More auth provider*------------------------
1.  active the auth provider (create app, provide redirect url, client id, client secret)
2.
*/