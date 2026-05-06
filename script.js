// Pilih perangkat → tampilkan daftar gejala
function pilihPerangkat(device) {
  document.getElementById("halamanAwal").style.display = "none";
  document.getElementById("hasil").style.display = "none";
  document.getElementById("keluar").style.display = "none";
  document.getElementById("halamanGejala").style.display = "block";

  let judul = "";
  let gejala = [];

  if (device === "kulkas") {
    judul = "❄️ Gejala Kulkas";
    gejala = [
      {id:1, nama:"Tidak dingin"},
      {id:2, nama:"Mati total"},
      {id:3, nama:"Berisik"},
      {id:4, nama:"Pintu tidak rapat"},
      {id:5, nama:"Bau tidak sedap"},
      {id:6, nama:"Nyetrum"},
      {id:7, nama:"Freezer penuh bunga es"}
    ];
  } else if (device === "ricecooker") {
    judul = "🍚 Gejala Rice Cooker";
    gejala = [
      {id:1, nama:"Tidak panas"},
      {id:2, nama:"Nasi cepat basi"},
      {id:3, nama:"Lampu indikator mati"},
      {id:4, nama:"Nasi berair"}
    ];
  } else if (device === "kipas") {
    judul = "🌀 Gejala Kipas Angin";
    gejala = [
      {id:1, nama:"Tidak berputar"},
      {id:2, nama:"Berisik"},
      {id:3, nama:"Bau terbakar"},
      {id:4, nama:"Bergetar"}
    ];
  } else if (device === "dispenser") {
    judul = "🚰 Gejala Dispenser";
    gejala = [
      {id:1, nama:"Tidak keluar air"},
      {id:2, nama:"Air tidak panas/dingin"},
      {id:3, nama:"Bocor"},
      {id:4, nama:"Pompa galon tidak naik"},
      {id:5, nama:"Mati total"}
    ];
  } else if (device === "mesincuci") {
    judul = "🧺 Gejala Mesin Cuci";
    gejala = [
      {id:1, nama:"Tidak berputar"},
      {id:2, nama:"Pengering tidak berputar"},
      {id:3, nama:"Saluran pembuangan"},
      {id:4, nama:"Berisik saat berputar"},
      {id:5, nama:"Bocor"}
    ];
  } else if (device === "setrika") {
    judul = "👕 Gejala Setrika";
    gejala = [
      {id:1, nama:"Tidak panas"},
      {id:2, nama:"Nyetrum"},
      {id:3, nama:"mengeluarkan suara"}
    ];
  }

  document.getElementById("judulGejala").innerText = judul;
  let daftar = document.getElementById("daftarGejala");
  daftar.innerHTML = "";
  gejala.forEach(g => {
    let btn = document.createElement("button");
    btn.textContent = g.nama;
    btn.onclick = () => bukaHalaman(device, g.id);
    daftar.appendChild(btn);
  });
}

// Buka hasil diagnosa
function bukaHalaman(device, pil) {
  document.getElementById("halamanGejala").style.display = "none";
  document.getElementById("hasil").style.display = "block";

  if (device === "kulkas") hasilKulkas(pil);
  else if (device === "ricecooker") hasilRiceCooker(pil);
  else if (device === "kipas") hasilKipas(pil);
  else if (device === "dispenser") hasilDispenser(pil);
  else if (device === "mesincuci") hasilMesinCuci(pil);
  else if (device === "setrika") hasilSetrika(pil);
}

