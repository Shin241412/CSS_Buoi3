function toggle()
{
    document.getElementById('dropdown_menu').classList.toggle('active');
}
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById('dropdown_menu');
        if (myDropdown.classList.contains('active')) {
            myDropdown.classList.remove('active');
          }
    }
}

// Change Title Head
let text_head = document.getElementById('title_head').innerHTML
document.getElementById('title_head').innerHTML = text_head.replace("5.7", "5.8")

// Change Title Stickers
let text_sticker = document.getElementById('title_stickers').innerHTML
document.getElementById('title_stickers').innerHTML = text_sticker.replace("5,500", "6000")




// Change Icon 1
document.getElementById('top_icon_1').src = "img/update/top_icons_1 (1).jpg";
let text1_title = document.getElementById('icons_1_title').innerHTML
document.getElementById('icons_1_title').innerHTML = text1_title.replace("Sport", "Clinical trials");
let text1_numbers = document.getElementById('icons_1_title').innerHTML
document.getElementById('icons_1_title').innerHTML = text1_numbers.replace("50 ICONS", "25 ICONS");

// Change Icon 2
document.getElementById('top_icon_2').src = "img/update/top_icons_2 (1).jpg";
let text2_title = document.getElementById('icons_2_title').innerHTML
document.getElementById('icons_2_title').innerHTML = text2_title.replace("USA", "Agriculture and Farm");
let text2_number = document.getElementById('icons_2_title').innerHTML
document.getElementById('icons_2_title').innerHTML = text2_number.replace("42 ICONS", "24 ICONS");

// Change Icon 3
document.getElementById('top_icon_3').src = "img/update/top_icons_3 (1).jpg";
let text3_title = document.getElementById('icons_3_title').innerHTML
document.getElementById('icons_3_title').innerHTML = text3_title.replace("Autumn Nature", "Miscellany arrows and infogra...");
let text3_number = document.getElementById('icons_3_title').innerHTML
document.getElementById('icons_3_title').innerHTML = text3_number.replace("50 ICONS", "48 ICONS");

// Change Icon 4
document.getElementById('top_icon_4').src = "img/update/top_icons_4 (1).jpg";
let text4_title = document.getElementById('icons_4_title').innerHTML
document.getElementById('icons_4_title').innerHTML = text4_title.replace("Recycling", "Miscellany Texts and Badges");
let text4_number = document.getElementById('icons_4_title').innerHTML
document.getElementById('icons_4_title').innerHTML = text4_number.replace("40 ICONS", "90 ICONS");

// Change Stickers 1
document.getElementById('top_stickers_1').src = "img/update/top_stickers_1 (1).jpg";
let text_stickers_1 = document.getElementById('stickers_1_title').innerHTML
document.getElementById('stickers_1_title').innerHTML = text_stickers_1.replace("Hippie 60s", "Fruits and Vegetables  Flat 1 of 1");

// Change Stickers_2
document.getElementById('top_stickers_2').src = "img/update/top_stickers_2 (1).jpg";
let text_stickers_2 = document.getElementById('stickers_2_title').innerHTML
document.getElementById('stickers_2_title').innerHTML = text_stickers_2.replace("Dinosaurs", "Hippie");

// Change Stickers_3
document.getElementById('top_stickers_3').src = "img/update/top_stickers_3 (1).jpg";
let text_stickers_3 = document.getElementById('stickers_3_title').innerHTML
document.getElementById('stickers_3_title').innerHTML = text_stickers_3.replace("Mental Health", "Hiring and Join Us");

// Change Stickers_4
document.getElementById('top_stickers_4').src = "img/update/top_stickers_4 (1).jpg";
let text_stickers_4 = document.getElementById('stickers_4_title').innerHTML
document.getElementById('stickers_4_title').innerHTML = text_stickers_4.replace("Back to School", "Yoga");