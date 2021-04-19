window.addEventListener('DOMContentLoaded',onLoad);
window.addEventListener('popstate',onPopState);

var routerView=null;

// 首次进入页面处理函数
function onLoad(){
    routerView = document.querySelector('#routerView')
    onPopState();
}

// popState事件处理函数
function onPopState(){
    switch(location.pathname){
        case '/home':
            routerView.innerHTML='This is Home';return;
        case '/about':
            routerView.innerHTML='This is About';return;

        default:return;
    }
}

var as=document.querySelectorAll("a[href]");
as.forEach((el)=>{
    el.addEventListener('click',e=>{
        e.preventDefault();
        history.pushState(null,'',el.getAttribute('href'));
        onPopState();
    })
})