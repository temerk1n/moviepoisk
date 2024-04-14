# Moviepoisk

## Запуск проекта

### Docker

Создайте ```.env``` файл по примеру ```.env.example``` и запустите

```bash
docker-compose -f docker-compose.dev.yml up
```

### Терминал

```bash
npm install
```

```bash
REACT_APP_TOKEN=<your api token> npm run start
```

## Авторизация

- Логин: ```user```
- Пароль: ```user```

## Функциональные требования
Приложение должно состоять из двух страниц:
1. ✅ Страница со списком всех фильмов
2. ✅ Страница отдельного фильма
#### На странице со списком всех фильмов:
1. ✅ Отображается список фильмов и сериалов
2. ✅ Реализована пагинация
3. ✅ Можно выбрать количество фильмов для показа на странице (по умолчанию должно быть 10)
4. ✅ Можно отфильтровать выдачу (по году, стране и возрастному рейтингу)
5. ✅ Реализован поиск по названию фильма
6. ✅ Можно перейти на страницу фильма из выдачи
#### Будет плюсом:
1. ✅ Если реализована возможность поделиться результатами выдачи с другими пользователями через копирование ссылки. (Подсказка: для этого можно записывать в query-параметры фильтры и пагинацию)
2. ✅ Если сохраняется история поиска (например, последние 20 запросов)
3. ✅ Если при вводе нового названия появляется suggest с предложениями из ранее введенных значений
4. ✅ Если при вводе значений происходит фильтрация подсказок по вхождению.  Например, при вводе «бой»: могут быть предложены результаты, содержащие «бой»: «при**бой**», «**бой**кий», «беспере**бой**ность» и т.д. (Ориентир: поиск в Google, который предлагает варианты из предыдущих запросов)
5. ✅ Если поиск осуществляется не при каждом вводе символа, а в момент когда с ввода последнего символа прошла 1 секунда (debounce)
#### На странице с отдельным фильмом:
1. ✅ Отображается информация о фильме или сериале, в том числе:
    - название фильма/сериала
    - описание
    - рейтинг
    - список актёров (с пагинацией, если их больше 10);
	- список сезонов и серий (с пагинацией, если они подразумеваются))
	- отзывы пользователей (с пагинацией)
    - постеры, отображение которых реализовано в виде «карусели»
2. ✅ Реализован вывод списка фильмов, похожих на текущий, в виде «карусели». По каждому элементу можно кликнуть и открыть его страницу
3. ✅ В случае, если какой-то из списков пустой (список отзывов, актёров, сезонов), реализовано отображение заглушки на подобие «нет информации о ...»
4. ✅ Реализована кнопка «назад», которая ведет на выдачу. Фильтры и номер страницы при этом должны сохраняться.
### Будет плюсом ко всей работе:
1. ✅ Если будет реализована авторизация. Проверку пароля можно захардкодить
2. Если будет реализована страница c поиском рандомного фильма как тут: [референс](https://www.kinopoisk.ru/chance/). При этом на этой странице будет реализована следующая функциональность:
   - ✅ страница с рандомным поиском будет доступна только авторизованным пользователям
   - есть возможность установить фильтры: по жанру, по стране производства, по типу контента (сериал/фильм), по году выпуска, по рейтингу Кинопоиска (от конкретного значения), по сети производства (HBO, Netflix и т.п.)
   - ✅ есть кнопка «Случайный фильм», которая перекидывает на страницу найденного фильма

## Нефункциональные требования
1. ✅ Стек технологий:
    - фронтенд фреймворк: React, версия 18
    - можно использовать любую общедоступную библиотеку компонент. Примеры: [ant.design](https://ant.design/), [mantine](https://mantine.dev/), [react-bootstrap](https://react-bootstrap.github.io/)
    - сборщик: Webpack
    - Node.js: 18 или выше
    - пакетный менеджер: npm
1. ✅ Запуск проекта в режиме разработчика должен происходить по команде `TOKEN=<your api token> npm run start` ; проект должен быть доступен по ссылке [http://localhost:7070](http://localhost:7070)
2. ✅ Реализован адаптивный интерфейс: с приложением должно быть удобно работать, как с мобильного экрана, так и с десктопа
3. ✅ Роутинг выполнен с использованием [React Router v6](https://reactrouter.com/en/main)
4. ✅ При переходах по ссылкам страница не перезагружается (SPA, без next.js)

***Напомним, важно: при работе над тестовым, убедитесь, что токен не расположен в вашем GitHub публично***

**Будет плюсом:**
1. ✅ Использование TypeScript
2. ✅ Наличие docker-файла для запуска
3. ✅ Реализация возможности выполнения трёх попыток повторного запроса, если запрос был неудачным
4. ✅ Если при переходе со страницы на страницу, запросы, относящиеся к старой странице, прерываются (отменяются/прекращаются)
5. Покрытие кода юнит-тестами

# Проблемы

Про поиске фильма по названию невозможно указать фильтры (api не позволяет), 
поэтому при вводе названия фильма все фильтры стираются и наоборот.