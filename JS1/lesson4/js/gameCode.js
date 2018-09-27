var event;

//Выводим первый вопрос
event = printStage(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры', works.a0);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        event = printStage(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры', works.b0);

        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                event = printStage(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры', works.d0);
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                event = printStage(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры', works.d0);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        event = printStage(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры', works.c0);

        switch (event) {
            case 1: // Второе действие
                event = printStage(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры', works.d0);

                break;
            case 2: // Второе действие
                event = printStage(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры', works.d0);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');

event = printStage(works.n00 + works.n1 + works.n2 + works.n3 + works.n4 + '-1 - Всё-таки выйти из игры', works.n0);
switch (event) {
    case 1: printStage("ЭПИЗОД " + event + ":\n" + works.a00 + '-1 - Выход из игры', 0); break;
    case 2: printStage("ЭПИЗОД " + event + ":\n" + works.b00 + '-1 - Выход из игры', 0); break;
    case 3: printStage("ЭПИЗОД " + event + ":\n" + works.c00 + '-1 - Выход из игры', 0); break;
    case 4: printStage("ЭПИЗОД " + event + ":\n" + works.d00 + '-1 - Выход из игры', 0); break;
}
//------------------------------------------
function printStage(promptText, answerNumberLimit) {
    var event, ok;

    do {//Выводим вопрос
        ok = false;
        event = +prompt(promptText);
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(answerNumberLimit, event);
        }
    } while (!ok);

    return event;
}

function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапазона');
        return false;
    }
    return true;
    
}