// ==================== KULKAS ====================
function hasilKulkas(pil) {
  let text = "<h3>❄️ Hasil Diagnosa Kulkas:</h3>";
  switch(pil) {
    case 1:
      text += "<p>- Kompresor rusak atau tidak bekerja optimal</p>";
      text += "<p>- Termostat tidak berfungsi dengan baik</p>";
      text += "<p>- Freon habis atau terjadi kebocoran</p>";
      text += "<p>- Kipas evaporator/kondensor rusak atau kotor</p>";
      text += "<p>- Karet pintu kulkas tidak rapat</p>";
      text += "<p>- Penumpukan es di freezer</p>";
      text += "<br><b>💡 Solusi :</b>";
      text += "<p>- Periksa dan perbaiki kompresor sesuai manual</p>";
      text += "<p>- Cek dan ganti termostat bila perlu</p>";
      text += "<p>- Isi ulang freon dan perbaiki kebocoran pipa</p>";
      text += "<p>- Bersihkan kipas dan kondensor secara rutin</p>";
      text += "<p>- Ganti karet pintu agar kedap udara</p>";
      text += "<p>- Lakukan defrost freezer secara berkala</p>";
      break;

    case 2:
      text += "<p>- Kabel listrik longgar atau stop kontak bermasalah</p>";
      text += "<p>- Sekring atau MCB turun karena overload</p>";
      text += "<p>- Termostat rusak sehingga suhu tidak terbaca</p>";
      text += "<p>- Kompresor terlalu panas</p>";
      text += "<p>- Modul PCB bermasalah</p>";
      text += "<br><b>💡 Solusi :</b>";
      text += "<p>- Cek sumber listrik</p>";
      text += "<p>- Restart kulkas</p>";
      text += "<p>- Periksa termostat</p>";
      text += "<p>- Periksa kondensor</p>";
      text += "<p>- Pastikan pintu tertutup rapat</p>";
      break;

    case 3:
      text += "<p>- Posisi kulkas tidak rata</p>";
      text += "<p>- Kulkas terlalu penuh</p>";
      text += "<p>- Kotoran atau debu pada kipas dan kondensor</p>";
      text += "<p>- Karet pintu tidak menutup rapat</p>";
      text += "<br><b>💡 Solusi :</b>";
      text += "<p>- Pastikan posisi kulkas benar-benar rata</p>";
      text += "<p>- Tata ulang isi kulkas agar tidak terlalu penuh</p>";
      text += "<p>- Bersihkan bagian kondensor dan kipas dari debu</p>";
      text += "<p>- Ganti karet pintu bila rusak</p>";
      break;

    case 4:
      text += "<p>- Karet kotor</p>";
      text += "<p>- Karet mengeras atau kehilangan elastisitas</p>";
      text += "<p>- Pintu miring atau engsel longgar</p>";
      text += "<p>- Isi rak pintu terlalu penuh</p>";
      text += "<br><b>💡 Solusi :</b>";
      text += "<p>- Bersihkan karet pintu</p>";
      text += "<p>- Lunakkan karet yang mengeras</p>";
      text += "<p>- Periksa engsel dan posisi pintu</p>";
      text += "<p>- Kurangi barang di rak pintu</p>";
      text += "<p>- Ganti karet jika rusak parah</p>";
      break;

    case 5:
      text += "<p>- Makanan basi atau kadaluarsa</p>";
      text += "<p>- Makanan tanpa penutup</p>";
      text += "<p>- Isi kulkas terlalu penuh yang menghambat sirkulasi udara</p>";
      text += "<br><b>💡 Solusi :</b>";
      text += "<p>- Keluarkan semua isi kulkas</p>";
      text += "<p>- Bersihkan rak dengan air hangat dan baking soda</p>";
      text += "<p>- Letakkan penyerap bau alami</p>";
      text += "<p>- Simpan makanan beraroma kuat dalam wadah tertutup</p>";
      break;

    case 6:
      text += "<p>- Kabel grounding tidak ada atau tidak terpasang</p>";
      text += "<p>- Kabel listrik terkelupas</p>";
      text += "<p>- Body kulkas lembab</p>";
      text += "<br><b>💡 Solusi :</b>";
      text += "<p>- Pasang kabel grounding</p>";
      text += "<p>- Perbaiki atau ganti kabel listrik yang rusak</p>";
      text += "<p>- Jaga body kulkas tetap kering</p>";
      break;

    case 7:
      text += "<p>- Isi kulkas terlalu penuh</p>";
      text += "<p>- Karet pintu longgar atau kotor</p>";
      text += "<p>- Evaporator tertutup bunga es atau jamur</p>";
      text += "<p>- Freon berkurang</p>";
      text += "<p>- Kompresor lemah atau rusak</p>";
      text += "<br><b>💡 Solusi :</b>";
      text += "<p>- Periksa dan tata ulang isi kulkas</p>";
      text += "<p>- Cek kondisi karet pintu</p>";
      text += "<p>- Lakukan defrost manual</p>";
      text += "<p>- Sesuaikan pengaturan suhu</p>";
      break;
    default: text += "<p>Pilihan tidak valid.</p>";
  }
  text += tombolNavigasi(); document.getElementById("hasil").innerHTML = text;
}

