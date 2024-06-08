$(document).ready(function(){
    $("#searchbtn").click(function(){
        $("#search").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#menu").click(function(){
        $("#navbar").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#profile").mouseenter(function(){
        $("#login").slideToggle("slow");
    });
});

var currentImageIndex = 0;
var smallImages = document.querySelectorAll('.small-image');

function changeImage(clickedImage) {
  var largeImage = document.getElementById('largeImage');
  var tempSrc = largeImage.src;
  largeImage.src = clickedImage.getElementsByTagName('img')[0].src;
  clickedImage.getElementsByTagName('img')[0].src = tempSrc;
}

function autoplay() {
  changeImage(smallImages[currentImageIndex]);
  currentImageIndex = (currentImageIndex + 1) % smallImages.length;
}

// Change image every 2 seconds (adjust as needed)
setInterval(autoplay, 5000);


const wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#c4c3d4',
    progressColor: '#717092',
    barWidth: 5,
    responsive: true,
    height: 50,
    barRadius: 10,
    barGap: 3,
  });
  wavesurfer.load('img/s1.mp3');

  const playbtn = document.getElementById('play');

  playbtn.onclick = function(){
    wavesurfer.playPause();
    if(playbtn.src.includes("playbtn.png")){
        playbtn.src = "img/pause.png";
    }else{
        playbtn.src = "img/playbtn.png";
    }
  }
  wavesurfer.on('finish', function(){
    playbtn.src = "img/playbtn.png";
    wavesurfer.stop();
  });


  const wavesurfer2 = WaveSurfer.create({
    container: '#waveform2',
    waveColor: '#c4c3d4',
    progressColor: '#717092',
    barWidth: 5,
    responsive: true,
    height: 50,
    barRadius: 10,
    barGap: 3
  });
  wavesurfer2.load('img/s2.mp3');



  const playbtn2 = document.getElementById('play2');

  playbtn2.onclick = function(){
    wavesurfer2.playPause();
    if(playbtn2.src.includes("playbtn.png")){
        playbtn2.src = "img/pause.png";
    }else{
        playbtn2.src = "img/playbtn.png";
    }
  }
  wavesurfer2.on('finish', function(){
    playbtn2.src = "img/playbtn.png";
    wavesurfer2.stop();
  });

  const wavesurfer3 = WaveSurfer.create({
    container: '#waveform3',
    waveColor: '#c4c3d4',
    progressColor: '#717092',
    barWidth: 5,
    responsive: true,
    height: 50,
    barRadius: 10,
    barGap: 3
  });
  wavesurfer3.load('img/s3.mp3');



  const playbtn3 = document.getElementById('play3');

  playbtn3.onclick = function(){
    wavesurfer3.playPause();
    if(playbtn3.src.includes("playbtn.png")){
        playbtn3.src = "img/pause.png";
    }else{
        playbtn3.src = "img/playbtn.png";
    }
  }
  wavesurfer3.on('finish', function(){
    playbtn3.src = "img/playbtn.png";
    wavesurfer3.stop();
  });

const sidebar = document.querySelector(".cart");
document.querySelector('#message').onclick = () => {
    sidebar.classList.toggle('open-cart');
}
const closebtn = document.getElementById('close');
closebtn.addEventListener('click', () => {
    sidebar.classList.remove('open-cart');
});
document.addEventListener("DOMContentLoaded", function() {
  const addToCartBtns = document.querySelectorAll(".addToCartBtn");
  const cartItems = document.getElementById("cartItems");
  const clearCartBtn = document.getElementById("clearCartBtn");
  const cartQuantity = document.getElementById('cart-quantity');

  let quantity = 0;

  addToCartBtns.forEach(btn => {
    btn.addEventListener("click", function() {
      const musicDiv = btn.closest(".music");
      const songName = musicDiv.querySelector("h2").textContent;
      const artistName = musicDiv.querySelector("p").textContent.replace("Artist: ", "");

      const cartItem = document.createElement("div");
      cartItem.classList.add("cartItem");
      cartItem.innerHTML = `
      <div class="all-data-js">
      <img src="${musicDiv.querySelector("img").src}" alt="Song Image" id="image-js">
      <div class="js-text-data">
      <span id="span1">${songName}</span>
      <span id="span2">${artistName}</span>
      </div>
      <button class="removeBtn">Remove</button>
      </div>
      `;
      cartItems.appendChild(cartItem);

      const removeBtn = cartItem.querySelector(".removeBtn");
      
      removeBtn.addEventListener("click", function() {
        cartItems.removeChild(cartItem);
        updateTotal(-1);
      });

      updateTotal(1);
    });
  });

  clearCartBtn.addEventListener("click", function() {
    cartItems.innerHTML = "";
    total = 0;
  });
      // Quantity buttons
      cartItems.addEventListener('click', function (event) {
        if (event.target.classList.contains('decrease')) {
            const quantityInput = event.target.nextElementSibling;
            let currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        }

        if (event.target.classList.contains('increase')) {
            const quantityInput = event.target.previousElementSibling;
            let currentValue = parseInt(quantityInput.value);
            quantityInput.value = currentValue + 1;
        }
    });

    function updateTotal(change) {
        quantity += change;
        cartQuantity.innerText = quantity;
        clearCartBtn.addEventListener('click', function(){
          cartQuantity.innerHTML = (0);
        })
    }
});

let loader = document.querySelector(".loading");

window.addEventListener("load", vanish);
function vanish() {
  loader.classList.add("dispper");
}