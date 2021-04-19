// 当前显示区域
var routerView=null;

function onLoad(){
    routerView=document.querySelector('#routerView');
    // 添加onhashCHange事件的处理函数
    // onHashChange();
}

// hashchange使劲按处理函数
function onHashChange(){
    switch(location.hash){
        case '#/home':
            routerView.innerHTML='This is Home';
            break;
        case '#/about':
            routerView.innerHTML='This is About';
            break;
        default:routerView.innerHTML="Welcome";
            break;
    }
}

window.addEventListener('DOMContentLoaded',onLoad);
window.addEventListener('hashchange',onHashChange);
