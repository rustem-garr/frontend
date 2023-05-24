var modal4 = document.getElementById("id03")
var btn_1=document.getElementById('btn-address1')
var btn_2 = document.getElementById('btn-address2')
var address_image = document.getElementById('address-id')
var address_link=document.getElementById('address-btn')

btn_1.onclick = function () {
    modal4.style.display = "block";    
    address_image.src = "static/images/address-rysgal.png"
    address_link.href="https://www.google.com/maps/place/%D0%90%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%B5%D1%80%D0%BD%D1%8B%D0%B9+%D0%BA%D0%BE%D0%BC%D0%BC%D0%B5%D1%80%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9+%D0%B1%D0%B0%D0%BD%D0%BA+%22%D0%A0%D1%8B%D1%81%D0%B3%D0%B0%D0%BB%22/@37.9113799,58.3952805,17z/data=!4m14!1m7!3m6!1s0x3f6ffda3b66fd7bd:0x9972eaeb5e8692c5!2zMTk0NiwgQW5rYXJhIFN0IDIzLCBBc2hnYWJhdCwg0KLRg9GA0LrQvNC10L3QuNGB0YLQsNC9!3b1!8m2!3d37.9113757!4d58.3978554!3m5!1s0x3f6ffda2498bd61f:0x6c3160d0695102d0!8m2!3d37.9108043!4d58.3972321!16s%2Fg%2F11gdkj_32z?hl=RU"
};

btn_2.onclick = function () {
    modal4.style.display = "block";    
    address_image.src = "static/images/address-orlan.png"
    address_link.href="https://www.google.com/maps/place/A-STUDIO/@37.940631,58.390217,18z/data=!4m15!1m8!3m7!1s0x3f6ffde1e7611257:0xa3db939de9439090!2zTWFndHltZ3VseSDFn2HDvW9seSA3MywgQcWfZ2FiYXQgNzQ0MDAw!3b1!8m2!3d37.940631!4d58.390217!16s%2Fg%2F11gw2y4jzt!3m5!1s0x3f6ffe0a01a39e81:0x5a723529a9f2b774!8m2!3d37.9408886!4d58.3888749!16s%2Fg%2F11dxdl0mv5?hl=RU"
};
