import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RequestResponseFunc} from "./getPosts";

//const API_URL = "http://localhost:8080/1806296/RetriveData?pageCount=1&offset=10";
//const API_URL = "http://localhost:8080/1806296/AddInvoice";

const API_URL = "http://localhost:8080/1806296/SearchInvoice?pageCount=1&offset=10";
/*const fetchInfo=async()=>{

  const data = await getLatestJSPost();
  console.log(data[0])
}

fetchInfo();
*/


/*const data = {
               businessCode:"None",custNumber:"None",nameCust:"Chanchal Kumar",clearDate:"Jan 1, 1970, 5:30:00 AM",businessYear:{"year":0},docId:-1,postingDate:"Jan 1, 1970",
              documentCreateDate:"Jan 1, 1970",dueInDate:"Jan 1, 1970",invoiceCurrency:"Non",documentType:"NA",postingId:0,areaBusiness:"None",totalOpenAmount:0.0,
              baselineCreateDate:"Jan 1, 1970",custPaymentTerms:"None",invoiceId:-1,isOpen:0,notes:""
            }

setLatestJSPost(data);




const fetchInfo=async()=>{

  const data = 2960572904;
  const d1 = await setLatestJSPost(data);
  console.log(d1);

}

fetchInfo();
*/

const fetchInfo=async()=>{

  /*const data = {
    businessCode:"None",custNumber:"None",nameCust:"Chanchal Kumar",clearDate:"Jan 1, 1970, 5:30:00 AM",businessYear:{"year":0},docId:-2,postingDate:"Jan 1, 1970",
   documentCreateDate:"Jan 1, 1970",dueInDate:"1970-01-01",invoiceCurrency:"Non",documentType:"NA",postingId:0,areaBusiness:"None",totalOpenAmount:0.0,
   baselineCreateDate:"Jan 1, 1970",custPaymentTerms:"None",invoiceId:-1,isOpen:0,notes:""
 }*/

 const data ='19285'
 if(data!==''){
  
  const d1 = await RequestResponseFunc(API_URL,data);
  console.log(d1);

 }
 else{
   console.log("empty string")
 }

 }
 
  


fetchInfo();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



/*

const data ='19285'
 console.log(data)
 if(data!==''){

  let data1 = parseInt(data)
  const d1 = await RequestResponseFunc(API_URL,data);
  console.log(d1);

 }
 else{
   console.log("empty string")
 }*/