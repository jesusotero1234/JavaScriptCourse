const ps = document.querySelectorAll('p')
ps.forEach(function(p) {
    if (p.textContent.includes('p1')) { debugger
        p.remove()}
   
//else return p
});
