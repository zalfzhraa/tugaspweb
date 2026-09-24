let btnUbah = document.getElementById('btn-ubah');
let datadirii = document.getElementById('datadiri');

btnUbah.addEventListener("click", function() {
    // Memunculkan seluruh isi portofolio saat tombol diklik (gunakan nama variabel yang sesuai)
    datadirii.style.display = 'block';
    
    // Menghilangkan tombolnya setelah diklik
    btnUbah.style.display = 'none';
});