// ==================== RICE COOKER ====================
function hasilRiceCooker(pil) {
  let text = "<h3>🍚 Hasil Diagnosa Rice Cooker:</h3>";
  switch(pil) {
    case 1:
      text += "<p>- Suhu keep warm tidak stabil</p>";
      text += "<p>- Uap air terperangkap dalam panci</p>";
      text += "<p>- Panci kurang bersih</p>";
      text += "<p>- Takaran beras kurang seimbang</p>";
      text += "<p>- Rice cooker jarang dirawat</p>";
      text += "<br><b>💡 Solusi :</b>";
      text += "<p>- Aduk nasi setelah matang</p>";
      text += "<p>- Gunakan mode keep warm secukupnya</p>";
      text += "<p>- Bersihkan rice cooker secara rutin</p>";
      break;
    case 2:
      text += "<p>- Jenis beras</p>";
      text += "<p>- Perbandingan air</p>";
      text += "<p>- Cara mencuci beras </p>";
      text += "<br><b>💡 Solusi:</b>";
      text += "<p>- Perhatikan takaran air dan beras</p>";
      text += "<p>- Gunakan beras yang tepat</p>";
      text += "<p>- Janagan terlalu sering membuka tutup rice cooker</p>";
      break;
    case 3:
      text += "<p>- sensor suhu tidak mau menyala</p>";
      text += "<p>- Sensor termal telah rusak</p>";
      text += "<p>- Pegas terlalu pendek</p>";
      text += "<br><b>💡 Solusi:</b>";
      text += "<p>- Perbaiki sensor panas</p>";
      text += "<p>- Ganti inner pot rice cooker</p>";
      break;
    case 4:
      text += "<p>- Rasio air tidak tepat</p>";
      text += "<p>- Nasi terlalu lama direndam</p>";
      text += "<p>- Panas yang terlalu tinggi</p>";
      text += "<p>- Beras yang tida dicuci dengan benar</p>";
      text += "<p>- Ketidakseimbangan suhu saat memasak</p>";
      text += "<p>- Penutup rice cooker yang tidak tertutup dengan rapat</p>";
      text += "<p>- Memasak dalam jumlah yang terlalu sedikit</p>";
      text += "<br><b>💡 Solusi:</b>";
      text += "<p>- Gunakan perbandinngan air dan beras yang di rekomendasikan</p>";
      text += "<p>- Kurangi waktu perendaman atau biarkan nasi mengering sejenak</p>";
      text += "<p>- Pastikan rice cooker tertutup dengan rapat</p>";
      text += "<p>- Cuci beras hingga air cucian menjadi jelas</p>";
      text += "<p>- Setelah nasi masak,biarkan sejenak untuak memastikan suhu merata</p>";
      text += "<p>- Pastikan untuk memasak nasi dalam jumlah yang sesuai dengan kapasitas</p>";
    default: text += "<p>Pilihan tidak valid.</p>";
  }
  text += tombolNavigasi(); document.getElementById("hasil").innerHTML = text;
}

// ==================== KIPAS ANGIN ====================
function hasilKipas(pil) {
  let text = "<h3>🌀 Hasil Diagnosa Kipas Angin:</h3>";
  switch(pil) {
    case 1:
      text += "<p>- Kerusakan motor atau dinamo</p>";
      text += "<p>- Kapasitor rusak atau melemah</p>";
      text += "<p>- Tersumbat debu atau kotoran</p>";
      text += "<p>- Masalah kabel atau saklar</p>";
      text += "<br><b>💡 Solusi :</b>";
      text += "<p>- Bersihkan kipas secara rutin</p>";
      text += "<p>- Cek kapasitor dan ganti jika rusak</p>";
      text += "<p>- Oleskan pelumas pada motor kipas</p>";
      text += "<p>- Periksa kaber dan saklar</p>";
      text += "<p>- Pastikan daya listrik stabil</p>";
      break;
    case 2:
      text += "<p>- Baling-baling kipas kotor atau tidak seimbang</p>";
      text += "<p>- Pelumas motor mulai kering</p>";
      text += "<p>- Baut dan sekrup kendur</p>";
      text += "<p>- As atau poros kipas bermasalah</p>";
      text += "<p>- Dudukan atau posisi kipas tidak stabil</p>";
      text += "<br><b>💡 Solusi :</b>";
      text += "<p>- Membersihkan baling-baling secara rutin</p>";
      text += "<p>- Memberi pelumas pada motor</p>";
      text += "<p>- Mengencangkan baut dan sekrup</p>";
      text += "<p>- Mengecek kondisi as kipas</p>";
      text += "<p>- Memastikan posisi kipas stabil</p>";
      break;
    case 3:
      text += "<p>- Debu menumpuk pada baling-baling</p>";
      text += "<p>- Kapasitor melemah</p>";
      text += "<p>- Bearing atau poros kering</p>";
      text += "<p>- Tegangan listrik tidak stabil</p>";
      text += "<p>- Motor mulai aus</p>";
      text += "<p>- Pengaturan kecepatan bermasalah</p>";
      text += "<p>- Baling-baling tidak seimbang</p>";
      text += "<p>- Sirkulasi udara lambat</p>";
      text += "<br><b>💡 Solusi :</b>";
      text += "<p>- Bersihkan secara berkala</p>";
      text += "<p>- Periksa dan ganti kapasitor</p>";
      text += "<p>- Gunakan di ruangan dengan ventilasi baik</p>";
      break;
    case 4:
      text += "<p>- </p>";
    default: text += "<p>Pilihan tidak valid.</p>";
  }
  text += tombolNavigasi(); document.getElementById("hasil").innerHTML = text;
}

