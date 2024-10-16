---
title: Behind the Scenes
layout: other.njk
templateEngineOverride: njk,md
cssFile: ../css/style.css
---

# Behind the Scenes

## Using 11ty


11ty is a static site generator using custom templating to depict how your site should be laid out. Essentially, after the initial set up, you create a template (or web of templates) to layout a website with multiple pages.

11ty is able to configure 10 templating languages to your desired site layout (even a combination of languages). For this site I decided to use HTML, Markdown, and Nunjucks. I may also use WebC depending on how the progression of the project goes.

Another huge part of 11ty is its ability to have Collections, i.e. a “collection” of blog posts or a “collection” of recipe pages. For this site I will be using collections to organize and layout my Stitches and Patterns pages.

### [Contents](#contents)<a id="contents"></a>
- [Requirements](#requirements)
- [Step #1: Download and Configuration](#step1)
- [Step #2: Base Layout, CSS, and 11ty Commands](#step2)
- [Step #3: Publishing to gh-pages](#step3)
- [Step #4: Layout Chaining](#step4)
- [Step #4.1 Setting up a Navigation](#step4-1)

### Requirements<a id="requirements"></a>
-	A fresh working github repository that you can easily push content to.
-	Basic knowledge in node.js
-   Knowledge in Markdown, HTML and CSS
-	For more information on the 11ty setup visit [11ty.dev](https://www.11ty.dev/)
-	For a video tutorial of these instructions visit this video (*・‿・)ノ [11ty.rocks tutorial](https://www.youtube.com/watch?v=p81J7G1qFAM&list=PLRsQ6aSNe0GDFHNteM1VUSQrTJvIKoMas&index=2)

### Step #1: Download and Configuration <a id="step1"></a>
Inside you new repo, use whatever terminal and use `npm init -y` to initialize the project. 
   - A `package.json` will appear in your repo directory


Next `npm install @11ty/eleventy` to install 11ty 
   - A `package-lock.json` and a folder called `node_modules` will appear in your root directory.


While using whatever web development software you’re most comfortable with, open `package.json` and add the following commands into the “script”:
   - `“start”: “eleventy --serve”,` 
   - `“build”: “eleventy”`
       - These commands will be used often in the terminal to develop and build your site.

Next let’s create a `.gitignore` file in your root and insert these lines of code:
```ignorelang
/node_modules
.idea/
```

Within your root, create another file and name it `.eleventy.js` and insert the following code
```js
module.exports = function (eleventyConfig){
    return{
        dir: {
            input: “_src”,
            output: “_site”
        },
      };
};
```
This code^ is telling 11ty to take everything within your future `_src` folder, convert a copy and place it inside of `_site`.

### Step #2: Base Layout, CSS, and 11ty Commands <a id="step2"></a>
Next, create a folder directory called `_src`, and within the folder _src, create a folder called `_includes`. Within _includes, create a file called `base.njk` (the name of the Nunjucks file can be anything, but base is standard).
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
- `{% raw %}{{ content | safe }}{%endraw%}` is Nunjucks placing the rest of the content here (and if there is straight HTML in the content you're working with, Nunjucks knows that it's "safe")

Next (inside `_src`), create the file `index.md`
- At the top of the file insert this block of code:
```
---
title: Home
layout: base.njk
---
```
- The title can be anything you like
- Everything within this index.md file is considered the "content" that is being pulled in through the Nunjucks in base.njk ^^^
- Using Markdown, go ahead and add some content to index.md


 
Back inside _src, create a folder called `CSS` and create a css file you will be using throughout your site within this folder. 
   - Add some styling while you’re at it, so we can see later if the file is configuring correctly.

Back inside base.njk, add this reference link to your CSS file.
   - `<link rel="stylesheet" href="file/path/to/your/css.css">`
     
Let’s jump back to your .eleventy.js file. Right now, if you were to “build” your site, 11ty would only be able to recognize your index.md file. To have 11ty recognize your _inlcudes, CSS folders and their content, add the following code to your .eleventy.js:
```js
    eleventyConfig.addPassthroughCopy("_src/_includes/");
    eleventyConfig.addPassthroughCopy("./_src/css/");
```
Your .eleventy.js file should look like this:
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
- The command to “build” is the same command you created in **Step #1** 
- When this command is used, 11ty will look for your  .eleventy.js file, discover that “_src” will be the input, and configure what’s directly inside _src and output a folder “_site” with the configured content.
- After the command is completed, you will now see the new _site folder.
- Inside _site is not your initial `index.md`, but an `index.html` with your Markdown content configured to HTML.
- Every time you add new content within the _src file and `npm run build`, your changes will be converted and placed in the existing _site.
- You _can_ add content to the _site folder, but it will be erased if that same content isn’t added to the _src as well.
- The only time I open the _site folder is to make sure files are configuring correctly and to view 11tys filing layout (examples will be shown later in this tutorial)

**_IMPORTANT_**
- From here on out, every time you "build," study the filing system within the _site folder
- However the _site folder is laid out is how you should plan on linking external files. 
- _site is what will be published to the web


To view live changes locally, use the command `npm run start`(as created in Step 3) and click on the localhost link provided in the terminal.
- Congrats! You got some working HTML and CSS.

### Step #3: Publishing to gh-pages<a id="step3"></a>

Let's set up your project for publishing before we get into some crazy stuff. 

First open up your `package.json` file, then insert the following command under the "scripts:"
- `"deploy": "gh-pages -d _site"`

Next, open your terminal, travel to your project directory, and commit your changes remotely. Then use the command `npm run deploy`

After your terminal loads a bunch of content and says "Published," open GitHub.com and open your repo. Click the branch dropdown, and you should see a "gh-pages" branch. 
- There you can open it and find the contents of your _site folder

Next, click on your repo's Setting/Pages, and under Source, set it to "Deploy from a branch"

Under Branch, set it to "gh-pages" and "/(root)" then hit Save.

- Congrats! Your content is now public!

### Step #4: Layout Chaining<a id="step4"></a>

You could essentially build an entire website by making multiple Markdown files using the base.njk layout, but 11ty has so much more to offer. The biggest feature 11ty offers is layout chaining. Layout chaining give you the ability to make a wide variety of templating for different versions of pages.

For this Crochet Craze, I created a "Home" template and an "Other" template that branches off of the base.njk. That way only the homepage has a different layout than the rest. (And the fact that all future pages will be within its own named folder containing index.html. Which will eventually cause some weird linking issues for the future nav bar)

So here's how ya do it: 

Inside of _includes, create two .njk files. They can be named anything, but if one is for Home and the second is for everything else, I named them `home.njk` and `other.njk`.

Next, add this code to both `home.njk` and `other.njk`:
```
---
layout: base.njk
---
```
Now, add some different features between the two layouts that can help discern one page from another once published. (Like a heading in both templates but with different text)

Next, move to your index.md file and change the layout from `base.njk` to `home.njk`

Then, inside of _src, create a new Markdown file and name it however you want. For my example, I named it `pattern-landing.md`
- Inside of `pattern-landing.md` I added:
```
---
title: Pattern Landing
layout: other.njk
---
```
- Go ahead and add some content in Markdown too.

Now, go ahead to your terminal, kill the local server if you're running one(`CTRL` or `CMD` and `y`), and `npm run build` then `npm run start` to view your newly built site.

**_IMPORTANT:_**
Even though you are able to view live edits to your Markdown off of localhost, you **_must_** `npm run build` after adding a new file to your project.

You may notice that we forgot to add a link to the new page... that was totally planned

### Step #4.1: Setting up a Navigation<a id="step4-1"></a>

Let's view our _site folder real quick. 

Right inside my _site is:
```
_src /
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
- Yours doesn't have to look exactly like mine with naming, but this should be the general structure.
- As you can see, my Pattern Landing HTML file is within the folder `pattern-landing`

So, for creating a link to our second page, you will have to accommodate for this extra folder.

Within my `home.njk` I've made a simple nav:
```html
<div id="nav">
    <a href="index.html">Home</a>
    <a href="pattern-landing/index.html">Patterns</a>
</div>
```
If you were to copy this nav into the `other.njk` template, neither link will work from within my Pattern Landing Page. Instead, look through the point of view of the `_site/pattern-landing/index.html` since again, _site is where the publishing happens.
- Since we will have to take a step out of `pattern-landing` folder to access the Home HTML index, the nav for `other.njk` should look like this:

```html
<div id="nav">
     <a href="../index.html">Home</a>
     <a href="../pattern-landing/index.html">Patterns</a>
</div>
```
- The reason why I added a step-up for the Pattern Landing Page link is for when `other.njk` is used throughout many pages. It'll save some headache in the future.

Once you load up localhost congrats! You have some working links!
- Now you can flip through your Home and secondary page!
- `base.njk`, `home.njk` and `other.njk` are a part of a chaining layout. I like to think of it as almost as a Russian Nesting Doll situation. `base.njk` is the most outer shell. `home.njk` and `other.njk` are equal but within the `base.njk`. And our content in our Markdown files is the inner most shell. When we "build", 11ty takes all the pieces and puts together the Russian Nesting Doll and outputs HTML pages.


### Step #4.2 Making CSS/JS Easier to Link Across All Pages

You may have noticed at this point that your CSS isn't being applied to your second page. This is because your second pages is using the same CSS link as your Home page. What your second page needs is a new file path that accommodates the extra step-up to reach your CSS file. 

Here's how you accommodate this. 

Open `base.njk` and find your CSS reference link, replace the entire filepath with {%raw%}{{ cssFile }}{%endraw%}.

Your reference link should look like this: 

`<link rel="stylesheet" href="{%raw%}{{cssFile}}{%endraw%}">`

Now, open your index.md and your second Markdown page and insert `cssFile:` and the corresponding file path within the `---`.

```
---
title: Home
layout: home.njk
cssFile: css/styles.css
---
```

```
---
title: Pattern Landing
layout: other.njk
cssFile: ../css/styles.css
---
```



### Step #5: <a id="step5"></a>

### Step #6: Creating Collections<a id="step6"></a>