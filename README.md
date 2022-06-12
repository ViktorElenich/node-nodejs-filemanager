# node-nodejs-filemanager

## Описание

Что бы запустить приложение введите команду: 
```bash
npm run start -- --username your_name
```

Список операций: 
- Навигация 
   - Перейти наверх текущего каталога 
   ```bash
   up
   ```
   - Перейти в указанаю папку
   ```bash
   cd path_to_file
   ```
   - Список всех файлов и папок текущего каталога
   ```bash
   ls
   ```
- Операции с файлами
   - Прочитать файл
   ```bash
   cat path_to_file
   ```
   - Создать пустой файл в текущем каталоге
   ```bash
   add new_name_file
   ```
   - Переименовать файл
   ```bash
   rn path_to_file path_to_new_directory
   ```
   - Копировать файл
   ```bash
   cp path_to_file path_to_new_directory
   ```
   - Переместить файл
   ```bash
   mv path_to_file path_to_new_directory
   ```
   - Удалить файл
   ```bash
   rm path_to_file
   ```
- Информация об операционной системе
   - Получить EOL
   ```bash
   os --EOL
   ```
   - Получить информацию о процессорах хост-машины
   ```bash
   os --cpus
   ```
   - Получить домашний каталог
   ```bash
   os --homedir
   ```
   - Получить текущее системное имя пользователя
   ```bash
   os --username
   ```
   - Получить архитектуру ЦП
   ```bash
   os --architecture
   ```
- Расчет хэша
   - Вычислить хэш для файла
   ```bash
   hash path_to_file
   ```
- Операции сжатия и распаковки
   - Сжать файл
   ```bash
   compress path_to_file path_to_destination
   ```
   - Распаковать файл
   ```bash
   decompress path_to_file path_to_destination
   ```