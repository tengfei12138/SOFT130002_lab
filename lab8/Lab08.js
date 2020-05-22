
/*请在该区域内声明或者获取所要使用的全局变量*/
/********************************************begin************************************/
window.onload=function () {
let pre = document.getElementsByClassName("arrow arrow_left")[0];
    let next = document.getElementsByClassName("arrow arrow_right")[0];
    let wrap = document.getElementsByClassName("wrap")[0];
    let buttons = document.getElementsByClassName("buttons")[0].getElementsByTagName("span");
    let length = 5;
    let index = 1;
    let interval = 2000;
    let animated = false;
    let timer;
/*Global Variable Area */

/*********************************************end*************************************/



/* 任务一
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击左箭头prev和右箭头next的时候，可以切换到前一张图片和下一张图片。（左右箭头为html中的a标签）
 * ②每切换一张图片，右下角的数字标记对应变化。
 *      如：一开始，第1张图片显示出来，右下角的1-5的数值中，数值1位红色，2-4为绿色，表示当前显示第1张图片。
 *      点击next箭头，图片切换到第2张，同时，右下角红色数值从1切换为2，数值1,3,4,5为绿色。
 * ③当当前图片为第1张时，点击prev箭头，切换到第5张图片，且数值5置为红色。
 * 当当前图片为第5张时，点击next箭头，切换到第1张图片，且数值1置为红色。
 * ④切换图片的过程不要求，可直接切换，也可动画切换，但要求保证一定的切换动画合理性，不能出去明显的衔接不当。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
    function Button() {
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].className === "on") {
                buttons[i].className = "";
            }
        }
        buttons[index - 1].className = "on";
    }

    function animate(move) {
        if (move === 0) {
            return;
        }
        animated = true;
        let newLeft = parseInt(wrap.style.left) + move;
        let time = 300;
        let interval = 10;
        let speed = move / (time / interval);

        function go() {
            if ((speed > 0 && newLeft > parseInt(wrap.style.left)) || (speed < 0 && newLeft < parseInt(wrap.style.left))) {
                wrap.style.left = parseInt(wrap.style.left) + move + 'px';
                setTimeout(go, interval);
            } else {
                wrap.style.left = newLeft + 'px';
                if (newLeft > -200) {
                    wrap.style.left = -600 * length + 'px';
                }
                if (newLeft < (-600 * length)) {
                    wrap.style.left = '-600px';
                }
                animated = false;
            }
        }

        go();
    }

    next.onclick = function () {
        if (index === 5) {
            index = 1;
        } else index += 1;
        Button();
        if (!animated) {
            animate(-600);
        }
    }
    pre.onclick = function () {
        if (index === 1) {
            index = 5;
        } else index -= 1;
        Button();
        if (!animated) {
            animate(600);
        }
    }

    /*********************************************end*************************************/


    /* 任务二
     * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
     * 效果要求：
     * ①轮播可以自动播放，切换图片间隔为2s，每一次切换的效果与点击next箭头的效果一致。
     * ②当鼠标移入轮播区域内时，停止自动播放。
     * ③当鼠标不在轮播区域内时，开始自动播放。
     * ④页面刚加载完成时，如果鼠标不在轮播区域内，自动开始自动播放；否则，等待直到鼠标移出轮播区域，再进行自动播放。
     * ⑤本部分只能使用原生JS。
     */
    /********************************************begin************************************/

    /*Code Here*/
    function auto() {
        timer = setInterval(function () {
            next.onclick()
        }, interval);
    }

    function stop() {
        clearInterval(timer);
    }

    var mouse = document.getElementsByClassName("container")[0];
    mouse.onmouseover = stop;
    mouse.onmouseout = auto;

    /*********************************************end*************************************/


    /* 任务三
     * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
     * 效果要求：
     * ①点击右下角的任意一个数值，能够切换到对应图片，且相应数值变为红色。
     * ②进行①操作过后，是否自动播放，其规则与上一个任务一致。
     * ③本部分只能使用原生JS。
     */
    /********************************************begin************************************/

    /*Code Here*/
    for (let j=0;j<buttons.length;j++){
        buttons[j].onclick=function () {
           if (animated){
               return false;
           }
           if (this.className==="on"){
               return false;
           }
           let newIndex=j+1;
           let move=-600*(newIndex-index);
           animate(move);
           index=newIndex;
           Button();
        }
    }
}
/*********************************************end*************************************/


/*任务四
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击某一非表头的单元格，可以编辑其内容，编辑完毕后点击其他部位，可以在界面上显示修改后的内容。
 * ②点击单元格后，光标自动定位于单元格的首个字符或者汉字前。
 * ③本部分可以使用jQuery，也可以使用原生JS。
 */
/********************************************begin************************************/
$(function () {
    $("td").dblclick(function () {
           var tdval=$(this).text();
           var oInput=$("<input type='text'  value='"+tdval+"'/>");
           $(this).html(oInput);
           oInput.focus();
           oInput.blur(function () {
                   oInput.parent().html(oInput.val());
           });
    });

});
/*Code Here*/

/*********************************************end*************************************/