var images = 
[
    "judy_garland_1.webp",
    "judy_garland_2.webp",
    "judy_garland_3.avif",
    "judy_garland_4.jpg",
    "judy_garland_5.webp",
    "judy_garland_6.jpg",
    "judy_garland_7.jpg",
    "judy_garland_8.avif",
    "judy_garland_9.webp",
    "judy_garland_10.webp",
];
var picture = 1;
var picture_log = 2;
function cycle()
{
    if(picture == 10)
    {
        picture = 0;
        picture_log = 1;
    }
    document.getElementById("judy_garland_picture").src = images[picture];
    picture++;
    console.log("At Image #"+picture_log);
    picture_log++;
}