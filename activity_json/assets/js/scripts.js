const btn_ejercicio1 = document.getElementById("ejercicio1");
const btn_ejercicio2 = document.getElementById("ejercicio2");
const btn_ejercicio3 = document.getElementById("ejercicio3");
const btn_ejercicio4 = document.getElementById("ejercicio4");
const btn_ejercicio5 = document.getElementById("ejercicio5");
const btn_ejercicio6 = document.getElementById("ejercicio6");
const btn_ejercicio7 = document.getElementById("ejercicio7");
const btn_ejercicio8 = document.getElementById("ejercicio8");
const btn_ejercicio9 = document.getElementById("ejercicio9");
const btn_ejercicio10 = document.getElementById("ejercicio10");
const btn_ejercicio11 = document.getElementById("ejercicio11");
const btn_ejercicio12 = document.getElementById("ejercicio12");
const btn_ejercicio13 = document.getElementById("ejercicio13");
const btn_ejercicio14 = document.getElementById("ejercicio14");
const btn_ejercicio15 = document.getElementById("ejercicio15");
const btn_ejercicio16 = document.getElementById("ejercicio16");
const btn_ejercicio17 = document.getElementById("ejercicio17");
const btn_ejercicio18 = document.getElementById("ejercicio18");
const btn_ejercicio19 = document.getElementById("ejercicio19");
const btn_ejercicio20 = document.getElementById("ejercicio20");
const btn_ejercicio21 = document.getElementById("ejercicio21");
const btn_ejercicio22 = document.getElementById("ejercicio22");
const btn_ejercicio23 = document.getElementById("ejercicio23");
const btn_ejercicio24 = document.getElementById("ejercicio24");
const btn_ejercicio25 = document.getElementById("ejercicio25");


btn_ejercicio1.addEventListener('click',function(){
    ejercicio1()
});
btn_ejercicio2.addEventListener('click',function(){
    ejercicio2()
});
btn_ejercicio3.addEventListener('click',function(){
    ejercicio3()
});
btn_ejercicio4.addEventListener('click',function(){
    ejercicio4()
});
btn_ejercicio5.addEventListener('click',function(){
    ejercicio5()
});
btn_ejercicio6.addEventListener('click',function(){
    ejercicio6()
});
btn_ejercicio7.addEventListener('click',function(){
    ejercicio7()
});
btn_ejercicio8.addEventListener('click',function(){
    ejercicio8()
});
btn_ejercicio9.addEventListener('click',function(){
    ejercicio9()
});
btn_ejercicio10.addEventListener('click',function(){
    ejercicio10()
});
btn_ejercicio11.addEventListener('click',function(){
    ejercicio11()
});
btn_ejercicio12.addEventListener('click',function(){
    ejercicio12()
});
btn_ejercicio13.addEventListener('click',function(){
    ejercicio13()
});
btn_ejercicio14.addEventListener('click',function(){
    ejercicio14()
});
btn_ejercicio15.addEventListener('click',function(){
    ejercicio15()
});
btn_ejercicio16.addEventListener('click',function(){
    ejercicio16()
});
btn_ejercicio17.addEventListener('click',function(){
    ejercicio17()
});
btn_ejercicio18.addEventListener('click',function(){
    ejercicio18()
});
btn_ejercicio19.addEventListener('click',function(){
    ejercicio19()
});
btn_ejercicio20.addEventListener('click',function(){
    ejercicio20()
});
btn_ejercicio21.addEventListener('click',function(){
    ejercicio21()
});
btn_ejercicio22.addEventListener('click',function(){
    ejercicio22()
});
btn_ejercicio23.addEventListener('click',function(){
    ejercicio23()
});
btn_ejercicio24.addEventListener('click',function(){
    ejercicio24()
});
btn_ejercicio25.addEventListener('click',function(){
    ejercicio25()
});


async function ejercicio1(){
    try {
        const res = await fetch("http://localhost:3000/users");
        const user = res.json();
        console.log(user);
    } catch (error) {
        console.log(error)
    }
}

async function ejercicio2(){
    try {
        const res = await fetch("http://localhost:3000/users/1");
        const user = res.json();
        console.log(user);
    } catch (error) {
        console.log(error)
    }
}

async function ejercicio3(){
    try {
        const res = await fetch("http://localhost:3000/users?names=Ana López");
        const user = res.json();
        console.log(user);
    } catch (error) {
        console.log(error)
    }
}

async function ejercicio4(){
    try {
        const res = await fetch("http://localhost:3000/users?_q=gmail");
        const user = res.json();
        console.log(user);
    } catch (error) {
        console.log(error)
    }
}

async function ejercicio5(){
    try {
        const res = await fetch("http://localhost:3000/tasks?UserId=3d5f");
        const user = res.json();
        console.log(user);
    } catch (error) {
        console.log(error)
    }
}

