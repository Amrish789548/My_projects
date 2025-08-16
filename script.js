 let principal = document.querySelector("#loan-amount-input");
let interest = document.querySelector("#interest-rate-input");
let tenure = document.querySelector("#months-to-input");
let calculate=document.querySelector("#calculate");
let emi=document.querySelector("#emi");

function CalculateEmi(){
    if(principal.value===""|| interest.value===""|| tenure.value===""){
        alert("please enter the value of emi");
    }else{
        const p=principal.value;
        const r=interest.value/1200;
        const n=tenure.value;
        const emivalue= (p*r*(1+r)**n)/((1+r)**n-1);
        emi.textContent=emivalue.toFixed(2);
    }
}

calculate.addEventListener("click",CalculateEmi);
     