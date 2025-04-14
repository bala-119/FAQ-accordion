const questions = document.querySelectorAll('.question');


questions.forEach(btn=>{
    btn.addEventListener('click',()=>{
        const answer = btn.nextElementSibling;
        const icon=btn.querySelector('.icon');

        document.querySelectorAll('.answer').forEach(a=>{
            if(a !==answer) a.classList.add('hidden');
        });
        document.querySelectorAll('.icon').forEach(i=>{
            if(i !==icon) i.textContent='+';

        });



        //toggle current

        answer.classList.toggle('hidden');
        icon.textContent= answer.classList.contains('hidden') ? '+':'-';

    });
});