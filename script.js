// Deklarasi Vairabel
let nama = "Dimas";
const umur = "24";
let isMahasiswa = "true";

// Contoh array
let hobi = ["membaca", " menulis", " coding"]; //tipe data: Array

//Contoh Object
let user = {
    namaDepan: "Adi",
    namaBelakang: "Purnomo",
    email: "adi.purno@gmail.com"
};

//mencetak nilai variabel ke console browser
console.log("halo, saya " + nama + ".");
console.log("umur saya " + umur + " tahun.");
console.log("Apakah saya mahasiswa? " + isMahasiswa);
console.log("hobi saya: ", hobi);
console.log("data user: ", user);
console.log("---") //pembatas


//hari ke-5 struktur control if/else
let usiaSaya = 24;
let usiaTeman = 25;

console.log("usia saya " + usiaSaya + " tahun");
console.log("usia teman saya " + usiaTeman + " tahun");

// --- Contoh 1: Membandingkan Dua Nilai ---
if (usiaSaya === usiaTeman) {
    console.log("Umur kita sama!...")
}
else {
    console.log("umur kita berbeda")
}
console.log("---"); // Pembatas

// contoh 2: menggunakan dengan berbagai kondisi
let nilaiUjian = 75;

if (nilaiUjian >= 90) {
    console.log("Nilai anda A dengan Predikat Sangat Baik")
}
else if (nilaiUjian >= 70) {
    console.log("Nilai anda B dengan Predikat Baik")
}
else if (nilaiUjian >= 50) {
    console.log("Nilai anda C dengan predikat Cukup")
}
else {
    console.log("Wah anda masih harus tetap semangat yaa")
}
console.log("---") //pembatas

// Contoh 3: Menggunakan operato logika dalam kondisi
let usiaPengunjung = 17;
let punyaTiket = true;

if (usiaPengunjung >= 19 && punyaTiket) {
    console.log("Selamat datang, silahkan masuk!")
}
else {
    console.log("Maaf anda tidak bisa masuk")
}

// nyoba tugas dari gemini
let totalBelanja = 125000;
let kodePromo = false;

if (totalBelanja >= 150000 || (kodePromo && totalBelanja >= 50000)) {
    console.log("Anda mendapatkan Potongan harga")
}
else {
    console.log("anda belum mendapat potongan harga!")
}
console.log("---");

//for loop
for (let i = 0; i < 5; i++) {
    console.log("Angka: " + i);
}


console.log("Contoh mengulang array");
for (let i = 0; i < hobi.length; i++) {
    console.log("Hobi ke- " + (i+1) + ": " + hobi[i]);
}

console.log("---");
for (let i = 0; i < 11; i = i + 2) {
    console.log("Ini angka genap " + i );
}

//Hari ke-6 pembelajaran fullstack web develop
console.log("Contoh while loop")
let i = 0;
while (i < 5) {
    console.log("Angka (while): " + i);
    i++;
}

console.log("contoh do... while loop");
let j = 5;
do {
    console.log("Angka (do..while): " + j);
    j++;
} while (j < 5);

let k = 5;
while (k < 5) {
    console.log("Ini tidak akan tercetak karna kondisinya false")
}
do {
    console.log("Tes do... while false ini angkanya: " + k);
    k++;
} while (k < 5);

//Tugas untuk saya do.. while dari gemini
let l = 10;
while (l > 0) {
    console.log("Ini adalah hitungan mundur " + l);
    l--;
}

//Tugas metode array menambahkan, menghapus, memanipulasi data hobi saya
console.log("ini hobi saya: ", hobi);

//Menambahkan hobi (push)
hobi.push("editing video", "play video game");
console.log("Hobi saya nambah 1 :", hobi);

//Menghapus 1 hobi (pop)
let removeHobi = hobi.pop();
console.log("Hobi yang dihapus adalah: ", removeHobi);
console.log("Hobi saya sekarang adalah: ", hobi);

//menambah 1 atau lebih hobi di awal (unshift)
hobi.unshift("Photograph", "design")
console.log("Hobi saya adalah: ", hobi);

//menghapus 1 array di awal (shift)
let firstHobi = hobi.shift();
console.log("ini hobi awal yang dihapus: ", firstHobi);
console.log("Ini adalah hobi sejati saya: ", hobi);

//? Hari ke-7 Belajar function

function testing() {
    console.log("Halo ini testing!...");
}
testing();
testing();

//Fungsi dengan parameter
function sapaPengunjung(name) {
    console.log("Halo! nama saya " + name + " salam kenal..");
}
sapaPengunjung("Budi");
sapaPengunjung("Dimas");

// beberapa parameter
function jumlahDuaAngka(angka1, angka2) {
    let hasil = angka1 + angka2;
    //alert("Hasil penjumlahan: " + hasil);
    console.log("Hasil penjumlahan: " + hasil);
}
jumlahDuaAngka(6, 6);
jumlahDuaAngka(5, 5);

// return di function
function tambah(a, b) {
    let total = a + b;
    return total;
}

let hasilPenjumlahan1 = tambah(7, 8);
console.log("Hasil penjumlahan dari 7 dan 8 adalah " + hasilPenjumlahan1);
console.log("Hasil penjumlahan dari 10 dan 12 adalah " + tambah(10, 12));

function cetakPesan(pesan) {
  console.log(pesan);
  return pesan //jika ini dihapus maka akan undefined
}
let hasilCetak = cetakPesan("Ini pesan.");
console.log("Nilai kembalian fungsi cetakPesan: " + hasilCetak);

//? tugas dari gemini (function)
//1
function cetakHelloWorld() {
    console.log("Hello world");
}

cetakHelloWorld();
cetakHelloWorld();
cetakHelloWorld();

//2
function perkenalanDiri(nama, umur) {
    console.log("Nama saya " + nama + ", dan saya berumur " + umur + " tahun")
}

perkenalanDiri("Ahmad", 27);
perkenalanDiri("Fathin", 23);
perkenalanDiri("Rijal", 24);

//3
function fahrenheitKeCelcius(fahrenheit) {
    let celcius = (fahrenheit - 32) * 5 / 9;
    return celcius
}

console.log("212 fahrenheit = " + fahrenheitKeCelcius(212) + " celcius");
console.log("32 fahrenheit = " + fahrenheitKeCelcius(32) + " celcius");
