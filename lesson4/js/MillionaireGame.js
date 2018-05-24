var playerWallet = 0;

function buildQuestion(q, answers, answer, cost) {
    return {
        question: q,
        answers: answers,
        answer: answer,
        cost: cost
    };
}

var Questionnaire = [
    buildQuestion('Сколько будет дважды два', ['43', '4', '0', '2'], 2, 100),
    buildQuestion('Сколько ног у носорога', ['40', '1', '12', '4'], 4, 1000),
    buildQuestion('Где живет слон', ['в Африке', 'на Луне', 'в зоопарке', 'в детском саду'], 1, 10000)
];

function showQuestion(promptText, answerNumberLimit) {
    var event, ok;

    do {//Выводим вопрос
        ok = false;
        event = +prompt(promptText);
        ok = isAnswer(answerNumberLimit, event);
    } while (!ok);

    return event;
}

function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапазона');
        return false;
    }
    return true;
}

function startTheGame() {
    playerWallet = 0;

    for (var i = 0; i < Questionnaire.length; i++) {
        document.getElementById('playerWallet').innerHTML = 'Ваш кошелек: ' + playerWallet;
        var promptText = Questionnaire[i].question + ":";
        for (var j = 0; j < Questionnaire[i].answers.length; j++) {
            promptText += "\n" + (j+1) + ' - ' + Questionnaire[i].answers[j];
        }
        var answerNumber = showQuestion(promptText, 4);
        if (answerNumber === Questionnaire[i].answer) {
            playerWallet += Questionnaire[i].cost;
            alert("И это... ПРАВИЛЬНЫЙ ОТВЕТ!\nВы заработали " + Questionnaire[i].cost + ' очков');
        } else {
            playerWallet = 0;
            alert("И это... НЕПРАВИЛЬНЫЙ ОТВЕТ!\nВы потеряли все Ваши заработанные очки");
            break;
        }
    }
    return confirm('Игра окончена.\nУ Вас ' + playerWallet + ' очков.\nХотите сыграть еще раз?');
}