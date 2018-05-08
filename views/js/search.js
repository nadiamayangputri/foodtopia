var a = document.getElementById('searchbox');
a.addEventListener('submit',function(e) {
    e.preventDefault();
    var b = document.getElementById('input').value.toLocaleLowerCase();
    window.location.href = '/lookup/'+b;

});
