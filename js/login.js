const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".modal2");
const modal3 = document.querySelector(".modal3");
const btn_open_popup1 = document.querySelector(".btn_open_popup1");
const btn_open_popup2 = document.querySelector(".btn_open_popup2");
const id_input = document.getElementById("id_input");
const pwd_input = document.getElementById("pwd_input");
const loginbtn = document.getElementById("loginbtn");
const checkBox = document.getElementById("checkBox");

const nesschk1 = document.getElementById("nesschk1");
const nesschk2 = document.getElementById("nesschk2");
const nesschk3 = document.getElementById("nesschk3");
const optchk1 = document.getElementById("optchk1");
const optchk2 = document.getElementById("optchk2");
const optchk3 = document.getElementById("optchk3");
const terms_condi = document.getElementById("terms_condi");

const emailFront = document.getElementById("emailFront");
const emailBack = document.getElementById("emailBack");

const RptChkBtn = document.querySelector("#RptChkBtn");
const idJoin = document.getElementById("idJoin");
const pwdJoin = document.getElementById("pwdJoin");
const searchAddr = document.getElementById("searchAddr");
const phoneJoin = document.getElementById("phoneJoin");
const confirmBtn = document.getElementById("confirmBtn");

//약관 모달창 닫아주기 버튼
const leaveIcon = document.getElementsByTagName("i")[0];
const leaveIcon2 = document.getElementsByTagName("i")[1];
const leaveModal = document.getElementById("leaveModal");
const leaveModal2 = document.getElementById("leaveModal2");

const mapShow = document.getElementById("mapShow");
const postNum = document.getElementById("postNum"); //우편번호
const addr = document.getElementById("addr"); //주소
const addrAll = document.getElementById("addrAll"); //상세주소
//아이디 비워주기//비밀번호 비워주기
function clearIdPwd() {
  id_input.value = "";
  id_input.innerHTML = id_input.value;
  pwd_input.value = "";
  pwd_input.innerHTML = pwd_input.value;
}
//비밀번호 비워주기
function clearPwd() {
  pwd_input.value = "";
  pwd_input.innerHTML = pwd_input.value;
}

//로그인 버튼 모달창 띄우기
btn_open_popup1.addEventListener("click", () => {
  modal.classList.toggle("show"); //false로 만들어주기
  //매번 모달창 띄울때마다 아이디 비번 자리 비워주기
  clearPwd();
  if (checkBox.checked == true) {
    //아이디저장이 체크돼있다면
  } else {
    clearIdPwd();
  }

  if (loginbtn == true) {
    //로그인버튼을 눌렀을때 로그인 상태라면 로그아웃으로 버튼 표기
    document.getElementById("login").innerHTML = "로그아웃";
  } else {
    document.getElementById("login").innerHTML = "로그인";
  }
  //클래스중에서 show가 있다면 강제로 떼버리고 false리턴
  //show가 없다면 더해주고 true리턴
  if (modal.classList.contains("show")) {
    id_input.innerHTML = id_input.value;
    if (checkBox.checked == true) {
      //만약체크가 되있다면 그대로(아이디저장)
    } else {
      clearIdPwd(); //false라면 둘다 비워주기
    }
    //모달창 on상태
    //show가 없다면 더해주고 true리턴
    body.style.overflow = "hidden"; //body overflow hidden으로 스크롤 못하게
  }
});
//로그인 화면을 누르면
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    //만약 클릭이벤트가 일어나는게 modal이라면
    //스크롤 못하게 막기
    //모달창이 활성화됐다면
    modal.classList.toggle("show"); //없다면 show붙이고 true , 있다면 떼고 false
    if (!modal.classList.contains("show")) {
      body.style.overflow = "auto"; //모달창 off
    }
  }
});
//약관동의 띄워주기
modal2.addEventListener("click", (event) => {
  if (event.target === modal2) {
    modal2.classList.toggle("show");
    if (!modal2.classList.contains("show")) {
      body.style.overflow = "auto";
    }
  }
});

