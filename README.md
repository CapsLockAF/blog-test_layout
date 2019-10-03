# GUI

## Фаренюк Олександр, viseven-it-academy-2019-task1
* Проект розроблений за допомогою: Gulp+Webpack, Babel, Pug, Sass; 
* Імпортовано normalize.scss (сторонніх бібліотек не використано);
* Зображення оптимізовані за рекомендацією google (webp, jpg, png);
* Шрифти локальні та добавлено властивість ```font-display: swap``` в стилі підключення;
* Респонсивно, адаптивно (мені так здалось =)

* На сторінці Videos зверху обраний користувачем відео файл; в другому блоці -- thumbs.
* В Videos цілі оригінальні зображення не вставляв, бо вважаю, коли прийде з бази 1000 картинок, вирівнювати кожну 
  відносно блоку -- це зрада) Тому тут не використав ```flex: 1 1 <px>``` для кожного video-thumb. Проте, це справа 5хв.
* В JS дві функції (бургер та зникнення "signin/up при активації пошуку).
* 
## Файлова структура
* Папка ```src``` - використовується для розробки
* Папка ```dist``` - папка, з котрої запускається локальний сервер для розробки (при запуску ```npm run dev```)
* Папка ```dist``` - папка, в котру збирається готовий проект (при запуску ```npm run build```)
```
gulp-pug-starter
├── dist---------------------------->**production
├── gulp-tasks
├── src ---------------------------->**development                              
│   ├── blocks
|   |   ├── modules                  **пусто
│   |   ├── header
|   │   |       ├── header.pug           **header сайту
|   │   |       ├── header.js            **клік на бургер та зникнення "signin/signup" при переключенні в пошук
│   |   |       ├── header.sass          **стилі хедера
|   |   ├── footer
|   │   │       ├── footer.pug           **footer сайту 
|   │   │       ├── footer.js            **пусто   
|   │   │       ├── footer.sass          **стилі футер
|   |   ├── articles
|   │   │       ├── articles.pug         **розділ Articles
|   │   │       ├── articles.sass        **стилі Articles
|   |   ├── videos
|   │   │       ├── videos_main.pug      **розділ Videos
|   │   │       ├── videos_main.sass     **стилі Videos
│   ├── fonts                        
│   ├── img
│   ├── js
│   ├── styles
|   |       ├──base
|   |       |     ├──fonts.sass           **підключення шрифтів
|   |       |     ├──general.sass         **загальні стилі
|   |       ├──helpers                   **загальні функції, міксини, змінні sass
|   |       ├──vendor                    **пусто (для бібліотек)
|   |       ├──main.sass                 **з'єднання всіх sass/scss    
|   ├── video                        ** відео файли (1 для прикладу)
│   ├── views    ---->** з'єднання pug модулів та шаблонів, та розподіл на дві сторінки
│   └── .htaccess
├── gulpfile.babel.js
├── webpack.config.js
├── package.json
├── .babelrc.js
├── .bemrc.js
├── .eslintrc.json
├── .stylelintrc
├── .stylelintignore
└── .gitignore
```
## Команди
* ```npm run dev``` - запуск сервера для розробкики проекта
* ```npm run build``` - зібрати проект з оптимізацією без запуску сервера