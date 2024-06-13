const task1 = [
    {
        question: "Как може да изведем съобщението 'Hello World!' като използваме JavaScript?",
        answers: [
            "msg('Hello World');",
            'alertBox("Hello World");',
            'alert("Hello World");',
            'msgBox("Hello World");'
        ],
        correct: 2
    },
    {
        question: " Кой е правилният начин за използване на IF клаузата в JavaScript?",
        answers: [
            "if i = 2 then",
            "if i == 2 then",
            "if i = 2",
            "if(i == 2)"
        ],
        correct: 3
    },
    {
        question: "Как да можем изпълним някакъв код, ако 'i' е различно от 2?",
        answers: [
            "if i <> 2",
            "if (i != 2)",
            "if (i <> 2)",
            "if i != 2 then"
        ],
        correct: 1
    },
    {
        question: "Как се създава масив в JavaScript?",
        answers: [
            "var arr = array(1, 2, 3);",
            "var arr = [1, 2, 3];",
            "var arr = (1, 2, 3);",
            "var arr = {1, 2, 3};"
        ],
        correct: 1
    },
    {
        question: "Как се декларира променлива в JavaScript?",
        answers: [
            "variable x = 10;",
            "let x = 10;",
            "int x = 10;",
            "x = 10;"
        ],
        correct: 1
    },
    {
        question: "Кой от следните оператори се използва за сравнение в JavaScript?",
        answers: [
            "=",
            "&&",
            "===",
            "!=="
        ],
        correct: 2
    },
    {
        question: "Как се създава функция в JavaScript?",
        answers: [
            "function myFunction() {}",
            "func myFunction() {}",
            "def myFunction() {}",
            "create myFunction() {}"
        ],
        correct: 0
    },
    {
        question: "Кой метод добавя нов елемент в края на масив?",
        answers: [
            "push()",
            "pop()",
            "shift()",
            "unshift()"
        ],
        correct: 0
    },
    {
        question: "Как се извиква функция в JavaScript?",
        answers: [
            "call myFunction;",
            "myFunction();",
            "myFunction;",
            "run myFunction();"
        ],
        correct: 1
    },
    {
        question: "Как се добавя коментар в JavaScript?",
        answers: [
            "# Този ред е коментар",
            "// Този ред е коментар",
            "<!-- Този ред е коментар -->",
            "' Този ред е коментар"
        ],
        correct: 1
    }
];


const task2 = [
    {
        question: "След какъв HTML таг се слага JavaScript?.",
        answers: [
            '<scripting>',
            "<javascript>",
            "<script>",
            "<js>"
        ],
        correct: 2
    },
    {
        question: "Как е правилно да се вмъкне външен скрипт?",
        answers: [
            "<script name='sample1.js'>",
            "<#include 'sample1.js'>",
            "<script href='sample1.js'>",
            "<script src='sample1.js'></script>"
        ],
        correct: 3
    },
    {
        question: "Как се започва FOR цикъл?",
        answers: [
            "for  let i = 1 to 10",
            "for (let i = 0; i <= 10; i++)",
            "for (let i = 0; i <= 10)",
            "for (let i <= 10; i++)"

        ],
        correct: 1
    },
    {
        question: "Как се създава масив в JavaScript?",
        answers: [
            "var arr = array(1, 2, 3);",
            "var arr = [1, 2, 3];",
            "var arr = (1, 2, 3);",
            "var arr = {1, 2, 3};"
        ],
        correct: 1
    },
    {
        question: "Как да направим коментар с повече от една линии?",
        answers: [
            "/* Този коментар има повече от една линия */",
            "<!-- Този коментар има повече от една линия -->",
            "// Този коментар има повече от една линия //"
        ],
        correct: 0
    },
    {
        question: "Как се закръгля числото 3.14 към най-близкото цяло число?",
        answers: [
            "round(3.14)",
            "Math.round(3.14)",
            "rnd(3.14)",
            "Math.rnd(3.14)"
        ],
        correct: 1
    },
    {
        question: "Как се намира по-голямото от две числа?",
        answers: [
            "Math.top(x, y)",
            "Math.ceil(x, y)",
            "Math.max(x, y)",
            "Math.flour(x, y)"
        ],
        correct: 2
    },
    {
        question: "Кой метод премахва първия елемент на масив?",
        answers: [
            "push()",
            "pop()",
            "shift()",
            "unshift()"
        ],
        correct: 2
    },
    {
        question: "Кой метод премахва последния елемент на масив?",
        answers: [
            "push()",
            "pop()",
            "shift()",
            "unshift()"
        ],
        correct: 1
    },
    {
        question: "What is the JavaScript syntax to change the content of the HTML element?",
        answers: [
            'document.getElement("p").innerHTML = "Hello"',
            'document.getElementsByTagName("p").inner = "Hello"',
            'document.getElementsByTagName("p").innerHTML = "Hello"',
            'document.querySelector("r").textContent = "Hello"'
        ],
        correct: 2
    }
];


