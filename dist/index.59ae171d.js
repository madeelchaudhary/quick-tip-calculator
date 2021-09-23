function getElement(t){return document.querySelector(t)}function getElementValue(t){return t.value}class TipCalculator{constructor(){this.bill=null,this.billElement=getElement("#bill"),this.tipElement=getElement("#tipValue"),this.splitElement=getElement("#splitValue"),this.billElement.addEventListener("input",this.updateBill),this.tipElement.addEventListener("input",this.updateValues),this.splitElement.addEventListener("input",this.updateValues)}updateBill=t=>{const e=t.target.value;if(this.bill=e||null,null===this.bill||this.bill<0)return showValues(null),void(this.bill<0&&showAlert("enter correct value!","error"));this.updateValues()};updateValues=()=>{if(null==this.bill)return;const t=getElementValue(this.tipElement),e=getElementValue(this.splitElement);computeValues(this.bill,t,e)}}function showValues(t,e,l,n,i,s){getElement("#tipPercentage").textContent=t,getElement("#tipPrice").textContent=e,getElement("#totalPrice").textContent=l,getElement("#persons").textContent=n,getElement("#billEach").textContent=i,getElement("#tipEach").textContent=s}function computeValues(t,e,l){if(!t)return void showValues("","","","","","");const n=t/100*parseInt(e),i=n+parseInt(t),s=i/parseInt(l),r=n/parseInt(l);showValues(e+"%","$ "+n.toFixed(2),"$ "+i.toFixed(2),l+" person","$ "+s.toFixed(2),"$ "+r.toFixed(2))}function showAlert(t,e){getElement("#alertContent").textContent=t,getElement("#alert").classList.add(e),getElement("#closeAlert").addEventListener("click",closeAlert)}function closeAlert(t){t.currentTarget.parentElement.classList.remove("error")}new TipCalculator;
//# sourceMappingURL=index.59ae171d.js.map