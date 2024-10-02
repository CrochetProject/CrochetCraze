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



### Requirements
-	A fresh working github repository that you can easily push content to.
-	Basic knowledge in node.js
-	For more information on the 11ty setup visit 11ty.dev
-	For a video tutorial of these instructions visit this video (*・‿・)ノ [11ty.rocks tutorial](https://www.youtube.com/watch?v=p81J7G1qFAM&list=PLRsQ6aSNe0GDFHNteM1VUSQrTJvIKoMas&index=2)

### Step #1: Configuration
Inside you new repo, use whatever terminal and use `npm init -y` to initialize the project. 
   - A `package.json` will appear in your repo directory

Next `npm install @11ty/eleventy` to install 11ty 
   - A `package-lock.json` and a folder called `node_modules` will appear

While using whatever web development software you’re most comfortable with, open `package.json` and add the following commands into the “script”:
   - “start”: “eleventy --serve”, 
   - “build”: “eleventy”
       - These commands will be used often in the terminal to develop and build your site.

Next let’s create a `.gitignore` file and insert these lines of code:
```ignorelang
     /node_modules
     .idea/
```

Back within your project repo, create a new file and name it `.eleventy.js` and insert the following code
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
### Step #2: Base Layout, CSS, and 11ty Commands
Next create a folder directory called `_src`, and within the folder _src, create the file `index.md`
   - Using Markdown, add some content to index.md

Next, create a folder called `_includes` with a file within it called `base.njk` (the name of the Nunjucks file can be anything, but base is standard)
   - Within `base.njk` add the basic HTML layout, i.e:
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

          {{ content | safe }}
    
     </body>
     </html>
```
 
Back inside _src, create a folder called `CSS` and create a css file you will be using throughout your site within this folder. 
   - Add some styling while you’re at it so we can see later if the file was configuring correctly.

Back inside base.njk, add this reference link to your CSS file, only replacing the ”your-file-name” portion (trust the process, I’ll explain later).

Let’s jump back to your .eleventy.js file. Right now, if you were to “build” your site, 11ty would only be able to recognize your index.md file. To have 11ty recognize your _inlcudes and CSS folders and their content, add the following code to your .eleventy.js:
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
- The command to “build” is the same command you created in Step 3 
- When this command is used, 11ty will look for your  .eleventy.js file, discover that “_src” will be the input, and configure what’s directly inside _src and output a folder “_site” with configured content.
- After the command is completed, you will now see the new _site folder.
- Inside is not your initial `index.md`, but an `index.html` with your Markdown content configured to HTML.
- Every time you add new content within the _src file and `npm run build`, the entire _site folder will be overwritten **_as intended_**. Meaning you should only make changes to the _src folder.
- You _can_ add content to the _site folder, but it will be erased if that same content isn’t added to the _src as well.
- The only time I open the _site folder is to make sure files are configuring correctly and to view 11tys filing methods (examples will be shown later in this tutorial)

**IMPORTANT**
- From here on out, every time you "build," study the filing system within the _site folder
- However the _site folder is laid out is how you should plan on linking external files. 
- _site is what will be published to the web


To view live changes locally, use the command `npm run start`(as created in Step 3) and click on the localhost link provided in the terminal.
- Congrats! You got some working HTML and CSS.

### Step #3: Understanding the web of files and folders

Taking a step down into the _src folder, you should have the _includes and CSS folders and index.md
- Compared to the _site folder, the _site folder should

### Step #4: Publishing to gh-pages

### Step #5: Layout Chaining

### Step #6: Creating Collections