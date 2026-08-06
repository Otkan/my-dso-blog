# API-only XSS

This challenge demonstrates a **Stored Cross-Site Scripting (XSS)** vulnerability exposed through the OWASP Juice Shop API. 
It illustrates how insufficient input validation and output encoding can allow malicious JavaScript code to be stored and
executed within the application. All demonstrations were performed on a local OWASP Juice Shop instance running inside an 
isolated Kali Linux virtual machine for educational purposes only.

> [!WARNING]
> **Educational Disclaimer**
>
> This documentation is intended **for educational purposes only**.
> All demonstrations were performed on a local OWASP Juice Shop instance running on **localhost** inside an isolated virtual machine.
> The described techniques must never be used against systems without explicit authorization.

---

## Table of Contents

- [Goal](#goal)
- [OWASP Category](#owasp-category)
- [Environment](#environment)
- [Challenge Description](#challenge-description)
- [Methodology](#methodology)
- [Result](#result)
- [Screenshots](#screenshots)
- [Video Demonstration](#video-demonstration)
- [Security Impact](#security-impact)
- [Mitigation](#mitigation)
- [Conclusion](#conclusion)

---

## Goal

The objective of this challenge is to demonstrate a **Stored Cross-Site Scripting (XSS)** vulnerability through the 
OWASP Juice Shop API. The challenge highlights the risks of accepting and storing unvalidated user input, which may later 
be executed in another user's browser.

---

## OWASP Category

**Cross-Site Scripting (XSS)**

Cross-Site Scripting (XSS) is a common injection vulnerability that allows attackers to inject malicious client-side 
scripts into trusted web applications. If user input is not properly validated and encoded before being rendered, 
the injected script may execute in another user's browser.

This challenge demonstrates a **Stored XSS** vulnerability because the malicious payload is stored by the application
and executed whenever the affected content is displayed.

---

## Environment

| Property | Value                        |
|----------|------------------------------|
| Operating System | Kali Linux Virtual Machine   |
| Application | OWASP Juice Shop             |
| Deployment | NPM                          |
| Network | localhost                    |
| Analysis Tool | Burp Suite Community Edition |
| Browser | Burp Browser                 |

---

## Challenge Description

This challenge demonstrates how the OWASP Juice Shop API accepts and stores user-supplied data without sufficient validation.

By manipulating API requests, it is possible to inject JavaScript code into application data. Since the application later 
renders this data without proper output encoding, the injected script is executed in the browser.

This behavior demonstrates a classic **Stored Cross-Site Scripting (Stored XSS)** vulnerability.

---

## Methodology

The challenge was analyzed using **Burp Suite Community Edition** together with the integrated **Burp Browser**.

Relevant API traffic was intercepted while interacting with the application. The intercepted request was forwarded to 
**Burp Repeater**, where the HTTP request could be examined and modified.

During the analysis, the request method and JSON request body were adjusted to demonstrate how user-controlled data is 
processed by the backend API. A harmless JavaScript payload was inserted into one of the submitted fields as a proof of concept.

After the modified request was processed by the application, the injected payload was stored and later executed when the 
affected content was displayed.

To ensure a safe demonstration, only a simple JavaScript alert dialog was used as the payload.

The complete execution process is documented in the accompanying demonstration video.

---

## Result

The challenge was successfully completed by demonstrating that malicious JavaScript supplied through the API was stored 
and later executed within the application.

This confirms that the application is vulnerable to **Stored Cross-Site Scripting (Stored XSS)** due to insufficient 
input validation and output encoding.

---

## Video Demonstration

**Video Link**

> *(Imagine video link here.)*

The accompanying video demonstrates:

- Intercepting API requests using Burp Suite
- Inspecting the request within Burp Repeater
- Demonstrating the vulnerable API endpoint
- Executing a harmless JavaScript proof of concept
- Explaining the resulting security implications

---

## Security Impact

Stored Cross-Site Scripting vulnerabilities can have severe consequences.

Possible impacts include:

- Execution of arbitrary JavaScript in another user's browser
- Theft of session cookies
- Session hijacking
- Account compromise
- Unauthorized actions performed on behalf of victims
- Credential theft
- Phishing attacks
- Defacement of web pages

Because the malicious payload is stored by the application, every user viewing the affected content may become a victim.

---

## Mitigation

Stored XSS vulnerabilities can be prevented through proper input handling and secure output rendering.

Recommended mitigation strategies include:

- Validate all user input on the server side.
- Apply context-aware output encoding before rendering user-controlled data.
- Sanitize HTML input where appropriate.
- Implement a strict Content Security Policy (CSP).
- Avoid rendering untrusted HTML or JavaScript.
- Perform regular security testing to identify injection vulnerabilities.

---

## Conclusion

This challenge demonstrates that accepting user input without proper validation and output encoding can introduce serious 
security vulnerabilities.

Stored Cross-Site Scripting remains one of the most dangerous client-side attacks because malicious code can affect every 
user who accesses the vulnerable content. Secure input validation, output encoding, and browser security mechanisms such 
as Content Security Policy are essential to preventing these attacks.