
const categoryContainer=document.getElementById('categoryContainer');
const loadAllItemsContainer=document.getElementById('loadAllItemsContainer');

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
        <ul class=''>  
        
           <li class=" w-full text-start  text-[#1F2937] p-2 hover:bg-[#CFF0DC]  font-semibold rounded-sm" onclick='loadCategoriesContainer(${category.id})' id='categoryId-${category.id}'>
            ${category.category_name}
           </li>
        
        </ul>
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
// load all category items function

const loadAllCategory=()=>{
    fetch(`https://openapi.programming-hero.com/api/plants `)
    .then(res=>res.json())
    .then(res=> displayAllItems(res.plants)
    )
}
const displayAllItems=(items)=>{

   loadAllItemsContainer.innerHTML='';
     
    // console.log(items);
    items.forEach(item=>{
        // console.log(item);
        // console.log(item.image);
        
        loadAllItemsContainer.innerHTML+=`
        <div class="card bg-base-100 shadow-sm h-96 max-w-96">
                 <figure class='h-44  p-5'>
                <img class=" bg-cover rounded-2xl w-full"

                 src=${item.image}

                 alt="Shoes" />
              </figure>
                <div class="p-5 ">
         <h2 class="card-title text-base font-semibold text-[#1F2937]">${item.name}</h2>
          <p class="text-[12px] font-normal text-[#1F2937]">${item.description}</p>
             <div class="flex justify-between items-center py-2 " >
              <button onclick=categoryDetails(${item.id}) class="btn text-[#15803D] bg-[#DCFCE7] rounded-full">${item.category}</button>
              <p class="text-sm font-semibold text-[#15803D]">
                ৳${item.price}
              </p>
             </div>

          <div class="card-actions ">
         <button class="btn rounded-full w-full text-base text-white font-semibold bg-[#15803D]">Add to Cart</button>
       </div>
                </div>
                     </div>
        `
        
    })
    
}
//ক্যাটেগরি বাটন এ ক্লিক করলে অই কন্টেইনার upload hoar function

const loadCategoriesContainer=(id)=>{

 fetch(` https://openapi.programming-hero.com/api/category/${id}`)
 .then(res=>res.json())
 .then(res=>displayLoadCategoriesContainer(res.plants))
 
}

const displayLoadCategoriesContainer=(allItems)=>{
// console.log(allItems);
   
loadAllItemsContainer.innerHTML='';

allItems.forEach((item)=>{
    // console.log(item);
  
      loadAllItemsContainer.innerHTML+=`

         <div class="card bg-base-100 shadow-sm h-96 p-5 max-w-96">
                 <figure class='h-44 '>
                <img class=" bg-cover rounded-2xl w-full"

                 src=${item.image}

                 alt="Shoes" />
              </figure>
                <div class=" ">
         <h2 class="card-title text-base font-semibold text-[#1F2937]">${item.name}</h2>
          <p class="text-[12px] font-normal text-[#1F2937]">${item.description}</p>
             <div class="flex justify-between items-center py-2 " >
              <button class="btn text-[#15803D] bg-[#DCFCE7] rounded-full" onclick=categoryDetails(${item.id}) >${item.category}</button>
              <p class="text-sm font-semibold text-[#15803D]">
                ৳${item.price}
              </p>
             </div>

          <div class="card-actions ">
         <button class="btn rounded-full w-full text-base  text-white font-semibold bg-[#15803D]">Add to Cart</button>
       </div>
                </div>
                     </div>
      
        `
})



}
 


const categoryDetails=(id)=>{



}

const showLoading=()=>{
   categoryContainer.innerHTML=`
   
   <div class="flex justify-center items-center h-screen">
<div class="flex flex-row gap-2">
  <div class="w-4 h-4 rounded-full bg-black animate-bounce"></div>
  <div class="w-4 h-4 rounded-full bg-black animate-bounce [animation-delay:-.3s]"></div>
  <div class="w-4 h-4 rounded-full bg-black animate-bounce [animation-delay:-.5s]"></div>
</div>
</div>
   
   
   `
}


loadCategory();
loadAllCategory();