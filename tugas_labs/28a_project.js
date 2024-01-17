let guru = {
  Nama: "mahmud",
  jabatan: "kepala sekolah",
  nip: 2137275,
  gaji: 1000000,
  absensi: {
    kerja: "7 hari",
  },
};

function hitungtotal(guru) {
  let gajiperhari = guru.gaji / guru.absensi.harikerja;
  let gajiharikerja = gajiperhari * guru.absensi.harikerja;

  return gajiharikerja;
}

let gajitotal = hitungtotal(guru);
console.log("gaji total guru", guru.gaji);
console.log("gaji total guru", guru.Nama);
console.log("gaji total guru", guru.jabatan);
console.log("gaji total guru", guru.nip);
