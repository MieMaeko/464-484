//464
func464();
function func464(){
    let parent = document.querySelector('#parent');
    let arr = [1, 2, 3, 4, 5];

    for (let elem of arr) {
        let p = document.createElement('p');
        p.textContent = elem;
        parent.appendChild(p);
        p.addEventListener('click',()=>{
            p.innerHTML = +p.innerHTML + 1;    
        })
    }
}

//465
func465();
function func465(){
    let arr = [1, 2, 3, 4, 5];
    let ul = document.getElementById('elem');
    for(let elem of arr){
        let li = document.createElement('li');
        li.textContent = elem;
        ul.appendChild(li);
        li.addEventListener('click',function(){
            if(li.textContent.includes('!') == false){
                li.textContent +='!';
            }
            alert(`${li.textContent}`)
        })
    }
}



//466
func466();
function func466(){
    let table = document.querySelector('#table466');
    let width = document.getElementById('width');
    let height = document.getElementById('height');
    let generation = document.getElementById('generation');
    generation.addEventListener('click',()=>{
        for(let i = 1; i<=height.value ; i++){
            let tr = document.createElement('tr');
            for(let j = 1; j<=width.value ; j++){
                let td = document.createElement('td');
                td.textContent ='x';
                tr.appendChild(td)
            }
            table.appendChild(tr)
        }
    })
}


//467
func467();
function func467(){
    let table = document.querySelector('#table467');
    let k = 1; 
    for (let i = 0; i < 5; i++) {
        let tr = document.createElement('tr');
        
        for (let i = 0; i < 5; i++) {
            let td = document.createElement('td');
            if(k%2==0){
                td.textContent = k; 
            }
            else{
                k++;
                td.textContent = k; 
            }
            k++;
            tr.appendChild(td);
        }
        
        table.appendChild(tr);
    }
}


//468
func468();
function func468(){
    let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
    let table = document.getElementById('table468');
    for(let subarr of arr){
        let tr = document.createElement('tr');
        for(let elem of subarr){
            let td = document.createElement('td');
            td.textContent = elem**2;
            tr.appendChild(td);
        }
        table.appendChild(tr)
    }
}


//469
func469();
function func469(){
    let employees = [
        {name: 'employee1', age: 30, salary: 400},
        {name: 'employee2', age: 31, salary: 500},
        {name: 'employee3', age: 32, salary: 600},
    ];
    let table = document.getElementById('table469');

for (let employee of employees) {
	let tr = document.createElement('tr');
	
	let td1 = document.createElement('td');
	td1.textContent = employee.name;
	tr.appendChild(td1);
	
	let td2 = document.createElement('td');
    td2.textContent = employee.age;
	
	tr.appendChild(td2);
	
	let td3 = document.createElement('td');
	td3.textContent = employee.salary;
	tr.appendChild(td3);
	
	table.appendChild(tr);
    td2.addEventListener('click',()=>{
        td2.textContent = +td2.textContent +1;
    })
    td3.addEventListener('click',()=>{
        td3.textContent = +td3.textContent + td3.textContent*0.1;
    })
}
}



//470
func470_1();
func470_2();
function func470_1(){
    let table = document.querySelector('#table470_1');
    let tr = document.createElement('tr');
    let button = document.getElementById('button470_1');
    for (let i = 1; i <= 3; i++) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }

    button.addEventListener('click',()=>{
        let clone = tr.cloneNode(true)
        table.appendChild(clone);
    })
    table.appendChild(tr);
}
function func470_2(){
    let table = document.getElementById('table470_2');
    let button = document.getElementById('button470_2');
    let one_tr = document.querySelector('.tr470_2');
    button.addEventListener('click',()=>{
        let trs = table.querySelectorAll('.tr470_2');
       for(let tr of trs){
            let td = document.createElement('td');
            tr.appendChild(td); 
       }
       let clone = one_tr.cloneNode(true);
       table.appendChild(clone)
    })
}



//471
func471();
function func471(){
    let button = document.getElementById('button471');
    button.addEventListener('click',()=>{
        let tds = document.querySelectorAll('#table471 td');
        for (let td of tds) {
            td.textContent *= 2;
        }
    })

}


//472
func472();
function func472(){
    let ul = document.getElementById('parent472');
    let button = document.getElementById('button472');   
    button.addEventListener('click',()=>{
        let lis = document.querySelectorAll('#parent472 li')
        let li = document.createElement('li');
        li.textContent = +lis[lis.length-1].textContent + 1;
        ul.appendChild(li)
        ul.addEventListener('click',()=>{
            event.target.remove()
        })
         })
}


