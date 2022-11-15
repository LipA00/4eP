function addshoppinglist(){
    let product = document.getElementById('product')
    let productlist = document.getElementById('productlist')
    if (product.value.length >2){
    let li = document.createElement('li')
    li.innerHTML=product.value 
    productlist.appendChild(li)
    }
product.value = " "

}