const task3 = [
    {
        question: "Какво прави методът - includes() с масива ?.",
        answers: [
            "Проверява дали масивът има четен брой елементи.",
            "Проверява дали масивът съдържа определен елемент.",
            "Проверява колко елемента има масива.",
            "Нищо не прави"
        ],
        correct: 1
    },
    {
        question: "Какво прави методът - shift() с масива ?.",
        answers: [
            "Премахва последния елемент от масива ",
            "Връща първия елемент в масива",
            "Премахва първия елемент от масива",
            "Сортира елементите на масива >"
        ],
        correct: 2
    },
    {
        question: "С кой метод ще премахнем елемент от масив?",
        answers: [
            "slice()",
            "concat()",
            "splice()",
            "pop()"

        ],
        correct: 2
    },
    {
        question: "С кой метод могат да се сумират всички числа в масива [4, 6, 1, 4]",
        answers: [
            "revers()",
            "reduce()",
            "join()",
            "shift()"
        ],
        correct: 1
    },
    {
        question: "С кой метод може да се намери на коя позиция е числото '3' в масива - [2, 4, 3]?",
        answers: [
            "includes()",
            "map()",
            "indexOf()",
            "filter()"
        ],
        correct: 2
    },
    {
        question: "Как да вземем в променливата 'num', числото '2' от масива - const arr = [6, 2, 1] ?",
        answers: [
            "const num = 2",
            "const num = arr.2",
            "const num = arr[2]",
            "const num = arr[1]"
        ],
        correct: 3
    },
    {
        question: "Как се намира по-голямото от две числа?",
        answers: [
            "Math.top(x, y)",
            "Math.ceil(x, y)",
            "Math.max(x, y)",
            "Math.flour(x, y)"
        ],
        correct: 2
    },
    {
        question: "let r = [1, 2, 3]; Какво ще се случи ако:  r.reverse()",
        answers: [
            "Нищо",
            "r = [1, 3, 2]",
            "r = [3, 2, 1]",
            "r = [1, 2, 3]"
        ],
        correct: 2
    },
    {
        question: "Кой метод добавя елемент в началото на масив?",
        answers: [
            "push()",
            "pop()",
            "shift()",
            "unshift()"
        ],
        correct: 3
    },
    {
        question: "Какво прави - concat() ?",
        answers: [
            'Обединява два или повече масива и връща нов масив.',
            'Създава нов масив с резултатите от прилагането на функция към всеки елемент"',
            'Обръща реда на елементите в масива.',
            'Използва функция за намаляване на масива'
        ],
        correct: 0
    }
];


