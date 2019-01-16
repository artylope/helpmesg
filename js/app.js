var phrases= {
  "english": {
    "language"  : "English",
    "intro"     : "This is a help portal provided by the Singapore government.We will try our best to redirect your concerns to relevant authorities.",
    "select"    : "Select Language",
    "explain"   : "Explain Your Problem",
    "files"     : "Upload Your Documents",
    "email"     : "Email Address",
    "phone"     : "Phone Number",
    "submit"    : "Submit"
  },
  "chinese": {
    "language"  : "中文",
    "intro"     : "这是新加坡政府提供的帮助门户。我们将竭尽所能为您解决问题重定向到有关部门。",
    "select"    : "选择语言",
    "explain"   : "说明您的问题",
    "files"     : "上传文件",
    "email"     : "电子邮件地址",
    "phone"     : "电话号码",
    "submit"    : "提交"
  },
  "malay": {
    "language"  : "Bahasa Melayu",
    "intro"     : "Ini adalah portal bantuan yang disediakan oleh kerajaan Singapura.Kami akan cuba yang terbaik untuk mengalihkan kebimbangan anda kepada pihak berkuasa yang berkaitan.",
    "select"    : "Pilih Bahasa",
    "explain"   : "Jelaskan Masalah anda",
    "files"     : "Memuat naik Dokumen anda",
    "email"     : "Alamat emel",
    "phone"     : "Nombor telefon",
    "submit"    : "hantar"
  },
  "tamil": {
    "language"  : "தமிழ்",
    "intro"     : "இந்த சிங்கப்பூர் அரசாங்கம் வழங்கிய உதவி போர்டல் உள்ளது.நாம் உரிய அதிகாரிகளுக்கு உங்கள் கவலைகளை திருப்பி எங்கள் சிறந்த முயற்சி.",
    "select"    : "தேர்வு மொழி",
    "explain"   : "உங்கள் பிரச்சனை விளக்குங்கள்",
    "files"     : "உங்கள் ஆவண பதிவேற்ற",
    "email"     : "மின்னஞ்சல் முகவரி",
    "phone"     : "தொலைபேசி எண்",
    "submit"    : "சமர்ப்பி"
  },
  "thai": {
    "language"  : "ภาษาไทย",
    "intro"     : "นี้เป็นพอร์ทัลช่วยเหลือให้โดยรัฐบาลสิงคโปร์.เราจะพยายามอย่างดีที่สุดที่จะเปลี่ยนเส้นทางความกังวลของคุณไปยังหน่วยงานที่เกี่ยวข้อง.",
    "select"    : "เลือกภาษา",
    "explain"   : "อธิบายปัญหาของคุณ்",
    "files"     : "อัปโหลดเอกสารของคุณ",
    "email"     : "ที่อยู่อีเมล",
    "phone"     : "หมายเลขโทรศัพท์",
    "submit"    : "เสนอ"
  },
  "filipino": {
    "language"  : "Pilipino",
    "intro"     : "Ito ay isang tulong portal na ibinigay ng gobyerno ng Singapore.Kami ay subukan ang aming pinakamahusay na upang i-redirect ang iyong mga alalahanin sa mga kaugnay na awtoridad.",
    "select"    : "Piliin ang wika",
    "explain"   : "Ipaliwanag ang iyong Problema",
    "files"     : "Mag-upload ng iyong Document",
    "email"     : "email Address",
    "phone"     : "Numero ng telepono์",
    "submit"    : "Ipasa"
  }
};

function postForm(){
  var explain = document.getElementById('explain').value;
  var files = document.getElementById('file').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;

  var casefile = {
    caseId : 123,
    description : explain,
    files : files,
    email : email,
    phone : phone,
  };

  console.log(casefile);
};

function chooseLang(clicked_id){
  console.log(clicked_id);
  document.getElementById('introLabel').innerHTML = phrases[clicked_id].intro;
  document.getElementById('languageLabel').innerHTML = phrases[clicked_id].select;
  document.getElementById('explainLabel').innerHTML = phrases[clicked_id].explain;
  document.getElementById('filesLabel').innerHTML = phrases[clicked_id].files;
  document.getElementById('emailLabel').innerHTML = phrases[clicked_id].email;
  document.getElementById('phoneLabel').innerHTML = phrases[clicked_id].phone;
  document.getElementById('submitLabel').innerHTML = phrases[clicked_id].submit;
};


function selectLang(){
  var language = document.getElementById('language').value;
  document.getElementById('introLabel').innerHTML = phrases[language].intro;
  document.getElementById('languageLabel').innerHTML = phrases[language].select;
  document.getElementById('explainLabel').innerHTML = phrases[language].explain;
  document.getElementById('filesLabel').innerHTML = phrases[language].files;
  document.getElementById('emailLabel').innerHTML = phrases[language].email;
  document.getElementById('phoneLabel').innerHTML = phrases[language].phone;
  document.getElementById('submitLabel').innerHTML = phrases[language].submit;
}

// console.log(Object.keys(phrases));
// console.log(Object.keys(phrases).length);
// console.log(Object.values(phrases)[1].language);

window.onload = function() {

  var lang = Object.keys(phrases);
  var appendString = '';

  var i;
  for (i = 0; i < lang.length; i++) {
    appendString += '<button class="languageSelect" id="'
    + Object.keys(phrases)[i]
    +'" onclick="chooseLang(this.id);">'
    + Object.values(phrases)[i].language
    + '</button>';
    // console.log(appendString);
  };

  // console.log(document.getElementById('showLang'))
  document.getElementById('showLang').innerHTML = appendString;
}
