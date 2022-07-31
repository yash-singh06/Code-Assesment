document.addEventListener('DOMContentLoaded', () => {
    fillTiles();
});

const fillTiles = () => {
    let $element = document.getElementById('container');
    $element.innerHTML = '';
    let modifiedArray = dataArray.map(x => {
        return '<div class="tiles" style="background:' +x.color+ '">'+ x.value +'</div>';
    })

    $element.innerHTML = modifiedArray.join('');
}

const shuffleHandler = () => {
    let numberListCopy = numberList;
    let randomNumber, randomColor;
    dataArray = dataArray.map(x => {
        if(numberListCopy.length === 1) {
            randomNumber = numberListCopy[0];
        } else {
            randomNumber = generateRandomValue(numberListCopy.filter(num => num != x.value));
        }
        randomColor = generateRandomValue(colorList.filter(color => color != x.color));   
        numberListCopy = numberListCopy.filter(x => x !== randomNumber);
         x = {value: randomNumber, color: randomColor};
         return x;
    });
    
    fillTiles();
}

const sortHandler = () => {
    dataArray = dataArray.sort((x,y) => x.value - y.value);
    fillTiles();
}
const generateRandomValue = (list) => {
    return list[Math.floor(Math.random()*list.length)];
}
let dataArray = [{value: 1, color:'#333333'},{value: 2, color:'#EFEFEF'},
{value: 3, color:'#72C3DC'},{value: 4, color:'#2B8EAD'},{value: 5, color:'#6F98A8'},
{value: 6, color:'#BFBFBF'},{value: 7, color:'#2F454E'},{value: 8, color:'#2B8EAD'},{value: 9, color:'#72C3DC'}];

let colorList = ['#333333','#EFEFEF','#72C3DC','#2B8EAD','#6F98A8','#BFBFBF','#2F454E'];
let numberList = [1,2,3,4,5,6,7,8,9];