//Here we are implementing the fetch api to get the data from the LocalHost Servlet running on the 
//Java backend Tomcat server with the Servlet url mapping of StudentServlet

const API_URL = "http://localhost:8080/1806296//RetriveData";//here the url will be mapped to the required servlet to be called for execution 

//SEE the documentation of fetch api for more clarity : https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//documentation of async-await promise based synatic sugar : 


//this async fucntion is used to get the json data drom the server uing the fetch api
/*const getLatestJSPost = async() =>{

   try{ const response = await fetch(API_URL);
    const data = await response.json();
    console.log("DATA : ",data);
    return data;
    
   }catch(err){
    console.error("Error : ",err);
    }

} 
*/
//getLatestJSPost();




//this sync fucntion is used to send data to the servlet fromt the request body part,here for the fetch api always use the 
//method : "POST" to send data as setby the browsers
//see
 const RequestResponseFunc = async(API_URL,sentData={}) =>{

    try{ 
        
        const response = await fetch(API_URL,{
        method:"POST",
        body:JSON.stringify(sentData)
      });
        
        const responseData = await response.json();
        console.log("RESPONSE_DATA : ",responseData);
        return responseData;
     
    }catch(err){
     console.error("Error : ",err);
    }
 
 } 

 export {RequestResponseFunc}
