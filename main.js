// Slider elemanları dizi olarak eklendi(Görsel, link, isim)
let models = [
    {
        name: "Bmw X3",
        image: "img/bmw-x3.jpg",
        link: "http://www.arabalar.com.tr/bmw/x3/2022/20d-2-0"
    },
    {
        name: "Audi A8",
        image: "img/audi-a8.jpg",
        link: "http://www.arabalar.com.tr/audi/a4/2022/2-0-fsi"
    },
    {
        name: "Audi R8",
        image: "img/audi-r8.jpg",
        link: "http://www.arabalar.com.tr/audi/r8/2018/5-2-fsi-v10-plus"
    }
]

var index = 0;
var slaytCount = models.length;
var interval;

var settings = {
    duration: '2000',
    random: true
}

init(settings);

document.querySelectorAll('.arrow').forEach(function(item) {
    item.addEventListener('mouseenter', function() {
        clearInterval(interval);
    })
});
document.querySelectorAll('.arrow').forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        init(settings);
    })
});

function init(settings) {
    var prev;
    interval = setInterval(function(){
        if(settings.random) {
            // random index
            do {
                index = Math.floor(Math.random() * slaytCount);
            } while(index == prev)
            prev = index;
        } else {
            // artan index
            if(slaytCount == index + 1) {
                index = -1;
            }
            showSlide(index);
            index++;
        }
        showSlide(index);
    }, settings.duration)
}

const prevArrow = document.querySelector('.fa-arrow-left');
const nextArrow = document.querySelector('.fa-arrow-right');


prevArrow.addEventListener('click', function () {
    index--;
    showSlide(index);
});
nextArrow.addEventListener('click', function () {
    index++;
    showSlide(index);
});

function showSlide(i) {
    index = i;

    if(i < 0) {
        index = slaytCount - 1;
    } else if (i >= slaytCount - 1) {
        index = 0;
    }

    // Slider elemanları dom ile ui ekrana eklendi
    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);

    document.querySelector('.card-link').setAttribute('href',models[index].link);
}

