let main = document.querySelector('main')
let input = document.querySelector('#search')


const addCard = name => {
    let newCard = document.createElement('div')
    newCard.classList.add('card')
    let newH = document.createElement('h1')
    newH.innerHTML = name
    newCard.append(newH)
    main.append(newCard)
}




//vi vil gerne lave array med tekst variabler
let names = ['Romainesalat: Det var det første salat som blevet groet oppe i rummet.','spidskål','rucola', 'kartofler','tomater', 'agurker','iceberg salat']




names.map( name => addCard(name) )



input.addEventListener('input',() => {
    let results = names.filter (name => name.toLocaleLowerCase().includes(input.value))
    main.innerHTML = ''
    results.map(name => addCard(name))
})

//her for et loop
//for(let i = 0; i < names.length; i++){
//    console.log(names[i])
//}