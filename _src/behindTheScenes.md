---
title: Behind the Scenes
layout: other.njk
templateEngineOverride: njk,md
cssFile: ../css/style.css
---

[//]: # (--- the fence)

# Behind the Scenes <a id="top"></a>

## Using 11ty and SVGs

<span class="critique">_Is there something incorrect or needs rephrasing?? Go to [CrochetCraze GitHub issue](https://github.com/CrochetProject/CrochetCraze/issues/1) and write a comment! Or email me at srr5618@psu.edu_</span>

<a href="../behindTheScenes/index.html#top"><div id="backToTop">⇧</div></a>

11ty is a static site generator using custom templating to depict how your site should be laid out. After the initial set up, you create a template - or web of templates - to lay out a website with multiple pages.

11ty is able to configure 10 templating languages, and a combination of them, to your desired site layout. For this site I decided to use HTML, Markdown, and Nunjucks. Depending on how the project progresses, I may also use WebC.

Another huge part of 11ty is its ability to have Collections, i.e. a “collection” of blog posts or a “collection” of recipe pages. For this site, I will be using those collections to organize and lay out my Stitches and Patterns pages.

### [Contents](#contents)<a id="contents"></a>
- [Requirements](#requirements)
- [Part #1: Download and Configuration](#step1)
- [Part #2: Base Layout, CSS, and 11ty Commands](#step2)
- [Part #3: Publishing to gh-pages](#step3)
- [Part #4: Layout Chaining](#step4)
- [Part #4.5: Setting up a Navigation](#step4-5)
- [Part #5: Making CSS/JS Easier to Link Across All Pages](#step5)
- [Part #6: Creating a Collection](#step6)
- [Part #6.5: Linking to Pages within a Collection](#step6-5)

### Requirements<a id="requirements"></a>
-	A fresh, working GitHub repository that you can easily push content to.
-	Basic knowledge in Node.js
-   Knowledge in Markdown(MD), HTML and CSS
-	For more information on the 11ty setup visit [11ty.dev](https://www.11ty.dev/)
-	For a video tutorial of the 11ty instructions visit this video (*・‿・)ノ [11ty.rocks tutorial](https://www.youtube.com/watch?v=p81J7G1qFAM&list=PLRsQ6aSNe0GDFHNteM1VUSQrTJvIKoMas&index=2)

### Part #1: Download and Configuration <a id="step1"></a>
In your terminal of choice, navigate to your repo and use `npm init -y` to initialize the project. 
   - A `package.json` will appear in your repo directory


Next, `npm install @11ty/eleventy` to install 11ty 
   - A `package-lock.json` and a folder called `node_modules` will appear in your root directory.


Now, open your favorite text or code editor of choice. Open `package.json` and add the following commands into the “script”:
   - `“start”: “eleventy --serve”,` 
   - `“build”: “eleventy”`
       - These commands will often be used in the terminal to develop and build your site.

Next, let’s create a `.gitignore` file in your root directory and insert these lines of code: 


```ignorelang
/node_modules
.idea/
```
- `.gitignore` clears up all the unnecessary files from being pushed to your repo.

Within your root directory, create another file, name it `.eleventy.js` and insert the following code:

```ruby
module.exports = function (eleventyConfig){
    return{
        dir: {
            input: “_src”,
            output: “_site”
        },
      };
};
```



The code above is telling 11ty to take everything within your future `_src` folder, convert a copy, and place it inside of `_site`.

### Part #2: Base Layout, CSS, and 11ty Commands <a id="step2"></a>
Next, create a folder directory called `_src`. Within the folder `_src`, create a folder called `_includes`. Within `_includes`, create a file called `base.njk` (the Nunjucks file name can be anything, but base is standard).
   - Within `base.njk` add some basic HTML layout, i.e:
```html
<!doctype html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" 
           content="width=device-width, 
           user-scalable=no, 
           initial-scale=1.0, 
           maximum-scale=1.0, 
           minimum-scale=1.0">
     <meta http-equiv="X-UA-Compatible" 
           content="ie=edge">
     <title></title>
</head>
<body>

    {% raw %}{{ content | safe }}{%endraw%}
    
</body>
</html>
```
- `{% raw %}{{ content | safe }}{%endraw%}` is Nunjucks placing the rest of the content here. If there is straight HTML in the content you're working with, Nunjucks knows that it's "safe."

Next, (inside `_src`), create the file `index.md`
- At the top of the file, insert this block of code:
```
---
title: Home
layout: base.njk
---
```
- The `---` are called fences.
- The title can be anything you like.
- Everything within this `index.md` file is considered the "content" that is being pulled in through the Nunjucks in `base.njk` that was created above.
- Using Markdown, go ahead and add some content to `index.md`.


 
Back inside `_src`, create a folder called `CSS` to create a css file you will be using throughout your site within this folder. 
   - Add some styling while you’re at it, so we can see if the file is configuring correctly later.

Back inside `base.njk`, add this reference link to your CSS file.
   - `<link rel="stylesheet" href="file/path/to/your/css.css">`
     
After that, let’s jump back to your `.eleventy.js` file. If you were to “build” your site right now, 11ty would only be able to recognize your `index.md` file. To have 11ty recognize your `_inlcudes`, CSS folders, and their content, add the following code to your `.eleventy.js`:
```js
    eleventyConfig.addPassthroughCopy("_src/_includes/");
    eleventyConfig.addPassthroughCopy("./_src/css/");
```
Your `.eleventy.js` file should look like this:
```js
module.exports = function (eleventyConfig){
     eleventyConfig.addPassthroughCopy("_src/_includes/");
     eleventyConfig.addPassthroughCopy("./_src/css/");
     
     return{
         dir: {
            input: “_src”,
            output: “_site”
        },
    };
};

```

Now, in a terminal use the command `npm run build`
- The command to “build” is the same command you created in **Part #1** 
- When this command is used, 11ty will look for your  `.eleventy.js` file, discover that `_src` will be the input, and configure what’s inside `_src`, then output a folder `_site` with the configured content.
- After the command is completed, you will now see the new `_site` folder.
- Inside `_site` is _not_ your initial `index.md`, but an `index.html` with your Markdown content configured to HTML.
- Every time you add new content within the `_src` file and `npm run build`, your changes will be converted and placed in the existing `_site`.
- You _can_ add content to the `_site` folder, but it will be erased if that same content isn’t added to the `_src` as well.
- The only time I open the `_site` folder is to make sure files are configuring correctly and to view 11tys filing layout.

**_IMPORTANT_**
- From here on out, every time you "build," study the filing system within the `_site` folder
- However the `_site` folder is laid out is how you should plan on linking external files. 
- **`_site` is what will be published to the web.**

The following file layout is roughly what yours should look like at this point:

```
repo /
|-- _site /
|   |-- _includes /
|   |   |-- base.njk
|   |-- CSS /
|   |   |-- styles.css
|   |-- index.html
|
|-- _src /
|   |-- _includes /
|   |   |-- base.njk
|   |-- CSS /
|   |   |-- styles.css
|   |-- index.md
|
|-- .eleventy.js
|-- .gitignore
|-- package.json
|-- package-lock.json
```

To view live changes locally, use the command `npm run start`(as created in **Part #1**) and click on the localhost link provided in the terminal.
- Congrats! You got some working HTML and CSS!
- To kill the localhost, in the terminal use `CTRL/CMD + C` then `Y`.

### Part #3: Publishing to gh-pages<a id="step3"></a>

Let's set up your project for publishing, before we get into some crazy stuff. 

First, open up your `package.json` file, then insert the following command under the "scripts:"
- `"deploy": "gh-pages -d _site"`

Next, open your terminal, travel to your project directory, and commit your changes remotely. Afterwards, use the command `npm run deploy`.

After your terminal loads a bunch of content and says "Published," open GitHub.com and open your repo. Click the branch dropdown, and you should see a "gh-pages" branch. 
- There you can open it, and find the _contents_ of your _site folder.

Next, click on your repo's Setting/Pages, and under Source, set it to "Deploy from a branch."

Under "Branch" set the drop-down to "gh-pages" and "/(root)" and then hit Save.

- Congrats! Your content is now public!
- Your site link is provided at the top of the Pages settings.


### Part #4: Layout Chaining<a id="step4"></a>

You could potentially build an entire website by making multiple Markdown files using the `base.njk` layout, but 11ty has so much more to offer. The biggest feature 11ty offers is layout chaining, which gives you the ability to make a wide variety of templating for different versions of pages.

For this Crochet Craze, I created a "Home" template and an "Other" template that branches off of the `base.njk`. That way, only the homepage has a different layout than the rest. Just be aware that all future pages will be within its own named folder containing an `index.html`. Unfortunately, this will eventually cause some weird linking issues for the future nav bar. We will fix the nav bar in **Part #4.1**.

So, here's how ya layout chain: 

Inside of `_includes`, create two `.njk` files. They can be named anything, but if one is for Home and the second is for everything else. I named them `home.njk` and `other.njk`.

Next, add this code to both `home.njk` and `other.njk`:
```
---
layout: base.njk
---
```
Now, add some differentiating features between the two layouts that can help distinguish one page from another once published. A good example would be something like headers with different texts.

Next, move to your `index.md` file and change the layout from `base.njk` to `home.njk`.

Then, inside of `_src`, create a new Markdown file and name it however you want. For my example, I named it `pattern-landing.md`.
- Inside of `pattern-landing.md` I added:
```
---
title: Pattern Landing
layout: other.njk
---
```
- Go ahead and add some content in Markdown too.

Now, go ahead to your terminal, kill the local server if you're running one(`CTRL/CMD + C` then `Y`), and `npm run build` then `npm run start` to view your newly built site.

**_IMPORTANT:_**
Even though you are able to view most live edits to your Markdown off of localhost, you **_must_** `npm run build` **after** adding a new file to your project and **before** pushing changes to GitHub.

`base.njk`, `home.njk` and `other.njk` are a part of a chaining layout. I like to think of it as a Russian Nesting Doll situation. `base.njk` is the most outer shell. `home.njk` and `other.njk` are equal but within the `base.njk`. Our content in the Markdown files is the innermost shell. When we "build", 11ty takes all the pieces, puts together the Russian Nesting Doll, and outputs HTML pages.

### Part #4.5: Setting up a Navigation<a id="step4-5"></a>

Let's view our _site folder real quick. 

Right inside my _site is:
```
_site /
|-- _includes /
|   |-- base.njk
|   |-- home.njk
|   |-- other.njk
|-- CSS /
|   |-- styles.css
|-- pattern-landing /
|   |-- index.html
|-- index.html
```
- Yours doesn't have to look exactly like mine with naming schemes, but the general structure should be the same.
- As you can see, my Pattern Landing HTML file is within the folder `pattern-landing`

So, for creating a link to my second page, I will have to accommodate for this extra folder.

Within my `home.njk` I've made a simple nav:
```html
<div id="nav">
    <a href="index.html">Home</a>
    <a href="pattern-landing/index.html">Patterns</a>
</div>
```
If I were to copy this nav into the `other.njk` template, neither link will work from within my Pattern Landing Page. Instead, look through the point of view(POV) of the `_site/pattern-landing/index.html`, since _site is where the publishing happens.
- Since we will have to take a step out of `pattern-landing` folder to access the Home HTML index, the nav for `other.njk` should look like this:

```html
<div id="nav">
     <a href="../index.html">Home</a>
     <a href="../pattern-landing/index.html">Patterns</a>
</div>
```
- The reason why I added a step-up for the Pattern Landing Page link is for when `other.njk` is used throughout many other pages. It'll save some headache in the future.

Once you load up localhost, congrats! You have some working links!
- Now, you can flip through your Home and secondary page!


### Part #5: Making CSS/JS Easier to Link Across All Pages<a id="step5"></a>

You may have noticed at this point that your CSS isn't being applied to your second page - the one using `other.njk`. This is because your second pages is using the same CSS link as your Home page. Your second page needs a new file path that accommodates the extra step-up to reach your CSS file. 

Here's how you accommodate for this. 

Open `base.njk` and find your CSS reference link and replace the entire filepath with {%raw%}{{ cssFile }}{%endraw%}.

Your reference link should look like this: 

`<link rel="stylesheet" href="{%raw%}{{cssFile}}{%endraw%}">`

Now, open your `index.md` and your second Markdown page, and insert `cssFile:` and the corresponding file path within the fences.

```
---
title: Home
layout: home.njk
cssFile: css/styles.css
---
```

```
---
title: Pattern Landing Page
layout: other.njk
cssFile: ../css/styles.css
---
```

- `{%raw%}{{ cssFile }}{%endraw%}` is Nunjucks pulling the information you place in the fences. This trick is also very helpful when you have multiple CSS files. You can define which CSS file you want to use on whatever page from your MD file by using this technique.

This trick is also used for other files like JavaScript.


### Part #6: Creating a Collection<a id="step6"></a>

Collections is an 11ty feature that allows you to create a "collection" of pages with a consistent templating layout. Some examples could be a collection of blog posts, articles, tutorials etc. For this how-to, I will be creating a collection of crochet patterns called "patterns". What I want is each pattern to have its own page with a consistent layout.

First, I'll go into my `_includes` folder and create a new Nunjuck file template called `pattern.njk`.

Opening this new file, I added this to the top:
```
---
layout: base.njk
---

<div id="nav">
    <a href="../../index.html">Home</a>
    <a href="../../pattern-landing/index.html">Patterns</a>
</div>

<h1>Patterns</h1>

<h2>{%raw%}{{ title }}{%endraw%}</h2>

{%raw%}{{ content | safe }}{%endraw%}

```
**_IMPORTANT:_** I am using `base.njk` instead of `other.njk` because I needed to create a new NAV bar. Once the collection is complete and built, individual Pattern pages will have to jump an extra layer to access other pages. I will show my `_site` folder layout soon to show this.
- H1 saying "Patterns" as well as the NAV bar will appear every time `pattern.njk` is applied.
- I also added H2 with Nunjucks `{%raw%}{{ title }}{%endraw%}` for later use.

Next, I'll create a folder called "patterns" in my `_src`, then add a couple markdown files called "grannySquare" and "heartPattern" within the new folder.

Still within the `patterns` folder, create a file called `patterns.json` and add the following code:
```json
{
  "layout": "pattern.njk",
  "tags": "patternFolder",
  "cssFile": "../../css/style.css"
}
```
- `patterns.json` dictates what happens to all the files within the folder. Therefore, `grannySquare.md` and `heartPattern.md` will use layout `pattern.njk`
- `patterns.json` also labels the folder by tagging it to be "patternFolder." This tag will be useful soon.

**_IMPORTANT_** however you name the collection folder is how you will name your `.json` file. i.e. "patterns" folder and "patterns.json."


Within each of these new markdown files, I'll add:

```
---
title: Granny Square
---
```
```
---
title: Heart Pattern
---
```

- Whatever we put into `title:` will then be placed in place of `{%raw%}{{ title }}{%endraw%}` in `pattern.njk`

Now, go ahead and `npm run build` in the terminal. My repo folder now looks like this:


```
repo /
|-- _site /
|   |-- _includes /
|   |   |-- base.njk
|   |-- CSS /
|   |   |-- styles.css
|   |-- patterns /
|   |   |-- grannySquare /
|   |   |   |-- index.html
|   |   |-- heartPattern /
|   |   |   |-- index.html
|   |   |-- grannySquare.md
|   |   |-- heartPattern.md
|   |   |-- patterns.json
|   |-- index.html
|
|-- _src /
|   |-- _includes /
|   |   |-- base.njk
|   |-- CSS /
|   |   |-- styles.css
|   |-- patterns /
|   |   |-- grannySquare.md
|   |   |-- heartPattern.md
|   |   |-- patterns.json
|   |-- index.md
|
|-- .eleventy.js
|-- .gitignore
|-- package.json
|-- package-lock.json
```
Ok.

It's starting to get a little excessive, but this is how it works.

If I wanted to stop and view my new `heartPattern` page right now, I would `npm run build` and `start`, then in my browser I'll enter the localhost filepath: localhost:8081/patterns/heartPattern/index.html

**_IMPORTANT_** the MD files in `_src/patterns` are copied as MD files while _ALSO_ creating a unique folder and `index.html` file in `_site/patterns`. This is **normal**. I do not know why, however. 

### Part #6.5: Linking to Pages within a Collection<a id="step6-5"></a>

Ok, I have a collection of patterns within a `patterns` folder, imma show you a couple of examples on how to link to them within my existing Pattern Landing Page. 

First is the Nunjucks way

Within my `pattern-landing.md` you can use a Nunjucks for loop.

```
{%raw%}{% for page in collections.patternFold %}

[{{page.data.title}}]({{page.url}})

{% endfor %}{%endraw%}
```

- between {%raw%}`{% %}`{%endraw%}, for each page in collections.[tag-name within patterns.json]

  -  Use MD link syntax
  - {%raw%}`{{page.data.title}}`{%endraw%} is Nunjucks that grabs the `title:` information within each unique pattern page.
  - {%raw%}`{{page.url}}`{%endraw%} grabs the unique URL for the correlating pattern page.
- {%raw%}`{%endfor%}`{%endraw%} closes the for loop.
- The "page" variable can be named however you like, "page" is what I like to use.
- The links will display as inline links.
- This method is great for simplicity.

<br/>
<br/>

Next is just straight up HTML within my MD files:

```html
<a href="../patterns/grannySquare/index.html">
    Granny Square
</a>
<a href="../patterns/heartPattern/index.html">
    Heart Pattern
</a>
```
- This method is great if you want more control on styling these links.
- Since HTML overrides Markdown, you can avoid the extra layers of `<p></p>` tags that Markdown applies.
- This was my preferred method, so I could use text AND images to be links to my patterns.
