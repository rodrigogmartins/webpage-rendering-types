## Static-Site Generation (SSG)

Static Generation describes the process of compiling and rendering a website or app at build time. The output is a bunch of static files, including the HTML file itself and assets like JavaScript and CSS.

**Pros:**
  * **Cheap**
  * **Security**
  * **Speed**
  * **Scalability**
  * **No need of a backend server**

**Cons:**
  * **No user management**
  * **Increase the build time**


![Chart showing the relation betwwen amount of pages and build time](https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/384b3f3b-756d-4061-92c4-59a4d2a9f1fb/build-times-regeneration-nextjs.png)

## Server-Side Rendering (SSR)

Server-Side Rendering describes the process of pre-rendering the page on the server, which is then generated upon each user request.

**Pros:**
  * **Great for SEO**
  * **Quck initial access**

**Cons:**
  * **No user management**
  * **Higher latency**
  * **Server cost**
  * **Vulnerability**
  * **Slower page transitions**

## Incremental Static Regeneration (ISR)

Server-Side Rendering describes the process of generate static pages at runtime (on-demand) instead of at build-time.

**Pros:**
  * **All of SGG**
  * **Faster builds**
  * **Higher Cache Hit Rate**

**Cons:**
  * **User will not see the most up-to-date version**
  * **If you rollback your site to a different deploy, your page will stay existing, because of cache**