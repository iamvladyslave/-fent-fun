#!/bin/bash

echo "🚀 Запуск автоматического развертывания..."

# Проверяем, что мы в правильной папке
if [ ! -f "package.json" ]; then
    echo "❌ Ошибка: package.json не найден. Убедитесь, что вы в папке проекта."
    exit 1
fi

# Устанавливаем зависимости
echo "📦 Устанавливаем зависимости..."
npm install

# Собираем проект
echo "🔨 Собираем проект для продакшена..."
npm run build

# Проверяем, что сборка прошла успешно
if [ ! -d "dist" ]; then
    echo "❌ Ошибка: папка dist не создана. Проверьте ошибки сборки."
    exit 1
fi

echo "✅ Проект успешно собран!"

# Инструкции по развертыванию
echo ""
echo "🎯 Следующие шаги для развертывания:"
echo ""
echo "1. 🌐 Создайте аккаунт на [vercel.com](https://vercel.com)"
echo "2. 📁 Загрузите проект на GitHub:"
echo "   git init"
echo "   git add ."
echo "   git commit -m 'Initial commit'"
echo "   git branch -M main"
echo "   git remote add origin https://github.com/YOUR_USERNAME/fent-fun-clone.git"
echo "   git push -u origin main"
echo ""
echo "3. 🚀 Разверните на Vercel:"
echo "   - Войдите в vercel.com/dashboard"
echo "   - Нажмите 'New Project'"
echo "   - Выберите ваш GitHub репозиторий"
echo "   - Нажмите 'Deploy'"
echo ""
echo "4. 🌟 Получите бесплатный домен .fun:"
echo "   - Зарегистрируйтесь на freenom.com"
echo "   - Выберите домен .fun"
echo "   - Настройте DNS на Vercel"
echo ""
echo "🎉 После этого ваш проект будет доступен всем 24/7!"
echo ""
echo "📁 Готовые файлы для загрузки находятся в папке 'dist'"
