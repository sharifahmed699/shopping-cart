function updatePlusMinus(product,price, isIncreasing){
    const productInput = document.getElementById(product + '-number')
    let productNumber = productInput.value
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1
    }
    productInput.value = productNumber

    const productPrice = document.getElementById(product + '-price')
    productPrice.innerText = productNumber * price

    calculateTotal()
}
function getInputValue(product){
    const productInput=document.getElementById(product + '-number').value
    return productInput
}
function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1200
    const caseTotal = getInputValue('case') *59
    const subTotal = phoneTotal + caseTotal
    const tax = subTotal / 10
    const totalAmount =subTotal + tax
    document.getElementById('sub-total').innerText = subTotal
    document.getElementById('tax-amount').innerText = tax
    document.getElementById('total-amount').innerText = totalAmount

}
document.getElementById('case-plus').addEventListener('click', function(){
    updatePlusMinus('case',59, true,)


})
document.getElementById('case-minus').addEventListener('click', function(){
    updatePlusMinus('case',59, false, )

})
document.getElementById('phone-plus').addEventListener('click', function(){
    updatePlusMinus('phone', 1200,true)

})
document.getElementById('phone-minus').addEventListener('click', function(){
    updatePlusMinus('phone',1200, false)

})