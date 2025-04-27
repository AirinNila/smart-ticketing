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


}
