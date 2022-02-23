// Create an object:
const first = {
    price:"120 000tg", 
    ram:"DDR3 DIMM 8Gb/1600MHz PC12800 Kingston HyperX ", 
    processor:"Intel Core i3 4130 OEM"
};
const second = {
    price:"150 000tg", 
    ram:"AMD Radeon R7 Performance Series [R748G2606U2S-U] 8 GB", 
    processor:"AMD Ryzen 3 2200G OEM"
};
const third = {
    price:"180 000tg", 
    ram:"Transcend JetRam  [JM2666HLB-8G] 8 GB", 
    processor:"AMD Ryzen 3 2200G OEM"
};
const fourth = {
    price:"225 000tg", 
    ram:"Kingston HyperX FURY Black  [HX432C16FB3K2/16] 16 GB", 
    processor:"Intel Core i5-10600 OEM"
};
const fifth = {
    price:"250 000tg", 
    ram:"AMD Radeon R7 Performance Series [R7416G23U2S-U] 16 GB", 
    processor:"AMD Ryzen 5 2600 BOX"
};
const sixth = {
    price:"300 000tg", 
    ram:"Kingston HyperX FURY Black  [HX430C15FB3K2/16] 16 GB", 
    processor:"Intel Core i5-10400 OEM"
};
const seventh = {
    price:"400 000tg", 
    ram:"A-Data XPG Gemix D10 [AX4U266638G16-DRG] 16 GB", 
    processor:"Intel Core i5-10400 OEM"
};


// Display some data from the object:
$("#first").html("<h5 class='card-title'>"+first.price+"</h5><p class='card-text'><dt class='column-table'>Processor:</dt><dd class='column-table-2'>"+first.processor+"</dd><dt class='column-table'>RAM</dt><dd class='column-table-2'>"+first.ram+"</dd></p><button type='button' class='btn btn-success'>BUY</button> <button type='button' class='btn btn-primary'>Add To Card<i class='fas fa-shopping-basket'></i></button>")
$("#second").html("<h5 class='card-title'>"+second.price+"</h5><p class='card-text'><dt class='column-table'>Processor:</dt><dd class='column-table-2'>"+second.processor+"</dd><dt class='column-table'>RAM</dt><dd class='column-table-2'>"+second.ram+"</dd></p><button type='button' class='btn btn-success'>BUY</button> <button type='button' class='btn btn-primary'>Add To Card<i class='fas fa-shopping-basket'></i></button>")
$("#third").html("<h5 class='card-title'>"+third.price+"</h5><p class='card-text'><dt class='column-table'>Processor:</dt><dd class='column-table-2'>"+third.processor+"</dd><dt class='column-table'>RAM</dt><dd class='column-table-2'>"+third.ram+"</dd></p><button type='button' class='btn btn-success'>BUY</button> <button type='button' class='btn btn-primary'>Add To Card<i class='fas fa-shopping-basket'></i></button>")
$("#fourth").html("<h5 class='card-title'>"+fourth.price+"</h5><p class='card-text'><dt class='column-table'>Processor:</dt><dd class='column-table-2'>"+fourth.processor+"</dd><dt class='column-table'>RAM</dt><dd class='column-table-2'>"+fourth.ram+"</dd></p><button type='button' class='btn btn-success'>BUY</button> <button type='button' class='btn btn-primary'>Add To Card<i class='fas fa-shopping-basket'></i></button>")
$("#fifth").html("<h5 class='card-title'>"+fifth.price+"</h5><p class='card-text'><dt class='column-table'>Processor:</dt><dd class='column-table-2'>"+fifth.processor+"</dd><dt class='column-table'>RAM</dt><dd class='column-table-2'>"+fifth.ram+"</dd></p><button type='button' class='btn btn-success'>BUY</button> <button type='button' class='btn btn-primary'>Add To Card<i class='fas fa-shopping-basket'></i></button>")
$("#sixth").html("<h5 class='card-title'>"+sixth.price+"</h5><p class='card-text'><dt class='column-table'>Processor:</dt><dd class='column-table-2'>"+sixth.processor+"</dd><dt class='column-table'>RAM</dt><dd class='column-table-2'>"+sixth.ram+"</dd></p><button type='button' class='btn btn-success'>BUY</button> <button type='button' class='btn btn-primary'>Add To Card<i class='fas fa-shopping-basket'></i></button>")
$("#seventh").html("<h5 class='card-title'>"+seventh.price+"</h5><p class='card-text'><dt class='column-table'>Processor:</dt><dd class='column-table-2'>"+seventh.processor+"</dd><dt class='column-table'>RAM</dt><dd class='column-table-2'>"+seventh.ram+"</dd></p><button type='button' class='btn btn-success'>BUY</button> <button type='button' class='btn btn-primary'>Add To Card<i class='fas fa-shopping-basket'></i></button>")



var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
}