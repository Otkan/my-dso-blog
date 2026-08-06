# View Another User's Basket

This challenge demonstrates a **Broken Access Control** vulnerability within the intentionally vulnerable OWASP Juice 
Shop application. It illustrates how missing server-side authorization checks can allow authenticated users to access 
resources belonging to other users. All demonstrations were performed on a local OWASP Juice Shop instance running inside
an isolated Kali Linux virtual machine for educational purposes only.

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

The objective of this challenge is to demonstrate a **Broken Access Control** vulnerability by accessing the shopping 
basket of another user. The exercise highlights the importance of proper server-side authorization and object ownership 
validation for user-specific resources.

---

## OWASP Category

**Broken Access Control**

Broken Access Control occurs when an application does not correctly enforce restrictions on authenticated users. As a 
result, users may gain unauthorized access to resources that belong to other users.

This challenge is an example of **Broken Object Level Authorization (BOLA)**, where access to objects is controlled only
by predictable identifiers instead of proper authorization checks.

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

The shopping basket functionality of OWASP Juice Shop exposes an authorization weakness.

Each shopping basket is identified by a numeric identifier. The application fails to properly verify whether the requested
basket belongs to the currently authenticated user before returning its contents.

Because of this missing ownership validation, it is possible to retrieve information from another user's shopping basket.

---

## Methodology

The challenge was analyzed using **Burp Suite Community Edition** together with the integrated **Burp Browser**.

While interacting with the shopping basket, the corresponding HTTP request was intercepted using Burp Suite. 
The intercepted request was then forwarded to **Burp Repeater** for further analysis.

Within Burp Repeater, the basket identifier contained in the request URL was modified to reference a different basket. 
After sending the modified request, the application returned the contents of another user's shopping basket in JSON format.

This behavior demonstrates that the backend relies on the provided basket identifier without performing sufficient 
server-side authorization checks.

The complete execution process is documented in the accompanying demonstration video.

---

## Result

The challenge was successfully completed by retrieving the contents of another user's shopping basket.

The returned JSON response confirmed that the application exposes user-specific data without properly validating resource
ownership, demonstrating a **Broken Access Control** vulnerability.

---

## Video Demonstration

**Video Link**

> *(Imagine video link here.)*

The accompanying video demonstrates:

- Intercepting the basket request with Burp Suite
- Analyzing the request using Burp Repeater
- Modifying the basket identifier
- Successfully retrieving another user's basket
- Explaining the resulting security implications

---

## Security Impact

Broken Access Control vulnerabilities can have severe consequences for both users and organizations.

Possible impacts include:

- Unauthorized access to confidential user information
- Disclosure of personal or business-related data
- Privacy violations
- Unauthorized modification of resources
- Loss of customer trust
- Increased attack surface for further attacks

If similar vulnerabilities exist in production systems, attackers may be able to access sensitive information simply by 
manipulating object identifiers.

---

## Mitigation

The vulnerability can be prevented by implementing robust server-side authorization controls.

Recommended mitigation strategies include:

- Validate resource ownership on every request.
- Enforce object-level authorization before returning protected resources.
- Never rely solely on client-supplied identifiers.
- Apply the Principle of Least Privilege.
- Perform regular authorization testing during development.
- Conduct security reviews focusing on access control mechanisms.

---

## Conclusion

This challenge demonstrates that authentication alone is not sufficient to protect sensitive resources.

Applications must verify that every authenticated user is authorized to access the requested resource. 
Proper server-side authorization and ownership validation are essential to prevent unauthorized data exposure and 
remain one of the most important security requirements for modern web applications.
