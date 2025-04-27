

function commonOfAll (){
    // 40 seat
    const seatSelected = convertNumvers('above-seat')
    const currentSeat = seatSelected - 1
    const setNewSelectedSeat =  setElementValue('above-seat',currentSeat);
    const setTextColor = addClass('default-seat-details','hidden')
    const forHide = forHideTotalPrice('default-total', 'total')
    const total = defaultTotal()
     const setTotalValue = setElementValue('total', total)
     forMail ()

}

// seat select and total
function defaultTotal(){
    const newSelectedSeat = selectedSeatNumber('selected-seat-number')
    const setValues = setElementValue('selected-seat-number', newSelectedSeat)
    const getTotal = convertNumvers('total');
     const total = newSelectedSeat * 550;
     if(newSelectedSeat === 4){
        const ableCouponButton = removeAttribute('coupon-btn', 'disabled')
        // const discount = total
        
     }
     if(newSelectedSeat > 4){
        
     }
     return total;
     
    
}

// 15 discount
function forDiscount (){
    const newDiscount = ( 2200 / 100 ) * 15;
    const coupleDiscount = (2200 / 100 ) * 20;
    const couponTextId = document.getElementById('coupon-field')
    const couponText = couponTextId.value;
    
        if(couponText === 'NEW15'){
            const newDiscountedPrice = 2200 - newDiscount;
            addClass('coupon-area', 'hidden');
            removeClass('discount-details', 'hidden');
            removeClass('d-total', 'hidden')
            const convert = convertNumvers('d-total')
            const discounted = convert + newDiscount;
            setElementValue('d-total', discounted)
            return newDiscountedPrice;
            
        }
        if (couponText === 'couple20'){
            const coupleDiscountedPrice = 2200 - coupleDiscount;
            addClass('coupon-area', 'hidden');
            removeClass('discount-details', 'hidden');
            removeClass('d-total', 'hidden')
            const convert = convertNumvers('d-total')
            const discounted = convert + coupleDiscount;
            setElementValue('d-total', discounted)
            return coupleDiscountedPrice;
        }
        // else{
        //     mainTotal = mainTotal;
        // }
    
}


// set bg color
function setBgColorById(id){
    const element = document.getElementById(id);
    element.classList.add('bg-[#1DD100]')
    element.classList.add('text-white')
}

//make number

function convertNumvers (id){
    const getElement = document.getElementById(id);
    const makeNumber = getElement.innerText;
    const value = parseInt(makeNumber);
    
    return value
}

// set element value
function setElementValue(element, value){
    const getElement = document.getElementById(element);
    getElement.innerText = value;
    
}

// selected seat number
function selectedSeatNumber(id){
    // const getId = document.getElementById(id)
    const makeNumber = convertNumvers(id)
    const increase = makeNumber + 1;
    return increase
    // const setValue = setElementValue(id, increase)
    
}

// change seat name

function seatName (name,id){
    const getId = document.getElementById(id);
    const collectText = getId.innerText;
    const setValue = setElementValue(name, collectText)
}



// for add class
function addClass(id, expected){
    const getId = document.getElementById(id);
    getId.classList.add(expected)
}

//for remove
function removeClass(id, expected){
    const getId = document.getElementById(id);
    getId.classList.remove(expected)
}

// new d
function createD (element, newId){
    const getId = document.getElementById(element);
    const newP = document.createElement('div');
    newP.setAttribute('id',newId)
    
}



function addDivSeatDetails(newId){
    const getParent = document.getElementById('seat-details')
    getParent.classList.remove('hidden')
   
    addClass('default-seat-details','hidden')
    const newDiv = document.createElement('div');
    // const getId = document.getElementById(element);
    const newP = document.createElement('div');
    newP.classList.add('flex')
    newP.classList.add('justify-between')
    newP.classList.add('pb-2')
    newP.classList.add('text-des')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')
    p1.innerText = newId.innerText;
    p2.innerText = 'Economoy';
    p3.innerText = '550';
    newP.appendChild(p1)
    newP.appendChild(p2)
    newP.appendChild(p3)
    newDiv.appendChild(newP)
    getParent.appendChild(newDiv)
}

//create element 
function createP (element, newId){
    const getId = document.getElementById(element);
    const newP = document.createElement('p');
    newP.setAttribute('id',newId)
    getId.appendChild(newP)
}


// total
function forHideTotalPrice (bydefault ,main ){
    const hideDefault = addClass( bydefault, 'hidden');
    const showReal = removeClass (main, 'hidden');

}

//remove attribute 
function removeAttribute (id, expected){
    const getId = document.getElementById(id);
    getId.removeAttribute(expected)
}
//add attribute 
function addAttribute (id, expected){
    const getId = document.getElementById(id);
    getId.setAttribute(expected, true)
}


 //for mail
 function forMail (){

 document.getElementById('nbr-input').addEventListener('keyup', function(){
    removeAttribute('next-btn', 'disabled')
    
  })
}


