# JS_individual_work_2_Asynchronous_JS

Advanced JavaScript features including asynchronous JavaScript, modules, and error handling.

Продвинутый функции JavaScript, включая асинхронный JavaScript, модули и обработку ошибок.

## 1.Инструкции по запуску проекта

1. Убедитесь, что у вас есть подключение к интернету 

2. Клонируйте репозиторий проекта.

3. Откройте в браузере файл `index.html`.

4. Поместите данные о ваших транзакциях в формате JSON в директорию utils с именем файла transactions.json.

5. Запустите проект, выполнив node index.js в вашем терминале.

## 2.Описание лабораторной работы

Лабораторная работа заключается в анализе данных о транзакциях, хранящихся в файле JSON. Проект использует Node.js для чтения данных о транзакциях, их анализа с использованием класса TransactionAnalyzer и предоставления различной информации, такой как общая сумма, уникальные типы транзакций, транзакции по дате и т. д.

## 3.Краткая документация к проекту

'index.js' - Этот скрипт служит в качестве точки входа в проект. Он читает данные о транзакциях из файла JSON, анализирует их с помощью TransactionAnalyzer и выводит результаты в консоль.

'TransactionAnalyzer.js' - Этот файл определяет класс TransactionAnalyzer, отвечающий за анализ данных о транзакциях. Он предоставляет методы для различных анализов, таких как подсчет общей суммы, получение уникальных типов транзакций, поиск транзакций по дате и т. д.

'transactions.json' - В этом файле содержаться все совершённые транзакции, их мы и обрабатываем.

## 4.Примеры использования проекта

Пример 1: Получение уникальных типов транзакций
// в комментариях находиться результат работы кода.

```console.log("Unique Transaction Types:", analyzer.getUniqueTransactionType());```
//  Unique Transaction Types: [ 'debit', 'credit' ]

Пример 2: Подсчет общей суммы

```console.log("Общая сумма:", analyzer.calculateTotalAmount());``` // Total Amount: 8000

Пример 3: Подсчет общей суммы для определенной даты

```console.log("Общая сумма за 2019-01-01:",analyzer.calculateTotalAmountByDate(2019, 1, 1));```// Total Amount for 2019-01-01: 100

Пример 4: Вывод строки представления транзакции по ID   

```
const transactionId = "97";
console.log(`\nString representation of transaction with ID ${transactionId}:`);
console.log(analyzer.string(transactionId));
```

![image](https://github.com/zabudico/JS_individual_work_1_Transactions/assets/112975702/78482f66-9f68-446e-a70c-0280f44834eb)

//В проекте реализованно множество других методов для работы с транзакциями

## 5.Ответы на контрольные вопросы

1. Какова цель проекта?

Цель проекта состоит в анализе данных о транзакциях, хранящихся в файле JSON, и предоставлении различных инсайтов, таких как общая сумма, уникальные типы транзакций, транзакции по дате и т. д.

3. Как проект обрабатывает ошибки при чтении файла транзакций?
 
Проект проверяет ошибки при чтении файла транзакций с использованием функции fs.readFile в Node.js. Если происходит ошибка, он выводит ошибку в консоль.

4. Как транзакции представлены внутри проекта?

Транзакции представлены как объекты внутри проекта, с такими свойствами, как ID транзакции, тип, сумма, дата и т. д.

## 6.Использованные источники

Документация Node.js: https://nodejs.org/docs/

MDN Web Docs: https://developer.mozilla.org/en-US/

## 7.Дополнительные важные аспекты

*  Проект использует асинхронные операции чтения файлов для обеспечения неблокирующего поведения.
*  Он предоставляет методы для различных анализов транзакций, что делает его универсальным для различных случаев использования.
*  Класс TransactionAnalyzer может быть расширен или изменен для учета дополнительных требований анализа.

