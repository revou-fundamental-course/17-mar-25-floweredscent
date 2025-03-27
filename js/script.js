function tampilkanform() {
    let bentuk = document.getElementById("bentuk").value;
    let forminput = document.getElementById("forminput");
    let formpersegi = document.getElementById("formpersegi");
    let formpersegipanjang = document.getElementById("formpersegipanjang");
    let gambarbentuk = document.getElementById("gambarbentuk");

    if (bentuk === "persegi") {
        forminput.style.display = "block";
        formpersegi.style.display = "block";
        formpersegipanjang.style.display = "none";

        gambarbentuk.src = "assets/gambar-persegi.png";
        gambarbentuk.style.display = "block";

    } else if (bentuk === "persegipanjang") {
        forminput.style.display = "block";
        formpersegi.style.display = "none";
        formpersegipanjang.style.display = "block";

        gambarbentuk.src = "assets/gambar-persegipanjang.png";
        gambarbentuk.style.display = "block";

    } else {
        forminput.style.display = "none";
        gambarbentuk.style.display = "none";
    }
}

function hitung() {
    let bentuk = document.getElementById("bentuk").value;
    let jenis = document.getElementById("jenis").value;
    let hasilelement = document.getElementById("hasil");
    let hasil = "";

    if (bentuk === "persegi") {
        let sisi = document.getElementById("sisi").value;
        if (sisi <= 0 || sisi === "") {
            alert("Masukkan nilai yang valid!");
            return;
        }
        if (jenis === "luas") {
            let luas = sisi * sisi;
            hasil = `Luas = Sisi × Sisi <br> Luas = ${sisi} × ${sisi} <br> Luas = <strong>${luas}</strong>`;
        } else {
            let keliling = 4 * sisi;
            hasil = `Keliling = 4 × Sisi <br> Keliling = 4 × ${sisi} <br> Keliling = <strong>${keliling}</strong>`;
        }
    } 
    else if (bentuk === "persegipanjang") {
        let panjang = document.getElementById("panjang").value;
        let lebar = document.getElementById("lebar").value;
        if (panjang <= 0 || lebar <= 0 || panjang === "" || lebar === "") {
            alert("Masukkan nilai yang valid!");
            return;
        }
        if (jenis === "luas") {
            let luas = panjang * lebar;
            hasil = `Luas = Panjang × Lebar <br> Luas = ${panjang} × ${lebar} <br> Luas = <strong>${luas}</strong>`;
        } else {
            let keliling = 2 * (parseFloat(panjang) + parseFloat(lebar));
            hasil = `Keliling = 2 × (Panjang + Lebar) <br> Keliling = 2 × (${panjang} + ${lebar}) 
            <br> Keliling = <strong>${keliling}</strong>`;
        }
    }
    
    hasilelement.innerHTML = hasil;
    hasilelement.style.display = "block";
}

function reset() {
    document.getElementById("sisi").value = "";
    document.getElementById("panjang").value = "";
    document.getElementById("lebar").value = "";
    document.getElementById("hasil").innerHTML = "";
    document.getElementById("hasil").style.display = "none";
}