// ==================== DISPENSER ====================
function hasilDispenser(pil) {
  let text = "<h3>🚰 Hasil Diagnosa Dispenser:</h3>";
  switch(pil) {
    case 1: 
    text += "<p>- Pemanas rusak</p>";
    text += "<p>- Termostat bermasalah</p>";
    text += "<p>- Gangguan listrik</p>";
    text += "<p>- Kerusakan elektronik</p>";
    text += "<p>- Terdapan endapan mineral</p>";
    text += "<p>- Dispenser tidak di rawat dengan</p>";
    text += "<br><b>💡 Solusi :</b>";
    text += "<p>- Periksa sumber daya listrik</p>";
    text += "<p>- Ganti termostat</p>";
    text += "<p>- Perbaiki komponen  yang rusak</p>";
    text += "<p>- Mulai rawat dispenser dengan baik</p>";
    break;
    case 2: 
    text += "<p>- Pompa air rusak atau mati</p>";
    text += "<p>- Selang tersumbat atau tertekuk</p>";
    text += "<p>- Galon kosong atau tidak terpasang dengan sempurna</p>";
    text += "<p>- Masalah daya listrik</p>";
    text += "<br><b>💡 Solusi :</b>";
    text += "<p>- Pastikan galon terisi dan terpasang dengan benar</p>";
    text += "<p>- Periksa selang air</p>";
    text += "<p>- Cek kondisi listrik dan tombol power</p>";
    text += "<p>- Ganti atau servis pompa jika perlu</p>";
    break;
    case 3: 
    text += "<p>- Permasalahan pada selang</p>";
    text += "<p>- Permaslahan pada cone cover</p>";
    text += "<p>- Permasalahan pada galon</p>";
    text += "<p>- Keran dispenser longgar</p>";
    text += "<p>- Terjadi masalah pada termostat</p>";
    text += "<p>- Masalah pada selaang pemanas</p>";
    text += "<p>- Permaslahan pada sensor pompa</p>";
    text += "<br><b>💡 Solusi :</b>";
    text += "<p>- Cari penyebabnya terlebih dahulu</p>";
    text += "<p>- Buat lubang melingkar pada tutup galon</p>";
    break;
    case 4:
    text += "<p>- Posisi galon tidak pas</p>";
    text += "<p>- Saluran air atau tabung kotor</p>";
    text += "<p>- Pompa air bermasalah</p>";
    text += "<p>- Tekanan udara galon tidak seimbang</p>";
    text += "<br><b>💡 Solusi :</b>";
    text += "<p>- Periksa posisi galon</p>";
    text += "<p>- Bersihkan selang dan tabung air</p>";
    text += "<p>- Cek pompa dispenser</p>";
    text += "<p>- Coba gunakan galon lain</p>";
    break;
    case 5:
    text += "<p>- Kabel atau sketer yang rusak</p>";
    text += "<p>- Fuse atau sekering terbakar</p>";
    text += "<p>- Komponen internal bermasalah</p>";
    text += "<p>- Sumber listrik bermasalah</p>";
    text += "<p>- Penumpukan debu dan kotoran</p>";
    text += "<br><b>💡 Solusi :</b>";
    text += "<p>- Periksa kabel steker</p>";
    text += "<p>- Cek fuse atau sekering</p>";
    text += "<p>- Periksa Sumber listrik</p>";
    text += "<p>- Bersihkan bagian ventilasi</p>";
    text += "<p>- Periksa komponen internal</p>";
    break;
    case 6:
    text += "<p>- Masalah pada kompresor</p>";
    text += "<p>- Masalah pada fan atau kipas pendingin</p>";
    text += "<p>- Masalah pada elemen pemanas</p>";
    text += "<p>- Masalah pada tabung air</p>";
    text += "<p>- Masalah pada pompa air</p>";
    text += "<p>- Masalah pada termostatP</p>";
    text += "<p>- Masalah pada seal atau karet penyekat</p>";
    text += "<br><b>💡 Solusi :</b>";
    text += "<p>- Pastikakn kompresor</p>";
    text += "<p>- Bersihkan fan atau kipas pendingin</p>";
    text += "<p>- Pastikan tidak ada kerak atau kotoran yang menumpuk pada pemanas</p>";
    text += "<p>- Tabung pastikan terpasang dengan kencang</p>";
    text += "<p>- pastikan seal dalam kondisi baik</p>";
    break;

  default:
    text += "<p>Pilihan tidak valid.</p>";
  }
  text += tombolNavigasi(); document.getElementById("hasil").innerHTML = text;
}

    // ==================== MESIN CUCI ====================
