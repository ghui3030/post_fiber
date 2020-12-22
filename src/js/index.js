$(function() {

    const targetElement = document.querySelector('#pop-wrap');

    // scroll 

    $(window).scroll(function() {
        var sc = $(this).scrollTop();
        var scrollH1 = $('.event01-1').offset().top - 100;
        var scrollH2 = $('.event02-1').offset().top - 80;
        var scrollH3 = $('.event03-1').offset().top - 110;
        var w = $(window).width();

        function gnbClear() {
            $(".evt01, .evt02, .evt03").removeClass("gnbOn");
        }
        if ($(document).scrollTop() > $('header h1').height()) {
            $("nav").addClass("fixed");
            $(".gnb2").addClass("on");
            $(".main-kv").addClass("gap");
        } else {
            $("nav").removeClass("fixed");
            $(".gnb2").removeClass("on");
            $(".main-kv").removeClass("gap");
        }

        if ($(document).scrollTop() < scrollH1) {
            gnbClear();
        }

        if ($(document).scrollTop() > scrollH1) {
            gnbClear();
            $(".evt01").addClass("gnbOn");

        }

        if ($(document).scrollTop() > scrollH2) {
            gnbClear();
            $(".evt02").addClass("gnbOn")
        }

        if ($(document).scrollTop() > scrollH3) {
            gnbClear();
            $(".evt03").addClass("gnbOn");
        }

    });


    //nav

    $('.evt01').on('click', function() {
        var w = $(window).width();
        var navH = $(".gnb").height();


        if (w < 719) {
            $('html, body').animate({
                scrollTop: $(".event01-1").offset().top - navH
            }, 500);
        } else {
            $('html, body').animate({
                scrollTop: $(".event01-1").offset().top - 100
            }, 500);
            $("header .gnb").addClass("nav1");
            $("header .gnb").removeClass("nav2");
            $("header .gnb").removeClass("nav3");
        }
    });

    $('.evt02').on('click', function() {
        $('html, body').animate({
            scrollTop: $(".event02-1").offset().top - 35
        }, 500);

        $("header .gnb").addClass("nav2");
        $("header .gnb").removeClass("nav1");
    });

    $('.evt03').on('click', function() {
        var w = $(window).width();
        var navH = $(".gnb").height();

        if (w < 719) {
            $('html, body').animate({
                scrollTop: $(".event03-1").offset().top - navH
            }, 500);
        } else {
            $('html, body').animate({
                scrollTop: $(".event03-1").offset().top - 100
            }, 500);
        }

    });





    //alert-info : phone

    $(".phone-number-check, .phone-number-check0").on('keydown', function(e) {
        // 숫자만 입력받기
        var trans_num = $(this).val().replace(/-/gi, '');
        var k = e.keyCode;

        if (trans_num.length >= 11 && ((k >= 48 && k <= 126) || (k >= 12592 && k <= 12687 || k == 32 || k == 229 || (k >= 45032 && k <= 55203)))) {
            e.preventDefault();
        }
    }).on('blur', function() { // 포커스를 잃었을때 실행합니다.
        if ($(this).val() == '') return;

        // 기존 번호에서 - 를 삭제합니다.
        var trans_num = $(this).val().replace(/-/gi, '');

        // 입력값이 있을때만 실행합니다.
        if (trans_num != null && trans_num != '') {
            // 총 핸드폰 자리수는 11글자이거나, 10자여야 합니다.
            if (trans_num.length == 11 || trans_num.length == 10) {
                // 유효성 체크
                var regExp_ctn = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})([0-9]{3,4})([0-9]{4})$/;
                if (regExp_ctn.test(trans_num)) {
                    // 유효성 체크에 성공하면 하이픈을 넣고 값을 바꿔줍니다.
                    trans_num = trans_num.replace(/^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?([0-9]{3,4})-?([0-9]{4})$/, "$1-$2-$3");
                    $(this).val(trans_num);
                } else {
                    alert("연락처를 확인해주세요");
                    $(this).val("");
                    $(this).focus();
                }
            } else {
                alert("연락처를 확인해주세요");
                $(this).val("");
                $(this).focus();
            }
        } else {
            alert("연락처를 확인해주세요");
        }
    });




    // main 

    $(".main-kv .add .open").click(function() {
        $("#pop-wrap").addClass("on");
        $("body").addClass("over");
        $(".pop-kv").addClass("on");
    });

    $(".main-kv .close").click(function() {
        $(".main-kv .add").hide();
        $("body").removeClass("over");
    });

    $(".exit").click(function() {
        $("#pop-wrap").removeClass("on");
        $(".pop-kv").removeClass("on");
        $("body").removeClass("over");
    });




    //close
    $(".exit").click(function() {
        $(".pop1, .pop2, .pop3, .pop-info, .pop-last, .win-ball-1").removeClass("on");
        $(".input-box input").val('');
        bodyScrollLock.enableBodyScroll(targetElement);

    });


    // event01

    $(".event01-1 .join").click(function() {
        $("#pop-wrap").addClass("on");
        $("body").addClass("over");
        $(".e1-pop .pop-info").addClass("on");
        bodyScrollLock.disableBodyScroll(targetElement);
    });

    $(".e1-pop .pop2 .join2").click(function() {
        $(".e1-pop .pop-info").addClass("on");
        $(".e1-pop .pop2").removeClass("on");

    });

    $(".e1-pop .pop-info .okay").click(function() {
        modalCheck1('.e1-pop');
    });

    $(".pop-last .okay").click(function() {
        $(" .pop-last").removeClass("on");
        $("#pop-wrap").removeClass("on");
        $("body").removeClass("over");
        $(".input-box input").val('');
        bodyScrollLock.enableBodyScroll(targetElement);


    });


    // event02
    $(".event02-1 .join").click(function() {
        $("body").addClass("over");
        $("#pop-wrap").addClass("on");
        $(".e2-pop .pop1").addClass("on");
        bodyScrollLock.disableBodyScroll(targetElement);
    });

    $(".e2-pop .pop1 .choice-img").click(function() {
        $(".e2-pop .pop2").addClass("on");
        $(".e2-pop .pop1").removeClass("on");
    });

    $(".e2-pop .re-choice").click(function() {
        $(".e2-pop .pop1").addClass("on");
        $(".e2-pop .pop2").removeClass("on");
    });


    $(".e2-pop .pop2 .okay").click(function() {
        $(".e2-pop .pop-info").addClass("on");
        $(".e2-pop .pop2").removeClass("on");
    });


    $(".e2-pop .pop-info .okay").click(function() {
        modalCheck2('.e2-pop');

    });

    $(".e2-pop .pop-last-pic .okay").click(function() {
        $(".e2-pop .pop-last").removeClass("on");
        $(".input-box input").val('');
    });


    // customer pic 

    $(".ev2-list li").click(function() {
        $(".pop-who").addClass("on");
        $("#pop-wrap").addClass("on");
        $("body").addClass("over");
        bodyScrollLock.disableBodyScroll(targetElement);
    });

    $(".pop-who .okay, .pop-who .exit").click(function() {
        $(".pop-who").removeClass("on");
        $("#pop-wrap").removeClass("on");
        $("body").removeClass("over");
        bodyScrollLock.enableBodyScroll(targetElement);
    });



    // modal-check
    function modalCheck(ele) {
        if ($(ele + " .name-check").val() == '') {
            alert("정보를 입력해주세요!");
            return false;
        } else if ($(ele + " .phone-number-check").val() == '') {
            alert("정보를 입력해주세요!");
            return false;

        } else if (!$(ele + " .checkbox input").is(":checked")) {
            alert("개인 정보 취급/이용 약관에 동의해주세요");
            return false;

        } else {
            alert("참여가 완료되었습니다");
            $(ele + " .pop-last").addClass("on");
            $(ele + " .pop-info").removeClass("on");
        }
    }

    function modalCheck1(ele) {
        if ($(ele + " .name-check").val() == '') {
            alert("정보를 입력해주세요!");
            return false;
        } else if ($(ele + " .address-check:nth-child(3)").val() == '') {
            alert("정보를 입력해주세요!");
            return false;

        } else if (!$(ele + " .checkbox input").is(":checked")) {
            alert("개인 정보 취급/이용 약관에 동의해주세요");
            return false;

        } else {
            alert("참여가 완료되었습니다");
            $(ele + " .pop-last").addClass("on");
            $(ele + " .pop-info").removeClass("on");
        }
    }

    function modalCheck2(ele) {
        if ($(ele + " .name-check").val() == '') {
            alert("정보를 입력해주세요!");
            return false;
        } else if ($(ele + " .phone-number-check").val() == '') {
            alert("정보를 입력해주세요!");
            return false;

        } else if (!$(ele + " .checkbox input").is(":checked")) {
            alert("개인 정보 취급/이용 약관에 동의해주세요");
            return false;

        } else {
            alert("참여가 완료되었습니다");
            $(ele + " .pop-info").removeClass("on");
            $(".input-box input").val('');
            $("#pop-wrap").removeClass("on");
            $(".pop-kv").removeClass("on");
            $("body").removeClass("over");

            $(".pop-last").removeClass("on");
            $(".pop-info").removeClass("on");
            bodyScrollLock.enableBodyScroll(targetElement);

        }
    }


    // event03

    $(".event03-1 .pink-button").click(function() {
        $("body").addClass("over");
        $("#pop-wrap").addClass("on");
        $(".e3-pop .pop1").addClass("on");
        bodyScrollLock.disableBodyScroll(targetElement);
    });

    $(".pink-ball li").click(function() {
        $(this).addClass("ab");


        if ($(".pink-ball li.ab").length == 1) {
            $(".pink-pop1").addClass("on")
            $(".pink-pop2, .pink-pop3").removeClass("on")
        }


        if ($(".pink-ball li.ab").length == 3) {
            $(".pink-pop2, .pink-pop1").removeClass("on")
            $(".pink-pop3").addClass("on")
        }

        if ($(".pink-ball li.ab").length == 2) {
            $(".pink-pop2").addClass("on")
            $(".pink-pop3, .pink-pop1").removeClass("on")

        }



    });


    $(".pink-pop1, .pink-pop2").click(function() {
        $(this).removeClass("on");
    });

    $(".pink-pop3").click(function() {

        $(".e3-pop .pop1").removeClass("on");
        $(".e3-pop .pop-info").addClass("on");


    });

    $(".e3-pop .pop-info .okay").click(function() {
        modalCheck('.e3-pop');

    });


    // reset 
    $(".e3-pop .exit, .e3-pop .pop-info .okay").click(function() {
        $(".pink-ball li").removeClass("ab");
        $(".pink-pop1, .pink-pop2, .pink-pop3").removeClass("on");
        $(".input-box input").val('');
        bodyScrollLock.enableBodyScroll(targetElement);

    });
    $(".pop1, .pop2, .pop3, .pop-info, .pop-last, .pop-win").removeClass("on");



    // 해시태그
    function hashtagCopy() {
        var dummy = document.createElement("textarea");
        document.querySelector('.copy-tag').appendChild(dummy);
        dummy.value = '#포스트라이스앤화이버 #식이섬유시리얼 #식이섬유_핑크볼 #핑크볼시리얼';
        dummy.select();
        document.execCommand("copy");
        document.querySelector('.copy-tag').removeChild(dummy);
        alert('해시태그 복사가 완료되었습니다.');
    }
    $(".copy-tag").click(function() {
        hashtagCopy();
    });



    //event- winner
    $(".ev-winner").click(function() {
        $("body").addClass("over");
        $("#pop-wrap").addClass("on");
        $(".win-ball-1").addClass("on");
        bodyScrollLock.disableBodyScroll(targetElement);
    });

    $(".pop-win .okay").click(function() {
        $("body").removeClass("over");
        $("#pop-wrap").removeClass("on");
        $(".win-ball-1").removeClass("on");
        bodyScrollLock.enableBodyScroll(targetElement);
    });

});