//473
func473();
function func473(){
    let a = document.querySelector('#parent473 a');
    let p = document.querySelector('#parent473 p');
    a.addEventListener('click',()=>{
        p.remove();
        event.preventDefault();
    })
}


//474
func474_ul();
func474_table();
function func474_ul(){
    let lis = document.querySelectorAll('#ul474 li');
    for(let li of lis){
        let remove = document.createElement('a')
        remove.href = '';
        remove.textContent = 'remove';
        li.appendChild(remove);
        remove.addEventListener('click',()=>{
            li.remove();
            event.preventDefault();
        })
    }
}
function func474_table(){
    let trs = document.querySelectorAll('#table474 tr')
    for(let tr of trs){
        let remove = document.createElement('a');
        remove.href = '';
        remove.textContent = 'удалить ряд';
        tr.appendChild(remove);
        remove.addEventListener('click',()=>{
            tr.remove();
            event.preventDefault();
        })
    }
}


//475
func475_inp1();
function func475_inp1(){
    let p = document.querySelector('#p475');
    let input = document.querySelector('#input475');
    input.value = p.textContent; // записываем в инпут текст абзаца
    input.addEventListener('input', function() {
	    p.textContent = this.value;
});
}
func475_inp2();
function func475_inp2(){
    let p = document.getElementById('p475_2');
    p.addEventListener('click',()=>{
        let input = document.createElement('input');
        input.value = p.textContent;

        input.addEventListener('blur',()=>{
            p.textContent = input.value;
            input.remove();
        })
        p.parentElement.appendChild(input);
    })
}


//476
func476();
function func476(){
    let p = document.getElementById('p476');
    p.addEventListener('click', function inpadd(){
        let inp = document.createElement('input');
        inp.value = p.textContent;
        p.textContent = '';
        p.appendChild(inp);
        inp.addEventListener('blur',()=>{
            p.textContent = inp.value;
            p.addEventListener('click', inpadd)
        })
        p.removeEventListener('click', inpadd)
    })
}


//477
func477_1();
func477_2();
function func477_1(){
    let lis = document.querySelectorAll('#ul477 li');
    for(let li of lis){
        li.addEventListener('click', function inpadd(){
            let inp = document.createElement('input');
            inp.value = li.textContent;
            li.textContent = '';
            li.appendChild(inp);
            inp.addEventListener('blur',()=>{
                li.textContent = inp.value;
                li.addEventListener('click', inpadd)
            })
            li.removeEventListener('click', inpadd)
        })
    }
}
function func477_2(){
    let tds = document.querySelectorAll('#table477 td')
    for(let td of tds){
        td.addEventListener('click', function inpadd(){
            let inp = document.createElement('input');
            inp.value = td.textContent;
            td.textContent = '';
            td.appendChild(inp);
            inp.addEventListener('blur',()=>{
                td.textContent = inp.value;
                td.addEventListener('click', inpadd)
            })
            td.removeEventListener('click', inpadd)
        })
    }
}


//478
func478_1();
func478_2();
function func478_1(){
    let ps = document.querySelectorAll('#parent478_1 p')
    let spans = document.querySelectorAll("#parent478_1 span")
    for(let p of ps){
        let remove = document.createElement('a');
        remove.href = '';
        remove.textContent = 'Удалить';
        remove.addEventListener('click', function(){
            p.remove();
            event.preventDefault();
        })
        p.appendChild(remove)
    }
    for(let span of spans){
        span.addEventListener('click', function inpadd(){
            let inp = document.createElement('input');
            inp.value = span.textContent;
            span.textContent = '';
            span.appendChild(inp);
            inp.addEventListener("blur",()=>{
                span.textContent = inp.value;
                span.addEventListener('click', inpadd)
            })
            span.removeEventListener('click', inpadd)
        })
    }
};
function func478_2(){
    let ps = document.querySelectorAll('#parent478_2 p')
    for(let p of ps){
        let span = document.createElement('span');
        span.textContent = p.textContent;
        p.textContent = '';
        p.appendChild(span);
        span.addEventListener('click', function inpadd(){
            let inp = document.createElement('input');
            inp.value = span.textContent;
            span.textContent = '';
            span.appendChild(inp);
            inp.addEventListener('blur',()=>{
                span.textContent = inp.value;
                span.addEventListener('click', inpadd)
            })
            span.removeEventListener('click', inpadd)
        })
        let remove = document.createElement('a');
        remove.href = '';
        remove.textContent = 'Удалить'
        p.appendChild(remove);
        remove.addEventListener('click',()=>{
            p.remove();
            event.preventDefault();
        })
    }
};


