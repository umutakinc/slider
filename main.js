// Slider elemanları dizi olarak eklendi(Görsel, link, isim)
let models = [
    {
        name: "Bmw X3",
        image: "img/bmw-x3.jpg",
        link: "http://www.arabalar.com.tr/bmw/x3/2022/20d-2-0"
    },
    {
        name: "Audi A8",
        image: "img/audi-a4.jpg",
        link: "http://www.arabalar.com.tr/audi/a4/2022/2-0-fsi"
    },
    {
        name: "Audi R8",
        image: "img/audi-r8.jpg",
        link: "http://www.arabalar.com.tr/audi/r8/2018/5-2-fsi-v10-plus"
    }
]

var index = 0;

// Slider elemanları dom ile ui ekrana eklendi
document.querySelector('.card-title').textContent = models[index].name;

document.querySelector('.card-img-top').setAttribute('src',models[index].image);

document.querySelector('.card-link').setAttribute('href',models[index].link);