function hasilMesinCuci(pil) {
  let text = "<h3>🧺 Hasil Diagnosa Mesin Cuci:</h3>";
  switch(pil) {
    case 1:
      text += "<p>- Kabel mesin putus</p>";
      text += "<p>- Kapasitor mesin cuci terbakar</p>";
      text += "<p>- Dinamo mesin cuci rusak</p>";
      text += "<p>- Door switch rusak</p>";
      text += "<p>- As mesin cuci macet</p>";
      text += "<p>- Lid switch tidak berfungsi</p>";
      text += "<p>- Muatan mesin cuci melebihi kapasitas</p>";
      text += "<p>- Peermukaan lantai tidak merata</p>";
      text += "<br><b>💡 Solusi :</b>";
      text += "<p>- Kurangi muatan mesin cuci</p>";
      text += "<p>- Letakan mesin cuci pada lantai datar dan kering</p>";
      text += "<p>- Tutup pintu mesin cuci</p>";
      text += "<p>- Ganti komponen yang rusak</p>";
      break;
    case 2:
      text += "<p>- Sabuk penggerak putus atau longgar</p>";
      text += "<p>- Penutup mesin cuci tidak tertutup rapat</p>";
      text += "<p>- Kapasitas berlebihan</p>";
      text += "<p>- Motor atau kapasitor rusak</p>";
      text += "<p>- Saluran air tersumbat</p>";
      text += "<br><b>💡 Solusi :</b>";
      text += "<p>- Periksa dan ganti sabuk penggerak</p>";
      text += "<p>- Pastikan tutup mesin cuci tertutup rapat</p>";
      text += "<p>- Kurangi kapasitas pakaian</p>";
      text += "<p>- Periksa motor dan kapasitor</p>";
      text += "<p>- Bersihkan saluran air</p>";
      break;
    case 3:
      text += "<p>- Selang pembuangan tersumbat</p>";
      text += "<p>- Saringan kotoran mesin cuci rusak</p>";
      text += "<p>- Terdapat benda yang menyumbat saluran pembuangan</p>";
      text += "<p>- Distribusi cucian tidak merata</p>";
      text += "<p>- Kotoran pada klep atau katup menumpuk</p>";
      text += "<br><b>💡 Solusi :</b>";
      text += "<p>- Lakukan pemeriksaan</p>"
      text += "<p>- Bersihkan klep atau katup mesin cuci</p>"
      text += "<p>- Ganti per atau pegas klep yang sudah berkarat atau rusak</p>"
      text += "<p>- Bersihkan saringan kotoran</p>"
      text += "<p>- Jika pakaian yang akan dicuci sangat kotor lebih baik rendam dulu</p>"
      break;
    case 4:
      text += "<p>- Beban cucian tidak seimbang</p>"  
      text += "<p>- Terdapat benda asing</p>"
      text += "<p>- Komponen aus</p>" 
      text += "<br><b>💡 Solusi :</b>"; 
      text += "<p>- Pastikan beban cucian seimbang sebelum menjalankan mesin</p>" 
      text += "<p>- Periksa dan bersihkan drum dari benda asing</p>"
    case 5:
      text += "<p>- Segel pintu robek</p>"
      text += "<p>- Selang bocor atau keausan</p>"
      text += "<p>- Pipa pembuangan selalu mengeluarkan air</p>"
      text += "<p>- Retakan pada bak cuci bagian luar</p>"
      text += "<br><b>💡 Solusi :</b>"; 
      text += "<p>- Ganti segel pintu jika sudah aus</p>"
      text += "<p>- Putar selang setiap beberapa bulan untuk mencegah tertekuk</p>"
      text += "<p>- Periksa pipa dan ganti jika perlu</p>"
    default:
      text += "<p>Pilihan tidak valid.</p>";
  }
  text += tombolNavigasi();
  document.getElementById("hasil").innerHTML = text;
}

