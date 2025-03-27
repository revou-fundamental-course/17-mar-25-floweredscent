function tampilkanform() {
    let bentuk = document.getElementById("bentuk").value;
    let formContainer = document.getElementById("forminput");
    let formPersegi = document.getElementById("formpersegi");
    let formPersegiPanjang = document.getElementById("formpersegipanjang");

    if (bentuk === "persegi") {
        formContainer.style.display = "block";
        formPersegi.style.display = "block";
        formPersegiPanjang.style.display = "none";
    } else if (bentuk === "persegipanjang") {
        formContainer.style.display = "block";
        formPersegi.style.display = "none";
        formPersegiPanjang.style.display = "block";
    } else {
        formContainer.style.display = "none";
    }
}

function hitung() {
    let bentuk = document.getElementById("bentuk").value;
    let jenis = document.getElementById("jenis").value;
    let hasilElement = document.getElementById("hasil");
    let hasil = "";

    if (bentuk === "persegi") {
        let sisi = document.getElementById("sisi").value;
        if (sisi <= 0 || sisi === "") {
            alert("Masukkan nilai yang valid!");
            return;
        }
        if (jenis === "luas") {
            let luas = sisi * sisi;
            hasil = `Luas = Sisi × Sisi <br> Luas = ${sisi} × ${sisi} = <strong>${luas}</strong>`;
        } else {
            let keliling = 4 * sisi;
            hasil = `Keliling = 4 × Sisi <br> Keliling = 4 × ${sisi} = <strong>${keliling}</strong>`;
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
            hasil = `Luas = Panjang × Lebar <br> Luas = ${panjang} × ${lebar} = <strong>${luas}</strong>`;
        } else {
            let keliling = 2 * (parseFloat(panjang) + parseFloat(lebar));
            hasil = `Keliling = 2 × (Panjang + Lebar) <br> Keliling = 2 × (${panjang} + ${lebar}) = <strong>${keliling}</strong>`;
        }
    }
    
    hasilElement.innerHTML = hasil;
}

function reset() {
    document.getElementById("sisi").value = "";
    document.getElementById("panjang").value = "";
    document.getElementById("lebar").value = "";
    document.getElementById("hasil").innerHTML = "";
}