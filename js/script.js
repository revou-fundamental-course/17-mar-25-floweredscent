function hitungPersegi() {
    let sisi = document.getElementById("sisi").value;
    if (sisi <= 0 || sisi === "") {
        alert("Masukkan nilai yang valid!");
        return;
    }
    let luas = sisi * sisi;
    let keliling = 4 * sisi;
    document.getElementById("hasilPersegi").innerHTML = `Luas: ${luas}, Keliling: ${keliling}`;
}