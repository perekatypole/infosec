---
## Front matter
lang: ru-RU
title: Основы информационной безопасности
subtitle: Лабораторная работа №2
author:
  - Дроздова Д. И.
institute:
  - Российский университет дружбы народов, Москва, Россия
date: 01 марта 2024

## i18n babel
babel-lang: russian
babel-otherlangs: english

## Formatting pdf
toc: false
toc-title: Содержание
slide_level: 2
aspectratio: 169
section-titles: true
theme: metropolis
header-includes:
 - \metroset{progressbar=frametitle,sectionpage=progressbar,numbering=fraction}
 - '\makeatletter'
 - '\beamer@ignorenonframefalse'
 - '\makeatother'
---

# Вводная часть

## Цели и задачи

- Создать шаблон презентации в Markdown
- Описать алгоритм создания выходных форматов презентаций

# Лабораторная работа №2

## useradd guest
   Эта команда создает нового пользователя с именем "guest".

   ![Картинка с командой useradd](image/1.png)

## passwd guest
   Эта команда устанавливает пароль для пользователя "guest".

   ![Картинка с командой passwd](image/2.png)
   
   ![passwd](image/3.png)
   
   ![pwd](image/4.png)

## whoami
   Эта команда показывает текущего пользователя.

   ![Картинка с командой whoami](image/5.png)

## id, groups
   Эта команда показывает информацию о пользователе, включая имя, группу и ID.

   ![Картинка с командой id](image/6.png)
   
   ![/etc/passwd](image/7.png)
   
   ![/etc/passwd](image/8.png)

## ls -l /home/
   Эта команда показывает содержимое директории "/home" с подробной информацией о файлах и директориях, включая права доступа.

   ![Картинка с командой ls -l /home/](image/9.png)

## lsattr /home
   Эта команда показывает расширенные атрибуты директорий.

   ![Картинка с командой lsattr /home](image/10.png)

## mkdir dir1
   Эта команда создает новую директорию с именем "dir1".

   ![Картинка с командой mkdir dir1](image/11.png)

## chmod 000 dir1
   Эта команда устанавливает права доступа к директории "dir1" на "000", что означает отсутствие прав доступа для всех пользователей.

   ![Картинка с командой chmod 000 dir1](image/12.png)

## echo "test" > /home/guest/dir1/file1
   Эта команда пытается создать файл "file1" внутри директории "dir1", но из-за отсутствия прав доступа к директории не удается выполнить операцию.

   ![Картинка с командой echo "test" > /home/guest/dir1/file1](image/13.png)


   ![permission denied](image/14.png)

# Результаты

В ходе выполнения данной лабораторной работы мы получили практические навыки работы в консоли с атрибутами файлов, закрепили теоретические основы дискреционного разграничения доступа в современных системах с открытым кодом на базе ОС Linux.