//479
func479_1();
func479_2();
function func479_1(){
    let ps = document.querySelectorAll('#div479_1 p');
    for(let p of ps){
        let span = document.createElement('span');
        span.textContent = p.textContent;
        p.textContent = '';
        p.appendChild(span);
        let line = document.createElement('a');
        line.href = '';
        line.textContent = 'Перечеркнуть';
        line.addEventListener('click',()=>{
            span.classList.add('deletep');
            line.remove();
            event.preventDefault();
        })
        p.appendChild(line)
    }
};
function func479_2(){
   let trs = document.querySelectorAll('#table479_2 tr')
   for(let tr of trs){
        let a = document.createElement('a');
        a.href = '';
        a.textContent = 'Сделать фон зелёным';
        a.addEventListener('click',function green(){
            tr.style.backgroundColor = 'green'; 
           a.addEventListener('click',()=>{
            tr.style.backgroundColor = 'white'

           })
           a.re
           event.preventDefault();
        })
        tr.appendChild(a)
 
   } 
}


//480
func480();
function func480(){
    let p = document.querySelector('#p480');
    let button = document.querySelector('#show_hide');
    button.addEventListener('click', function() {
        p.classList.toggle('hidden');
    });
}


//481
func481_1();
func481_2();
func481_3();
function func481_1(){
    let buttons = document.querySelectorAll('#div481_1 button');
    for (let button of buttons) {
        button.addEventListener('click', function() {
            let p = document.querySelector('#' + this.dataset.elem);
            p.classList.toggle('hidden');
        });
    }
}
function func481_2(){
    let buttons = document.querySelectorAll("#div481_2 button");
    let ps = document.querySelectorAll('#div481_2 p')
    for(let i = 0; i<buttons.length; i++){
        buttons[i].addEventListener('click',()=>{
            ps[i].classList.toggle('hidden');
        })
    }
}
function func481_3(){
    let buttons = document.querySelectorAll('#div481_3 button');
    for (let button of buttons) {
        button.addEventListener('click', function() {
            this.previousElementSibling.classList.toggle('hidden');
        });
    }
}


//482
func482();
function func482(){
    let lis = document.querySelectorAll('#ul482 li');
    for(let li of lis){
        li.addEventListener('click',()=>{
            li.classList.toggle('active')
        })
    }
}


//483
func483();
function func483(){
    let tds = document.querySelectorAll('#table483 td');
    let color = 'color1';
    for (let td of tds) {
        td.addEventListener('click', function() {
            if (color == 'color1') {
                color = 'color2'
            } else {
                color = 'color1'
            }
            
            this.classList.add(color);
        });
}
}


//484_1
func484_1();
function func484_1(){
    let arr =[1,2,3,4,5];
    let ul = document.getElementById('ul484_1');
    let redact = document.createElement('input');
   
    for(let elem of arr){
        let li = document.createElement('li');
        let span = document.createElement('span');
        span.textContent = elem;
       
        span.addEventListener('click',inpadd)
        li.appendChild(span);
        remove(li);
        line(span, li);
      
        ul.appendChild(li)
    }
    redact.addEventListener('blur',()=>{
        let span = document.createElement('span');
        let li = document.createElement('li');
        span.textContent = redact.value;
        span.addEventListener('click', inpadd)
        li.appendChild(span);
        remove(li);
        line(span, li);
        ul.insertBefore(li, redact)
    })
    function inpadd(){
        let span = this;
        let inp = document.createElement('input')
        inp.value = span.textContent;
        span.textContent = '';
        span.appendChild(inp);
        inp.addEventListener('blur',()=>{
            span.textContent = inp.value;
            span.addEventListener('click',inpadd)
        })
        span.removeEventListener('click', inpadd)
    }
    function remove(li){
        let remove = document.createElement('a');
        remove.href = '';
        remove.textContent = 'Удалить';
        remove.addEventListener('click',()=>{
            li.remove();
            event.preventDefault();
        })
        li.appendChild(remove)
    }
    function line(span, li){
        let line = document.createElement('a');
        line.href = '';
        line.textContent = 'Перечеркнуть';
        line.addEventListener('click',()=>{
            span.classList.add('deletep')
            event.preventDefault();
        })
        li.appendChild(line)
    }
    ul.appendChild(redact);
}


