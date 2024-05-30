let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


//kullanıcının sayfada nereye kaydırdığını izler ve hangi bölümün şu anda görüntülendiğini belirler.
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}


menuIcon.onclick = () => { //menuIcon öğesine bir tıklama olayı ekler.
    menuIcon.classList.toggle('bx-x'); //bx-x sınıfı mevcutsa onu kaldırır, yoksa ekler. Yani, her tıklamada bu sınıf eklenir veya kaldırılır.
    navbar.classList.toggle('active'); //active sınıfı mevcutsa onu kaldırır, yoksa ekler.
}

// Telefon numarası alanına otomatik olarak parantezleri ekleme
document.getElementById('phone').addEventListener('input', function (e) {
    var phone = e.target.value.replace(/\D/g, ''); // Sadece sayıları alır
    if (phone.length === 10) {
        phone = phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
        e.target.value = phone;
    }
});
