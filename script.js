/* =========================================================
   One Bite — script.js
========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Loader ---------- */
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 2000);
  });
  // fallback in case load event already fired
  setTimeout(() => loader.classList.add('hidden'), 2500);

  /* ---------- AOS init ---------- */
  if (window.AOS) {
    AOS.init({ duration: 700, once: true, offset: 80 });
  }

  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- Navbar scroll state ---------- */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
    backToTop.classList.toggle('show', window.scrollY > 500);
  };
  window.addEventListener('scroll', onScroll);

  /* ---------- Hamburger ---------- */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      navLinks.querySelectorAll('a').forEach(l => l.classList.remove('active'));
      a.classList.add('active');
    });
  });

  /* ---------- Hero slideshow ---------- */
  const slides = document.querySelectorAll('.hero-slide');
  let slideIndex = 0;
  setInterval(() => {
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
  }, 5000);


  /* ---------- Back to top ---------- */
  const backToTop = document.getElementById('backToTop');
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* =========================================================
     MENU DATA
  ========================================================= */
  const FOOD_IMG = {
    kulhadpizza: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=500',
    burgers: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500',
    burger2: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=500',
    pizza2: 'https://images.unsplash.com/photo-1513104890138-7c749659591?q=80&w=500',
    pizza: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=500',
    wraps: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=500',
    sandwiches: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=500',
    sweetcorn: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?q=80&w=500',
    pasta: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=500',
    waffles: 'https://images.unsplash.com/photo-1562376552733-1f67e9be3320?q=80&w=500',
    desserts: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=500',
    drinks: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=500',
    bucket: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=500',
    snacks: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=500',
    salads: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=500',
    loaf: 'https://images.unsplash.com/photo-1619985632461-f33748ef8d3d?q=80&w=500',
    addons: 'https://images.unsplash.com/photo-1572715911556-1288e6b8b9d2?q=80&w=500',
    combos: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500',
    familycombo: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=500'
  };

  const menuData = [
    // KULHAD PIZZA
    { name:'Veg Kulhad Pizza', price:95, cat:'kulhadpizza', type:'veg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCK2EvEUQworGZPehto-snFP7PSXkuzd69Du4z8oN5tQ&s=10' },
    { name:'Paneer Kulhad Pizza', price:105, cat:'kulhadpizza', type:'veg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNsz5v_GbpRmURVbyjq_UKkHZDzJncfcPZ1T5Z1vNOXg&s=10' },
    { name:'Chicken Kulhad Pizza', price:120, cat:'kulhadpizza', type:'nonveg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx0xTBPDXzCSt81QILJJA-GEG3SXD8nu4Hl3C32OYvXg&s=10' },

    // BURGERS - Veg
    { name:'OB Street', price:55, cat:'burgers', type:'veg', img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500' },
    { name:'OB Amazing Street', price:75, cat:'burgers', type:'veg', img:'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=500' },
    { name:'OB Amazing', price:100, cat:'burgers', type:'veg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnMvVl0UAjwH8De4ijcjHCvIWJYmMLJ9Subj7xOrU9oQ&s=10' },
    { name:'OB Peppery', price:110, cat:'burgers', type:'veg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlEwWauMvQKQvJIeJ7aMTKXSJu7stRoTYFr8LumL5uzg&s=10' },
    { name:'OB Cheese Corn', price:130, cat:'burgers', type:'veg', img:'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=500' },
    { name:'OB Paneer Jalapeno', price:150, cat:'burgers', type:'veg', img:'https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=500' },
    { name:'OB Double Patty', price:165, cat:'burgers', type:'veg', img:'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=500' },
    // BURGERS - Non-Veg
    { name:'OB Eggy', price:65, cat:'burgers', type:'nonveg', img:'https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=500' },
    { name:'OB Amazing Eggy', price:80, cat:'burgers', type:'nonveg', img:'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=500' },
    { name:'OB Chicken', price:100, cat:'burgers', type:'nonveg', img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500' },
    { name:'OB Chicken Amazing', price:130, cat:'burgers', type:'nonveg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNP9GjWAFZovQTLM1ZKilSB8vEeD05mCetfIhUzqMfzQ&s=10' },
    { name:'OB Chicken Peppery', price:140, cat:'burgers', type:'nonveg', img:'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=500' },
    { name:'OB Chicken Jalapeno', price:170, cat:'burgers', type:'nonveg', img:'https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=500' },

    // BURGER 2.0 - Veg
    { name:'OB Hot Mexicano', price:155, cat:'burger2', type:'veg', img:'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=500' },
    { name:'OB Spicy Paneer', price:165, cat:'burger2', type:'veg', img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500' },
    // BURGER 2.0 - Non-Veg
    { name:'OB Chicken Spicy', price:175, cat:'burger2', type:'nonveg', img:'https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=500' },
    { name:'OB Chicken Mexicano', price:165, cat:'burger2', type:'nonveg', img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500' },
    { name:'OB Real Chicken Double Patty', price:210, cat:'burger2', type:'nonveg', img:'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=500' },
    { name:'OB Eggy + Chicken Special', price:185, cat:'burger2', type:'nonveg', img:'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=500' },

    // PIZZA 2.0 - Veg
    { name:'OB Paneer Wave', sizes:{ small:140, large:240 }, cat:'pizza2', type:'veg', img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=500' },
    { name:'OB Cheese Corn', sizes:{ small:160, large:260 }, cat:'pizza2', type:'veg', img:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=500' },
    { name:'OB Farm Fresh', sizes:{ small:180, large:270 }, cat:'pizza2', type:'veg', img:'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=500' },
    { name:'OB Italian Veg', sizes:{ small:190, large:300 }, cat:'pizza2', type:'veg', img:'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=500' },
    { name:'OB Teekha Paneer', sizes:{ small:200, large:250 }, cat:'pizza2', type:'veg', img:'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=500' },
    // PIZZA 2.0 - Non-Veg
    { name:'OB Chicken Wave', sizes:{ small:160, large:240 }, cat:'pizza2', type:'nonveg', img:'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=500' },
    { name:'OB Chicken Cheese Corn', sizes:{ small:180, large:280 }, cat:'pizza2', type:'nonveg', img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=500' },
    { name:'OB Chicken Farm Fresh', sizes:{ small:190, large:300 }, cat:'pizza2', type:'nonveg', img:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=500' },
    { name:'OB Italian Chicken', sizes:{ small:200, large:320 }, cat:'pizza2', type:'nonveg', img:'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=500' },
    { name:'OB Teekha Chicken', sizes:{ small:220, large:320 }, cat:'pizza2', type:'nonveg', img:'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=500' },
    // PIZZA - Veg (Additional)
    { name:'OB Cheese Pizza', sizes:{ small:105, large:160 }, cat:'pizza', type:'veg', img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=500' },
    { name:'OB Classic Pizza', sizes:{ small:135, large:200 }, cat:'pizza', type:'veg', img:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=500' },
    { name:'OB Paneer Peppery', sizes:{ small:175, large:270 }, cat:'pizza', type:'veg', img:'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=500' },
    { name:'OB Veggie Corn', sizes:{ small:190, large:295 }, cat:'pizza', type:'veg', img:'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=500' },
    { name:'OB Cheese Mushroom', sizes:{ small:205, large:315 }, cat:'pizza', type:'veg', img:'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=500' },
    { name:'OB Paneer Exotica', sizes:{ small:210, large:265 }, cat:'pizza', type:'veg', img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=500' },
    { name:'OB Paneer Corn', sizes:{ small:180, large:300 }, cat:'pizza', type:'veg', img:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=500' },
    { name:'OB Spl Mix Veg Heart', sizes:{ large:375 }, cat:'pizza', type:'veg', img:'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=500' },
    // PIZZA - Non-Veg (Additional)
    { name:'OB Chicken Classic', sizes:{ small:145, large:225 }, cat:'pizza', type:'nonveg', img:'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=500' },
    { name:'OB Chicken Peppery', sizes:{ small:185, large:265 }, cat:'pizza', type:'nonveg', img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=500' },
    { name:'OB Chicken Corn', sizes:{ small:190, large:310 }, cat:'pizza', type:'nonveg', img:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=500' },
    { name:'OB Chicken Mushroom', sizes:{ small:210, large:325 }, cat:'pizza', type:'nonveg', img:'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=500' },
    { name:'OB Chicken Exotica', sizes:{ small:220, large:375 }, cat:'pizza', type:'nonveg', img:'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=500' },
    { name:'OB Special Chicken Family Pizza', sizes:{ large:395 }, cat:'pizza', type:'nonveg', img:'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=500' },

    // DRINKS
    // Soft Drinks
    { name:'Coke / Sprite', price:40, cat:'drinks', subcategory:'Soft Drinks', type:'veg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVEJvysScw3v29fv_RrMdk5vBu5_xXEl4wV6_yYozuzA&s=10' },
    { name:'Lime Soda', price:70, cat:'drinks', subcategory:'Soft Drinks', type:'veg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoEyrNI0Z6S0o35izA4jLRWsjcfXahrR1g7aB1OmpePA&s=10' },
    { name:'Masala Lime Soda', price:45, cat:'drinks', subcategory:'Soft Drinks', type:'veg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBFQ9drB2ZvSNI_mwrMubPH85heEXvGvffwgo-2wVoLA&s=10' },
    { name:'Water Bottle', price:'MRP', cat:'drinks', subcategory:'Soft Drinks', type:'veg', img:'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=500' },
    { name:'Masala Cold Drink', price:80, cat:'drinks', subcategory:'Soft Drinks', type:'veg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKHLhJuG_bwKfHZv1qX8nrotI5qKQCbZ5NxdWB4ru2Hw&s=10' },
    // Tea & Coffee
    { name:'Green Tea', price:40, cat:'drinks', subcategory:'Tea & Coffee', type:'veg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsekUrGFRX7IzrJg6qajnp9npaEXSSrUnZ6TLB1olwrA&s=10' },
    { name:'Regular Tea', price:25, cat:'drinks', subcategory:'Tea & Coffee', type:'veg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhiNX50W0YKiXh9x1SZK6q0SM5ZiTcjanV9-9skPpRw&s=10' },
    { name:'Peanut Tea', price:40, cat:'drinks', subcategory:'Tea & Coffee', type:'veg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBpHb5_K8Hls18Q0E91YRYVru-wGMwMlIhFJ84pPL0_g&s=10' },
    { name:'Hot Coffee', price:50, cat:'drinks', subcategory:'Tea & Coffee', type:'veg', img:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=500' },
    { name:'Cold Coffee', price:100, cat:'drinks', subcategory:'Tea & Coffee', type:'veg', img:'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=500' },
    { name:'Ice Tea Lemon', price:70, cat:'drinks', subcategory:'Tea & Coffee', type:'veg', img:'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=500' },
    // Mocktails
    { name:'Mocktails', price:85, cat:'drinks', subcategory:'Mocktails', type:'veg', img:'mok.jpg' },
    // Shakes
    { name:'Shakes', price:130, cat:'drinks', subcategory:'Shakes', type:'veg', img:'shake.jpg' },
    // Specials
    { name:'Oreo / KitKat Shake', price:140, cat:'drinks', subcategory:'Specials', type:'veg', img:'oreo.jpg' },

    // WAFFLES
    { name:'OB Nutella', sizes:{ single:90, singleIceCream:110, double:155, doubleIceCream:190 }, cat:'waffles', type:'veg', img:'waffel4.jpg' },
    { name:'OB Chocolate', sizes:{ single:90, singleIceCream:110, double:155, doubleIceCream:190 }, cat:'waffles', type:'veg', img:'waffel.jpg' },
    { name:'Oreo / KitKat', sizes:{ single:125, singleIceCream:145, double:230, doubleIceCream:260 }, cat:'waffles', type:'veg', img:'waffel1.jpg' },
    { name:'Strawberry & Chocolate', sizes:{ single:125, singleIceCream:145, double:230, doubleIceCream:260 }, cat:'waffles', type:'veg', img:'waffel3.jpg' },

    // DESSERTS
    { name:'Choco Lava Cake', price:70, cat:'desserts', type:'veg', img:'lava.jpg' },
    { name:'Choco Lava Cake with Ice Cream', price:100, cat:'desserts', type:'veg', img:'lava2.jpg' },
    { name:'Ice Cream', price:65, cat:'desserts', type:'veg', img:'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=500' },
    { name:'Hot Choco Sundae', price:125, cat:'desserts', type:'veg', img:'lava1.jpg' },
    { name:'Hot Choco / Frozen Dessert', price:125, cat:'desserts', type:'veg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzjCYjJa2-TJW0eq2KcJl2dDmBish9FZUhJ_CFgLaG3g&s=10' },

    // WRAPS - Veg
    { name:'OB Cheese Potato Wrap', price:120, cat:'wraps', type:'veg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkmGL-GiadtfTCpcJUD4sITFW_lVFrP0O58bJSXbe3Srcf9eOBQppDcvw&s=10' },
    { name:'OB Paneer Wrap', price:155, cat:'wraps', type:'veg', img:'wrap1.jpg' },
    { name:'OB Exotica Wrap', price:175, cat:'wraps', type:'veg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv-tKIueqTZqjrGlZcDxjSmL3r-_w6P-X3u52XI10iaw&s=10' },
    // WRAPS - Non-Veg
    { name:'OB Egg Wrap', price:130, cat:'wraps', type:'nonveg', img:'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=500' },
    { name:'OB Chicken Wrap', price:165, cat:'wraps', type:'nonveg', img:'wrap2.jpg' },
    { name:'OB Chicken Exotica Wrap', price:180, cat:'wraps', type:'nonveg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1eWwnSXupRK3Fzy0bF-e7W3B-jiIH77EYMvoVsf9J-g&s=10' },
    { name:'OB Chicken Special Wrap', price:200, cat:'wraps', type:'nonveg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV3ZkAHY-OKH3orWHeTGivxawwGpgUNYOd0nc-Y-8VUA&s=10' },

    // SANDWICHES
    { name:'OB Cheese Cottage', price:70, cat:'sandwiches', type:'veg', img:'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=500' },
    { name:'OB Paneer Peppery', price:90, cat:'sandwiches', type:'veg', img:'sandwiche1.jpg' },
    { name:'OB Veggie Spanish', price:105, cat:'sandwiches', type:'veg', img:'sandwiche2.jpg' },
    { name:'OB Veg Special Sandwich', price:185, cat:'sandwiches', type:'veg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyqfLz5UngmrX3P9Rd9S-cWezwhADjuq0m5bcq1T-wjw&s=10' },
    { name:'OB Chicken Cottage', price:85, cat:'sandwiches', type:'nonveg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT1R-CeVp5GiPD9OJZw5v69KBP-7rq0GtUFHrcDetM0Q&s=10' },
    { name:'OB Chicken Peppery', price:105, cat:'sandwiches', type:'nonveg', img:'sandwiche3.jpg' },
    { name:'OB Chicken Spanish', price:125, cat:'sandwiches', type:'nonveg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXc5Mhf3TAQ7VjrHb0U_k3sstgfgxM-VcS4s6Tj70W9A&s=10' },
    { name:'OB Non-Veg Special Sandwich', price:215, cat:'sandwiches', type:'nonveg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3BxcUnVJrduwYF-pYtUpRCsx1E-hB9p93-SXgpMPHXA&s' },

    // SWEET CORN
    { name:'OB Meggi Masala Corn', price:75, cat:'sweetcorn', type:'veg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9lXTnxnBsfu1wId-sSoLLbQ_DKd9Rbw8PG1HZCRmTbQ&s=10' },
    { name:'OB Cheese Corn', price:95, cat:'sweetcorn', type:'veg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSduxVVVgT2lL-4Up1DQ2AyzFr8dHRbrMAh5D-oy9-MQw&s=10' },
    { name:'OB Amazing Sweet Corn', price:105, cat:'sweetcorn', type:'veg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQImNY2EDZ8wVhr5MNWlXsh6ei8-jd95MeHW947QJOCcQ&s=10' },
    { name:'OB Classic Sweet Corn', price:125, cat:'sweetcorn', type:'veg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl71M0o_oa5FhqYcjEkd51xQFY1dUt9LZ3ewceCEckSw&s=10' },

    // SNACKS - Veg
    { name:'Crazy Masala Fries', price:85, cat:'snacks', type:'veg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_vb90jV4rm98ICVhYNo5vsyt8Fik1Lt-0s6-Z7-m5zQ&s=10' },
    { name:'Chilli Potato Balls (8 pcs.)', price:90, cat:'snacks', type:'veg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROqba0Q_ynsbBYdMMdSSIPi0e_XLr2oQ0ZcCXkqQ3Qqw&s=10' },
    { name:'Crazy Fries With Sauce', price:110, cat:'snacks', type:'veg', img:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=500' },
    { name:'Cheese Balls (6 pcs.)', price:100, cat:'snacks', type:'veg', img:'chball.jpg' },
    { name:'Paneer Balls (8 pcs.)', price:130, cat:'snacks', type:'veg', img:'ball.jpg' },
    // SNACKS - Non-Veg
    { name:'OB Chicken Balls (8 pcs.)', price:135, cat:'snacks', type:'nonveg', img:'cball.jpg' },
    { name:'OB Chicken Nuggets (8 pcs.)', price:160, cat:'snacks', type:'nonveg', img:'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=500' },

    // CHICKEN BUCKET - Fried Chicken
    { name:'2 Pieces', price:195, cat:'bucket', type:'nonveg', img:'2.jpg' },
    { name:'5 Pieces', price:420, cat:'bucket', type:'nonveg', img:'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=500' },
    { name:'9 Pieces', price:699, cat:'bucket', type:'nonveg', img:'9.jpg' },
    // CHICKEN BUCKET - Fiery Grilled
    { name:'Fiery Grilled 2 Pieces', price:195, cat:'bucket', type:'nonveg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqwY5L3MOOg-cqa_48ziNulSV3kM6oD_SU_9QuqMLzTA&s=10' },
    { name:'Fiery Grilled 5 Pieces', price:420, cat:'bucket', type:'nonveg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJMPywJ3c6zO3tAT7b1HNG_ijdU1XqoVTmB1_QYqREQ&s=10' },
    { name:'Fiery Grilled 9 Pieces', price:699, cat:'bucket', type:'nonveg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzUb8Na3XzZ0FLo6vGpqY2HulSannIcQaJH-K5JkUbMQ&s=10' },

    // PASTA - Veg
    { name:'OB Spicy Cottage', price:120, cat:'pasta', type:'veg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSouqrjpcjsB-I-CzmZermPb5JyiKIKm79pMweNopymA&s=10' },
    { name:'OB Cheese Pasta', price:130, cat:'pasta', type:'veg', img:'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=500' },
    { name:'OB Spicy Cheese Cottage', price:140, cat:'pasta', type:'veg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQck8loVn_qlKbQx5k8imUKoW5jZF9tzhAeApmOKRrNCQ&s=10' },
    // PASTA - Non-Veg
    { name:'OB Chicken Spicy', price:135, cat:'pasta', type:'nonveg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjwCcL1Qb1GIHBKLUy1ZQA8uAEjt39y9-qchXUHklysg&s=10' },
    { name:'OB Chicken Cheese', price:150, cat:'pasta', type:'nonveg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnihtFVVg0KdlEjY3S3L6fwTEUcMw-A-mpWq8BtmF4zQ&s' },
    { name:'OB Chicken Cheese Cottage', price:165, cat:'pasta', type:'nonveg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5IwVai34XmcIlKAP-hdtpLt7Kpqu96WFbL7fM7c7uRA&s=10' },
    // CHEESY LOAF - Veg
    { name:'OB Fresh Cheesy Loaf', sizes:{ small:85, large:160 }, cat:'loaf', type:'veg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjhn1A5d1P1BfY8gA33QwqoI8hymLhQ-UgRBkUG-Q4cA&s=10' },
    { name:'OB Paneer Cheesy Loaf', sizes:{ small:100, large:185 }, cat:'loaf', type:'veg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdKTUzDvxVtTA6L3RbTGdd5klMyHske_ARTP6XKVKjRQ&s=10' },
    { name:'OB Paneer Peppery', sizes:{ small:115, large:210 }, cat:'loaf', type:'veg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4zfc3YaU41C9yfBSChOIBtWWdI7bGYTgPUyw1JFiPg&s=10' },
    { name:'OB Fiesta Veggie', sizes:{ small:125, large:235 }, cat:'loaf', type:'veg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGwyW-p5DOIWd9nIo8_wdYG31HuVmvUmn3f4x7zzp7Hw&s=10' },
    { name:'OB Cheese Mushroom', sizes:{ small:135, large:250 }, cat:'loaf', type:'veg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRyLfhuYb7MCEtmSHfNuM1559iWUsH8XuuXOwxuMBkeg&s=10' },
    // CHEESY LOAF - Non-Veg
    { name:'OB Chicken Cheesy Loaf', sizes:{ small:95, large:170 }, cat:'loaf', type:'nonveg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Y5Z4JQZGa2VIx7rqoHcw3VFDvyQkmvCLrjg0oa08TQ&s=10' },
    { name:'OB Chicken Peppery', sizes:{ small:125, large:205 }, cat:'loaf', type:'nonveg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAWTtD6CF83sLcYV388EMes12_MRZHC98vmvYLZ2og8w&s=10' },
    { name:'OB Chicken Fiesta', sizes:{ small:135, large:240 }, cat:'loaf', type:'nonveg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNoU8fuAVxlDvgrOFpPMPl1nBPQ7w2M1ptMrvDOMd2gQ&s=10' },
    { name:'OB Chicken Exotica', sizes:{ small:150, large:265 }, cat:'loaf', type:'nonveg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-TOF_oJenG5R_z_HSjOxqdzgwEDo47Gd8Nx3GcFruQ&s=10' },
    { name:'OB Chicken Cheese Mushroom', sizes:{ small:170, large:295 }, cat:'loaf', type:'nonveg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8r6DqdFt37vz-8B2JlmRki4cJVhhZ8RwSRBRg9jMyQg&s=10' },
    // SALAD - Veg
    { name:'OB Veg Salad', price:125, cat:'salads', type:'veg', img:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=500' },
    { name:'OB Paneer Peppery Salad', price:150, cat:'salads', type:'veg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJdT6a1vU52V3Av7BNqO-BphZ0y3wGbxMe3bOjTKBtoA&s=10' },
    // SALAD - Non-Veg
    { name:'OB Chicken Peppery Salad', price:135, cat:'salads', type:'nonveg', img:'https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=500' },
    { name:'OB Chicken Exotica Salad', price:165, cat:'salads', type:'nonveg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9AWowD8DbDAOC86F-NcmqsfrDC0mXO0-MnYwOuNP13A&s=10' },

    // ADD ONS
    { name:'Extra Cheese', price:35, cat:'addons', type:'veg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjaD-j_nScd7NC_8pd04ZrSU0r0gWqEUspSgF_VT2y3Q&s=10' },
    { name:'Cheese Dip', price:40, cat:'addons', type:'veg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3lA6EmeiYJt37jh8j2UmXHw0UkdxVGLjJy4mdWuqBzg&s=10' },

    // COMBO OFFERS
    { name:'Street Burger + Fries + Coke/Sprite', price:170, cat:'combos', type:'veg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg8NIQK0DyMcCvYhiAe6Vlou2bVK6VxbP3JrZewcCcxA&s=10' },
    { name:'Chicken Burger + Choco Lava + Coke/Sprite', price:280, cat:'combos', type:'nonveg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7On9R9WOTGEg-WBzvmQPL5Quq7aIxOEV0DyQuR8KA-g&s' },
    { name:'Paneer Peppery Pizza Small + Peppery Burger + Fries + Coke/Sprite', price:380, cat:'combos', type:'veg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3pvx8HBPTQpWR4BeNN-AlxRWi7BZVRFev2j0TARnosQ&s=10' },
    { name:'Classic Pizza Small + Paneer Balls (4 pcs) + Coke/Sprite', price:240, cat:'combos', type:'veg', img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=500' },
    { name:'Chicken Double Patty Burger + Choco Lava + Coke/Sprite', price:300, cat:'combos', type:'nonveg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7On9R9WOTGEg-WBzvmQPL5Quq7aIxOEV0DyQuR8KA-g&s' },
    { name:'Fried Chicken/Grilled Chicken 2 pcs + Chicken Nuggets 4 pcs + Cold Coffee', price:350, cat:'combos', type:'nonveg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCuFnDzMLBCiwCUOy1wdUyBULO7tGQxjD9GW8pEe122Q&s=10' },
    { name:'Chicken Wrap + Fish Finger 5 pcs + Mocktail', price:340, cat:'combos', type:'nonveg', img:'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=500' },
    { name:'Chicken Spicy Burger + Chicken Cottage Sandwich + Hot Coffee', price:270, cat:'combos', type:'nonveg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqHKroypR3YFLhbrE4cELwdQ-SkoGC2uVKbFszWO5fgg&s=10' },
    { name:'Chicken Cheesy Loaf Small + Chicken Momos 6 pcs + Coke/Sprite', price:210, cat:'combos', type:'nonveg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYFaPDNQG89Wtm9Nvgy24XMoiGIX6ULGLiv7unfw-wow&s=10' },

    // FAMILY COMBO
    { name:'Large Chicken Pizza + 1 Chicken Burger + 2 pcs Fried Chicken + 2 Coke', price:730, cat:'familycombo', type:'nonveg', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPy5erKZCBXdwJMdGhQknRbou9-br4pVZeX2g9iEhIZw&s=10' },
  ];

  /* ---------- Render menu ---------- */
  const menuGrid = document.getElementById('menuGrid');
  const menuEmpty = document.getElementById('menuEmpty');

  const formatSizeName = (sizeKey) => {
    const names = {
      small: 'Small',
      large: 'Large',
      single: 'Single',
      singleIceCream: 'Single + Ice Cream',
      double: 'Double',
      doubleIceCream: 'Double + Ice Cream'
    };
    return sizeKey ? (names[sizeKey] || sizeKey) : '';
  };

  const renderMenu = (items) => {
    menuGrid.innerHTML = '';
    if (!items.length) {
      menuEmpty.hidden = false;
      return;
    }
    menuEmpty.hidden = true;
    
    // Check if this is the drinks category with subcategories
    const isDrinks = items.length > 0 && items[0].cat === 'drinks' && items[0].subcategory;
    
    if (isDrinks) {
      // Group drinks by subcategory
      const groupedItems = {};
      items.forEach(item => {
        const subcat = item.subcategory || 'Other';
        if (!groupedItems[subcat]) {
          groupedItems[subcat] = [];
        }
        groupedItems[subcat].push(item);
      });
      
      let globalIndex = 0;
      Object.keys(groupedItems).forEach(subcat => {
        // Add subcategory heading
        const heading = document.createElement('h3');
        heading.className = 'subcategory-heading';
        heading.textContent = subcat;
        menuGrid.appendChild(heading);
        
        // Render items in this subcategory
        groupedItems[subcat].forEach((item) => {
          const card = document.createElement('div');
          card.className = 'menu-card';
          card.dataset.cat = item.cat;
          card.setAttribute('data-aos', 'fade-up');
          card.setAttribute('data-aos-delay', String((globalIndex % 4) * 80));
          
          // Render with single price (drinks don't have sizes)
          card.innerHTML = `
            <div class="menu-card-img">
              <img src="${item.img || FOOD_IMG[item.cat] || FOOD_IMG.snacks}" alt="${item.name}" loading="lazy">
              <span class="menu-card-tag ${item.type === 'veg' ? 'tag-veg' : 'tag-nonveg'}">
                ${item.type === 'veg' ? '● Veg' : '● Non-Veg'}
              </span>
            </div>
            <div class="menu-card-body">
              <h3>${item.name}</h3>
              <div class="menu-card-footer">
                <span class="menu-price">${item.price === 'MRP' ? 'MRP' : '₹' + item.price}</span>
              </div>
            </div>`;

          menuGrid.appendChild(card);
          globalIndex += 1;
        });
      });
    } else {
      // Standard rendering for other categories
      items.forEach((item, i) => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.dataset.cat = item.cat;
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', String((i % 4) * 80));
        
        // Check if item has sizes object
        const hasSizes = item.sizes && typeof item.sizes === 'object';
        
        if (hasSizes) {
          // Render with size toggle buttons (supports any size keys)
          const sizeKeys = Object.keys(item.sizes);
          const defaultSize = sizeKeys[0];
          const defaultPrice = item.sizes[defaultSize];
          
          // Map size keys to display names
          const sizeDisplayNames = {
            small: 'Small',
            large: 'Large',
            single: 'Single',
            singleIceCream: 'Single + Ice Cream',
            double: 'Double',
            doubleIceCream: 'Double + Ice Cream'
          };
          
          // Special rendering for waffles: show vertical pricing list instead of buttons
          if (item.cat === 'waffles') {
            let priceListHTML = '<ul class="pricing-list">';
            sizeKeys.forEach((sizeKey, index) => {
              const displayName = sizeDisplayNames[sizeKey] || sizeKey;
              const price = item.sizes[sizeKey];
              const activeClass = index === 0 ? 'active' : '';
              priceListHTML += `\n                <li class="pricing-row ${activeClass}" data-size="${sizeKey}" data-price="${price}"><span class="pricing-label">${displayName}</span><span class="pricing-amt">₹${price}</span></li>`;
            });
            priceListHTML += '\n              </ul>';

            card.innerHTML = `
              <div class="menu-card-img">
                <img src="${item.img || FOOD_IMG[item.cat] || FOOD_IMG.snacks}" alt="${item.name}" loading="lazy">
                <span class="menu-card-tag ${item.type === 'veg' ? 'tag-veg' : 'tag-nonveg'}">
                  ${item.type === 'veg' ? '● Veg' : '● Non-Veg'}
                </span>
              </div>
              <div class="menu-card-body">
                <h3>${item.name}</h3>
                ${priceListHTML}
              </div>`;

          } else {
            let sizeButtonsHTML = '';
            sizeKeys.forEach((sizeKey, index) => {
              const isActive = index === 0 ? 'active' : '';
              const displayName = sizeDisplayNames[sizeKey] || sizeKey;
              sizeButtonsHTML += `
                <button class="size-toggle-btn ${isActive}" data-size="${sizeKey}" data-price="${item.sizes[sizeKey]}">
                  ${displayName} ₹${item.sizes[sizeKey]}
                </button>`;
            });

            card.innerHTML = `
              <div class="menu-card-img">
                <img src="${item.img || FOOD_IMG[item.cat] || FOOD_IMG.snacks}" alt="${item.name}" loading="lazy">
                <span class="menu-card-tag ${item.type === 'veg' ? 'tag-veg' : 'tag-nonveg'}">
                  ${item.type === 'veg' ? '● Veg' : '● Non-Veg'}
                </span>
              </div>
              <div class="menu-card-body">
                <h3>${item.name}</h3>
                <div class="size-toggle-container">
                  ${sizeButtonsHTML}
                </div>
              </div>`;

            if (sizeKeys.length > 1) {
              const sizeButtons = card.querySelectorAll('.size-toggle-btn');
              sizeButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                  sizeButtons.forEach(b => b.classList.remove('active'));
                  btn.classList.add('active');
                });
              });
            }
          }
        } else {
          // Render with single price (existing behavior)
          card.innerHTML = `
            <div class="menu-card-img">
              <img src="${item.img || FOOD_IMG[item.cat] || FOOD_IMG.snacks}" alt="${item.name}" loading="lazy">
              <span class="menu-card-tag ${item.type === 'veg' ? 'tag-veg' : 'tag-nonveg'}">
                ${item.type === 'veg' ? '● Veg' : '● Non-Veg'}
              </span>
            </div>
            <div class="menu-card-body">
              <h3>${item.name}</h3>
              <div class="menu-card-footer">
                <span class="menu-price">₹${item.price}</span>
              </div>
            </div>`;

        }

        menuGrid.appendChild(card);
      });
    }
    if (window.AOS) AOS.refreshHard();
  };

  /* ---------- Menu Sidebar System ---------- */
  const categoryNav = document.getElementById('categoryNav');
  const currentCategoryTitle = document.getElementById('currentCategoryTitle');
  const typeFilters = document.getElementById('typeFilters');
  const mobileCategoryToggle = document.getElementById('mobileCategoryToggle');
  const menuSidebar = document.getElementById('menuSidebar');
  const sidebarClose = document.getElementById('sidebarClose');
  
  let currentCategory = 'burgers';
  let currentTypeFilter = 'all';

  const categoryConfig = {
    kulhadpizza: { name: 'Kulhad Pizza', icon: 'fa-pizza-slice', hasSubcategories: true },
    burgers: { name: 'Burgers', icon: 'fa-burger', hasSubcategories: true },
    burger2: { name: 'Burger 2.0', icon: 'fa-burger', hasSubcategories: true },
    pizza: { name: 'Pizza', icon: 'fa-pizza-slice', hasSubcategories: true },
    pizza2: { name: 'Pizza 2.0', icon: 'fa-pizza-slice', hasSubcategories: true },
    wraps: { name: 'Wraps', icon: 'fa-burrito', hasSubcategories: true },
    sandwiches: { name: 'Sandwiches', icon: 'fa-bread-slice', hasSubcategories: true },
    pasta: { name: 'Pasta', icon: 'fa-utensils', hasSubcategories: true },
    waffles: { name: 'Waffles', icon: 'fa-ice-cream', hasSubcategories: false },
    sweetcorn: { name: 'Sweet Corn', icon: 'fa-apple-whole', hasSubcategories: true },
    desserts: { name: 'Desserts', icon: 'fa-cookie', hasSubcategories: false },
    drinks: { name: 'Drinks', icon: 'fa-mug-hot', hasSubcategories: false },
    bucket: { name: 'Chicken Bucket', icon: 'fa-drumstick-bite', hasSubcategories: false },
    snacks: { name: 'Snacks', icon: 'fa-fire', hasSubcategories: true },
    salads: { name: 'Salads', icon: 'fa-leaf', hasSubcategories: true },
    loaf: { name: 'Cheesy Loaf', icon: 'fa-cheese', hasSubcategories: true },
    addons: { name: 'Add-ons', icon: 'fa-plus', hasSubcategories: false },
    combos: { name: 'Combo Offers', icon: 'fa-gift', hasSubcategories: false },
    familycombo: { name: 'Family Combo', icon: 'fa-users', hasSubcategories: false }
  };

  // Count items per category
  const getCategoryCounts = (cat) => {
    const items = menuData.filter(item => item.cat === cat);
    const veg = items.filter(item => item.type === 'veg').length;
    const nonveg = items.filter(item => item.type === 'nonveg').length;
    return { total: items.length, veg, nonveg };
  };

  // Build category sidebar
  const buildCategoryNav = () => {
    categoryNav.innerHTML = '';
    
    Object.keys(categoryConfig).forEach(cat => {
      const config = categoryConfig[cat];
      const counts = getCategoryCounts(cat);
      
      const categoryItem = document.createElement('div');
      categoryItem.className = 'category-item';
      categoryItem.dataset.category = cat;
      
      categoryItem.innerHTML = `
        <div class="category-name">
          <i class="category-icon fa-solid ${config.icon}"></i>
          <span>${config.name}</span>
          <span class="category-count">${counts.total}</span>
        </div>
      `;
      
      // Add subcategories if applicable
      if (config.hasSubcategories && (counts.veg > 0 || counts.nonveg > 0)) {
        const subcategoryList = document.createElement('div');
        subcategoryList.className = 'subcategory-list';
        
        if (counts.veg > 0) {
          const vegItem = document.createElement('div');
          vegItem.className = 'subcategory-item';
          vegItem.dataset.category = cat;
          vegItem.dataset.type = 'veg';
          vegItem.innerHTML = `
            <i class="fa-solid fa-circle" style="font-size: 6px; color: #7FD17A;"></i>
            <span>Veg</span>
            <span class="sub-count">${counts.veg}</span>
          `;
          subcategoryList.appendChild(vegItem);
        }
        
        if (counts.nonveg > 0) {
          const nonvegItem = document.createElement('div');
          nonvegItem.className = 'subcategory-item';
          nonvegItem.dataset.category = cat;
          nonvegItem.dataset.type = 'nonveg';
          nonvegItem.innerHTML = `
            <i class="fa-solid fa-circle" style="font-size: 6px; color: #FF8A65;"></i>
            <span>Non-Veg</span>
            <span class="sub-count">${counts.nonveg}</span>
          `;
          subcategoryList.appendChild(nonvegItem);
        }
        
        categoryItem.appendChild(subcategoryList);
      }
      
      categoryNav.appendChild(categoryItem);
    });
  };

  buildCategoryNav();

  // Category click handler
  categoryNav.addEventListener('click', (e) => {
    const categoryItem = e.target.closest('.category-item');
    const subcategoryItem = e.target.closest('.subcategory-item');
    
    if (subcategoryItem) {
      // Handle subcategory click
      const cat = subcategoryItem.dataset.category;
      const type = subcategoryItem.dataset.type;
      
      // Update active states
      categoryNav.querySelectorAll('.subcategory-item').forEach(item => item.classList.remove('active'));
      subcategoryItem.classList.add('active');
      
      // Update category
      currentCategory = cat;
      currentTypeFilter = type;
      
      // Update title
      currentCategoryTitle.textContent = categoryConfig[cat].name;
      
      // Update filter buttons
      typeFilters.querySelectorAll('.type-filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.type === type);
      });
      
      // Render items with animation
      renderCategoryItems();
      
      // Close sidebar on mobile
      if (window.innerWidth <= 768) {
        menuSidebar.classList.remove('open');
      }
      
      return;
    }
    
    if (categoryItem) {
      // Handle main category click
      const cat = categoryItem.dataset.category;
      const config = categoryConfig[cat];
      
      // Update active states
      categoryNav.querySelectorAll('.category-item').forEach(item => item.classList.remove('active'));
      categoryItem.classList.add('active');
      categoryNav.querySelectorAll('.subcategory-item').forEach(item => item.classList.remove('active'));
      
      // Toggle accordion
      const subcategoryList = categoryItem.querySelector('.subcategory-list');
      if (subcategoryList) {
        const isOpen = subcategoryList.classList.contains('open');
        
        // Close all other accordions
        categoryNav.querySelectorAll('.subcategory-list').forEach(list => list.classList.remove('open'));
        
        if (!isOpen) {
          subcategoryList.classList.add('open');
        }
      }
      
      // Update category
      currentCategory = cat;
      currentTypeFilter = 'all';
      
      // Update title
      currentCategoryTitle.textContent = config.name;
      
      // Update filter buttons
      typeFilters.querySelectorAll('.type-filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.type === 'all');
      });
      
      // Render items with animation
      renderCategoryItems();
      
      // Close sidebar on mobile
      if (window.innerWidth <= 768) {
        menuSidebar.classList.remove('open');
      }
    }
  });

  // Mobile drawer toggle
  mobileCategoryToggle.addEventListener('click', () => {
    menuSidebar.classList.toggle('open');
  });
  
  sidebarClose.addEventListener('click', () => {
    menuSidebar.classList.remove('open');
  });

  // Type filter handlers with GSAP animation
  typeFilters.querySelectorAll('.type-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      typeFilters.querySelectorAll('.type-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTypeFilter = btn.dataset.type;
      
      // Update subcategory active states
      categoryNav.querySelectorAll('.subcategory-item').forEach(item => {
        item.classList.toggle('active', item.dataset.type === currentTypeFilter && item.dataset.category === currentCategory);
      });
      
      // Animate menu grid transition
      gsap.to('#menuGrid', {
        opacity: 0,
        y: 20,
        duration: 0.3,
        onComplete: () => {
          renderCategoryItems();
          gsap.to('#menuGrid', {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.05
          });
        }
      });
    });
  });

  const renderCategoryItems = () => {
    const filtered = menuData.filter(item => {
      const matchesCat = item.cat === currentCategory;
      const matchesType = currentTypeFilter === 'all' || item.type === currentTypeFilter;
      return matchesCat && matchesType;
    });
    
    renderMenu(filtered);
  };

  // Initialize with first category
  const firstCategoryItem = categoryNav.querySelector('.category-item');
  if (firstCategoryItem) {
    firstCategoryItem.classList.add('active');
    currentCategoryTitle.textContent = categoryConfig['burgers'].name;
    renderCategoryItems();
  }

  /* =========================================================
     GALLERY
  ========================================================= */
  const galleryImages = [
    { src:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=700', big:true },
    { src:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=700' },
    { src:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=700' },
    { src:'waffel3.jpg', big:true },
    { src:'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=700', big:true },
    { src:'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=700' },
    { src:'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=700' },
    { src:'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=700' },
  ];

  const galleryGrid = document.getElementById('galleryGrid');
  galleryImages.forEach((g, i) => {
    const div = document.createElement('div');
    div.className = `masonry-item ${g.big ? 'span-2' : ''}`;
    div.setAttribute('data-aos', 'zoom-in');
    div.setAttribute('data-aos-delay', String((i % 4) * 70));
    div.innerHTML = `<img src="${g.src}" alt="One Bite dish ${i + 1}" loading="lazy">`;
    galleryGrid.appendChild(div);
  });

  /* ---------- Lightbox ---------- */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  galleryGrid.addEventListener('click', (e) => {
    const item = e.target.closest('.masonry-item');
    if (!item) return;
    const img = item.querySelector('img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
  });

  const closeLightbox = () => lightbox.classList.remove('open');
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

  /* ---------- Smooth scroll for in-page links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navOffset = navbar.offsetHeight;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - navOffset + 1,
        behavior: 'smooth'
      });
    });
  });

});
