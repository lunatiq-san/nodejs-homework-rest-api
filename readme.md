# Домашнее задание 5

Создай ветку `hw05-avatars` из ветки `master`.

Продолжи создание REST API для работы с коллекцией контактов. Добавь возможность загрузки аватарки пользователя через [Multer](https://github.com/expressjs/multer).

## Шаг 1

Создай папку `public` для раздачи статики. В этой папке сделай папку `avatars`. Настрой Express на раздачу статических файлов из папки `public`.

Положи любое изображение в папку `public/avatars` и проверь что раздача статики работает. При переходе по такому URL браузер отобразит изображение.

```shell
http://locahost:<порт>/avatars/<имя файла с расширением>
```

## Шаг 2

В схему пользователя добавь новое свойство `avatarURL` для хранения изображения.

```shell
{
  ...
  avatarURL: String,
  ...
}
```

- Используй пакет [gravatar](https://www.npmjs.com/package/gravatar) для того чтобы при регистрации нового пользователя сразу сгенерить ему аватар по его `email`.

## Шаг 3

При регистрации пользователя:

- Создавай ссылку на аватарку пользователя с помощью [gravatar](https://www.npmjs.com/package/gravatar)
- Полученный URL сохрани в поле `avatarURL` во время создания пользователя

## Шаг 4

Добавь возможность обновления аватарки, создав эндпоинт `/users/avatars` и используя метод `PATCH`.

![avatar upload from postman](./avatar-upload.png)

```shell
# Запрос
PATCH /users/avatars
Content-Type: multipart/form-data
Authorization: "Bearer {{token}}"
RequestBody: загруженный файл

# Успешный ответ
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  "avatarURL": "тут будет ссылка на изображение"
}

# Неуспешный ответ
Status: 401 Unauthorized
Content-Type: application/json
ResponseBody: {
  "message": "Not authorized"
}
```

- Создай папку tmp в корне проекта и сохраняй в неё загруженную аватарку.
- Обработай аватарку пакетом [jimp](https://www.npmjs.com/package/jimp) и задай для нее размеры 250 на 250
- Перенеси аватарку пользователя из папки tmp в папку `public/avatars` и дай ей уникальное имя для конкретного пользователя.
- Полученный `URL` `/avatars/<имя файла с расширением>` сохрани в поле `avatarURL` пользователя

## Дополнительное задание - необязательное

### 1. Написать unit-тесты для мидлвара по авторизации

При помощи [Jest](https://jestjs.io/ru/docs/getting-started)

- все методы и функции, вызываемые мидлваром (вместе с next), должны быть заглушены при помощи mock
- нужно проверить количество вызовов заглушок и аргументы, с которыми они вызывались в случаях, когда:
  - пользователь не передал токен в `Authorization` заголовке
  - токен пользователя невалидный
  - токен пользователя валидный

> Подсказка: Иногда Вам может понадобится переопределить возвращаемые значения методов-заглушок

### 2. Написать e2e (приемочные) тесты для ендпоинта обновления аватарок

Необходимо будет использовать пакет [supertest](https://www.npmjs.com/package/supertest)

Тесты должны проверять:

- возвращается ли ответ со статус кодом 401, если токен пользователя невалидный
- В случае, если все прошло успешно, проверить:
  - возвращается ли ответ со статус кодом 200
  - возвращается ли тело ответа в правильном формате
  - добавляется ли `avatarUrl` в документ целевого пользователя
