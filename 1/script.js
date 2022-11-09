const panels = document.querySelectorAll('.panel')
panels.forEach(e =>  {
    e.addEventListener('click', () => {
        console.log(123);
        removeActiveClasses();
        e.classList.add('active');
    })
})

function removeActiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}