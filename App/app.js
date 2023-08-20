
$('a').click(function(e){
    e.preventDefault();
    $('body, html').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 120
    }, 1000);
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }else{
            entry.target.classList.remove("show")
        }
    })
})



const hiddenElement = document.querySelectorAll(".effect")
hiddenElement.forEach((el) =>observer.observe(el))




















