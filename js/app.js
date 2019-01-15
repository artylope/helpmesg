var phrases= {
    "english": {
      "language"  : "English",
      "select"    : "Select Language",
      "explain"   : "Explain your Problem ",
      "files"     : "Upload your Documents",
      "email"     : "Email Address",
      "phone"     : "Phone Number",
      "submit"    : "Submit"
    },
    "chinese": {
      "language"  : "华语",
      "select"    : "选择语言",
      "explain"   : "说明您的问题",
      "files"     : "上传文件",
      "email"     : "电子邮件地址",
      "phone"     : "电话号码",
      "submit"    : "提交"
    },
    "malay": {
      "language"  : "Bahasa Melayu",
      "select"    : "Pilih bahasa",
      "explain"   : "Jelaskan Masalah Anda",
      "files"     : "Unggah Dokumen Anda",
      "email"     : "Alamat email",
      "phone"     : "Nomor telepon",
      "submit"    : "Menyerahkan"
    },
    "tamil": {
      "language"  : "தமிழ்",
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
  console.log(language);
}
