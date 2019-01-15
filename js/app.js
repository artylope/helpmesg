var phrases= {
    "english": {
      "language"  : "English",
      "intro"     : "This is a help portal provided by the Singapore government.<br>We will try our best to redirect your concerns to relevant authorities.",
      "select"    : "Select Language",
      "explain"   : "Explain Your Problem ",
      "files"     : "Upload Your Documents",
      "email"     : "Email Address",
      "phone"     : "Phone Number",
      "submit"    : "Submit"
    },
    "chinese": {
      "language"  : "华语",
      "intro"     : "这是新加坡政府提供的帮助门户。<br>我们将竭尽所能为您解决问题重定向到有关部门。",
      "select"    : "选择语言",
      "explain"   : "说明您的问题",
      "files"     : "上传文件",
      "email"     : "电子邮件地址",
      "phone"     : "电话号码",
      "submit"    : "提交"
    },
    "malay": {
      "language"  : "Bahasa Melayu",
      "intro"     : "Ini adalah portal bantuan yang disediakan oleh kerajaan Singapura.<br>Kami akan cuba yang terbaik untuk mengalihkan kebimbangan anda kepada pihak berkuasa yang berkaitan.",
      "select"    : "Pilih Bahasa",
      "explain"   : "Jelaskan Masalah anda",
      "files"     : "Memuat naik Dokumen anda (pilihan)",
      "email"     : "Alamat emel",
      "phone"     : "Nombor telefon",
      "submit"    : "hantar"
    },
    "tamil": {
      "language"  : "தமிழ்",
      "intro"     : "This is a help portal provided by the Singapore government.<br>We will try our best to redirect your concerns to relevant authorities.",
      "select"    : "தேர்வு மொழி",
      "explain"   : "உங்கள் பிரச்சனை விளக்குங்கள்",
      "files"     : "உங்கள் ஆவண பதிவேற்ற",
      "email"     : "மின்னஞ்சல் முகவரி",
      "phone"     : "தொலைபேசி எண்",
      "submit"    : "சமர்ப்பி"
    }
  };


function postForm(){
  var explain = document.getElementById('explain').value;
  var files = document.getElementById('files').value;
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
}


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
