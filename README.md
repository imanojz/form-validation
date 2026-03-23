# 📝 Form Validation (jQuery Based)

This project is a simple and interactive **Form Validation System** built using HTML, CSS, and jQuery. It validates user inputs before allowing form submission.

---

## 🚀 Features

* ✅ Required fields validation
* 📱 Phone number validation (10 digits)
* 👤 First name & Last name validation
* 🚻 Gender selection validation
* 📅 Date of Birth validation
* 📧 Email validation (`@gmail.com` required)
* 🔒 Password & Confirm Password match check
* ⚡ Instant feedback using alerts

---

## 📁 Project Structure

```
Form-Validation/
│── index.html     # Main structure of the form
│── style.css      # Styling of the form UI
│── script.js      # jQuery validation logic
```

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (jQuery)
* jQuery CDN

---

## ⚙️ How to Run

1. Download or clone the project
2. Make sure all files are in the same folder
3. Open `index.html` in your browser
4. Fill the form and test validation

---

## 📋 Form Fields

* First Name
* Last Name
* Phone Number
* Gender (Radio Buttons)
* Date of Birth
* Email (Gmail only)
* Password
* Confirm Password

---

## 🔍 Validation Rules

| Field      | Rule                                 |
| ---------- | ------------------------------------ |
| First Name | Must not be empty                    |
| Last Name  | Must not be empty                    |
| Name Check | First & Last name cannot be the same |
| Phone      | Must be exactly 10 digits            |
| Gender     | Must be selected                     |
| DOB        | Required                             |
| Email      | Must end with `@gmail.com`           |
| Password   | Must match Confirm Password          |

---

## ⚡ How It Works

* `index.html` → Contains the form structure
* `style.css` → Handles layout and design
* `script.js` → Validates inputs using jQuery

Example validation:

```javascript
if(g !== h){
    alert("Your password is not matching...");
    return false;
}
```

---

## ⚠️ Important Notes

* ❗ Uses client-side validation only
* ❗ Alerts are used for feedback (basic UX)
* ❗ Form submission is prevented if validation fails

---

## 🔥 Future Improvements

* 🎨 Replace alerts with inline error messages
* ✅ Real-time validation (keyup events)
* 📧 Use regex for better email validation
* 🔐 Strong password rules (uppercase, symbols, etc.)
* 🌐 Backend integration (PHP / Node.js)

---

## 👨‍💻 Author

**Manoj**
Frontend Developer 🚀

---

## ⭐ Support

If you like this project, don’t forget to give it a ⭐ on GitHub!

---
