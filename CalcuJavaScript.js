
window.onload = function() {
    const op = document.querySelector("#op");
    const buttons = document.querySelectorAll(".num");
    const operacoes = document.querySelectorAll('.b-op');
    const r = document.querySelector('#r');
    var memoria = 0;
    document.querySelector("#limpar").addEventListener('click',function(){
        op.value = "";
        r.value = "";
    });

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if(!(op.value == "" && button.textContent=='0'))
            op.value = String(op.value) + String(button.textContent);
        });
    });

    operacoes.forEach(opera => {
        opera.addEventListener('click', function() {
            op.value = op.value + opera.textContent;
        });
    });


    document.querySelector("#calcular").addEventListener('click',function(){
        formula = op.value.split('');
        if(formula[formula.length - 1] == '+' ||
        formula[formula.length - 1] == '-' ||
        formula[formula.length - 1] == '*' ||
        formula[formula.length - 1] == '/' ||
        formula[0] == '+' ||
        formula[0] == '-' ||
        formula[0] == '*' ||
        formula[0] == '/' ){
        op.value = "Erro";
        setTimeout(function(){
            op.value="";
        },1400);
        r.value = "";   
        }
        else{
            try{
                r.value = eval(op.value);
            }catch(e){
                console.log(e);
                op.value = "Erro";
                setTimeout(function(){
                    op.value="";
                },1400);
            }
           
        }
    });

    document.getElementById("memoriaG").addEventListener('click',function(){
        memoria = r.value;
        document.getElementById("memoria-box-filho").textContent = memoria;
    });

    document.getElementById("memoriaR").addEventListener('click',function(){
        op.value+=memoria;
        memoria = "";
        document.getElementById("memoria-box-filho").textContent = "";
    });
}