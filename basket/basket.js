const product = [
   {
       id: 0,
       image: 'https://avatars.mds.yandex.net/i?id=b2dea95585cd2ecaeb845151b739d965bcfc900c-5300055-images-thumbs&ref=rim&n=33&w=200&h=200',
       title: 'Rozmarin bitkisi',
       price: 10,
   },
   {
       id: 1,
       image: 'https://www.houseplantwholesale.com/cdn/shop/products/b57fa066-fd31-5ed3-bec5-ae5d04684699_512x512.jpg?v=1615520193',
       title: 'Qırmızı Maranta bitkisi',
       price: 11,
   },
   {
       id: 2,
       image: 'https://5.imimg.com/data5/IR/EN/MY-3858127/flower-plant-500x500.jpg',
       title: 'Epipremnum bitkisi',
       price: 7,
   },
   {
       id: 3,
       image: 'https://helloblooms.com.au/cdn/shop/products/1_71aa8cb8-736c-477d-b5e3-5c5ca1cb99d4_600x.jpg?v=1561795769',
       title: 'Sansevieria bitkisi',
       price: 6,
   },
   {
    id: 4,
    image: 'https://m.media-amazon.com/images/I/61o2Hpd229L._AC_UF1000,1000_QL80_.jpg',
    title: 'Kalethea bitkisi',
    price: 17,
},
{
    id: 5,
    image: 'https://cdn.shoplightspeed.com/shops/616617/files/26139095/1652x2313x2/gaultheria-procumbens-cherry-berries-quart.jpg',
    title: 'Albalı bitkisi',
    price: 9,
}
];


const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    
function displayProducts(products) {
    document.getElementById('root').innerHTML = products
      .map((item, index) => {
        const { image, title, price } = item;
        return `
          <div class='box'>
          <a class="about__button" href="about/about.html?id=${index}">ⓘ</a>
            <div class='img-box'>
              <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
              <p>${title}</p>
              <h2>₼ ${price}.00</h2>
              <button onclick='addtocart(${index})'>Səbətə əlavə edin</button>
            </div>
          </div>
        `;
      })
      .join('');
  }
  
  function searchProduct() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = product.filter((item) =>
      item.title.toLowerCase().includes(searchValue)
    );
    displayProducts(filteredProducts);
  }
  
  displayProducts(product);

const cart =[];

function addtocart(a){
   cart.push({...categories[a]});
   displaycart();
}
function delElement(a){
   cart.splice(a, 1);
   displaycart();
}

function displaycart(){
   let j = 0, total=0;
   document.getElementById("count").innerHTML=cart.length;
   if(cart.length==0){
       document.getElementById('cartItem').innerHTML = "Your cart is empty";
       document.getElementById("total").innerHTML = "₼ "+0+".00";
   }
   else{
       document.getElementById("cartItem").innerHTML = cart.map((items)=>
       {
           const {image, title, price} = items;
           total=total+price;
           document.getElementById("total").innerHTML = "₼ "+total+".00";
           return(
               `<div class='cart-item'>
               <div class='row-img'>
                   <img class='rowimg' src=${image}>
               </div>
               <p style='font-size:12px;'>${title}</p>
               <h2 style='font-size: 15px;'>₼ ${price}.00</h2>`+
               "<button'width:1px;' onclick='delElement("+ (j++) +")'>x</button></div>"
           );
       }).join('');
   }
}
