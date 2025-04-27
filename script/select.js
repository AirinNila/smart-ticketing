function couponApply(){
    const forHide = forHideTotalPrice('g-default-total', 'g-total');
    const defaultPrice = 2200;
    const discountPrice = forDiscount();
    const setDiscountPrice = setElementValue('g-total', discountPrice);
    
}

// for next
function next(){
    addClass('index', 'hidden')
    removeClass('success', 'hidden')
}

//continue
function continu(){
    addClass('success', 'hidden')
    removeClass('index', 'hidden')
}

function seat(id){
    const seatId = document.getElementById(id)
    const setColor = setBgColorById(id)
    commonOfAll ()
    addAttribute(id,'disabled')
    addDivSeatDetails(seatId)
    // const seatSelected = convertNumvers('above-seat')
    // const currentSeat = seatSelected - 1
    // const setNewSelectedSeat =  setElementValue('above-seat',currentSeat);
    // const newSelectedSeat = selectedSeatNumber('selected-seat-number')
    // const setValues = setElementValue('selected-seat-number', newSelectedSeat)
    // const setTextColor = addClass('default-seat-details','hidden')
    // const addSeatDetails = addDiv('a1div')
    // const setName = createP('a1div','aa1')
    //  const setNames = seatName('aa1','a1')
    //  const reverse = addClass('a1div', 'flex-row-reverse')
     
    // const totalCount = totalPrice ()
    // const getTotal = convertNumvers('total');
    //  const total = newSelectedSeat * 550;
    //  const setTotalValue = setElementValue('total', total)
    

}

