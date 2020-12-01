const  qrcode  =  membutuhkan ( "qrcode-terminal" ) ;
const  saat  =  membutuhkan ( "momen" ) ;
const  cheerio  =  membutuhkan ( "cheerio" ) ;
const  get  =  membutuhkan ( 'mendapat' )
const  fs  =  membutuhkan ( "fs" ) ;
const  dl  =  membutuhkan ( "./lib/downloadImage.js" ) ;
const  fetch  =  membutuhkan ( 'node-fetch' ) ;
const  urlencode  =  membutuhkan ( "urlencode" ) ;
const  axios  =  membutuhkan ( "axios" ) ;
const  imageToBase64  =  membutuhkan ( 'image-to-base64' ) ;
 menu  const =  membutuhkan ( "./lib/menu.js" ) ;
const  donate  =  membutuhkan ( "./lib/donate.js" ) ;
const  info  =  membutuhkan ( "./lib/info.js" ) ;
//
const  BotName  =  'RickBot 🤖' ;  // Nama Bot Whatsapp
const  instagramlu  =  'https://instagram.com/ricmax_3135' ;  // Nama Instagramlu cok
const  whatsapplu  =  '085156800599' ;  // Nomor whatsapplu cok
const  kapanbotaktif  =  '24 Jam ' ;  // Kapan bot lu aktif
const  grupch1  =  '' ;  // RESMI GRUP LU 1
const  grupch2  =  '' ;  // RESMI GRUP LU 2
//
const
{
   Koneksi WAC ,
   MessageType ,
   Hadir ,
   MessageOptions ,
   Mimetype ,
   WALocationMessage ,
   WA_MESSAGE_STUB_TYPES ,
   ReconnectMode ,
   ProxyAgent ,
   waChatKey ,
}  =  membutuhkan ( "@ adiwajshing / baileys" ) ;
var  jam  =  momen ( ) . format ( "HH: mm" ) ;

function  foreach ( arr ,  func )
{
   untuk  ( var  i  in  arr )
   {
      func ( i ,  arr [ i ] ) ;
   }
}
const  conn  =  new  WAConnection ( )
samb . pada ( 'qr' ,  qr  =>
{
   kode qr . menghasilkan ( qr ,
   {
      kecil : benar
   } ) ;
   konsol . log ( `[ $ { moment ( ) . format ( " HH: mm: ss " ) } ] Scan kode qr mu cok!` ) ;
} ) ;

samb . pada ( 'credentials-updated' ,  ( )  =>
{
   // simpan kredensial setiap kali diperbarui
   konsol . log ( `kredensial diperbarui!` )
   const  authInfo  =  samb . base64EncodedAuthInfo ( )  // dapatkan semua info autentikasi yang kami perlukan untuk memulihkan sesi ini
   fs . writeFileSync ( './session.json' ,  JSON . stringify ( authInfo ,  null ,  '\ t' ) )  // simpan info ini ke file
} )
fs . existingSync ( './session.json' )  &&  conn . loadAuthInfo ( './session.json' )
// hapus komentar pada baris berikut untuk membuat proxy koneksi; beberapa proxy acak yang saya dapatkan: https://proxyscrape.com/free-proxy-list
//conn.connectOptions.agent = ProxyAgent ('http://1.0.180.120:8080')
samb . hubungkan ( ) ;

samb . on ( 'user-presence-update' ,  json  =>  console . log ( `[ $ { moment ( ) . format ( " HH: mm: ss " ) } ] => bot oleh @ bintang_nur_pradana` ) )
samb . pada ( 'message-status-update' ,  json  =>
{
   Const  participant  =  json . peserta ? '('  +  json . participant  +  ')' : ''  // peserta ada saat pesan berasal dari grup
   konsol . log ( `[ $ { moment ( ) . format ( " HH: mm: ss " ) } ] => bot oleh @ bintang_nur_pradana` )
} )

