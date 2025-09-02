# 🚀 Развертывание на Vercel (Бесплатно)

## 📋 Что нужно сделать:

### 1. Установить Vercel CLI
```bash
npm install -g vercel
```

### 2. Войти в аккаунт Vercel
```bash
vercel login
```

### 3. Развернуть проект
```bash
vercel --prod
```

## 🌐 Получение домена .fun

### Вариант 1: Vercel + Freenom (Бесплатно)
1. После развертывания на Vercel получите URL вида: `your-project.vercel.app`
2. Зарегистрируйтесь на [freenom.com](https://freenom.com)
3. Выберите бесплатный домен .fun
4. Настройте DNS записи на Vercel

### Вариант 2: Vercel + Namecheap (.fun домены)
1. Купите домен .fun на [namecheap.com](https://namecheap.com) (~$10/год)
2. Настройте DNS записи на Vercel

## 🔧 Настройка DNS для домена .fun

### В панели управления доменом добавьте:
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
```

### Или для www:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## 📱 Настройка в Vercel Dashboard

1. Зайдите на [vercel.com/dashboard](https://vercel.com/dashboard)
2. Выберите ваш проект
3. Перейдите в Settings → Domains
4. Добавьте ваш домен .fun
5. Следуйте инструкциям по настройке DNS

## 🎯 Альтернативные бесплатные хостинги

### Netlify (тоже бесплатно)
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
1. Создайте репозиторий на GitHub
2. Включите GitHub Pages в настройках
3. Загрузите содержимое папки `dist`

## 💡 Советы для оптимизации

1. **Сжатие изображений** - используйте WebP формат
2. **Lazy loading** - загружайте 3D модели по требованию
3. **CDN** - Vercel автоматически использует CDN
4. **Кэширование** - настройте заголовки кэширования

## 🚨 Возможные проблемы

### Проблема: Белый экран после загрузки
**Решение:** Проверьте консоль браузера на ошибки JavaScript

### Проблема: 3D сцена не отображается
**Решение:** Убедитесь, что WebGL поддерживается браузером

### Проблема: Медленная загрузка
**Решение:** Оптимизируйте размер 3D моделей и текстур

## 📞 Поддержка

- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Документация: [vercel.com/docs](https://vercel.com/docs)
- Сообщество: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

---

🎉 **После настройки ваш 3D космический проект будет доступен всем по адресу: `your-project.fun`** 🎉