// ==================== SETRIKA ====================
function hasilSetrika(pil) {
  let text = "<h3>👕 Hasil Diagnosa Setrika:</h3>";
  switch(pil) {
    case 1:
      text += "<p>- Kabel setrika rusak</p>"
      text += "<p>- Stop kontak bermasalah</p>"
      text += "<p>- Pengaturan suhu yang salah</p>"
      text += "<p>- Termostat rusak</p>"
      text += "<p>- Kerak di alas setrika</p>"
      text += "<p>- Sekring pengaman putus</p>"
      text += "<p>- Elemen pemanas rusak</p>"
      text += "<br><b>💡 Solusi :</b>";
      text += "<p>- Periksa sumber listrik daya</p>"
      text += "<p>- Periksa kabel setrika</p>"
      text += "<p>- Cek stop kontak dan steker</p>"
      text += "<p>- Atur suhu dengan benar</p>"
      text += "<p>- Periksa lampu indikator termostat</p>"
      text += "<p>- Periksa elemen pemanas dan sekring terminal</p>"
      text += "<p>- Bersihkan plat dan lubang uap setrika</p>"
      text += "<p>- Pakai setrika setelah di perbaiki</p>"
      break;
    case 2:
      text += "<p>- Suhu terlalu panas</p>";
      text += "<p>- Sisa detergen atau pembalut</p>"
      text += "<p>- Setrika di biarkan menempel terlalu lama</p>"
      text += "<p>- Kotoran yang menumpuk</p>"
      text += "<br><b>💡 Solusi :</b>";
      text += "<p>- Bersihkan menggunakan garam</p>" 
      text += "<p>- Bersihkan menggunakan Cuka hangat</p>" 
      text += "<p>- Bersihkan menggunakan campuran cuk adan beking soda</p>"   
      text += "<p>- Bersihkan menggunakan campuran air jeruk nipis dan soda kue</p>"  
      text += "<p>- Cuci dengan detergen</p>"   
      text += "<p>- Bersihkan menggunakan Pasta gigi</p>"     
      break;
    case 3:
      text += "<p>- Terjadinya konsleting listrik</p>";
      text += "<p>- Penekanan yang berlebihan</p>"
      text += "<p>- Overheat</p>"  
      text += "<br><b>💡 Solusi :</b>";
      text += "<p>- Hindari bahan plastik</p>" 
      text += "<p>- Rapikan kabel</p>" 
      text += "<p>- Rawat elemen pada setrika</p>" 
      break;
    default:
      text += "<p>Pilihan tidak valid.</p>";
  }
  text += tombolNavigasi();
  document.getElementById("hasil").innerHTML = text;
}

// ==================== NAVIGASI ====================
function tombolNavigasi() {
  return "<br><button onclick='kembaliAwal()'>⬅️ Kembali ke Awal</button>" +
         "<button onclick='keluar()'>Keluar</button>";
}

function kembaliAwal() {
  document.getElementById("halamanAwal").style.display = "block";
  document.getElementById("halamanGejala").style.display = "none";
  document.getElementById("hasil").style.display = "none";
  document.getElementById("keluar").style.display = "none";
}

function keluar() {
  document.getElementById("halamanAwal").style.display = "none";
  document.getElementById("halamanGejala").style.display = "none";
  document.getElementById("hasil").style.display = "none";
  document.getElementById("keluar").style.display = "block";
}
