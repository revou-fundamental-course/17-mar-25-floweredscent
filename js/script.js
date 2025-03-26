function tampilkanform() {
    let bentuk = document.getElementById("bentuk").value;
    let formContainer = document.getElementById("forminput");
    let formPersegi = document.getElementById("formpersegi");
    let formPersegiPanjang = document.getElementById("formpersegipanjang");

    if (bentuk === "persegi") {
        formContainer.style.display = "block";
        formPersegi.style.display = "block";
        formPersegiPanjang.style.display = "none";
    } else if (bentuk === "persegiPanjang") {
        formContainer.style.display = "block";
        formPersegi.style.display = "none";
        formPersegiPanjang.style.display = "block";
    } else {
        formContainer.style.display = "none";
    }
}

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