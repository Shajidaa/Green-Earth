
const categoryContainer=document.getElementById('categoryContainer');
const loadAllItemsContainer=document.getElementById('loadAllItemsContainer');
//load category
const loadCategory=()=>{
    const url=` https://openapi.programming-hero.com/api/categories`
    fetch(url)
    .then(res=>res.json())
    .then(res=>displayCategories(res.categories))
}

//category name display function

const displayCategories=(categories)=>{
    // console.log(categories);
    categories.forEach(category => {
        // console.log(category.category_name);
        categoryContainer.innerHTML+=`
         
          <li class=" w-full text-start cursor-pointer  text-[#1F2937] p-2 hover:bg-[#CFF0DC] 
            font-semibold rounded-sm" onclick='loadTreeItems(${category.id})'
             id='categoryId-${category.id}'>
            ${category.category_name}
           </li>
        
        
        `
    
        
    });
    categoryContainer.addEventListener('click',(e)=>{
      // console.log(e.target);
      const allLi=document.querySelectorAll('li')
      allLi.forEach(li=>{
        li.classList.remove('active')
      })
      if (e.target.localName==='li') {
        e.target.classList.add('active')
      }
    })
    
    
} 
// category container load
const loadTreeItems=(id)=>{
  showLoading();
  let url=``;
  if (id) {
    url=`https://openapi.programming-hero.com/api/category/${id}`
  }else{
    url=`https://openapi.programming-hero.com/api/plants `
  }
     fetch(url)
    .then(res=>res.json())
    .then(res=> {
      displayAllTrees (res.plants || []);
    
    }
    )
}


const displayAllTrees=(items)=>{
 

   loadAllItemsContainer.innerHTML='';
   
    // console.log(items);
    items.forEach((item )=>{
        // console.log(item);
        // console.log(item.image); 
        loadAllItemsContainer.innerHTML+=`
        <div class=" h-fit rounded-lg  bg-base-100 shadow-sm lg:p-3 p-4">
    

         <figure class=' rounded-xl overflow-hidden'>
                <img class="aspect-3/2   object-cover"

                 src=${item.image}

                 alt="image" />
              </figure>
            
            
                <div class=" mt-1">
         <h2  onclick=categoryDetails(${item.id}) class="card-title text-base font-semibold text-[#1F2937]">${item.name}</h2>
          <p class="text-[12px] font-normal text-[#1F2937] line-clamp-2 lg:line-clamp-3">${item.description}</p>
             <div class="flex justify-between items-center py-2 " >
              <p  class=" py-2 px-2 text-[#15803D] bg-[#DCFCE7] rounded-full text-xs">${item.category}</p>
               <div class='flex '>
              <p class="text-sm font-semibold text-[#1F2937]">৳</p>
              <p class="text-sm font-semibold text-[#1F2937]">${item.price}</p>

             </div>
             </div>

          <div class="card-actions ">
         <button class="btn rounded-full w-full text-base text-white font-semibold bg-[#15803D] hover:bg-[#42ad6d]">Add to Cart</button>
       </div>
                </div>
                     </div>
        `
       
        
    })
    
}

 


const categoryDetails=(id)=>{

const url=` https://openapi.programming-hero.com/api/plant/${id}`

fetch(url)
.then(res=>res.json())
.then(res=>displayTreeDetails(res.plants))

}

const displayTreeDetails=(tree)=>{
  console.log(tree);
  const detailsContainer=document.getElementById('details-container');
  detailsContainer.innerHTML='';
  detailsContainer.innerHTML+=`
  <div class="max-h-96  max-w-full">
          <h1 class="text-xl mb-1 font-bold text-black">${tree.name}</h1>
           <img  class="rounded-xl  mb-1 aspect-3/2   object-cover  w-full " src="${tree.image}" alt="">
           
           <p class="text-base  mb-1 font-semibold text-black">
           Category:<span class="text-base font-normal text-gray-600">${tree.category}</span>
           </p>
            <p class="text-base mb-1 font-semibold text-black">
            Price: <span class="text-base font-normal text-gray-600">৳${tree.price}</span></p>
            
            <p class="text-base  mb-1 font-semibold text-black">
           Description:<span class="text-base font-normal text-gray-600">${tree.description}</span>
           </p>

          <div class="modal-action">
            <form method="dialog">
           <!-- if there is a button in form, it will close the modal -->
         <button class="btn bg-green-600 mb-1">Close</button>
          </form>
          </div> 
  </div> 
  `
  document.getElementById('tree_modal').showModal();
}

//add to cart 
let cartTrees=[];
 loadAllItemsContainer.addEventListener('click',(e)=>{
  if (e.target.innerText==='Add to Cart') {
    handleCart(e);
    
  }
})

const handleCart=(e)=>{
  const treeName=e.target.parentNode.parentNode.children[0].innerText;
  const treePrice=e.target.parentNode.parentNode.children[2].children[1].children[1].innerText;

const id=Date.now( );
// console.log(id);
// console.log(treePrice);

   alert (`${treeName} has been added to cart.`)
  cartTrees.push({treeName,treePrice,id})

  
displayCartTree(cartTrees)
}
const displayCartTree=(cartTrees)=>{

 const yourCart=document.getElementById('your-cart-container');
 yourCart.innerHTML=` `;
   

 cartTrees.forEach(cartTree=>{


  yourCart.innerHTML+=`
               <div class='mt-2 cart-item' >
                    <div class=" bg-[#f0fdf4] flex  p-2 shadow-sm
                  justify-between items-center rounded-xl ">
                    <div><h2 class='text-base'>${cartTree.treeName}</h2>
                    <h3 id='price' class="text-xs font-normal   text-[#1F2937]">৳ ${cartTree.treePrice} <i class="fa-solid fa-xmark text-[#1F2937] text-xs "></i> <span>1</span> </h3>
                  </div>
                  <div onclick='handleDeleteCart(${cartTree.id})' class=""><i class="fa-solid fa-xmark text-[#1F2937] text-xs remove-btn "></i></div>
                  </div>
                 
                </div>
  `
 

 })

  totalCart();


}


//delete  

const handleDeleteCart=(id)=>{
cartTrees=cartTrees.filter(cartTree=>cartTree.id !=id)
displayCartTree(cartTrees);
}



 //total function
let totalCart=()=>{

const total=cartTrees.reduce((price,cart)=>price+parseFloat(cart.treePrice),0)
  
  document.getElementById('total-price').innerText=`${total}`
 
}


const showLoading=()=>{

    loadAllItemsContainer.innerHTML=`
   
   <div class= "col-span-full flex justify-center  ">
<div class="flex flex-row gap-2">
  <div class="w-4 h-4 rounded-full bg-green-600 animate-bounce"></div>
  <div class="w-4 h-4 rounded-full bg-green-600 animate-bounce [animation-delay:-.3s]"></div>
  <div class="w-4 h-4 rounded-full bg-green-600 animate-bounce [animation-delay:-.5s]"></div>
</div>
</div>
 
   `
}

loadCategory();

loadTreeItems();

 