//484_2
func484_2();
function func484_2(){
    let table = document.getElementById('table484_2');

    let employees = [
        {name: 'employee1', age: 30, salary: 400},
        {name: 'employee2', age: 31, salary: 500},
        {name: 'employee3', age: 32, salary: 600},
    ];
    for(let employee of employees){
       addEmployee(employee)
    }
    function addEmployee(employee){
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.textContent = employee.name;
        td1.addEventListener('click', inpadd)
        tr.appendChild(td1);
        
        let td2 = document.createElement('td');
        td2.textContent = employee.age;
        td2.addEventListener('click', inpadd)
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.textContent = employee.salary;
        td3.addEventListener('click', inpadd)
        tr.appendChild(td3);

        let td_delete = document.createElement('td');
        let remove = document.createElement('a');
        remove.href = '';
        remove.textContent = 'Удалить ряд';
        remove.addEventListener('click',()=>{
            tr.remove();
            event.preventDefault();
        })
        td_delete.appendChild(remove)
        tr.appendChild(td_delete);
       
        table.appendChild(tr);
    };
    function inpadd(){
        let inp = document.createElement('input')
        inp.value = this.textContent;
        this.textContent = '';
        this.appendChild(inp);
        inp.addEventListener('blur',()=>{
            this.textContent = inp.value;
            this.addEventListener('click',inpadd)
        })
        this.removeEventListener('click', inpadd)
    }
    let div = document.getElementById('div484_2')
    let inp_name = document.createElement('input');
    inp_name.placeholder = 'name';
    div.insertAdjacentElement('beforeend', inp_name);

    let inp_age = document.createElement('input');
    inp_age.placeholder = 'age';
    div.insertAdjacentElement('beforeend', inp_age);

    let inp_salary = document.createElement('input');
    inp_salary.placeholder = 'salary';
    div.insertAdjacentElement('beforeend', inp_salary);
    
    let button = document.createElement('button');
    button.textContent = 'Добавить';
    div.insertAdjacentElement('beforeend', button);
    
    button.addEventListener('click',()=>{
        let employee = {
            name: inp_name.value,
            age: inp_age.value,
            salary: inp_salary.value
        }
        addEmployee(employee)
    })
}


//484_3
func484_3();
function func484_3(){
    let ul = document.getElementById('ul484');
    let employees = [
        {name: 'employee1', age: 30, salary: 400},
        {name: 'employee2', age: 31, salary: 500},
        {name: 'employee3', age: 32, salary: 600},
    ];
    for(let employee of employees){
        addEmployee(employee);
     }
    function addEmployee(employee){
        let li = document.createElement('li');

        let span1 = document.createElement('span');
        span1.textContent = employee.name;
        span1.addEventListener('click', inpadd)
        li.appendChild(span1)

        let span2 = document.createElement('span');
        span2.textContent = " "+ employee.age;
        span2.addEventListener('click', inpadd)
        li.appendChild(span2)

        let span3 = document.createElement('span');
        span3.textContent = " "+ employee.salary + ' ';
        span3.addEventListener('click', inpadd)
        li.appendChild(span3)

        let remove = document.createElement('a');
        remove.href = '';
        remove.textContent ='Удалить';
        remove.addEventListener('click',()=>{
            li.remove();
            event.preventDefault();
        })
        li.appendChild(remove);

        ul.appendChild(li)
    }
    let spans = document.querySelectorAll('#ul484 span')
    for(let span of spans){
        span.addEventListener('click', inpadd)
    }
    function inpadd(){
        let inp = document.createElement('input')
        inp.value = this.textContent;
        this.textContent = '';
        this.appendChild(inp);
        inp.addEventListener('blur',()=>{
            this.textContent = inp.value;
            this.addEventListener('click',inpadd)
        })
        this.removeEventListener('click', inpadd)
    }
    let div = document.getElementById('div484_3')
    let inp_name = document.createElement('input');
    inp_name.placeholder = 'name';
    div.insertAdjacentElement('beforeend', inp_name);

    let inp_age = document.createElement('input');
    inp_age.placeholder = 'age';
    div.insertAdjacentElement('beforeend', inp_age);

    let inp_salary = document.createElement('input');
    inp_salary.placeholder = 'salary';
    div.insertAdjacentElement('beforeend', inp_salary);
    
    let button = document.createElement('button');
    button.textContent = 'Добавить';
    div.insertAdjacentElement('beforeend', button);
    
    button.addEventListener('click',()=>{
        let employee = {
            name: inp_name.value,
            age: inp_age.value,
            salary: inp_salary.value
        }
        addEmployee(employee)
    })
}