const task4 = [
    {
        question: "Как се започва WHILE цикъл ?.",
        answers: [
            'while i = 1 to 7',
            'while (i <= 7)',
            'while (i <= 7; i++)'
        ],
        correct: 1
    },
    {
        question: "Как се започва FOR цикъл?.",
        answers: [
            'for (i = 0; i <= 10; i++)',
            'for (i <= 10; i++)',
            'for i = 1 to 10',
            'for (i = 0; i <= 10)'

        ],
        correct: 0
    },
    {
        question: "Как да направим коментар с повече от една линии?",
        answers: [
            '// Този коментар има \n повече от една линии //',
            '/* Този коментар има  \n повече от една линии */',
            '<!-- Този коментар има \n повече от една линии -->'
        ],
        correct: 1
    },
    {
        question: " По кой от изброените по-долу начини се отваря нов прозорец с JavaScript?",
        answers: [
            'myWindow = window.new("http://www.w3schools.com");',
            'myWindow = New window("http://www.w3schools.com");',
            'myWindow = window.open("http://www.w3schools.com");'
        ],
        correct: 2
    },
    {
        question: "Каква е разликата между == и === в JavaScript?",
        answers: [
            "Няма разлика",
            "== проверява стойността, а === проверява стойността и типа ",
            "== проверява типа, а === проверява стойността",
            "=== е за сравняване на числа, а == е за сравняване на стрингове"
        ],
        correct: 1
    },
    {
        question: `Какъв ще бъде резултатът от следния код? <br> let sum = 0;
        <br>for (let i = 0; i < 5; i++) {
          <br>sum += i;
        <br>}
        <br>console.log(sum); `,
        answers: [
            "10",
            "15",
            "5",
            "20"
        ],
        correct: 0
    },
    {
        question: "Кой цикъл ще се изпълни поне веднъж дори и условието да е грешно?",
        answers: [
            "for",
            "while",
            "do...while",
            "foreach"
        ],
        correct: 2
    },
    {
        question: "Как да добавим нов елемент в края на масива?",
        answers: [
            "array.push(newElement);",
            "array.add(newElement);",
            "array.append(newElement);",
            "array.insert(newElement);"
        ],
        correct: 0
    },
    {
        question: "Каква ще бъде дължината на масива след изпълнението на следния код?\nlet arr = [1, 2, 3];\narr.push(4);\narr[10] = 5;\nconsole.log(arr.length);",
        answers: [
            "4",
            "11",
            "10",
            "5"
        ],
        correct: 1
    },
    {
        question: "Как се достъпва стойността на свойство на обект?",
        answers: [
            'object.property',
            'object->property',
            'object[property]',
            'object{property}'
        ],
        correct: 0
    }
];


const task5 = [
    {
        question: "Как се декларира променлива в JavaScript?",
        answers: [
            "var name = 'Име';",
            "let age = 30;",
            "const pi = 3.14;",
            "Всичките отговори са верни."
        ],
        correct: 3
    },
    {
        question: "Какъв е резултатът от израза 5 + 3 * 2 ?",
        answers: [
            "11",
            "13",
            "16",
            "20"
        ],
        correct: 0
    },
    {
        question: "Какъв тип данни е 'Hello, World!' ?",
        answers: [
            "Число",
            "Низ",
            "Булев",
            "Обект"
        ],
        correct: 1
    },
    {
        question: "Как може да проверите дали дадена променлива е от тип число (number) в JavaScript?",
        answers: [
            "typeof variable === 'number'",
            "isNaN(variable)",
            "variable instanceof Number",
            "Всичките отговори са верни."
        ],
        correct: 0
    },
    {
        question: "Какъв е най-лесният начин да се изпълни JavaScript код?",
        answers: [
            "В конзолата на браузъра",
            "В отделен JavaScript файл",
            "В HTML файл, използвайки тагове <script>",
            "Всичките отговори са верни."
        ],
        correct: 3
    },
    {
        question: "Какъв е символът за коментар в JavaScript?",
        answers: [
            "//",
            "/*",
            "/* */",
            "Всеки от горните символи може да се използва."
        ],
        correct: 3
    },
    {
        question: "Как се декларира функция в JavaScript?",
        answers: [
            "function functionName() { ... }",
            "const functionName = () => { ... }",
            "И двата отговора са верни.",
            "Няма верен отговор."
        ],
        correct: 2
    },
    {
        question: "Как се извиква функция в JavaScript?",
        answers: [
            "functionName();",
            "functionName;",
            "И двата отговора са верни.",
            "Няма верен отговор."
        ],
        correct: 0
    },
    {
        question: "Какъв е обектът в JavaScript и как се декларира?",
        answers: [
            "Съвкупност от данни и функции, декларирана с {}.",
            "Списък с елементи, деклариран с [].",
            "Логически тип данни, деклариран с true или false.",
            "Няма верен отговор."
        ],
        correct: 0
    },
    {
        question: "Как се добавя елемент в масив в JavaScript?",
        answers: [
            "array.push(element);",
            "array[array.length] = element;",
            "И двата отговора са верни.",
            "Няма верен отговор."
        ],
        correct: 0
    }
];


