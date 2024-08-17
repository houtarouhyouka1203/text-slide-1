

var pageList = document.querySelectorAll(".page");


var objectTarget = {
    before: 3,
    main: 0,
    after: 1,
}



function navigatePage (method="forward") {
    var n = 4; // temp values
    function killDefault() {
        pageList.forEach((e)=>{
            e.classList.remove("page-before--def", "page-main--def", "page-after--def", "page-hide");
        });
    }
    function calculate(method = "forward") {
        if (method == "forward") {
            objectTarget.before = (objectTarget.before < 3) ? ++objectTarget.before : 0 ;
            objectTarget.main = (objectTarget.main < 3) ? ++objectTarget.main : 0 ;
            objectTarget.after = (objectTarget.after < 3) ? ++objectTarget.after : 0 ;
        } else {
            objectTarget.before = (objectTarget.before > 0) ? --objectTarget.before : n-1 ;
            objectTarget.main = (objectTarget.main > 0)  ? --objectTarget.main : n-1 ;
            objectTarget.after = (objectTarget.after>0)  ? --objectTarget.after : n-1 ;
        }
    }
    function hideRest() {
        pageList.forEach((e)=>{
            e.classList.remove("page-before-f", "page-main-f", "page-after-f");
            e.classList.add("page-hide");
        });
    }
    function indicateTrio() {
        var b = objectTarget.before,m = objectTarget.main,a = objectTarget.after;
        pageList[b].classList.remove('page-hide');
        pageList[m].classList.remove('page-hide');
        pageList[a].classList.remove('page-hide');
        if (method=="forward") {
            pageList[b].classList.add('page-before-f');
            pageList[m].classList.add('page-main-f');
            pageList[a].classList.add('page-after-f');
        } else {
            pageList[b].classList.add('page-before-b');
            pageList[m].classList.add('page-main-b');
            pageList[a].classList.add('page-after-b');
        }

        
    }

    killDefault();
    calculate(method);
    hideRest();
    indicateTrio();
}

setInterval(navigatePage,3000);

