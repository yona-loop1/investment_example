```markdown
# Investment Example

דוגמת פרויקט ליישום מערכת ניהול השקעות (CRM מותאם), הכוללת צד לקוח וצד שרת.  
המערכת פותחה עם **React + TypeScript** בצד הלקוח ו־**Fastify + TypeScript** בצד השרת, עם חיבור למסד נתונים רלציוני (**MySQL**).

---

## 📂 מבנה הפרויקט

```

investment\_example/
├── client/        # צד לקוח - React + TypeScript
│   ├── src/       # קומפוננטות, עמודים, Router, State Management
│   └── ...
│
├── server/        # צד שרת - Fastify + TypeScript
│   ├── src/       # ראוטים, סכמות, לוגיקה עסקית
│   ├── prisma/    # חיבור למסד נתונים (אופציונלי)
│   └── ...
│
└── README.md      # קובץ זה

````

---

## 🚀 טכנולוגיות בשימוש

- **Frontend**
  - React + TypeScript
  - React Router
  - MUI / Emotion (עיצוב)

- **Backend**
  - Node.js
  - Fastify
  - TypeScript
  - MySQL
  - Prisma ORM (אופציונלי)

---

## ⚙️ התקנה והרצה

### דרישות מוקדמות
- Node.js >= 18
- MySQL (מותקן ורץ)
- Git

### שלבים
1. שכפול הריפוזיטורי:
   ```bash
   git clone https://github.com/yona-loop1/investment_example.git
   cd investment_example
````

2. התקנת תלויות:

   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. יצירת קובץ `.env` בצד השרת עם הגדרות בסיסיות:

   ```
   DATABASE_URL="mysql://user:password@localhost:3306/investment_db"
   PORT=3001
   ```

4. הרצת צד השרת:

   ```bash
   cd server
   npm run dev
   ```

5. הרצת צד הלקוח:

   ```bash
   cd client
   npm run dev
   ```

6. פתיחת הדפדפן:

   ```
   http://localhost:5173
   ```

---

## 🛠️ פיצ'רים

* ניהול משתמשים ולקוחות
* שמירת מידע השקעות במסד נתונים
* ממשק משתמש אינטואיטיבי
* API מהיר ומאובטח עם Fastify
* ולידציות באמצעות סכמות

---

## 📌 תוכניות המשך

* הוספת JWT לניהול הרשאות
* Dashboard עם גרפים
* שילוב Machine Learning לניתוח השקעות
* שיפורי UI/UX


```

רוצה שאכין לך גם גרסה **תמציתית** יותר שמתאימה יותר ל־GitHub (רק הסבר קצר, התקנה והרצה), או שאתה מעדיף להשאיר את הגרסה המפורטת הזו?
```