samb . on ( 'message-new' ,  async ( m )  =>
{
   const  messageContent  =  m . pesan
    teks  const =  m . pesan . percakapan
   misalkan  id  =  m . kunci . remoteJid
   const  messageType  =  Objek . keys ( messageContent ) [ 0 ]  // pesan akan selalu berisi satu kunci yang menandakan jenis pesan apa
   biarkan  imageMessage  =  m . pesan . imageMessage ;
   konsol . log ( `[ $ { moment ( ) . format ( " HH: mm: ss " ) } ] => Nomor: [ $ { id . split ( " @ s.whatsapp.net " ) [ 0 ] } ] => $ { text } ` ) ;


// Grup

if  ( teks . termasuk ( "#buatgrup" ) )
   {
var  nama  =  teks . split ( "#buatgrup" ) [ 1 ] . membagi ( "-nomor" ) [ 0 ] ;
var  nom  =  teks . membagi ( "-nomor" ) [ 1 ] ;
var  numArray  =  nom . split ( "," ) ;
untuk  (  var  i  =  0 ;  i  <  numArray . length ;  i ++  )  {
    numArray [ i ]  =  numArray [ i ]  + "@ s.whatsapp.net" ;
}
var  str  =  numArray . bergabung ( "" ) ;
konsol . log ( str )
 grup  const =  menunggu  koneksi . groupCreate  ( nama ,  str )
konsol . log  ( "membuat grup dengan id:"  +  grup . gid )
samb . sendMessage ( group . gid ,  "hello everyone" ,  MessageType . extendedText )  // sapa semua orang di grup

}

// FF
if ( teks . termasuk ( "#cek" ) ) {
var  num  =  teks . ganti ( / # cek /  ,  "" )
var  idn  =  num . ganti ( "0" , "+62" ) ;

konsol . log ( id ) ;
const  gg  =  idn + '@ s.whatsapp.net'

const  ada  =  menunggu  koneksi . isOnWhatsApp  ( gg )
konsol . log ( ada ) ;
samb . sendMessage ( id  , ` $ { gg }  $ { ada ? " ada " : " tidak ada " } di WhatsApp` ,  MessageType . teks )
}

if  ( text . include ( "#tts" ) ) {
const  teks  =  teks . ganti ( / # tts / ,  "" )
const  gtts  =  ( `https://rest.farzain.com/api/tts.php?id= $ { teks } & apikey = O8mUD3YrHIy9KM1fMRjamw8eg` )
    samb . sendMessage ( id ,  gtts  , MessageType . text ) ;
}

if  ( text . include ( "#say" ) ) {
  const  teks  =  teks . ganti ( / # say / ,  "" )
samb . sendMessage ( id ,  teks ,  MessageType . teks )
}

if  ( text . include ( "#nulis" ) ) {
  const  teks  =  teks . ganti ( / # nulis / ,  "" )
axios . dapatkan ( `https://st4rz.herokuapp.com/api/nulis?text= $ { teks } ` ) . kemudian ( ( res )  =>  {
    let  hasil  =  `Download sendiri ya hasilnya dibawah, soalnya kalo dikirim langsung hasilnya blur \ n \ n $ { res . data . hasil . data } ` ;
    samb . sendMessage ( id ,  hasil  , MessageType . teks ) ;
} )
}

if  ( teks . termasuk ( "# ytmp3" ) ) {
const  teks  =  teks . ganti ( / # ytmp3 / ,  "" )
axios . dapatkan ( `http://scrap.terhambar.com/yt?link= $ { teks } ` ) . kemudian ( ( res )  =>  {
    let  hasil  =  `Download sendiri melalui link dibawah ya, takut servernya down hehe .. \ n \ nSize: $ { res . data . ukuran file } \ n \ nTautan: $ { res . data . linkAudioOnly } ` ;
    samb . sendMessage ( id ,  hasil  , MessageType . teks ) ;
} )
}

if  ( text . include ( "#yt" ) ) {
const  teks  =  teks . ganti ( / # yt / ,  "" )
axios . dapatkan ( `http://scrap.terhambar.com/yt?link= $ { teks } ` ) . kemudian ( ( res )  =>  {
    let  hasil  =  `Download sendiri melalui link dibawah ya, takut servernya down hehe .. \ n \ nSize: $ { res . data . ukuran file } \ n \ nTautan: $ { res . data . linkVideo } ` ;
    samb . sendMessage ( id ,  hasil  , MessageType . teks ) ;
} )
}

if  ( text . include ( "#fb" ) ) {
const  teks  =  teks . ganti ( / # fb / ,  "" )
axios . dapatkan ( `https://mhankbarbar.herokuapp.com/api/epbe?url= $ { teks } & apiKey = zFuV88pxcIiCWuYlwg57` ) . kemudian ( ( res )  =>  {
    let  hasil  =  `Download sendiri melalui link dibawah ya, takut servernya down hehe .. \ n \ nJudul: $ { res . data . judul } \ n \ nUkuran: $ { res . data . ukuran file } \ n \ nTautan: $ { res . data . hasil } ` ;
    samb . sendMessage ( id ,  hasil  , MessageType . teks ) ;
} )
}

if  ( text . include ( "#ig" ) ) {
const  teks  =  teks . ganti ( / # ig / ,  "" )
axios . dapatkan ( `https://st4rz.herokuapp.com/api/ig?url= $ { teks } ` ) . kemudian ( ( res )  =>  {
    let  hasil  =  `Download sendiri melalui link dibawah ya, takut servernya down hehe .. \ n \ nLink: $ { res . data . hasil } ` ;
    samb . sendMessage ( id ,  hasil  , MessageType . teks ) ;
} )
}

if  ( text . include ( "#twt" ) ) {
const  teks  =  teks . ganti ( / # twt / ,  "" )
axios . dapatkan ( `https://mhankbarbar.herokuapp.com/api/twit?url= $ { teks } & apiKey = zFuV88pxcIiCWuYlwg57` ) . kemudian ( ( res )  =>  {
    let  hasil  =  `Download sendiri melalui link dibawah ya, takut servernya down hehe .. \ n \ nJudul: $ { res . data . judul } \ n \ nUkuran: $ { res . data . ukuran file } \ n \ nTautan: $ { res . data . hasil } ` ;
    samb . sendMessage ( id ,  hasil  , MessageType . teks ) ;
} )
}

if  ( teks . termasuk ( "#wiki" ) ) {
const  teks  =  teks . ganti ( / # wiki / ,  "" )
axios . dapatkan ( `https://st4rz.herokuapp.com/api/wiki?q= $ { teks } ` ) . kemudian ( ( res )  =>  {
    biarkan  hasil  =  `Menurut Wikipedia: \ n \ n $ { res . data . hasil } ` ;
    samb . sendMessage ( id ,  hasil  , MessageType . teks ) ;
} )
}

if  ( text  ==  '#help' ) {
const  corohelp  =  menunggu  get . dapatkan ( 'https://covid19.mathdro.id/api/countries/id' ) . json ( )
var  date  =  new  Date ( ) ;
var  tahun  =  tanggal . getFullYear ( ) ;
var  bulan  =  tanggal . getMonth ( ) ;
var  tanggal  =  tanggal . getDate ( ) ;
var  hari  =  tanggal . getDay ( ) ;
var  jam  =  tanggal . getHours ( ) ;
var  menit  =  tanggal . getMinutes ( ) ;
var  detik  =  tanggal . getSeconds ( ) ;
saklar ( hari )  {
 kasus  0 : hari  =  "Minggu" ;  istirahat ;
 kasus  1 : hari  =  "Senin" ;  istirahat ;
 case  2 : hari  =  "Selasa" ;  istirahat ;
 kasus  3 : hari  =  "Rabu" ;  istirahat ;
 case  4 : hari  =  "Kamis" ;  istirahat ;
 kasus  5 : hari  =  "Jum'at" ;  istirahat ;
 case  6 : hari  =  "Sabtu" ;  istirahat ;
}
saklar ( bulan )  {
 case  0 : bulan  =  "Januari" ;  istirahat ;
 case  1 : bulan  =  "Februari" ;  istirahat ;
 case  2 : bulan  =  "Maret" ;  istirahat ;
 case  3 : bulan  =  "April" ;  istirahat ;
 kasus  4 : bulan  =  "Mei" ;  istirahat ;
 case  5 : bulan  =  "Juni" ;  istirahat ;
 case  6 : bulan  =  "Juli" ;  istirahat ;
 case  7 : bulan  =  "Agustus" ;  istirahat ;
 case  8 : bulan  =  "September" ;  istirahat ;
 case  9 : bulan  =  "Oktober" ;  istirahat ;
 case  10 : bulan  =  "November" ;  istirahat ;
 case  11 : bulan  =  "Desember" ;  istirahat ;
}
var  tampilTanggal  =  "TANGGAL:"  +  hari  +  ","  +  tanggal  +  ""  +  bulan  +  ""  +  tahun ;
var  tampilWaktu  =  "JAM:"  +  jam  +  ":"  +  menit  +  ":"  +  detik ;
samb . sendMessage ( id ,  menu . menu ( id ,  BotName ,  corohelp ,  tampilTanggal ,  tampilWaktu ,  instagramlu ,  whatsapplu ,  kapanbotaktif ,  grupch1 ,  grupch2 )  , MessageType . text ) ;
}
lain  jika  ( teks  ==  '#quran' ) {
axios . dapatkan ( 'https://api.banghasan.com/quran/format/json/acak' ) . kemudian ( ( res )  =>  {
    const  sr  =  /{ ( . * ? ) } / gi ;
    const  hs  =  res . data . acak . id . ayat ;
    const  ket  =  ` $ { hs } ` . ganti ( sr ,  '' ) ;
    let  hasil  =  `[ $ { ket } ]    $ { res . data . acak . ar . teks } \ n \ n $ { res . data . acak . id . Teks } (QS. $ { res . Data . surat . nāma } , Ayat $ { ket } ) ` ;
    samb . sendMessage ( id ,  hasil  , MessageType . teks ) ;
} )
}
lain  jika  ( teks  ==  'assalamualaikum' ) {
samb . sendMessage ( id ,  '3aalaikumsalam, ada yang bisa saya bantu? kalo bingung ketik #help ya say ..'  , MessageType . text ) ;
}
lain  jika  ( teks  ==  'salam' ) {
samb . sendMessage ( id ,  'Waalaikumsalam, ada yang bisa saya bantu? kalo bingung ketik #help ya say ..'  , MessageType . text ) ;
}
lain  jika  ( teks  ==  'asalamualaikum' ) {
samb . sendMessage ( id ,  'Waalaikumsalam, ada yang bisa saya bantu? kalo bingung ketik #help ya say ..'  , MessageType . text ) ;
}
lain  jika  ( teks  ==  'Assalamualaikum' ) {
samb . sendMessage ( id ,  'Waalaikumsalam, ada yang bisa saya bantu? kalo bingung ketik #help ya say ..'  , MessageType . text ) ;
}
lain  jika  ( teks  ==  'p' ) {
samb . sendMessage ( id ,  'Ya ?, ada yang bisa saya bantu? kalo bingung ketik #help ya say ..'  , MessageType . text ) ;
}
lain  jika  ( teks  ==  'P' ) {
samb . sendMessage ( id ,  'Ya ?, ada yang bisa saya bantu? kalo bingung ketik #help ya say ..'  , MessageType . text ) ;
}
lain  jika  ( teks  ==  'halo' ) {
samb . sendMessage ( id ,  'Ya ?, ada yang bisa saya bantu? kalo bingung ketik #help ya say ..'  , MessageType . text ) ;
}
lain  jika  ( teks  ==  'hai' ) {
samb . sendMessage ( id ,  'Ya ?, ada yang bisa saya bantu? kalo bingung ketik #help ya say ..'  , MessageType . text ) ;
}
lain  jika  ( teks  ==  'woi' ) {
samb . sendMessage ( id ,  'Ya ?, ada yang bisa saya bantu? kalo bingung ketik #help ya say ..'  , MessageType . text ) ;
}
lain  jika  ( teks  ==  'woy' ) {
samb . sendMessage ( id ,  'Ya ?, ada yang bisa saya bantu? kalo bingung ketik #help ya say ..'  , MessageType . text ) ;
}
lain  jika  ( teks  ==  'hai' ) {
samb . sendMessage ( id ,  'Ya ?, ada yang bisa saya bantu? kalo bingung ketik #help ya say ..'  , MessageType . text ) ;
}
lain  jika  ( teks  ==  'gan' ) {
samb . sendMessage ( id ,  'Ya ?, ada yang bisa saya bantu? kalo bingung ketik #help ya say ..'  , MessageType . text ) ;
}
lain  jika  ( teks  ==  'sis' ) {
samb . sendMessage ( id ,  'Ya ?, ada yang bisa saya bantu? kalo bingung ketik #help ya say ..'  , MessageType . text ) ;
}
lain  jika  ( teks  ==  'bro' ) {
samb . sendMessage ( id ,  'Ya ?, ada yang bisa saya bantu? kalo bingung ketik #help ya say ..'  , MessageType . text ) ;
}
else  if  ( text  ==  'min' ) {
samb . sendMessage ( id ,  'Ya ?, ada yang bisa saya bantu? kalo bingung ketik #help ya say ..'  , MessageType . text ) ;
}
else  if  ( text  ==  'sayang' ) {
samb . sendMessage ( id ,  'Ya ?, ada yang bisa saya bantu? kalo bingung ketik #help ya say ..'  , MessageType . text ) ;
}
lain  jika  ( teks  ==  'aku cinta kamu' ) {
samb . sendMessage ( id ,  'love you too'  , MessageType . text ) ;
}
lain  jika  ( teks  ==  'mas' ) {
samb . sendMessage ( id ,  'Ya ?, ada yang bisa saya bantu? kalo bingung ketik #help ya say ..'  , MessageType . text ) ;
}
lain  jika  ( teks  ==  'mba' ) {
samb . sendMessage ( id ,  'Ya ?, ada yang bisa saya bantu? kalo bingung ketik #help ya say ..'  , MessageType . text ) ;
}
lain  jika  ( teks  ==  'bre' ) {
samb . sendMessage ( id ,  'Ya ?, ada yang bisa saya bantu? kalo bingung ketik #help ya say ..'  , MessageType . text ) ;
}
lain  jika  ( teks  ==  'cuy' ) {
samb . sendMessage ( id ,  'Ya ?, ada yang bisa saya bantu? kalo bingung ketik #help ya say ..'  , MessageType . text ) ;
}
lain  jika  ( teks  ==  'euy' ) {
samb . sendMessage ( id ,  'Ya ?, ada yang bisa saya bantu? kalo bingung ketik #help ya say ..'  , MessageType . text ) ;
}
lain  jika  ( teks  ==  'makasi' ) {
samb . sendMessage ( id ,  'Sama sama, semoga harimu menyenangkan :)'  , MessageType . teks ) ;
}
lain  jika  ( teks  ==  'Makasi' ) {
samb . sendMessage ( id ,  'Sama sama, semoga harimu menyenangkan :)'  , MessageType . teks ) ;
}
else  if  ( text  ==  'makasih' ) {
samb . sendMessage ( id ,  'Sama sama, semoga harimu menyenangkan :)'  , MessageType . teks ) ;
}
else  if  ( text  ==  'Makasih' ) {
samb . sendMessage ( id ,  'Sama sama, semoga harimu menyenangkan :)'  , MessageType . teks ) ;
}
lain  jika  ( teks  ==  'terima kasih' ) {
samb . sendMessage ( id ,  'Sama sama, semoga harimu menyenangkan :)'  , MessageType . teks ) ;
}
lain  jika  ( teks  ==  'Terima kasih' ) {
samb . sendMessage ( id ,  'Sama sama, semoga harimu menyenangkan :)'  , MessageType . teks ) ;
}
lain  jika  ( teks  ==  'terima kasih' ) {
samb . sendMessage ( id ,  'Sama sama, semoga harimu menyenangkan :)'  , MessageType . teks ) ;
}
lain  jika  ( teks  ==  'Terima kasih' ) {
samb . sendMessage ( id ,  'Sama sama, semoga harimu menyenangkan :)'  , MessageType . teks ) ;
}
lain  jika  ( text  ==  '#donate' ) {
const  corohelp  =  menunggu  get . dapatkan ( 'https://covid19.mathdro.id/api/countries/id' ) . json ( )
var  date  =  new  Date ( ) ;
var  tahun  =  tanggal . getFullYear ( ) ;
var  bulan  =  tanggal . getMonth ( ) ;
var  tanggal  =  tanggal . getDate ( ) ;
var  hari  =  tanggal . getDay ( ) ;
var  jam  =  tanggal . getHours ( ) ;
var  menit  =  tanggal . getMinutes ( ) ;
var  detik  =  tanggal . getSeconds ( ) ;
saklar ( hari )  {
 kasus  0 : hari  =  "Minggu" ;  istirahat ;
 kasus  1 : hari  =  "Senin" ;  istirahat ;
 case  2 : hari  =  "Selasa" ;  istirahat ;
 kasus  3 : hari  =  "Rabu" ;  istirahat ;
 case  4 : hari  =  "Kamis" ;  istirahat ;
 kasus  5 : hari  =  "Jum'at" ;  istirahat ;
 case  6 : hari  =  "Sabtu" ;  istirahat ;
}
saklar ( bulan )  {
 case  0 : bulan  =  "Januari" ;  istirahat ;
 case  1 : bulan  =  "Februari" ;  istirahat ;
 case  2 : bulan  =  "Maret" ;  istirahat ;
 case  3 : bulan  =  "April" ;  istirahat ;
 kasus  4 : bulan  =  "Mei" ;  istirahat ;
 case  5 : bulan  =  "Juni" ;  istirahat ;
 case  6 : bulan  =  "Juli" ;  istirahat ;
 case  7 : bulan  =  "Agustus" ;  istirahat ;
 case  8 : bulan  =  "September" ;  istirahat ;
 case  9 : bulan  =  "Oktober" ;  istirahat ;
 case  10 : bulan  =  "November" ;  istirahat ;
 case  11 : bulan  =  "Desember" ;  istirahat ;
}
var  tampilTanggal  =  "TANGGAL:"  +  hari  +  ","  +  tanggal  +  ""  +  bulan  +  ""  +  tahun ;
var  tampilWaktu  =  "JAM:"  +  jam  +  ":"  +  menit  +  ":"  +  detik ;
samb . sendMessage ( id ,  donate . donate ( id ,  BotName ,  corohelp ,  tampilTanggal ,  tampilWaktu ,  instagramlu ,  whatsapplu ,  kapanbotaktif ,  grupch1 ,  grupch2 )  , MessageType . text ) ;
}
lain  jika  ( teks  ==  '#donasi' ) {
const  corohelp  =  menunggu  get . dapatkan ( 'https://covid19.mathdro.id/api/countries/id' ) . json ( )
var  date  =  new  Date ( ) ;
var  tahun  =  tanggal . getFullYear ( ) ;
var  bulan  =  tanggal . getMonth ( ) ;
var  tanggal  =  tanggal . getDate ( ) ;
var  hari  =  tanggal . getDay ( ) ;
var  jam  =  tanggal . getHours ( ) ;
var  menit  =  tanggal . getMinutes ( ) ;
var  detik  =  tanggal . getSeconds ( ) ;
saklar ( hari )  {
 kasus  0 : hari  =  "Minggu" ;  istirahat ;
 kasus  1 : hari  =  "Senin" ;  istirahat ;
 case  2 : hari  =  "Selasa" ;  istirahat ;
 kasus  3 : hari  =  "Rabu" ;  istirahat ;
 case  4 : hari  =  "Kamis" ;  istirahat ;
 kasus  5 : hari  =  "Jum'at" ;  istirahat ;
 case  6 : hari  =  "Sabtu" ;  istirahat ;
}
saklar ( bulan )  {
 case  0 : bulan  =  "Januari" ;  istirahat ;
 case  1 : bulan  =  "Februari" ;  istirahat ;
 case  2 : bulan  =  "Maret" ;  istirahat ;
 case  3 : bulan  =  "April" ;  istirahat ;
 kasus  4 : bulan  =  "Mei" ;  istirahat ;
 case  5 : bulan  =  "Juni" ;  istirahat ;
 case  6 : bulan  =  "Juli" ;  istirahat ;
 case  7 : bulan  =  "Agustus" ;  istirahat ;
 case  8 : bulan  =  "September" ;  istirahat ;
 case  9 : bulan  =  "Oktober" ;  istirahat ;
 case  10 : bulan  =  "November" ;  istirahat ;
 case  11 : bulan  =  "Desember" ;  istirahat ;
}
var  tampilTanggal  =  "TANGGAL:"  +  hari  +  ","  +  tanggal  +  ""  +  bulan  +  ""  +  tahun ;
var  tampilWaktu  =  "JAM:"  +  jam  +  ":"  +  menit  +  ":"  +  detik ;
samb . sendMessage ( id ,  donate . donate ( id ,  BotName ,  corohelp ,  tampilTanggal ,  tampilWaktu ,  instagramlu ,  whatsapplu ,  kapanbotaktif ,  grupch1 ,  grupch2 )  , MessageType . text ) ;
}
lain  jika  ( teks  ==  '#DONATE' ) {
const  corohelp  =  menunggu  get . dapatkan ( 'https://covid19.mathdro.id/api/countries/id' ) . json ( )
var  date  =  new  Date ( ) ;
var  tahun  =  tanggal . getFullYear ( ) ;
var  bulan  =  tanggal . getMonth ( ) ;
var  tanggal  =  tanggal . getDate ( ) ;
var  hari  =  tanggal . getDay ( ) ;
var  jam  =  tanggal . getHours ( ) ;
var  menit  =  tanggal . getMinutes ( ) ;
var  detik  =  tanggal . getSeconds ( ) ;
saklar ( hari )  {
 kasus  0 : hari  =  "Minggu" ;  istirahat ;
 kasus  1 : hari  =  "Senin" ;  istirahat ;
 case  2 : hari  =  "Selasa" ;  istirahat ;
 kasus  3 : hari  =  "Rabu" ;  istirahat ;
 case  4 : hari  =  "Kamis" ;  istirahat ;
 kasus  5 : hari  =  "Jum'at" ;  istirahat ;
 case  6 : hari  =  "Sabtu" ;  istirahat ;
}
saklar ( bulan )  {
 case  0 : bulan  =  "Januari" ;  istirahat ;
 case  1 : bulan  =  "Februari" ;  istirahat ;
 case  2 : bulan  =  "Maret" ;  istirahat ;
 case  3 : bulan  =  "April" ;  istirahat ;
 kasus  4 : bulan  =  "Mei" ;  istirahat ;
 case  5 : bulan  =  "Juni" ;  istirahat ;
 case  6 : bulan  =  "Juli" ;  istirahat ;
 case  7 : bulan  =  "Agustus" ;  istirahat ;
 case  8 : bulan  =  "September" ;  istirahat ;
 case  9 : bulan  =  "Oktober" ;  istirahat ;
 case  10 : bulan  =  "November" ;  istirahat ;
 case  11 : bulan  =  "Desember" ;  istirahat ;
}
var  tampilTanggal  =  "TANGGAL:"  +  hari  +  ","  +  tanggal  +  ""  +  bulan  +  ""  +  tahun ;
var  tampilWaktu  =  "JAM:"  +  jam  +  ":"  +  menit  +  ":"  +  detik ;
samb . sendMessage ( id ,  donate . donate ( id ,  BotName ,  corohelp ,  tampilTanggal ,  tampilWaktu ,  instagramlu ,  whatsapplu ,  kapanbotaktif ,  grupch1 ,  grupch2 )  , MessageType . text ) ;
}
lain  jika  ( teks  ==  '#DONASI' ) {
  const  corohelp  =  menunggu  get . dapatkan ( 'https://covid19.mathdro.id/api/countries/id' ) . json ( )
var  date  =  new  Date ( ) ;
var  tahun  =  tanggal . getFullYear ( ) ;
var  bulan  =  tanggal . getMonth ( ) ;
var  tanggal  =  tanggal . getDate ( ) ;
var  hari  =  tanggal . getDay ( ) ;
var  jam  =  tanggal . getHours ( ) ;
var  menit  =  tanggal . getMinutes ( ) ;
var  detik  =  tanggal . getSeconds ( ) ;
saklar ( hari )  {
 kasus  0 : hari  =  "Minggu" ;  istirahat ;
 kasus  1 : hari  =  "Senin" ;  istirahat ;
 case  2 : hari  =  "Selasa" ;  istirahat ;
 kasus  3 : hari  =  "Rabu" ;  istirahat ;
 case  4 : hari  =  "Kamis" ;  istirahat ;
 kasus  5 : hari  =  "Jum'at" ;  istirahat ;
 case  6 : hari  =  "Sabtu" ;  istirahat ;
}
saklar ( bulan )  {
 case  0 : bulan  =  "Januari" ;  istirahat ;
 case  1 : bulan  =  "Februari" ;  istirahat ;
 case  2 : bulan  =  "Maret" ;  istirahat ;
 case  3 : bulan  =  "April" ;  istirahat ;
 kasus  4 : bulan  =  "Mei" ;  istirahat ;
 case  5 : bulan  =  "Juni" ;  istirahat ;
 case  6 : bulan  =  "Juli" ;  istirahat ;
 case  7 : bulan  =  "Agustus" ;  istirahat ;
 case  8 : bulan  =  "September" ;  istirahat ;
 case  9 : bulan  =  "Oktober" ;  istirahat ;
 case  10 : bulan  =  "November" ;  istirahat ;
 case  11 : bulan  =  "Desember" ;  istirahat ;
}
var  tampilTanggal  =  "TANGGAL:"  +  hari  +  ","  +  tanggal  +  ""  +  bulan  +  ""  +  tahun ;
var  tampilWaktu  =  "JAM:"  +  jam  +  ":"  +  menit  +  ":"  +  detik ;
samb . sendMessage ( id ,  donate . donate ( id ,  BotName ,  corohelp ,  tampilTanggal ,  tampilWaktu ,  instagramlu ,  whatsapplu ,  kapanbotaktif ,  grupch1 ,  grupch2 )  , MessageType . text ) ;
}
lain  jika  ( teks  ==  '#info' ) {
  const  corohelp  =  menunggu  get . dapatkan ( 'https://covid19.mathdro.id/api/countries/id' ) . json ( )
var  date  =  new  Date ( ) ;
var  tahun  =  tanggal . getFullYear ( ) ;
var  bulan  =  tanggal . getMonth ( ) ;
var  tanggal  =  tanggal . getDate ( ) ;
var  hari  =  tanggal . getDay ( ) ;
var  jam  =  tanggal . getHours ( ) ;
var  menit  =  tanggal . getMinutes ( ) ;
var  detik  =  tanggal . getSeconds ( ) ;
saklar ( hari )  {
 kasus  0 : hari  =  "Minggu" ;  istirahat ;
 kasus  1 : hari  =  "Senin" ;  istirahat ;
 case  2 : hari  =  "Selasa" ;  istirahat ;
 kasus  3 : hari  =  "Rabu" ;  istirahat ;
 case  4 : hari  =  "Kamis" ;  istirahat ;
 kasus  5 : hari  =  "Jum'at" ;  istirahat ;
 case  6 : hari  =  "Sabtu" ;  istirahat ;
}
saklar ( bulan )  {
 case  0 : bulan  =  "Januari" ;  istirahat ;
 case  1 : bulan  =  "Februari" ;  istirahat ;
 case  2 : bulan  =  "Maret" ;  istirahat ;
 case  3 : bulan  =  "April" ;  istirahat ;
 kasus  4 : bulan  =  "Mei" ;  istirahat ;
 case  5 : bulan  =  "Juni" ;  istirahat ;
 case  6 : bulan  =  "Juli" ;  istirahat ;
 case  7 : bulan  =  "Agustus" ;  istirahat ;
 case  8 : bulan  =  "September" ;  istirahat ;
 case  9 : bulan  =  "Oktober" ;  istirahat ;
 case  10 : bulan  =  "November" ;  istirahat ;
 case  11 : bulan  =  "Desember" ;  istirahat ;
}
var  tampilTanggal  =  "TANGGAL:"  +  hari  +  ","  +  tanggal  +  ""  +  bulan  +  ""  +  tahun ;
var  tampilWaktu  =  "JAM:"  +  jam  +  ":"  +  menit  +  ":"  +  detik ;
samb . sendMessage ( id ,  info . info ( id ,  BotName ,  corohelp ,  tampilTanggal ,  tampilWaktu ,  instagramlu ,  whatsapplu ,  kapanbotaktif ,  grupch1 ,  grupch2 )  , MessageType . text ) ;
}
lain  jika  ( teks  ==  '#ptl' ) {
samb . sendMessage ( id ,  'kirim #ptl cewek / cowok \ n \ nContoh: #ptl cewek'  , MessageType . text ) ;
}
   jika  ( messageType  ==  'imageMessage' )
   {
      biarkan  caption  =  imageMessage . caption . toLocaleLowerCase ( )
      const  buffer  =  menunggu  koneksi . downloadMediaMessage ( m )  // untuk mendekripsi & digunakan sebagai buffer
      jika  ( caption  ==  '#sticker' )
      {
         const  stiker  =  menunggu  koneksi . downloadAndSaveMediaMessage ( m )  // untuk mendekripsi & menyimpan ke file

         const
         {
            eksekutif
         }  =  membutuhkan ( "child_process" ) ;
         exec ( 'cwebp -q 50'  +  stiker  +  '-o temp /'  +  jam  +  '.webp' ,  ( error ,  stdout ,  stderr )  =>
         {
            biarkan  stik  =  fs . readFileSync ( 'temp /'  +  jam  +  '.webp' )
            samb . sendMessage ( id ,  stik ,  MessageType . stiker )
         } ) ;
      }
   }

   if  ( messageType  ===  MessageType . teks )
   {
      biarkan  adalah  =  m . pesan . percakapan . toLocaleLowerCase ( )

      jika  ( adalah  ==  '#pantun' )
      {

         ambil ( 'https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-pantun-pakboy.txt' )
            . kemudian ( res  =>  res . text ( ) )
            . kemudian ( body  =>
            {
               biarkan  tod  =  tubuh . membagi ( "\ n" ) ;
               biarkan  pjr  =  tod [ Matematika . floor ( Math . random ( ) * tod . length ) ] ;
               biarkan  pantun  =  pjr . ganti ( / pjrx-line / g ,  "\ n" ) ;
               samb . sendMessage ( id ,  pantun ,  MessageType . teks )
            } ) ;
      }

   }
/ * if (text.includes ("# yt"))
   {
      const url = text.replace (/ # yt /, "");
      const exec = membutuhkan ('child_process'). exec;
      var videoid = url.match (/ (?: https?: \ / {2})? (?: w {3} \.)? youtu (?: be)? \. (?: com | be) (? : \ / jam tangan \? v = | \ /) ([^ \ s &] +) /);
      const ytdl = membutuhkan ("ytdl-core")
      if (videoid! = null)
      {
         console.log ("video id =", videoid [1]);
      }
      lain
      {
         conn.sendMessage (id, "gavalid", MessageType.text)
      }
      ytdl.getInfo (videoid [1]). lalu (info =>
      {
         jika (info.length_seconds> 1000)
         {
            conn.sendMessage (id, "videonya kepanjangan", MessageType.text)
         }
         lain
         {
            console.log (info.length_seconds)
            function os_func ()
            {
               this.execCommand = function (cmd)
               {
                  return new Promise ((menyelesaikan, menolak) =>
                  {
                     exec (cmd, (error, stdout, stderr) =>
                     {
                        jika (kesalahan)
                        {
                           menolak (kesalahan);
                           kembali;
                        }
                        menyelesaikan (stdout)
                     });
                  })
               }
            }
            var os = new os_func ();
            os.execCommand ('ytdl' + url + '-q tertinggi -o mp4 /' + videoid [1] + '.mp4'). lalu (res =>
            {
		const buffer = fs.readFileSync ("mp4 /" + videoid [1] + ". mp4")
               conn.sendMessage (id, buffer, MessageType.video)
            }). menangkap (err =>
            {
               console.log ("os >>>", err);
            })
         }
      });
   } * /


   / * if (text.includes ("# nulis"))
   {
      const
      {
         muncul
      } = membutuhkan ("child_process");
      console.log ("menulis ...")
      const teks = text.replace (/ # nulis /, "")
      const split = teks.replace (/ (\ S + \ s *) {1,10} / g, "$ & \ n")
      const fixedHeight = split.split ("\ n"). slice (0, 25) .join ("\\ n")
      console.log (split)
      menelurkan ("konversi", [
            "./assets/paper.jpg",
            "-font",
            "Indie-Flower",
            "-ukuran",
            "700x960",
            "-poinsize",
            "18",
            "-interline-spacing",
            "3",
            "-membubuhi keterangan",
            "+ 170 + 222",
            fixedHeight,
            "./assets/result.jpg"
         ])
         .on ("error", () => console.log ("error"))
         .on ("exit", () =>
         {
            const buffer = fs.readFileSync ("assets / result.jpg") // dapat mengirim mp3, mp4, & ogg - tetapi untuk file mp3 mimetype harus disetel ke ogg
            conn.sendMessage (id, buffer, MessageType.image)
            console.log ("selesai")
         })
   }
   if (text.includes ("# quotes"))
   {
      var url = 'https://jagokata.com/kata-bijak/acak.html'
      axios.get (url)
         . kemudian ((hasil) =>
         {
            biarkan $ = cheerio.load (result.data);
            var author = $ ('a [class = "auteurfbnaam"]'). konten (). pertama (). teks ();
            var kata = $ ('q [class = "fbquote"]'). konten (). pertama (). teks ();
            conn.sendMessage (
               Indo,
               `
     _ $ {kata} _
        
    
	* ~ $ {author} *
         `, MessageType.text
            );
         });
   } * /

   if  ( teks . termasuk ( "#ptl cewek" ) )
   {
    var  items  =  [ "ullzang girl" ,  "cewe cantik" ,  "hijab cantik" ,  "korean girl" ] ;
    var  cewe  =  item [ Matematika . floor ( Math . random ( ) * item . length ) ] ;
    var  url  =  "https://api.fdci.se/rep.php?gambar="  +  cewe ;
    
    axios . dapatkan ( url )
      . kemudian ( ( hasil )  =>  {
        var  b  =  JSON . parse ( JSON . stringify ( result . data ) ) ;
        var  cewek  =   b [ Matematika . floor ( Math . random ( ) * b . length ) ] ;
        imageToBase64 ( cewek )  // Jalur menuju gambar
        . kemudian (
            ( tanggapan )  =>  {
	var  buf  =  Penyangga . dari ( respon ,  'base64' ) ;  // Ta-da	
              samb . sendMessage (
            id ,
              buf , MessageType . gambar )
       
            }
        )
        . menangkap (
            ( kesalahan )  =>  {
                konsol . log ( kesalahan ) ;  // Mencatat kesalahan jika ada
            }
        )
    
    } ) ;
    }

   if  ( teks . termasuk ( "#ptl cowok" ) )
   {
    var  items  =  [ "cowo ganteng" ,  "cogan" ,  "anak korea" ,  "anak cina" ,  "anak jepang" ] ;
    var  cewe  =  item [ Matematika . floor ( Math . random ( ) * item . length ) ] ;
    var  url  =  "https://api.fdci.se/rep.php?gambar="  +  cewe ;
    
    axios . dapatkan ( url )
      . kemudian ( ( hasil )  =>  {
        var  b  =  JSON . parse ( JSON . stringify ( result . data ) ) ;
        var  cewek  =   b [ Matematika . floor ( Math . random ( ) * b . length ) ] ;
        imageToBase64 ( cewek )  // Jalur menuju gambar
        . kemudian (
            ( tanggapan )  =>  {
  var  buf  =  Penyangga . dari ( respon ,  'base64' ) ;  // Ta-da
              samb . sendMessage (
            id ,
              buf , MessageType . gambar )
       
            }
        )
        . menangkap (
            ( kesalahan )  =>  {
                konsol . log ( kesalahan ) ;  // Mencatat kesalahan jika ada
            }
        )
    
    } ) ;
    }

if  ( text . include ( "#randomanime" ) )
   {
    var  items  =  [ "anime girl" ,  "anime cantik" ,  "anime" ,  "anime aesthetic" ] ;
    var  cewe  =  item [ Matematika . floor ( Math . random ( ) * item . length ) ] ;
    var  url  =  "https://api.fdci.se/rep.php?gambar="  +  cewe ;
    
    axios . dapatkan ( url )
      . kemudian ( ( hasil )  =>  {
        var  b  =  JSON . parse ( JSON . stringify ( result . data ) ) ;
        var  cewek  =   b [ Matematika . floor ( Math . random ( ) * b . length ) ] ;
        imageToBase64 ( cewek )  // Jalur menuju gambar
        . kemudian (
            ( tanggapan )  =>  {
	var  buf  =  Penyangga . dari ( respon ,  'base64' ) ;  // Ta-da	
              samb . sendMessage (
            id ,
              buf , MessageType . gambar )
       
            }
        )
        . menangkap (
            ( kesalahan )  =>  {
                konsol . log ( kesalahan ) ;  // Mencatat kesalahan jika ada
            }
        )
    
    } ) ;
    }

/ * if (text.includes ("# scdl")) {
const fs = membutuhkan ("fs");
const scdl = membutuhkan ("./ lib / scdl");
scdl.setClientID ("iZIs9mchVcX5lhVRyQGGAYlNPVldzAoX");
scdl ("https://m.soundcloud.com/abdul-muttaqin-701361735/lucid-dreams-gustixa-ft-vict-molina")
    .pipe (fs.createWriteStream ("mp3 / song.mp3"));
}
 else if (text.includes ("# tts")) {
  var teks = text.split ("# ttsid") [1];
  var path = membutuhkan ('path');
  var text1 = teks.slice (6);
  text1 = suara;
  var suara = text.replace (/ # ttsid / g, text1);
  var filepath = 'mp3 / bacot.wav';
  
  
/ *
 * simpan file audio
 * /

/*gtts.save(filepath, suara, function () {
  console.log (`$ {filepath} MP3 DISIMPAN!`)
});
menunggu Janji baru (menyelesaikan => setTimeout (menyelesaikan, 500)); * /

/ * if (suara.length> 200) {// periksa panjang teks, karena jika tidak, google translate akan memberi saya file kosong
  msg.reply ("SMS kepanjangan bro!")
}lain{
const buffer = fs.readFileSync (jalur file)
	conn.sendMessage (id, buffer, MessageType.audio);
};
} * /






   // akhir file


} )