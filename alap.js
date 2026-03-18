
function rendeles()
{
let etelek=parseInt(document.getElementById('etelek').value)
if(document.getElementById('hazhoz').checked)
    etelek+=500
document.getElementById('kiiras').innerHTML='fizetendő: '+etelek +' ft'
}
