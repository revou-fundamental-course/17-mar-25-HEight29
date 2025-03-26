// tombol hitung persegi
function hitungKeliling() {
    const inputSisi = parseInt(document.getElementById("nilai-sisi").value);
    const keliling = 4 * inputSisi;
    const luas = inputSisi * inputSisi;
    document.getElementById("rumuKeliling").innerText = `K = 4 x ${inputSisi}`;
    document.getElementById("rumuLuas").innerText = `L = ${inputSisi} x ${inputSisi}`;
    document.getElementById("hasilKeliling").innerText = `K = ${keliling}`;
    document.getElementById("hasilLuas").innerText = `L = ${luas}`;
}

// tombol hitung persegi panjang
function hitungKelilingpp() {
    const inputPanjang = parseInt(document.getElementById("nilai-panjang").value);
    const inputLebar = parseInt(document.getElementById("nilai-lebar").value);
    const keliling = 2 * (inputPanjang + inputLebar);
    const luas = inputPanjang * inputLebar;
    document.getElementById("rumuKeliling").innerText = `K = 2 (${inputPanjang} + ${inputLebar})`;
    document.getElementById("rumuLuas").innerText = `L = ${inputPanjang} x ${inputLebar}`;
    document.getElementById("hasilKeliling").innerText = `K = ${keliling}`;
    document.getElementById("hasilLuas").innerText = `L = ${luas}`;
}

// tombol reset persegi
function reset() {
    document.getElementById("nilai-sisi").value="";
    document.getElementById("rumuKeliling").innerText=``;
    document.getElementById("rumuLuas").innerText =``;
    document.getElementById("hasilKeliling").innerText =``;
    document.getElementById("hasilLuas").innerText =``;
}

// tombol reset persegi panjang
function resetpp() {
    document.getElementById("nilai-panjang").value="";
    document.getElementById("nilai-lebar").value="";
    document.getElementById("rumuKeliling").innerText=``;
    document.getElementById("rumuLuas").innerText =``;
    document.getElementById("hasilKeliling").innerText =``;
    document.getElementById("hasilLuas").innerText =``;
}