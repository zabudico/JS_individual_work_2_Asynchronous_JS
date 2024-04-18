# JS_individual_work_2_Asynchronous_functions

Advanced JavaScript features including asynchronous JavaScript, modules, and error handling.

Продвинутый функции JavaScript, включая асинхронный JavaScript, модули и обработку ошибок.

## 1.Инструкции по запуску проекта

1. Убедитесь, что у вас есть подключение к интернету.

2. Клонируйте репозиторий проекта.
   
```  
      git clone https://github.com/<your-github-username>/activity-for-captain-smith.git
 ```

3. Перейдите в каталог проекта.
```
      cd activity-for-captain-smith
```

4. Запустите сервер разработки.
```
      npm install
      npm start
```
5. Откройте страницу `index.html` в браузере.
   
   Перейдите по ссылке `http://localhost:3000` в вашем браузере.

   * У меня это `http://127.0.0.1:5500/`, так как я испольузую Live Server. У вас может отличаться , в зависимости от сервера, который вы используете для тестирования приложения.

## 2.Описание лабораторной работы

Цель: Ознакомить студентов с продвинутыми функциями JavaScript, включая асинхронный JavaScript, модули и обработку ошибок.

Задача: Разработать мини-приложение, которое будет предлагать капитану Смиту новое занятие при каждом обновлении.

Условия работы - https://github.com/MSU-Courses/javascript_typescript/blob/main/lab/LI2/JS02.md

## 3.Краткая документация к проекту

   'index.js' - Этот скрипт служит в качестве точки входа в проект. Он вызывает функцию `updateActivity` из файла `activity.js`

   'activity.js' - Этот файл определяет работу всего проекта, в частности реализацию функции `getRandomActivity`, которая получает случаюную активность (предложение чем можно заняться капитану Смиту) с                               https://www.boredapi.com/api/activity/ при помоши API. Эта функция вызываеться в `updateActivity`, которая обновляет содержимое тега <i id="activity"></i> на html странице index.html

   'index.html' - В этом файле содержаться вёрстка основной (единственной) страницы проекта, на ней мы выводим (при помощи html, css, js, API) активность , которой капитан Смит может заняться.

   'index.css' - Файл содержащий стили для `index.html`

## 4.Примеры использования проекта


```
//index.js

// Initially update the activity
updateActivity();

// Update the activity every minute
setInterval(updateActivity, 60000);
```

![image](https://github.com/zabudico/JS_individual_work_2_Asynchronous_JS/assets/112975702/7a5d0ecb-5b12-4ec5-bbca-0d3c0a9d8fcd)

![image](https://github.com/zabudico/JS_individual_work_2_Asynchronous_JS/assets/112975702/960f3878-7ffe-47c4-bf50-844797dfa162)

![image](https://github.com/zabudico/JS_individual_work_2_Asynchronous_JS/assets/112975702/bacdcb92-32be-474f-921c-dd81e2a14199)

## 5.Ответы на контрольные вопросы

1. Какое значение возвращает функция fetch?

      Функция `fetch` возвращает объект `Promise`, который представляет собой асинхронную операцию.

2. Что представляет собой Promise?
 
      `Promise` - это объект JavaScript, который представляет собой асинхронную операцию с неизвестным результатом в данный момент.

3. Какие методы доступны у объекта Promise?

      `then(onFulfilled, onRejected)` : позволяет указать функции, которые будут вызваны при успешном `(onFulfilled)` или неудачном `(onRejected)` завершении асинхронной операции.
      `catch(onError)` : позволяет указать функцию, которая будет вызвана при возникновении ошибки во время асинхронной операции.

4. Каковы основные различия между использованием `async` / `await` и `Promise`?

      `async/await` - это более лаконичный и читаемый синтаксис для работы с `Promise`.
      `Promise` - более низкоуровневый подход, требующий больше кода для обработки асинхронных операций.

## 6.Использованные источники

   Документация Node.js: https://nodejs.org/docs/

   MDN Web Docs: https://developer.mozilla.org/en-US/

## 7.Дополнительные важные аспекты

     *Семантическая разметка: Использование семантической разметки HTML5 (например, элементов <header>, <nav>, <main>, <article>, <section>, <footer>) улучшит доступность приложения для пользователей с             
     ограниченными возможностями.

     *Атрибуты ARIA: Добавление атрибутов ARIA к элементам HTML позволит вспомогательным технологиям (например, экранным ридерам) правильно интерпретировать содержимое страницы.

     *Контрастность: Обеспечение достаточной контрастности между текстом и фоном позволит сделать текст читаемым для людей с нарушениями зрения.

