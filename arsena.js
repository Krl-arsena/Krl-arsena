// Hamburger menu toggle
const nb = document.querySelector('.navbar-menu');
const hm = document.querySelector('#hamburger-menu');
hm.addEventListener('click', (e) => {
  nb.classList.toggle('active');
  e.preventDefault();
});

// Tombol pencarian toggle
const searchform = document.querySelector('.search-form');
const searchbox = document.querySelector('#search-box');
const sb = document.querySelector('#search-botom');
sb.addEventListener('click', (e) => {
  searchform.classList.toggle('active');
  searchbox.focus();
  e.preventDefault();
});

const sc = document.querySelector('.shopping-cart');
const scb = document.querySelector('#shopping-cart-bottom');

if (sc && scb) {
  scb.addEventListener('click', (e) => {
    sc.classList.toggle('active');
    scb.focus(); // Fokus pada elemen scb, jika diperlukan
    e.preventDefault(); // Mencegah aksi default link atau tombol
  });
} else {
  console.error('Elemen dengan kelas .shopping-cart atau ID #shopping-cart-bottom tidak ditemukan.');
}


// Menutup elemen di luar klik
document.addEventListener('click', (e) => {
  if (!hm.contains(e.target) && !nb.contains(e.target)) {
    nb.classList.remove('active');
  }
  if (!sb.contains(e.target) && !searchform.contains(e.target)) {
    searchform.classList.remove('active');
  }
  if (!scb.contains(e.target) && !sc.contains(e.target)) {
    sc.classList.remove('active');
  }
  
});
// Pilih elemen modal, tombol, dan ikon close
const itemModal = document.querySelector('#item-modal');
const modalItem = document.querySelector('.tombol-item-modal');
const closeIcon = document.querySelector('.close-icon');

// Fungsi untuk membuka modal
modalItem.addEventListener('click', (e) => {
    e.preventDefault();
    itemModal.style.display = 'flex'; // Tampilkan modal
    console.log("Modal dibuka");
});

// Fungsi untuk menutup modal dengan ikon close
closeIcon.addEventListener('click', (e) => {
    e.preventDefault();
    itemModal.style.display = 'none'; // Sembunyikan modal
    console.log("Modal ditutup dengan ikon");
});

// Fungsi untuk menutup modal dengan klik di luar modal
window.addEventListener('click', (e) => {
    if (e.target === itemModal) {
        itemModal.style.display = 'none'; // Sembunyikan modal
        console.log("Modal ditutup dengan klik luar");
    }
});

// Mengarahkan klik Instagram
const instagramLinks = {
  pembina: "https://www.instagram.com/accounts/onetap/?next=%2F",
  ketua: "https://www.instagram.com/accounts/onetap/?next=%2F",
  wakilketua: "https://www.instagram.com/accounts/onetap/?next=%2F",
  sekretaris: "https://www.instagram.com/accounts/onetap/?next=%2F",
  bendahara: "https://www.instagram.com/accounts/onetap/?next=%2F",
  bimbing: "https://www.instagram.com/accounts/onetap/?next=%2F",
  petugas: "https://www.instagram.com/direct/t/17847174848968054",
  hero: "https://www.instagram.com/direct/t/17847174848968054",
  footer: "https://www.instagram.com/direct/t/17847174848968054",
};

for (const [key, url] of Object.entries(instagramLinks)) {
  const element = document.querySelector(`.instagram${key}`);
  if (element) {
    element.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(`Ikon Instagram ${key} diklik.`);
      window.open(url, "_blank");
    });
  }
}

// Animasi welcome message
window.addEventListener('load', () => {
  const welcomeElement = document.getElementById('welcome');
  if (welcomeElement) {
    setTimeout(() => {
      welcomeElement.classList.add('hidden');
    }, 3000); // Waktu 3 detik sebelum menghilang
  }
});

