# **Olga Sinkevich** #

+ ### *[Linkedln](https://www.linkedin.com/.....) ###
+ ### *[Facebook](https://https://www.facebook.com/people/%D0%9E%D0%BB%D1%8C%D0%B3%D0%B0-%D0%A1%D0%B8%D0%BD%D0%BA%D0%B5%D0%B2%D0%B8%D1%87/100000890234031/) ###

* +37064763708 *
Objective: Applying for a position of a Front-end Developer.

About me: I’m passionate about Web development and Computer science, eager to find something new. I'm purposeful, also have a high level of efficiency and self-organization. And I have a great desire to develop.

Languages:			            JavaScript
Web development:	            HTML5, CSS3
Technologies:		            AJAX
Image editors:		            AutoCAD, Corel DRAW
Other tools and utilities:  	Git, GitHub
IDE: 				            WebStorm, Sublime, VS Code

My courses:
+ 'Front-End developer' (2020)
    +[code example](https://github.com/Olgasinkevich/HomeWor)
+ 'Front-End developer' by Intellect Fox (2020-2021)
    +[code example](https://github.com/Olgasinkevich/if-html)

My English level is А1. Now I am studying in English courses.
Code example:
```
let a = parseFloat(prompt('введите число'));
console.log(a);
let b = parseFloat(prompt('введите второе число'));
console.log(b);
let operator = prompt('введите оператор');
console.log(operator);

function calc(a, b, operator = '+') {
    if (typeof a === 'number' && typeof b === 'number') {

        switch (operator) {
            case '+':
                return a+b;
            case '-':
                return a-b;
            case '*':
                return a*b;
            case '/':
                return a/b;
            case 'pow':
                return a**b;
            default:
                return 'Введен неверный оператор';
        }

    }
    else {
        return 'Введен неверный формат данных';
    }
}

alert(calc(a, b, operator));
```