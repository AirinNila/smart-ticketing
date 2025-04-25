//get seat
// function seats(){
//     const seatNumber = 'a1,a2,a3,a4,b1,b2,b3,b4,c1,c2,c3,c4,d1,d2,d3,d4,e1,e2,e3,e4,f1,f2,f3,f4,g1,g2,g3,g4,h1,h2,h3,h4,i1,i2,i3,i4,j1,j2,j3,j4'
//     const getSeat = seatNumber.split(',')
//     for( const seat of getSeat){
       
//     }
    
// }

function commonOfAll (){
    const seatSelected = convertNumvers('above-seat')
    const currentSeat = seatSelected - 1
    const setNewSelectedSeat =  setElementValue('above-seat',currentSeat);
    const newSelectedSeat = selectedSeatNumber('selected-seat-number')
    const setValues = setElementValue('selected-seat-number', newSelectedSeat)
    const setTextColor = addClass('default-seat-details','hidden')

    const getTotal = convertNumvers('total');
     const total = newSelectedSeat * 550;
     const setTotalValue = setElementValue('total', total)
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

//add seat details
function addDiv(newId){
    const getParent = document.getElementById('seat-details')
    getParent.classList.remove('hidden')
    const newDiv = document.createElement('div');
    // const getId = document.getElementById(element);
    const newP = document.createElement('div');
    newP.classList.add('flex')
    newP.classList.add('justify-between')
    newP.classList.add('pb-2')
    newP.classList.add('text-des')
    newP.setAttribute('id',newId)
    newP.innerHTML=`
    <p>550</p>
    <p>Economoy</p>
    `
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

//count child
// function countChild(parent){
//     const getParent = document.getElementById(parent);
//     const count = document.querySelectorAll('#parent>[id^=child]').length
// }


// total
function totalPrice (){
    const hideDefault = addClass('default-total', 'hidden');
    const showReal = removeClass ('total', 'hidden');
    
    
}
