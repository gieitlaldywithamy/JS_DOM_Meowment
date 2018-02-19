const Cat = function(params){
  this.name = params.name;
  this.favFood = params.favFood;
  this.imgLink = params.imgLink;
}

const buildCatsArray = function(){
  const cat1 = new Cat({name: "Boba", favFood: "Sock fluff", imgLink: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"});
  const cat2 = new Cat({name: "Barnaby", favFood: "Tuna", imgLink: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"});
  const cat3 = new Cat({name: "Simba", favFood: "Whiskas Temptations", imgLink: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"});
  return [cat1, cat2, cat3]
}

var createImageListItem = function(imgLink) {
  let newImageListItem = document.createElement("li");
  let newImage = document.createElement("img");
  newImage.src = imgLink;
  newImage.className = "cat-image";
  newImageListItem.appendChild(newImage);
  return newImageListItem;
}

const addToUnorderedList = function(parent, child){
  parent.appendChild(child);
}

const createUnorderedList = function(newClassName){
  let emptyUnorderedList = document.createElement("ul");
  emptyUnorderedList.className = newClassName;
  return emptyUnorderedList;
}

const addUnorderedListToSection = function(ul){
  let section = document.querySelector('#cats');
  section.appendChild(ul);
}

const createListItem = function(textToAdd, defaultText){
  var listItem = document.createElement("li");
  listItem.innerText = defaultText + textToAdd;
  return listItem;
}

const addCats = function(catsArray){
  for (cat of catsArray){
    let catList = createUnorderedList("cat");
    addToUnorderedList(catList, createListItem(cat.name, "Name: "));
    addToUnorderedList(catList, createListItem(cat.favFood, "Munchies of choice: "));
    addToUnorderedList(catList, createImageListItem(cat.imgLink));
    addUnorderedListToSection(catList);
  }
}

const app = function(){
  const catsArray = buildCatsArray();
  addCats(catsArray);
}

document.addEventListener("DOMContentLoaded", app);


// <ul class="cat">
//   <li>Name: Boba</li>
//   <li>Favourite food: Sock fluff</li>
//   <li><img width="500" src="http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"></li>
// </ul>
// <ul class="cat">
//   <li>Name: Barnaby</li>
//   <li>Favourite food: Tuna</li>
//   <li><img width="500" src="https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"></li>
// </ul>
// <ul class="cat">
//   <li>Name: Max</li>
//   <li>Favourite food: Whiskas Temptations</li>
//   <li><img width="500" src="http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"></li>
// </ul>
