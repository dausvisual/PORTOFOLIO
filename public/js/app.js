/* =========================================================================
   PARTICLES.JS — Konfigurasi Efek Partikel Interaktif
   
   File ini hanya berisi konfigurasi particles.js yang aktif digunakan.
   Logika UI lainnya (navigasi, scroll, animasi) sudah ditangani oleh 
   React components di src/components/.
========================================================================= */

/* --- SEGMEN 1: HERO SECTION (ID: particles-js) --- */
if (document.getElementById('particles-js')) {
    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 60,
          "density": { "enable": true, "value_area": 800 }
        },
        "color": {
          "value": ["#00e5ff", "#4f46e5"]
        },
        "shape": { "type": "circle" },
        "opacity": {
          "value": 0.6,
          "random": true,
          "anim": { "enable": true, "speed": 1, "opacity_min": 0.2, "sync": false }
        },
        "size": {
          "value": 3.5,
          "random": true,
          "anim": { "enable": true, "speed": 2, "size_min": 0.1, "sync": false }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#00e5ff",
          "opacity": 0.3,
          "width": 1.2
        },
        "move": {
          "enable": true,
          "speed": 1.5,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": { "enable": true, "mode": "grab" },
          "onclick": { "enable": true, "mode": "push" },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 180,
            "line_linked": { "opacity": 0.8 }
          },
          "push": { "particles_nb": 3 }
        }
      },
      "retina_detect": true
    });
}

/* --- SEGMEN 2: EDUCATION / MY JOURNEY SECTION (ID: particles-js-education) --- */
if (document.getElementById('particles-js-education')) {
    particlesJS("particles-js-education", {
      "particles": {
        "number": { "value": 50, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": ["#00e5ff", "#4f46e5"] },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.4, "random": true, "anim": { "enable": true, "speed": 1.5, "opacity_min": 0.1, "sync": false } },
        "size": { "value": 3, "random": true, "anim": { "enable": true, "speed": 2, "size_min": 0.1, "sync": false } },
        "line_linked": { "enable": true, "distance": 150, "color": "#00e5ff", "opacity": 0.2, "width": 1 },
        "move": { "enable": true, "speed": 2, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
        "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 0.8 } }, "push": { "particles_nb": 3 } }
      },
      "retina_detect": true
    });
}
