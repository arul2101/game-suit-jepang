var tanya = true;

while ( tanya ){
  var user = prompt('Selamat Datang di permainan Suit Jepang. \nSilahkan pilih salah satu : Batu, Gunting, Kertas')

  var comp = Math.random();

  if( comp < 0.33 ){
    comp = 'batu';
  } else if ( comp >= 0.33 && comp <= 0.57 ){
    comp = 'gunting';
  } else{
    comp = 'kertas';
  }

  var hasil = '';

  if ( user == comp ){
    hasil = 'SERI!'
  } else if ( user == 'batu' ){
    if( comp == 'gunting' ){
      hasil = 'MENANG!'
    }else{
      hasil = 'KALAH!'
    }
  } else if ( user == 'gunting' ){
    if( comp == 'batu' ){
      hasil = 'KALAH!'
    }else{
      hasil = 'MENANG!'
    }
  } else if ( user == 'kertas' ){
    if ( comp == 'batu' ){
      hasil = 'MENANG!'
    }else{
      hasil = 'KALAH!'
    }
  }else{
    hasil = 'Memasukkan pilihan yang salah!'
  }

  alert('Kamu memilih : ' + user + '\nKomputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

  tanya = confirm('Mau bermain lagi?');
}
