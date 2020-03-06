function dataHandling2(array) {
  //menggunakan splice
  array.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
  array.splice(4, 1, "Pria", "SMA Internasional Metro");
  console.log(array);

  //menggunakan split
  var tanggal = array[3].split('/');
  var bulan = '';
  switch (tanggal[1]) {
    case '01':
      bulan = 'Januari';
      break;
    case '02':
      bulan = 'Februari';
      break;
    case '03':
      bulan = 'Maret';
      break;
    case '04':
      bulan = 'April';
      break;
    case '05':
      bulan = 'Mei';
      break;
    case '06':
      bulan = 'Juni';
      break;
    case '07':
      bulan = 'Juli';
      break;
    case '08':
      bulan = 'Agustus';
      break;
    case '09':
      bulan = 'September';
      break;
    case '10':
      bulan = 'Oktober';
      break;
    case '11':
      bulan = 'November';
      break;
    case '12':
      bulan = 'Desember';
      break;
    default:

  }
  console.log(bulan);

  //mengubah tipe data tanggal menjadi number
  // for (var i = 0; i < tanggal.length; i++) {
  //   tanggal[i] = Number(tanggal[i]);
  // }

  //menggunakan sort, menyesuaikan output seperti pada test case
  var sort = tanggal.sort((a,b) => b-a);
  // for (var i = 0; i < sort.length; i++) {
  //   if (sort[i] >= 0 && sort[i] <= 9) {
  //     var temp = "0" + sort[i].toString();
  //     sort[i] = temp;
  //     break;
  //   }
  //   sort[i] = sort[i].toString();
  // }
  console.log(sort);

  //menggunakan join
  strTanggal = array[3].split('/');
  console.log(strTanggal.join('-'));

  //menggunakan slice
  console.log(array[1].slice(0, 15));
}


//contoh output
var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];


dataHandling2(input);