//주소검색버튼 클릭할 떄 모달창 띄워주기
searchAddr.addEventListener("click", () => {
  modal3.classList.toggle("show");
  //주소검색 모달창

  function modalSearchLocation() {
    new daum.Postcode({
      oncomplete: function (data) {
        var addr2 = ""; //도로명 or지번 담을 변수
        if (data.userSelectedType === "R") {
          //도로명주소 선택
          addr2 = data.roadAddress;
        } else {
          //지번주소
          addr2 = data.jibunAddress;
        }

        postNum.value = data.zonecode; //우편번호 담기
        addr.value = addr2; //도로명, 지번 담기
        //다담았다면 모달창 닫아주기
        modal3.classList.toggle("show");
        //상세 주소 focus
        addrAll.focus();
      },
      onresize: function (size) {
        mapShow.style.height = size.height + "px";
      },
      width: "100%",
      height: "100%",
    }).embed(mapShow);
    mapShow.style.display = "block";
  }
  modalSearchLocation();
  if (!modal3.classList.contains("show")) {
    body.style.overflow = "auto";
  }
});

//X 버튼 클릭하면 나가기 기능 (이용약관)
leaveModal.addEventListener("click", () => {
  modal2.classList.toggle("show");
  if (!modal2.classList.contains("show")) {
    body.style.overflow = "auto";
  }
});

//X 버튼 클릭하면 나가기 기능 (주소검색)
leaveModal2.addEventListener("click", () => {
  modal3.classList.toggle("show");

  if (!modal3.classList.contains("show")) {
    body.style.overflow = "auto";
  }
});
//버튼 mouseover하면 색 바꾸기, mouseleave하면 색 다시 돌려놓기
leaveModal.addEventListener("mouseover", () => {
  leaveIcon.style.color = "#e48c32";
});
leaveModal.addEventListener("mouseleave", () => {
  leaveIcon.style.color = "#7f3811";
});
leaveModal2.addEventListener("mouseover", () => {
  leaveIcon2.style.color = "#e48c32";
});
leaveModal2.addEventListener("mouseleave", () => {
  leaveIcon2.style.color = "#7f3811";
});

