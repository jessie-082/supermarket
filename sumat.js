alert("Hello and Welcome to Health & Hearts 🌻");

function Thanks (){
   document.write("Thank You for Shopping !");
}

document.getElementById('tampilkanBtn').onclick = function() {
    var nama  = document.getElementById('nama').value;
    var umur  = document.getElementById('umur').value;
    var email = document.getElementById('email').value;
    var nomor = document.getElementById('nomor').value;

    document.getElementById('hasil').innerText = 
        "Nama: " + nama + 
        "\nUmur: " + umur + 
        "\nEmail: " + email + 
        "\nNomor: " + nomor;
};
document.getElementById('resetBtn').onclick = function() {
    document.getElementById('nama').value = "";
    document.getElementById('umur').value = "";
    document.getElementById('email').value = "";
    document.getElementById('nomor').value = "";
    document.getElementById('hasil').innerText = "Data akan muncul di sini...";
};