let arr = [task1, task2, task3, task4, task5]



const question1 = [
    {
      question: "Какво ще бъде изведено в конзолата след изпълнението на следния код? \n \n console.log(0.1 + 0.2 === 0.3);\n```",
      answers: [
        "true",
        "false",
        "undefined",
        "Error"
      ],
      correct: 1
    },
    {
      question: "Какво представлява 'closure' в JavaScript?",
      answers: [
        "Функция, която запомня своето лексикално обкръжение, дори когато е изпълнена извън него",
        "Метод за манипулиране на DOM",
        "Функция, която винаги връща друга функция",
        "Синтактична конструкция за създаване на нови обекти"
      ],
      correct: 0
    },
    {
      question: "Какво ще бъде изведено в конзолата след изпълнението на следния код? \n let a = [1, 2, 3];\nlet b = [1, 2, 3];\nconsole.log(a == b);\n```",
      answers: [
        "true",
        "false",
        "undefined",
        "Error"
      ],
      correct: 1
    },
    {
      question: "Каква е разликата между 'let' и 'var' в JavaScript?",
      answers: [
        "'let' има блокова обхватност, докато 'var' има функционална обхватност",
        "'var' има блокова обхватност, докато 'let' има функционална обхватност",
        "Няма разлика, и двете декларират променливи",
        "'let' се използва само за константи, докато 'var' е за променливи"
      ],
      correct: 0
    },
    {
      question: "Какво ще бъде изведено в конзолата след изпълнението на следния код? \n \n (function() {\n  var a = b = 3;\n})();\nconsole.log(b);\n```",
      answers: [
        "3",
        "undefined",
        "Error",
        "ReferenceError"
      ],
      correct: 0
    },
    {
      question: "Как се създава асинхронна функция в JavaScript?",
      answers: [
        "async function myFunction() { ... }",
        "function myFunction() async { ... }",
        "async: function myFunction() { ... }",
        "function async myFunction() { ... }"
      ],
      correct: 0
    },
    {
      question: "Каква е разликата между '==' и '===' в JavaScript?",
      answers: [
        "'==' сравнява стойностите, докато '===' сравнява стойностите и типовете",
        "'===' сравнява стойностите, докато '==' сравнява стойностите и типовете",
        "'==' се използва за сравнение на числа, докато '===' за сравнение на стрингове",
        "'===' се използва за сравнение на обекти, докато '==' за сравнение на примитиви"
      ],
      correct: 0
    },
    {
      question: "Какво е 'event delegation' в JavaScript?",
      answers: [
        "Техника, при която се използва един обработчик на събития за родителски елемент, за да се управляват събитията на неговите потомци",
        "Метод за създаване на нови събития",
        "Процес на разпространение на събитията нагоре по DOM дървото",
        "Техника за прикачване на множество обработчици на събития към един елемент"
      ],
      correct: 0
    },
    {
      question: "Какво ще бъде изведено в конзолата след изпълнението на следния код?\n\nlet obj = { a: 1, b: 2 };\nlet obj2 = { ...obj, c: 3 };\nconsole.log(obj2);\n```",
      answers: [
        "{ a: 1, b: 2, c: 3 }",
        "{ a: 1, c: 3 }",
        "{ b: 2, c: 3 }",
        "{ a: 1, b: 2 }"
      ],
      correct: 0
    },
    {
      question: "Какво представлява 'prototype' в JavaScript?",
      answers: [
        "Механизъм за наследяване, който позволява на обектите да наследяват свойства и методи от други обекти",
        "Метод за създаване на нови инстанции на обекти",
        "Функция, която връща нови обекти",
        "Обект, който съдържа всички свойства и методи на дадена инстанция"
      ],
      correct: 0
    }
  ];


