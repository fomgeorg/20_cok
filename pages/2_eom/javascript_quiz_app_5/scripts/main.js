let checkBtn2 = document.querySelector('#check_button_2')
checkBtn2.classList.add('disabled_button')

let checkBtn3 = document.querySelector('#check_button_3')
checkBtn3.classList.add('disabled_button')

let numberOfQuestion = 5; 
let numberOfQuestionSum = 8;

let questionPlace = 'Распределите в правильной последовательности этапы замены сальниковой набивки';
let questionHead = document.querySelector('#number_of_question_1');
let popUpWindow = document.querySelector('#popup1')

function closePopUp(){
    popUpWindow.classList.add('close')
}

function showPopUp(){
    popUpWindow.classList.remove('close')
}


questionHead.innerHTML = numberOfQuestion + '. '

let stepMarkerPlace = document.querySelector('.step_marker');
console.log("stepMarkerPlace")
for (let i = 0; i < numberOfQuestion; i++){
    let markers = document.createElement('img');
    markers.src = "./content/radio_button_blue.svg";
    stepMarkerPlace.appendChild(markers);
}

for (let i = 0; i < numberOfQuestionSum-numberOfQuestion; i++){
    let markers = document.createElement('img');
    markers.src = "./content/radio_button.svg";
    stepMarkerPlace.appendChild(markers);
}

let stepPlaceDescription = document.querySelector('#number_of_question_description_1');
stepPlaceDescription.innerHTML = '<strong>' + numberOfQuestion + '/' + numberOfQuestionSum + '</strong>';

console.log('Script is Loaded')
let checkBtn = document.querySelector('#check_button_1');
let rightAnswers = ['11','5','10','3','6','2,4','7','1','8','9'];
checkBtn.addEventListener('click', function(){
    let inputs = document.querySelectorAll('#quiz_part input');
    let i = 0;
    for (let input of inputs){
        if (input.value == rightAnswers[i]){
            input.classList.add('correct');
            checkBtn.classList.add('disabled_button')
            checkBtn2.classList.remove('disabled_button')
            checkBtn3.classList.remove('disabled_button')
            localStorage.setItem('answer_'+numberOfQuestion, JSON.stringify({questionPlace: true}));

        } else {
            input.classList.add('incorrect');
            checkBtn.classList.add('disabled_button')
            checkBtn2.classList.remove('disabled_button')
            checkBtn3.classList.remove('disabled_button')
            localStorage.setItem('answer_'+numberOfQuestion, JSON.stringify({questionPlace: false}));
        };
        i++;
    }
});