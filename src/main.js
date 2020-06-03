let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `
/*你好，我叫林铮
*接下来我整一个太极
*先设置一个外观
*/
#div1{
    width:200px;
    height:200px;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border-radius:50%
}
/*设置圆形的背景*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*设置2个阴阳*/
#div1::after{
    width:100px;
    height:100px;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
    top:0;
    transform:translateX(50%);
    border-radius:50%;
}
#div1::before{
    width:100px;
    height:100px;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,252,252,1) 100%);
    bottom:0;
    transform:translateX(50%);
    border-radius:50%;
}
`;
let string2 = '';
let n = 0;


let step = () => {
    setTimeout(() => {
        if(string[n] === '\n'){
             //如果是回车，就不照搬
            string2 += '<br>'
        }else if(string[n] === ' '){
            string2 += '&nbsp;'
        }else{
            //如果不是回车，就照搬
            string2 += string[n];
        }   
        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n);
        window.scroll(0,9999);
        html.scroll(0,9999);
        if(n < string.length - 1){
            //如果不是最后一个n就继续
            n += 1;
            step();
        }
    },0);
};
step();
