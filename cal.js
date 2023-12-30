let string = "";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (l) => { 
        if(l.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string ;
        }
        else if (l.target.innerHTML == 'C'){
            string = ""
            document.querySelector('input').value = string ;
        } 
        else if (l.target.innerHTML == 'DEL'){
            string=string.substring(0,string.length-1);
            document.querySelector('input').value = string ;
        }
        else{
            string = string + l.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})