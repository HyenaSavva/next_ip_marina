## Запуск
```bash
docker-compose up --build
```
→ http://localhost:3000/profile
``
Сделайте рефреш страницы на всякий :)
``

### 📁 Структура (FSD)
```
src/
├── entities/user/     # Слайс стейта юзера
├── features/          
├── pages/profile/     # Страница профиля и её компоненты
├── shared/            # baseApi - апи в который инджектятся эндпоинты user-a, общий UI
└── widgets/           # Виджеты (navigation, footer)
```

### Оптимизации
- **Lazy loading** - `lazy()` + `Suspense` 
- **Skeleton loading** - для UI состояний

В большинстве стейт не менялся поэтому и не нужно было ничего мемоизировать.

### Дополнительно
- **MSW** для мока API `/profile/:id`
- **Responsive design** - `mobile first` с помощью тайлвинда
- **Zod validation** для type safety

### Mock Service Worker (MSW API)
- Возвращает данные пользователя по `GET https://msw/profile/:id`. 
- `src/shared/api/msw/` **сетап воркера**
- `src/entities/user/api/msw/` **эндпоинт узера (route)**
- Включается через **.env** - `NEXT_PUBLIC_ENABLE_MSW=true`

---
**Стек**: *Next.js, React + Typescript, Tailwind, Redux Toolkit, RTK Query, Feature-Sliced Design*.