const question2 = [
    {
      question: "Какво ще бъде изведено в конзолата след изпълнението на следния код?\n\nconsole.log(typeof NaN);\n```",
      answers: [
        "'number'",
        "'NaN'",
        "'undefined'",
        "'object'"
      ],
      correct: 0
    },
    {
      question: "Какво ще бъде изведено в конзолата след изпълнението на следния код?\n\nlet x = 5;\nlet y = x++;\nconsole.log(y);\n```",
      answers: [
        "5",
        "6",
        "undefined",
        "Error"
      ],
      correct: 0
    },
    {
      question: "Какво представлява 'hoisting' в JavaScript?",
      answers: [
        "Механизъм, при който декларациите на променливи и функции се преместват в горната част на тяхната обхватност по време на изпълнение",
        "Метод за повишаване на производителността на кода",
        "Техника за управление на асинхронен код",
        "Процес на предаване на събитията надолу по DOM дървото"
      ],
      correct: 0
    },
    {
      question: "Какво ще бъде изведено в конзолата след изпълнението на следния код?\n\nlet a = 1;\nlet b = 2;\n[a, b] = [b, a];\nconsole.log(a, b);\n```",
      answers: [
        "1, 2",
        "2, 1",
        "undefined, undefined",
        "Error"
      ],
      correct: 1
    },
    {
      question: "Каква е разликата между 'null' и 'undefined' в JavaScript?",
      answers: [
        "'null' означава липса на стойност, докато 'undefined' означава, че променливата е декларирана, но няма стойност",
        "'undefined' означава липса на стойност, докато 'null' означава, че променливата е декларирана, но няма стойност",
        "'null' и 'undefined' са взаимозаменяеми",
        "Няма разлика, и двете означават липса на стойност"
      ],
      correct: 0
    },
    {
      question: "Какво ще бъде изведено в конзолата след изпълнението на следния код?\n\nfunction foo() {\n  return {\n    bar: 'Hello'\n  };\n}\nconsole.log(foo().bar);\n```",
      answers: [
        "'Hello'",
        "undefined",
        "Error",
        "null"
      ],
      correct: 0
    },
    {
      question: "Какво представлява 'callback' функция в JavaScript?",
      answers: [
        "Функция, която се предава като аргумент на друга функция и се изпълнява след като другата функция завърши",
        "Функция, която се извиква веднага след като бъде дефинирана",
        "Функция, която се изпълнява по време на зареждане на страницата",
        "Функция, която се използва за обработка на събития"
      ],
      correct: 0
    },
    {
      question: "Какво ще бъде изведено в конзолата след изпълнението на следния код?\n\nlet obj1 = { a: 1 };\nlet obj2 = Object.assign({}, obj1);\nobj2.a = 2;\nconsole.log(obj1.a);\n```",
      answers: [
        "1",
        "2",
        "undefined",
        "Error"
      ],
      correct: 0
    },
    {
      question: "Каква е разликата между 'setTimeout' и 'setInterval' в JavaScript?",
      answers: [
        "'setTimeout' изпълнява функция след определен период от време, докато 'setInterval' изпълнява функция многократно с интервал",
        "'setTimeout' изпълнява функция многократно с интервал, докато 'setInterval' изпълнява функция веднъж след определен период от време",
        "'setTimeout' и 'setInterval' са взаимозаменяеми",
        "Няма разлика, и двете изпълняват функция след определен период от време"
      ],
      correct: 0
    },
    {
      question: "Какво представлява 'Promise' в JavaScript?",
      answers: [
        "Обект, който представя бъдеща стойност или грешка от асинхронна операция",
        "Обект, който се използва за управление на синхронен код",
        "Функция, която винаги връща нов обект",
        "Метод за обработка на събития"
      ],
      correct: 0
    }
  ];