//로그인 시도할 때 발생 이벤트
loginbtn.addEventListener("click", () => {
  if (id_input.value == "") {
    //아이디 입력 안했을 때
    alert("아이디를 입력해주세요");
    id_input.focus();
    document.getElementById("login").innerHTML = "로그인";
    return false;
  } else {
    if (pwd_input.value == "") {
      //비번 입력 안했을 떄
      alert("비밀번호를 입력해주세요");
      pwd_input.focus();
      document.getElementById("login").innerHTML = "로그인";
      return false;
    } else if (id_input.value != "admin" || pwd_input.value != "1234") {
      alert("아이디와 비밀번호가 일치하지 않습니다."); //임의 아이디만 가능하게 만들어줌
    } else if (id_input.value == "admin" && pwd_input.value == "1234") {
      alert(`${id_input.value}님 안녕하세요.`); //실제 데이터가 없기때문에 임의로 아이디를 만들어줌
      document.getElementById("login").innerHTML = "로그아웃";

      modal.classList.toggle("show"); //로그아웃하면 모달창 자동 닫히기
      return true;
    }
  }
});
//아이디 저장 기능
checkBox.addEventListener("click", () => {
  if (checkBox.checked === true) {
    // 아이디 저장은 로그인 성공했으면 가능하도록
    console.log("아이디 저장");
    id_input.innerHTML = id_input.value; //입력값을 html에 유지
    console.log(id_input.value);
  } else {
    console.log("아이디 저장 안함");
    clearIdPwd(); //html에 모두 클리어
  }
});
//필수 약관 모달창으로 띄우기
nesschk1.addEventListener("click", () => {
  if (nesschk1.checked === true) {
    console.log("동의");
    modal2.classList.toggle("show");
    terms_condi.innerHTML =
      "제1조(목적) 이 약관은 회사가 온라인으로 제공하는 디지털콘텐츠(이하 '콘텐츠'라고 한다) 및 제반서비스의 이용과 관련하여 회사와 이용자와의 권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다. 제3조(신원정보 등의 제공) '회사'는 이 약관의 내용, 상호, 대표자 성명, 영업소 소재지 주소(소비자의 불만을 처리할 수 있는 곳의 주소를 포함), 전화번호, 모사전송번호, 전자우편주소, 사업자등록번호, 통신판매업 신고번호 및 개인정보관리책임자 등을 이용자가 쉽게 알 수 있도록 온라인 서비스초기화면에 게시합니다. 다만, 약관은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.";
  }
});
nesschk2.addEventListener("click", () => {
  if (nesschk2.checked === true) {
    console.log("동의");
    modal2.classList.toggle("show");
    terms_condi.innerHTML =
      "제7조(회원가입) ① 회원가입은 '이용자'가 약관의 내용에 대하여 동의를 하고 회원가입신청을 한 후 '회사'가 이러한 신청에 대하여 승낙함으로써 체결됩니다. ② 회원가입신청서에는 다음 사항을 기재해야 합니다. 1호 내지 3호의 사항은 필수사항이며, 그 외의 사항은 선택사항입니다. 1. '회원'의 성명과 주민등록번호 또는 인터넷상 개인식별번호 2. '아이디'와 '비밀번호' 3. 전자우편주소  4. 이용하려는 '콘텐츠'의 종류 5. 기타 '회사'가 필요하다고 인정하는 사항 ③ '회사'는 상기 '이용자'의 신청에 대하여 회원가입을 승낙함을 원칙으로 합니다. 다만, '회사'는 다음 각 호에 해당하는 신청에 대하여는 승낙을 하지 않을 수 있습니다. 1. 가입신청자가 이 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우       2. 실명이 아니거나 타인의 명의를 이용한 경우 3. 허위의 정보를 기재하거나, 회사가 제시하는 내용을 기재하지 않은 경우 4. 이용자의 귀책사유로 인하여 승인이 불가능하거나 기타 규정한 제반 사항을 위반하며 신청하는 경우 ④ '회사'는 서비스 관련 설비의 여유가 없거나, 기술상 또는 업무상 문제가 있는 경우에는 승낙을 유보할 수 있습니다. ";
  }
});
nesschk3.addEventListener("click", () => {
  if (nesschk3.checked === true) {
    console.log("동의");
    modal2.classList.toggle("show");
    terms_condi.innerHTML =
      " 제29조(회사의 계약해제·해지의 효과) '이용자'의 귀책사유에 따른 이용계약의 해제·해지의 효과는 제27조를 준용합니다. 다만, '회사'는 '이용자'에 대하여 계약해제·해지의 의사표시를 한 날로부터 7영업일 이내에 대금의 결제와 동일한 방법으로 이를 환급합니다. 제30조(과오금)   ① '회사'는 과오금이 발생한 경우 이용대금의 결제와 동일한 방법으로 과오금 전액을 환불하여야 합니다. 다만, 동일한 방법으로 환불이 불가능할 때는 이를 사전에 고지합니다.② '회사'의 책임 있는 사유로 과오금이 발생한 경우 '회사'는 계약비용, 수수료 등에 관계없이 과오금 전액을 환불합니다. 다만, '이용자'의 책임 있는 사유로 과오금이 발생한 경우, '회사'가 과오금을 환불하는 데 소요되는 비용은 합리적인 범위 내에서 '이용자'가 부담하여야 합니다. ③ 회사는 '이용자'가 주장하는 과오금에 대해 환불을 거부할 경우에 정당하게 이용대금이 부과되었음을 입증할 책임을 집니다. ④ '회사는 과오금의 환불절차를 디지털콘텐츠이용자보호지침에 따라 처리합니다.";
  }
});
//마케팅 수신 동의 모달창
optchk1.addEventListener("click", () => {
  if (optchk1.checked === true) {
    console.log("동의");
    modal2.classList.toggle("show");
    terms_condi.innerHTML =
      " 제16조(수신확인통지·이용신청 변경 및 취소)   ① '회사'는 '이용자'의 이용신청이 있는 경우 '이용자'에게 수신확인통지를 합니다.  ② 수신확인통지를 받은 '이용자'는 의사표시의 불일치 등이 있는 경우에는 수신확인통지를 받은 후 즉시 이용신청 변경 및 취소를 요청할 수 있고, '회사'는 서비스제공 전에 '이용자'의 요청이 있는 경우에는 지체 없이 그 요청에 따라 처리하여야 합니다. 다만, 이미 대금을 지불한 경우에는 청약철회 등에 관한 제27조의 규정에 따릅니다.제22조(정보의 제공 및 광고의 게재)   ① '회사'는 '이용자'가 콘텐츠이용 중 필요하다고 인정되는 다양한 정보를 공지사항이나 전자우편 등의 방법으로 '회원'에게 제공할 수 있습니다. 다만, '회원'은 언제든지 전자우편 등을 통하여 수신 거절을 할 수 있습니다. ② 제1항의 정보를 전화 및 모사전송기기에 의하여 전송하려고 하는 경우에는 '회원'의 사전 동의를 받아서 전송합니다.  ③ '회사'는 '콘텐츠'서비스 제공과 관련하여 콘텐츠화면, 홈페이지, 전자우편 등에 광고를 게재할 수 있습니다. 광고가 게재된 전자우편 등을 수신한 '회원'은 수신거절을 '회사'에게 할 수 있습니다.  ";
  }
});
//이메일 수신 동의하면 이메일 적어야 수신받을 것 alert
optchk3.addEventListener("click", () => {
  if (optchk3.checked === true) {
    if (emailFront.value == "" || emailBack.value == "") {
      alert("이메일 수신을 완료하시려면 이메일을 입력해주세요.");
      if (emailFront.value == "") {
        emailFront.focus();
      } else if (emailBack.value == "") {
        emailBack.focus();
      } else {
        emailFront.focus();
        emailBack.focus();
      }
    }
  }
});

