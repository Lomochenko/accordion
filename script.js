// variables

const q = document.getElementsByClassName('question');

for (let i = 0; i < q.length; i++) {
    q[i].addEventListener('click', function(){
        this.classList.toggle('active');

        let answer = this.nextElementSibling;
        if (answer.style.height === '100px'){
            answer.style.height = 0;
        }
        else{
            answer.style.height = '100px';
        }
    })
    
}