const question3 = [
    {
      question: "Какво ще бъде изведено в конзолата след изпълнението на следния код?\n\nlet x = 10;\nif (true) {\n  let x = 20;\n  console.log(x);\n}\nconsole.log(x);\n```",
      answers: [
        "10 и 10",
        "20 и 20",
        "20 и 10",
        "10 и 20"
      ],
      correct: 2
    },
    {
      question: "Каква е разликата между '==' и '===' в JavaScript?",
      answers: [
        "'==' сравнява стойността, докато '===' сравнява стойността и типа",
        "'==' сравнява стойността и типа, докато '===' сравнява само стойността",
        "Няма разлика между тях",
        "'==' е по-строго сравнение от '==='"
      ],
      correct: 0
    },
    {
      question: "Какво представлява 'hoisting' в JavaScript?",
      answers: [
        "Процесът на извикване на функция преди тя да бъде дефинирана",
        "Процесът на деклариране на променливи и функции в началото на тяхната обхватна среда",
        "Процесът на асинхронно изпълнение на функции",
        "Метод за оптимизация на производителността на кода"
      ],
      correct: 1
    },
    {
      question: "Какво ще бъде изведено в конзолата след изпълнението на следния код?\n\nfunction test() {\n  console.log(a);\n  var a = 1;\n}\ntest();\n```",
      answers: [
        "1",
        "undefined",
        "Error",
        "null"
      ],
      correct: 1
    },
    {
      question: "Какво представлява 'debouncing' в JavaScript?",
      answers: [
        "Техника за ограничаване на броя на изпълнения на дадена функция за определен период от време",
        "Метод за управление на асинхронен код",
        "Процес на създаване на дълбоки копия на обекти",
        "Техника за оптимизация на производителността на кода"
      ],
      correct: 0
    },
    {
      question: "Какво представлява 'throttling' в JavaScript?",
      answers: [
        "Техника за ограничаване на броя на изпълнения на дадена функция за определен период от време",
        "Метод за управление на асинхронен код",
        "Процес на създаване на дълбоки копия на обекти",
        "Техника за оптимизация на производителността на кода"
      ],
      correct: 0
    },
    {
      question: "Какво ще бъде изведено в конзолата след изпълнението на следния код?\n\nconst a = {};\nconst b = { key: 'b' };\nconst c = { key: 'c' };\na[b] = 123;\na[c] = 456;\nconsole.log(a[b]);\n```",
      answers: [
        "123",
        "456",
        "undefined",
        "Error"
      ],
      correct: 1
    },
    {
      question: "Какво представлява 'Proxy' в JavaScript?",
      answers: [
        "Обект, който позволява създаването на персонализирано поведение за основни операции (като четене/писане на свойства)",
        "Обект, който създава дълбоки копия на други обекти",
        "Обект, който се използва за управление на асинхронен код",
        "Обект, който представлява кеширане на данни"
      ],
      correct: 0
    },
    {
      question: "Какво ще бъде изведено в конзолата след изпълнението на следния код?\n\nlet a = [1, 2, 3];\nlet b = [...a];\nb.push(4);\nconsole.log(a);\n```",
      answers: [
        "[1, 2, 3]",
        "[1, 2, 3, 4]",
        "[1, 2, 3, undefined]",
        "Error"
      ],
      correct: 0
    },
    {
      question: "Какво представлява 'Symbol' в JavaScript?",
      answers: [
        "Уникален и неизменен тип данни, който може да бъде използван като идентификатор за свойства на обектите",
        "Обект, който позволява създаването на персонализирано поведение за основни операции (като четене/писане на свойства)",
        "Обект, който представлява кеширане на данни",
        "Уникален тип данни за представяне на големи числа"
      ],
      correct: 0
    }
  ];
  
  const domQuestions = [
    {
      question: "Как се избира елемент по неговия `id` в JavaScript?",
      answers: [
        "document.querySelector('#id')",
        "document.getElementById('id')",
        "document.getElementsByClassName('id')",
        "document.querySelectorAll('#id')"
      ],
      correct: 1
    },
    {
      question: "Какво ще бъде изведено в конзолата след изпълнението на следния код?\n```javascript\nlet div = document.createElement('div');\ndiv.innerHTML = '<p>Hello, world!</p>';\nconsole.log(div.firstChild.nodeName);\n```",
      answers: [
        "DIV",
        "P",
        "#text",
        "HTML"
      ],
      correct: 2
    },
    {
      question: "Как се добавя нов елемент като последно дете на съществуващ елемент?",
      answers: [
        "element.insertBefore(newElement, null)",
        "element.appendChild(newElement)",
        "element.insertAfter(newElement)",
        "element.replaceChild(newElement)"
      ],
      correct: 1
    },
    {
      question: "Как се премахва елемент от DOM?",
      answers: [
        "element.remove()",
        "element.removeChild(node)",
        "node.parentNode.removeChild(node)", 
        "document.removeElement(node)"
      ],
      correct: 2
    },
    {
      question: "Какво представлява 'event delegation' в JavaScript?",
      answers: [
        "Процесът на предаване на събитие от един елемент на друг",
        "Техника за добавяне на един обработчик на събития към родителски елемент, за да управлява събитията на множество дъщерни елементи",  // Верният отговор
        "Метод за управление на асинхронен код",
        "Процес на създаване на дълбоки копия на обекти"
      ],
      correct: 1
    },
    {
      question: "Как се избира всички елементи с клас `example`?",
      answers: [
        "document.querySelectorAll('.example')",  
        "document.querySelector('.example')",
        "document.getElementsById('example')",
        "document.getElementByName('example')"
      ],
      correct: 0
    },
    {
      question: "Как се добавя клас към елемент?",
      answers: [
        "element.addClass('class-name')",
        "element.classList.add('class-name')", 
        "element.className('class-name')",
        "element.setClass('class-name')"
      ],
      correct: 1
    },
    {
      question: "Какво ще се случи след изпълнението на следния код?\n```javascript\ndocument.body.innerHTML = '<div id=\"test\">Hello</div>';\ndocument.getElementById('test').addEventListener('click', function() {\n  console.log('Clicked!');\n});\ndocument.body.innerHTML = '';\ndocument.getElementById('test').click();\n```",
      answers: [
        "Clicked!",
        "Error", 
        "Нищо",
        "Hello"
      ],
      correct: 1
    },
    {
      question: "Как се променя текстовото съдържание на елемент?",
      answers: [
        "element.innerText = 'New text'", 
        "element.innerHTML = 'New text'",
        "element.textContent = 'New text'",
        "Всичките отговори са верни"
      ],
      correct: 3
    },
    {
      question: "Как се добавя обработчик на събитие за кликване към бутон?",
      answers: [
        "button.onClick('click', function)",
        "button.addEventListener('click', function)",  
        "button.click('addEventListener', function)",
        "button.onclick(function)"
      ],
      correct: 1
    }
  ];
  

  let arr2 = [question1, question2, question3, domQuestions];