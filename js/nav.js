// $('.heart').on('click', function() {
//     var $this = $(this),
//     count = $this.attr('data-count');
//     active = $(this).hasClass('active');
//     alert(count);
//     $this.attr('data-count', active ? --count : ++count).toggleClass('active');

// });
    
function openNav() {
    document.getElementById("navmenu").style.width = "100%";
    document.getElementsByClassName('close')[0].style.display = "block"
}

function closeNav() {
    document.getElementById("navmenu").style.width = "0";
    document.getElementsByClassName('close')[0].style.display = "none"
}

function backtop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}