async function ejercicio6(){
    try {
        const res = await fetch("http://localhost:3000/tasks?state=pendiente");
        const user = res.json();
        console.log(user);
    } catch (error) {
        console.log(error)
    }
}

async function ejercicio7(){
    try {
        const res = await fetch("http://localhost:3000/tasks?priority=alta&_sort=fechaEntrega&_order=asc");
        const user = res.json();
        console.log(user);
    } catch (error) {
        console.log(error)
    }
}

async function ejercicio8(){
    try {
        const res = await fetch("http://localhost:3000/users?_limit=3");
        const user = res.json();
        console.log(user);
    } catch (error) {
        console.log(error)
    }
}

async function ejercicio9(){
    try {
        const res = await fetch("http://localhost:3000/users?_page=2&_limit=5");
        const user = res.json();
        console.log(user);
    } catch (error) {
        console.log(error)
    }
}

async function ejercicio10(){
    try {
        const res = await fetch("http://localhost:3000/tasks?title_like=Diseñar");
        const user = res.json();
        console.log(user);
    } catch (error) {
        console.log(error)
    }
}

async function ejercicio11(){
    try {
        const res = await fetch("http://localhost:3000/users?rol_ne=admin");
        const user = res.json();
        console.log(user);
    } catch (error) {
        console.log(error)
    }
}

async function ejercicio12(){
    try {
        const res = await fetch("http://localhost:3000/tasks?priority_ne=baja");
        const user = res.json();
        console.log(user);
    } catch (error) {
        console.log(error)
    }
}

async function ejercicio13(){
    try {
        const res = await fetch("http://localhost:3000/users?age_gt=30");
        const user = res.json();
        console.log(user);
    } catch (error) {
        console.log(error)
    }
}

async function ejercicio14(){
    try {
        const res = await fetch("http://localhost:3000/users?age_lte=25");
        const user = res.json();
        console.log(user);
    } catch (error) {
        console.log(error)
    }
}

async function ejercicio15(){
    try {
        const res = await fetch("http://localhost:3000/tasks?fechaEntrega_gt=2024-06-10");
        const user = res.json();
        console.log(user);
    } catch (error) {
        console.log(error)
    }
}

async function ejercicio16() {
    try {
        const res = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: "7",
                names: "Amaranto López",
                email: "amaranto@gmail.com",
                rol: "admin",
                phone: "3001234523",
                address: "Calle 1 #45-67",
                activo: true,
                dateRegister: "2024-02-22",
                age: 30,
                gender: "masculino"
            })
        });
        const user = await res.json();
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

async function ejercicio17() {
    try {
        const res = await fetch("http://localhost:3000/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "id": "4",
                "title": "Hacer la página de inicio",
                "description": "Hacer el diseño responsive para la home",
                "state": "pendiente",
                "priority": "alta",
                "dateCreation": "2024-06-01",
                "fechaEntrega": "2025-08-10",
                "UserId": "3tyg"
            })
        });
        const user = res.json();
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

async function ejercicio18() {
    try {
        const res = await fetch("http://localhost:3000/users/2", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "id": "2",
                "names": "Lisandro López",
                "email": "Lisandro@hotmail.com",
                "rol": "user",
                "phone": "3227654321",
                "address": "Calle 3 #40-60",
                "activo": false,
                "dateRegister": "2025-07-02",
                "age": 23,
                "gender": "masculino"
            })
        });
        const user = res.json();
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

async function ejercicio19() {
    try {
        const res = await fetch("http://localhost:3000/tasks/2", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "id": "5",
                "title": "Finalizar la página de inicio",
                "description": "Finalizar el diseño responsive para la home",
                "state": "Pendiente",
                "priority": "Alta",
                "dateCreation": "2025-07-01",
                "fechaEntrega": "2026-05-11",
                "UserId": "4hhh"
            })
        });
        const user = res.json();
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

async function ejercicio20() {
    try {
        const res = await fetch("http://localhost:3000/users/4", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "activo": false
            })
        });
        const user = res.json();
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

async function ejercicio21() {
    try {
        const res = await fetch("http://localhost:3000/tasks/2", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "state": "Completado",
            })
        });
        const user = res.json();
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

async function ejercicio22() {
    try {
        const res = await fetch("http://localhost:3000/users/5", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "phone": "3112223344",
            })
        });
        const user = res.json();
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

async function ejercicio23() {
    try {
        const res = await fetch("http://localhost:3000/tasks/3", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "priority": "media",
            })
        });
        const user = res.json();
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

async function ejercicio24() {
    try {
        const res = await fetch("http://localhost:3000/users/6", {
            method: "DELETE"
        });
        const user = res.json();
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

async function ejercicio25() {
    try {
        const res = await fetch("http://localhost:3000/tasks/3", {
            method: "DELETE"
        });
        const user = res.json();
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}