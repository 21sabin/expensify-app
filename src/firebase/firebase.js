import * as firebase from 'firebase';

//firebase database info
const config = {
    apiKey: "AIzaSyAUM-gUNn8fy2qiz0p0Yq974e3WAIEkLQc",
    authDomain: "expensify-app-e7d6b.firebaseapp.com",
    databaseURL: "https://expensify-app-e7d6b.firebaseio.com",
    projectId: "expensify-app-e7d6b",
    storageBucket: "expensify-app-e7d6b.appspot.com",
    messagingSenderId: "641251063018"
  };

  firebase.initializeApp(config);

  const database=firebase.database();

  //this provides all the database related features
//   database.ref().set({
//       name:"sabin Mew",
//       age:21,
//       location:{
//           state:"Texas",
//           city:"Dallas"
//       }
//   });

//   database.ref('user').set({
//       name:"Sayam shrestha",
//       address:"lubhoo 4 lalitpur"
//   }).then(()=>{
//       console.log("firebse set suceed")
//   }).catch(error=>{
//       console.log("firebase failed")
//   })

//   database.ref('user/name').set(
//       "sayam"
//   )
// database.ref("user").set({
//     message:"firebase promise..",
//     flag:true,
//     isSingle:true
// }).then(()=>{s
//     console.log("firebase promise succed")
// })

let adaref=database.ref("user");
adaref.remove().then(()=>console.log("removed data sucesfully"))