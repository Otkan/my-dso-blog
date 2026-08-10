# Juice Shop Master

This project documents selected OWASP Juice Shop security challenges completed as part of the **Developer Akademie** course.
All demonstrations were performed in a local virtual machine using the intentionally vulnerable OWASP Juice Shop application.
The purpose of this documentation is to explain common web application vulnerabilities, demonstrate their impact in a 
controlled environment, and discuss appropriate mitigation strategies.

> [!WARNING]
> **Educational Disclaimer**
>
> This documentation is intended **for educational purposes only**.
> All demonstrations were performed inside an isolated virtual machine running OWASP Juice Shop on **localhost**.
> The techniques described in this repository must never be used against systems without explicit authorization.

---

## Table of Contents

- [Quickstart](#quickstart)
- [Challenges](#challenges)
- [Videos](#videos)

---

## Quickstart

Clone the repository

```bash
git clone git@github.com:Otkan/my-dso-blog.git
```

Install the project dependencies

```bash
npm install
```

Start the Docusaurus development server

```bash
npm run start
```

Open your browser and navigate to:

```
http://<your_ip>:3000
```

---

## Challenges

| Challenge                  | OWASP Category | Documentation                                                 |
|----------------------------|---------------|---------------------------------------------------------------|
| View Another User's Basket | **Broken Access Control** | [View Another User's Basket](./challenge-01-view-other-users-basket/)       |
| API-only XSS               | **Injection (Stored XSS)** | [API-only XSS](./challenge-02-api-exposed-xss/) |
| Login as Jim               | **Injection (SQL Injection)** | [Login as Jim](./challenge-03-login-as-jim/)                  |

