// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];


// Select and cache the <main> element in a variable named mainEl.
const mainEL = document.querySelector('main');

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEL.style.backgroundColor = "var(--main-bg)"

// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
const h1 = document.createElement("h1")
h1.innerText = "DOM Manupulation"
mainEL.appendChild(h1)

// Add a class of flex-ctr to mainEl.
mainEL.classList.add("flex-ctr")

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.getElementById("top-menu")

// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%"

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"

// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around")

//Iterate over the entire menuLinks array and for each "link" objec
for (zelda of menuLinks) {
  const a = document.createElement("a") //Create an <a> element.
  a.setAttribute("href", zelda.href) //On the new element, add an href attribute with its value set to the href property of the "link" object.
  a.textContent = zelda.text //Set the new element's content to the value of the text property of the "link" object.
  topMenuEl.append(a) //Append the new element to the topMenuEl element.
}

// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.getElementById('sub-menu');

// Set the height subMenuEl element to be "100%".
subMenuEl.style.height = "100%";

// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around");

// Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute";

// Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top ="0";

// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = topMenuEl.querySelectorAll('a')
console.log(topMenuLinks);

// Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener('click',aHandler)

// The first line of code of the event listener function should call the event object's preventDefault() method.
function aHandler(event){



if (event.target.localName !== 'a'){
  return; // The second line of code of the function should immediately return if the element clicked was not an <a> element.


} else {
event.preventDefault()
// console.log(topMenuLinks.length);
// console.log(event.target.textContent);  // Log the content of the <a> to verify the handler is working.
} 
}




document.addEventListener('DOMContentLoaded', () => {

for (let i =0; i < topMenuLinks.length; i++){
  const clicked = topMenuLinks[i]
   console.log(clicked);

  clicked.addEventListener("click", function(e){
      if(!e.target.matches('a'))return
      //e.target targets a tag
      console.log(e.target);
      e.target.classList.toggle('active') //Toggle
      topMenuLinks.forEach(link=>{
        console.log(link.subLinks);
        if(link!==e.target){
           link.classList.remove('active')
        }
        const clickedLink = menuLinks.find((link)=>link.text==e.target.textContent)
        console.log(clickedLink.subLinks);
        if(e.target.classList.contains('active')&& e.target.innerHTML!== "about"){
          subMenuEl.style.top="100%"
          buildSubMenu(clickedLink.subLinks)
        }else{
          subMenuEl.style.top="0%"
        }
      })
        function buildSubMenu(subLinks){
          console.log(subLinks);
          // const subMenuEl = document.querySelectorAll("sub-menu")
          console.log(subMenuEl);
          subMenuEl.innerHTML =""
          subLinks.forEach(link=>{
            const a = document.createElement('a')
            a.setAttribute('href', link.href)
            a.textContent= link.text
            subMenuEl.appendChild(a)
          })
        }
        subMenuEl.addEventListener("click", function(e){
          e.preventDefault()
          if(!e.target.matches('a')){
            return;
          } 
          console.log(e.target);
          subMenuEl.style.top ="0%"
          topMenuLinks.forEach(link=>{
            link.classList.remove('active')
          })
          h1.textContent =`${e.target.textContent}`
        })
      /* menuLinks = document.querySelectorAll("a");
              this.classList.add("active");
       menuLinks.forEach(link =>{
        if(link !== e.target){
          link.classList.remove("active")
          // console.log(link.class);
          console.log(link);
        } else if(link === e.target && link.classList == "active"){
            link.classList.remove('active')
        }
       })
*/
       
      
      console.log(this);
      
})
}

});


/*

*/


/*================Old Loop======== 
  clicked.addEventListener("click", function(){
      
      menuLinks = document.querySelectorAll("a");
      for (i = 0; i < menuLinks.length; i++) {
          menuLinks[i].classList.remove("active");

        
      }
      
      this.classList.add("active");
      console.log(this);
      
})
}
});

*/




/* Previous Loop:
for (let i =0; i < topMenuLinks.length; i++){
  const clicked = topMenuLinks[i]
   
  clicked.addEventListener("click", function(){
      
      menuLinks = document.querySelectorAll("a");
      for (i = 0; i < menuLinks.length; i++) {
          menuLinks[i].classList.remove("active");
          
          
          
      }
      
      this.classList.add("active");
})
}

*/




//==================Old Code ========================
/* for (let i =0; i < topMenuLinks.length; i++){
  const clicked = topMenuLinks[i]
  clicked.addEventListener("click", function(){
      
      menuLinks = document.querySelectorAll("a");
      for (i = 0; i < menuLinks.length; i++) {
          menuLinks[i].classList.remove("active");
      }

      this.classList.add("active");
  });
  
} */


 /* if (!topMenuLinks[i].classList.active){
      topMenuLinks[i].classList.add('active')
     
  } else {
      topMenuLinks[i].classList.remove('active')
  } */

/* function myFunction(e) {
  var elems = document.querySelector(".active");
  if(elems !==null){
      console.log(e.target.textContent);
   elems.classList.remove("active");
  }
 e.target.className = "active";
} */

// The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
// The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.