window.addEventListener('scroll', () => {
 const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
 console.log('Scroll position:', scrollPosition);
});

// 헤더스크롤감지
let prevScrollPos = window.scrollY;
const header = document.getElementById('header');
const headerHeight = header.offsetHeight;
let isMouseOverHeader = false;

window.addEventListener('scroll', function() {
  const currentScrollPos = window.scrollY;
  if (!isMouseOverHeader && prevScrollPos > currentScrollPos) {
    header.style.top = '0';
  } else {
    header.style.top = `-${headerHeight}px`;
  }
  prevScrollPos = currentScrollPos;
  header.style.transition = 'top 0.4s';
});
header.addEventListener('mouseenter', function() {
  isMouseOverHeader = true;
  if (parseInt(header.style.top) === 0) {
    header.style.top = '0';
  }
});
header.addEventListener('mouseleave', function() {
  isMouseOverHeader = false;
});
window.addEventListener('mousemove', function(event) {
  const mouseY = event.clientY;
  if (!isMouseOverHeader && mouseY <= headerHeight + 90) {
    header.style.top = '0';
  }
  header.style.transition = 'all 0.4s';
});



//헤더 이동
document.getElementById("BRAND").addEventListener("click", function(event) {
 event.preventDefault();
 var section2 = document.getElementsByClassName("BRAND")[0];
 section2.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("STORY").addEventListener("click", function(event) {
 event.preventDefault();
 var section8 = document.getElementsByClassName("STORY")[0];
 section8.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("VALUE").addEventListener("click", function(event) {
 event.preventDefault();
 var section12 = document.getElementsByClassName("VALUE")[0];
 section12.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("PRODUCTS").addEventListener("click", function(event) {
 event.preventDefault();
 var section19 = document.getElementsByClassName("BEST")[0];
 section19.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("STORE").addEventListener("click", function(event) {
 event.preventDefault();
 var footer = document.getElementsByClassName("STORE")[0];
 footer.scrollIntoView({ behavior: "smooth" });
});




//인트로
let MainVisual = new IntersectionObserver((entries) => {
 entries.forEach((entry) => {
   if (entry.isIntersecting) {
     entry.target.style.opacity = "1";
     entry.target.style.transform = "translateY(-10%)";
   } else {
     entry.target.style.opacity = "0";
     entry.target.style.transform = "translateY(0%)";
   }
 });
}, { threshold: 0.8 });

let title = document.getElementsByClassName("title")[0];
MainVisual.observe(title);
title.style.transition = "all 1.5s ease-in-out";




//브랜드
window.addEventListener('scroll', function() {
 var section2 = document.querySelector('.section2');
 var section3 = document.querySelector('.section3');
 var scrollPosition = window.scrollY;

 if (scrollPosition > 900) {
   section2.style.opacity = '1';
   section3.style.opacity = '1';
 } else {
   section2.style.opacity = '0';
   section3.style.opacity = '0';
 }
});





//스토리
// window.addEventListener('scroll', () => {
//  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
//  const circle = document.querySelector('.circle');

//  if (scrollPosition >= 1100 && scrollPosition <= 1300) {
//    circle.style.opacity = '1';
//  } else {
//    circle.style.opacity = '0';
//  }

//  if (scrollPosition >= 1300) {
//    circle.style.top = '400px';
//  }
// });

// 원 요소를 선택합니다.
const circleElement = document.querySelector('.circle');
const lineElement = document.querySelector('.line');

// circleElement에 대한 Intersection Observer를 생성합니다.
const circleObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      circleElement.classList.add('animate');
    } else {
      circleElement.classList.remove('animate');
    }
  });
});

const lineObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      lineElement.style.opacity = '1';
    } else {
      lineElement.style.opacity = '0';
    }
  });
});
circleObserver.observe(circleElement);
lineObserver.observe(lineElement);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const targetElement = entry.target;
      targetElement.style.opacity = '1';
    }
  });
});

const textBoxLeftElements = document.querySelectorAll('.TextBoxLeft1, .TextBoxLeft2, .TextBoxLeft3');
const textBoxRightElements = document.querySelectorAll('.TextBoxRight1, .TextBoxRight2, .TextBoxRight3');

textBoxLeftElements.forEach((element) => {
  observer.observe(element);
  element.style.transition = 'opacity 0.7s ease-in-out';
});

textBoxRightElements.forEach((element) => {
  observer.observe(element);
  element.style.transition = 'opacity 0.7s ease-in-out';
});






// .BgText 요소를 선택합니다.
const bgTextElement = document.querySelector('.BgText');
// 스크롤 이벤트 리스너를 추가합니다.
window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;
  const startValue = 3500;
  const endValue = 4900;
  if (scrollPosition >= startValue && scrollPosition <= endValue) {
    const progress = (scrollPosition - startValue) / (endValue - startValue);
    const targetSize = 200 - progress * 100;
    bgTextElement.style.backgroundSize = `${targetSize}%`;
  }
});

const bgText2Element = document.querySelector('.BgText2');
window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;
  const startValue = 4200;
  if (scrollPosition >= startValue) {
    const opacity = (scrollPosition - startValue) / 150;
    bgText2Element.style.opacity = opacity.toFixed(2);
  }
});







//비전, 가치
const imgSlider = document.querySelector('.imgSlider');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');

btn1.addEventListener('click', () => {
  imgSlider.style.transform = 'translateX(0)';
  btn1.style.backgroundColor = 'black';
  btn2.style.backgroundColor = '';
  btn3.style.backgroundColor = '';
});

btn2.addEventListener('click', () => {
  imgSlider.style.transform = 'translateX(-600px)';
  btn1.style.backgroundColor = '';
  btn2.style.backgroundColor = 'black';
  btn3.style.backgroundColor = '';
});

btn3.addEventListener('click', () => {
  imgSlider.style.transform = 'translateX(-1200px)';
  btn1.style.backgroundColor = '';
  btn2.style.backgroundColor = '';
  btn3.style.backgroundColor = 'black';
});
imgSlider.style.transition = "all 0.7s ease-in-out";





//베스트 상품



//상품페이지 슬라이드
const btnLeft = document.querySelector('.BtnLeft');
    const btnRight = document.querySelector('.BtnRight');
    const container = document.querySelector('.Pcontainer');

    let currentPosition = 0;
    const step = 1650; // 이동할 거리 (px)

    btnLeft.addEventListener('click', () => {
        currentPosition += step;
        updateContainerPosition();
    });

    btnRight.addEventListener('click', () => {
        currentPosition -= step;
        updateContainerPosition();
    });

    function updateContainerPosition() {
        const maxPosition = (container.childElementCount - 1) * step * -1;
        if (currentPosition > 0) {
            currentPosition = maxPosition;
        } else if (currentPosition < maxPosition) {
            currentPosition = 0;
        }
        container.style.transform = `translateX(${currentPosition}px)`;
    }