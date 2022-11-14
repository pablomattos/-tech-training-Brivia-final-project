function webSiteValidation(string) {
    try {
     const url = new URL(string)
    return true;
   } catch(err) {
    return false;
   }
 }

 export default webSiteValidation


