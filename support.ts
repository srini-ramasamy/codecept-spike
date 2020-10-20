import { HomePage } from './home/features/support/home.page';

// export const createCucumberWrapper = () => {
//     const forge = async (objName: string, page: any) => {
//       // const { scope } = await inject();
//       // if ( scope[objName] ) { 
//       // }
//       for (let pageobj in scope) {
//         if (pageobj === objName) { 
//           return;
//         }
//       }
//       scope[objName] = page.create();
//       await share({ scope });
//     }
//     const scope = async () => {
//       if (inject().scope === null) {
//         return {};
//       }
//       else {
//         return inject().scope;
//       }
//     }
//     return {
//       forge,
//       scope
//     };
// };

export const forge = (objName: string, page: any) => {
  // const { scope } = await inject();
  // if ( scope[objName] ) { 
  // }
  for (let pageobj in scope) {
    if (pageobj === objName) { 
      return;
    }
  }
  scope[objName] = page.create();
  share({ scope });
}

export const scope = () => {
  if (inject().scope === null) {
    return {};
  }
  else {
    return inject().scope;
  }
}