//중복 아이디 확인
RptChkBtn.addEventListener("click", () => {
  //   console.log(idJoin.value);
  if (idJoin.value == "admin") {
    alert("이미 가입한 아이디 입니다.");
  } else alert("사용 가능한 아이디 입니다.");
});

//회원가입하기
confirmBtn.addEventListener("click", () => {
  //필수 정보 공백이면 alert
  //이름 공백
  if (nameMember.value == "") {
    alert("이름을 입력하세요.");
    nameMember.style.color = "rgb(162, 27, 27)";
  }
  //이메일 공백 앞,뒤
  if (emailFront.value == "" || emailBack.value == "") {
    alert("이메일을 입력하세요.");
    emailFront.style.color = "rgb(162, 27, 27)";
    emailBack.style.color = "rgb(162, 27, 27)";
  }
  //정규표현식 이메일 뒷자리 형식 .영문, 3-4자리 .으로 이어진 형식
  var emailBackReg = /[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/g;
  if (!emailBackReg.test(emailBack)) {
    alert("이메일형식이 올바르지 않습니다.");
    emailBack.focus();
  }
  //필수 약관 비동의면 alert + 붉은 폰트로 강조
  if (nesschk1.checked === false) {
    alert("이용약관에 동의해 주십시오.");
    document.getElementsByClassName("must")[0].style.color = "rgb(162, 27, 27)";
  } else {
    document.getElementsByClassName("must")[0].style.color = "rgb(95, 50, 50)";
  }
  if (nesschk2.checked === false) {
    alert("개인정보 수집 및 이용 동의 약관에 동의해 주십시오.");
    document.getElementsByClassName("must")[1].style.color = "rgb(162, 27, 27)";
  } else {
    document.getElementsByClassName("must")[1].style.color = "rgb(95, 50, 50)";
  }
  if (nesschk3.checked === false) {
    alert("환불약관에 동의해 주십시오.");
    document.getElementsByClassName("must")[2].style.color = "rgb(162, 27, 27)";
  } else {
    document.getElementsByClassName("must")[2].style.color = "rgb(95, 50, 50)";
  }
  //부가정보는 무관
  const dobYr = document.getElementsByClassName("dob")[0];
  const dobMth = document.getElementsByClassName("dob")[1];
  const dobDate = document.getElementsByClassName("dob")[2];
  //하지만 생년월일이 유효하지않음 값이면 alert
  var today = new Date();
  if (dobYr.value != "" && dobYr.value >= today.getFullYear()) {
    alert("출생 년도를 잘못입력하셨습니다.");
    dobYr.focus();
  }
  if (dobMth.value != "" && (dobMth.value > 13 || dobMth < 1)) {
    alert("출생 월을 잘못입력하셨습니다.");
    dobMth.focus();
  }
  if (dobDate.value != "" && (dobDate.value > 31 || dobDate < 1)) {
    alert("출생일을 잘못입력하셨습니다.");
    dobDate.focus();
  }

  //정규표현식이 요구된 거는 통과하면 가입가능

  //아이디 정규표현식
  var idReg = /^[a-z]+[a-z0-9]{4,11}$/g;
  //a~z까지 영문자로 반드시 시작하며, 영문 숫자 조합으로 5 ~12자리
  //틀리면 아래에 문장 삽입, focus 해주기

  if (!idReg.test(idJoin.value)) {
    alert(
      "아이디는 영문으로 시작하여, 영문숫자포함 5~12자로 정해주시길 바랍니다."
    );
    document.getElementById("qualify1").innerHTML =
      "영문으로 시작하여, 영문숫자포함 5~12자";
    idJoin.focus();
    idJoin.innerHTML = ""; //비워주기
  }
  //비밀번호 정규표현식
  //영문 대소문자 특수문자 !@#%&? 하나이상 조합 8 ~15자리

  //비워주기======================
  function clearAllPwd() {
    pwdJoin.value = "";
    pwdJoin.innerHTML = pwdJoin.value;
    repeatPwd.value = "";
    repeatPwd.innerHTML = repeatPwd.value;
  }

  var pwdReg =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#%&?])[A-Za-z\d@$!%*#?&]{8,16}$/g;
  if (!pwdReg.test(pwdJoin.value)) {
    alert(
      "비밀번호는 영문 대소문자,숫자,특수문자[!,@,#,%,&,?] 조합 8~15자리로 정해주시길 바랍니다."
    );
    document.getElementById("qualify2").style.color = "rgb(162, 27, 27)";
    clearAllPwd();
  } else {
    document.getElementById("qualify2").style.color = "rgb(95, 50, 50)";
  }
  pwdJoin.focus();

  //비밀번호 확인 일치
  let repeatPwd = document.getElementById("repeatPwd");
  if (pwdJoin.value != repeatPwd.value) {
    console.log(repeatPwd.value);
    console.log(pwdJoin.value);
    alert("비밀번호와 비밀번호 확인이 불일치합니다.");
    clearAllPwd();
    repeatPwd.focus();
  } else {
    console.log("비번 확인 동일");
  }
  //   pwdJoin.value = "";
  //   pwdJoin.innerHTML = pwdJoin.value;
  //전화번호 정규표현식
  //01로시작하여 6~9까지 수 - 4자리 수 - 4자리 수
  var phoneReg = /^01(?:0|1|[6-9])-(\d{4})-\d{4}$/g;
  if (!phoneReg.test(phoneJoin.value)) {
    alert("휴대폰번호 형식은 01X-XXXX-XXXX형식으로 입력해주십시오.");
    phoneJoin.value = "";
    phoneJoin.innerHTML = phoneJoin.value;
    phoneJoin.focus();
  } else {
    alert(`${idJoin.value}님 환영합니다. 회원가입되었습니다.`);
    if (confirm("로그인하시겠습니까?")) {
      document.getElementById("login").innerHTML = "로그아웃";
    }
  }
});
