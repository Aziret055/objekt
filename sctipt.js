// setTimeout(() => {
//     console.log(); ------------------  бул заддершка менен чыгарат консолго
// },2000)

// promise - 3 абалы болот 
// resolve  - бул бизге туура данныйлар келгени
// reject -  данныйлар келет но откляняет аткарылат но с ошибкой


// ОШИБКАЛАР 

// 100-199 - ошибка корсок бул  инфармоционный 
// 200-299 - успешный болот
// 300-399 - эгер кнопканы бассканда башка страницага отуп кетсе === перенапраления
// 400-499 - клиентский ошибкаа озубуз кетирген ошибка
// 500-599 - серверный ошибка бекенд жактан ошибка болот

// синхромный - 2 нерсе тен кыймылда болсо  мисалы машинанын донгологу
// асинхромный - набороту 

//  API - БУЛ ЕПЛКЕЙШИН ПРОГРАМНЫЙЙ ИНТЕРФЕС болуп чечмеленет


// let n = 400
// let promese = new Promise((resolve , reject) => {
    // if(n >= 200 && n <= 299) {
        //     resolve({name:"aza" , id : 3 , age : 23 })
// }else {
//     reject({name : "aziret" , id : 13 , age : 212})
// }
// })
// promese.catch((res) => console.log(res))



// let div = document.querySelector(".div")
// fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((aza)=>{
    //     console.log(aza);
    //     aza.map((el) => {
        //          div.innerHTML += `
        //          <h1>${el.email}</h1>
        //          <h1>${el.name}</h1>
        //          `
        //     })
        // })
        // fetch("https://jsonplaceholder.typicode.com/users").then((res) =>res.json()).then((aza) => {
            
            // })




            

            let div = document.querySelector(".div")
            let head = document.querySelector(".head")
            fetch("https://jsonplaceholder.typicode.com/users").then((res)=> res.json()).then((data) => {
                console.log(data);
                data.map((el) => {
                    head.innerHTML += `
                    <div class="header">
                    <img width="200px" src="./img/21104.png" alt="img">
                    
                    <div class="img">
                    <h2><span>name</span>: ${el.name}</h2>
                    <h2><span>username</span>: ${el.username}</h2>
                    <h4><span>email</span>: ${el.email}</h4>
                    <h4><span>address</span>: ${el.address.city}</h4>
                    <h4><span>PHONE</span>: ${el.phone}</h4>
                    </div>
                    </div>
            `
                })
            })