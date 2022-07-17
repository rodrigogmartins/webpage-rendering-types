# Webpage Rendering Types

This project was created to compare the final experience of use SSG, SSR or ISR in our websites, for that, I created a _fake server_ with 5 seconds of delay in each request using `json-server` package.

-------
### Running the project:

#### 1. Install the dependencies
```bash
$ npm install
```

#### 2. Start the server, in a second terminal
```bash
$ npm run start:server
```

#### 3. Build the project

Building the project you should see the effect of Static Site Generation (SSG) by the delay of 5 seconds on each request to fake server so your project's build time will be as slow as more pages you was rendering by SSG.
```bash
$ npm run build
```

#### 4. Run the app, in a second terminal
```bash
$ npm run start
```

#### 5. Explore the different scenarios.

http://localhost:3000

-------

### Static-Site Generation (SSG)

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

### Server-Side Rendering (SSR)

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

### Incremental Static Regeneration (ISR)

Server-Side Rendering describes the process of generate static pages at runtime (on-demand) instead of at build-time.

**Pros:**
  * **All of SGG**
  * **Faster builds**
  * **Higher Cache Hit Rate**

**Cons:**
  * **User will not see the most up-to-date version**
  * **If you rollback your site to a different deploy, your page will stay existing, because of cache**