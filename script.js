
let images= [
    "https://blog.goway.com/globetrotting/wp-content/uploads/2016/05/View-of-Table-Mountain-with-Top-Covered-in-clouds-at-Sunset-Cape-Town-South-Africa_174107558.jpg",
    "https://blog.goway.com/globetrotting/wp-content/uploads/2016/05/Hiking-Trail-and-View-of-Lions-Head-at-Table-Mountain-Cape-Town-South-Africa_8460691.jpg",
    "https://www.planetware.com/photos-large/SAF/south-africa-cape-town-table-mountain.jpg"
]
 let num = 0
 const slider = document.getElementById("slider")

 function next(){
     num++
     if(num >= images.length){
         num = 0
     }
     slider.src = images[num]
 }


 //function for previous carousel

 function previous(){
     num--
     if(num < 0){
        num = images.length - 1
     }
slider.src = images[num]     
}


//setInterval(next, 1000)