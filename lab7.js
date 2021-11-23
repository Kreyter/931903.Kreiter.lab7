const back = document.querySelector('.back');

bt1.onclick = function () {
    var k = document.getElementById('numb').value
    for (var i = 0; i <  k; i++) {
        var s = document.createElement('div')
        s.classList.add('square')
        back.appendChild(s)
        var width = Math.floor(Math.random() * 100) + 1
        var height = Math.floor(Math.random() * 100) + 1
        s.style.width = width + 'px'
        s.style.height = s.style.width
        var top = Math.floor(Math.random() * 500) + 1
        var left = Math.floor(Math.random() * 600) + 1
        s.style.top = top + 'px'
        s.style.left = left + 'px'
        s.setAttribute('onclick', 'changeColor(this)');
        s.setAttribute('ondblclick', 'deleteObject(this)');
    }
    
}
bt2.onclick = function () {
    var k = document.getElementById('numb').value
    for (var i = 0; i < k; i++) {
        var t = document.createElement('div')
        t.classList.add('triangle')
        back.appendChild(t)
        var top = Math.floor(Math.random() * 500) + 1
        var left = Math.floor(Math.random() * 600) + 1
        t.style.top = top + 'px'
        t.style.left = left + 'px'
        t.setAttribute('onclick', 'changeColorTriangle(this)');
        t.setAttribute('ondblclick', 'deleteObject(this)');
    }
    
}
bt3.onclick = function () {
    var k = document.getElementById('numb').value
    for (var i = 0; i < k; i++) {
        var c = document.createElement('div')
        c.classList.add('circle')
        back.appendChild(c)
        var width = Math.floor(Math.random() * 100) + 1
        var height = Math.floor(Math.random() * 100) + 1
        c.style.width = width + 'px'
        c.style.height = c.style.width
        var top = Math.floor(Math.random() * 500) + 1
        var left = Math.floor(Math.random() * 600) + 1
        c.style.top = top + 'px'
        c.style.left = left + 'px'
        c.setAttribute('onclick', 'changeColor(this)');
        c.setAttribute('ondblclick', 'deleteObject(this)');
    }

}
function changeColor (change) {
    change.style.background = "yellow"
}
function changeColorTriangle(tr) {
    tr.style.borderBottom = "100px solid yellow"
}
function deleteObject (del){
    del.remove();
}