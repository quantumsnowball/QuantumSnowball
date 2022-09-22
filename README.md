<div align="center">
  <h1>
    Quantum Snowball
  </h1>
</div>
    

[![Repositories](https://img.shields.io/badge/Repositories-black?style=for-the-badge&logo=github)](https://github.com/quantumsnowball)
[![Homepage](https://img.shields.io/badge/Homepage-229922?style=for-the-badge&logo=github)](https://quantumsnowball.github.io)
[![Hashnode](https://img.shields.io/badge/Blog-2962FF?style=for-the-badge&logo=hashnode&logoColor=white)](https://blog.quantumsnowball.ml)
[![Email](https://img.shields.io/badge/Email-navy?style=for-the-badge&logo=gmail)](mailto:quantumsnowball@gmail.com)
[![Twitter](https://img.shields.io/badge/Twitter-dddddd?style=for-the-badge&logo=twitter)](https://twitter.com/QuantumSnowball)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0a66c2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/quantum-snowball-66441a251)
## Hi there 👋
- 🔭 Ready to learn any technology to solve real life problems
- 🔭 Worked as a quantitative research analyst and proprietary trader in Hong Kong
- 🔭 Former freelance financial writer of Apple Daily Hong Kong
- 🌱 My scope of interest includes:
  - ⚡web3, blockchain, web dev, cloud 
  - ⚡quantitative finance, algorithmic trading, machine learning
  - ⚡basically anything about programming or investment
- 📫 How to reach me: <quantum.snowball@gmail.com>

<div id="my-work" align="center">
  <h1>
    My Work
  </h1>
</div>

A brief description about some of my work done in the past. Currently this repo contains everything I've ever developed, but in the future I may manage them into different repos.

<div align="center">
  <h2>
    <a href="#apps">Apps</a>
    •
    <a href="#web-dev">Web Dev</a>
    •
    <a href="#apple-daily---quantitative-research">Apple Daily</a>
    •
    <a href="#Research">Research</a>
    •
    <a href="#data-science">Data Science</a>
    •
    <a href="#dotfiles">dotfiles</a>
  </h2>
</div>

## Apps

When I need a software but I can't find one really suitable, choose one which is pretty close to my needs, then fork it and modify it. Well, if none of them are even close, I will build it from scratch.

- ### [Tabman](https://github.com/quantumsnowball/telescope-tabman.nvim) - a telescope.nvim plugin 
  ![neovim](https://img.shields.io/badge/neovim-white?logo=neovim)  ![lua](https://img.shields.io/badge/lua-white?logo=lua&logoColor=030380)
  
  If you use Neovim as an IDE, and mainly use telescope.nvim as a file picker, then you may find my plugin to be the long wanted missing tabpages picker.

- ### [link-finder](https://github.com/quantumsnowball/link-finder) - a Chrome extension that can help you capture web traffic urls
  ![typescript](https://img.shields.io/badge/typescript-white?logo=typescript) ![react](https://img.shields.io/badge/react-white?logo=react)

  Normally, you use the Chrome DevTool to monitor network traffic. But some website may stop running when the DevTool is opened, so I write a chrome extension to query the chorme API for all network traffic, avoiding the DevTool altogether. 

- ### [waylandmap](https://github.com/quantumsnowball/waylandmap) - a key mapping app for Linux that works under X11 or Wayland
  ![python](https://img.shields.io/badge/python-white?logo=python) ![pypi](https://img.shields.io/badge/pypi-white?logo=pypi) ![linux](https://img.shields.io/badge/linux-white?logo=linux)

  This project is distributed as [waylandmap](https://pypi.org/project/waylandmap/) on PyPI.org. The best use case I found for myself is to map `RightAlt` + `hjkl` to be the arrow keys by making `RightAlt` to be a 3rd-level shift key.

- ### [opensubtitles-dl](https://github.com/quantumsnowball/opensubtitles-dl) - you can search opensubtitle.org directly in the terminal
  ![python](https://img.shields.io/badge/python-white?logo=python) ![pypi](https://img.shields.io/badge/pypi-white?logo=pypi)

  This project is distributed as [opensubtitles-dl](https://pypi.org/project/opensubtitles-dl/) on PyPI.org.

- ### [wide-lihkg-userscript](https://github.com/quantumsnowball/wide-lihkg-userscript) - sideload custom CSS into lihkg

  ![javascript](https://img.shields.io/badge/javascript-white?logo=javascript) ![css](https://img.shields.io/badge/css-white?logo=css3&logoColor=blue)

  This project is distributed as [Wide LIHKG](https://greasyfork.org/en/scripts/430707-wide-lihkg) on greasyfork.org.
   

<div align="right"><a href="#my-work">top</a></div>

## Web Dev

Web dev is easy but also can be difficult. It is easy when you have a boilerplate to start with, but can be difficult when you need to build everything from scratch. I have built some starter projects, while trying to include some most common web dev technologies into them.

- ### [Quotes](https://github.com/quantumsnowball/quotes.quantumsnowball) - a beautiful mobile-friendly react app, fetching famous quotes by celebrities 
  ![typescript](https://img.shields.io/badge/typescript-white?logo=typescript) ![react](https://img.shields.io/badge/react-white?logo=react) ![redux](https://img.shields.io/badge/redux-white?logo=redux&logoColor=black) ![mui](https://img.shields.io/badge/mui-white?logo=mui)
  
  This project has been built and hosting at [quotes.quantumsnowball.ml](https://quotes.quantumsnowball.ml/). It is mobile-friendly, can be installed as a PWA using mobile Chrome browser.

- ### [Todos](https://github.com/quantumsnowball/todos-domain) - a todos-list app with login and OAuth2 authentication based on JWT
  ![typescript](https://img.shields.io/badge/typescript-white?logo=typescript) ![nextjs](https://img.shields.io/badge/next.js-white?logo=next.js&logoColor=black) ![OAuth2.0](https://img.shields.io/badge/OAuth2.0-white?logo=google) ![react](https://img.shields.io/badge/react-white?logo=react) ![mongodb](https://img.shields.io/badge/mongodb-white?logo=mongodb) ![redis](https://img.shields.io/badge/redis-white?logo=redis) ![serverless](https://img.shields.io/badge/serverless-white?logo=vercel&logoColor=black)
  
  This project is a rewrite serverless version of the former MERN boilerplate project [todos-domain--serverful](https://github.com/quantumsnowball/todos-domain--serverful). Now the project is in production and deployed as [todos.quantumsnowball.ml](https://todos.quantumsnowball.ml). The main reason to rewrite this app is to convert the backend to serverless functions. Instead of relying on centralized servers, being serverless means distributing the backend api endpoints into pieces and run them as stateless functions, providing much bigger scaling potential for any apps. The rewrite version also make use of `Next.js` implementing server-side rendering (SSR), further enhancing the app experience. 

  Todos is a todo-list app with a authentication system using React and JWT. User can register an account, login to his account, and then add todo checklist items. The state should be saved into a database and user should be able to authenticate using JWT token and get back the checklist. You can also login using a Google account through OAuth2.0.

  Currently only the serverless version of this app is in production. Both serverless and serverful version of this app are ready-to-use boilerplates for starter login app. The serverless version can be easily deployed to cloud platforms like `Vercel`, while the serverful version needs a dedicated Node server to host the express app or its docker container.

- ### [github.io](https://github.com/quantumsnowball/quantumsnowball.github.io) - github user page repo, holding the source code of the current website
  ![typescript](https://img.shields.io/badge/typescript-white?logo=typescript) ![react](https://img.shields.io/badge/react-white?logo=react) ![redux](https://img.shields.io/badge/redux-white?logo=redux&logoColor=black) ![tailwindcss](https://img.shields.io/badge/tailwindcss-white?logo=tailwindcss)
  
  This project is the source code for my github user page. The production version is currently hosting at [quantumsnowball.github.io](https://quantumsnowball.github.io). The content of this website is based on the git submodule [github-profile-data](https://github.com/quantumsnowball/github-profile-data), which is also the content generator of my github profile page.

- ### [js_todo_list_app](https://github.com/quantumsnowball/js_todo_list_app) - a pure javascript todos starter
  ![css](https://img.shields.io/badge/html5-white?logo=html5) ![javascript](https://img.shields.io/badge/javascript-white?logo=javascript) ![css](https://img.shields.io/badge/css-white?logo=css3&logoColor=blue)

  Sometimes you just want to code something using pure js, just to learn the basics.

<div align="right"><a href="#my-work">top</a></div>

## Apple Daily - Quantitative Research      
![python](https://img.shields.io/badge/python-white?logo=python)
![jupyter](https://img.shields.io/badge/jupyter-white?logo=jupyter)
![numpy](https://img.shields.io/badge/numpy-white?logo=numpy&logoColor=blue)
![pandas](https://img.shields.io/badge/pandas-white?logo=pandas&logoColor=darkblue)
![scipy](https://img.shields.io/badge/scipy-white?logo=scipy)
![scikit-learn](https://img.shields.io/badge/scikit--learn-white?logo=scikit-learn)

These are all my source code covering my reserach when writing for Apple Daily Hong Kong.

- ### [AppleDaily20210531](https://github.com/quantumsnowball/AppleDaily20210531)
- ### [AppleDaily20210517](https://github.com/quantumsnowball/AppleDaily20210517)
- ### [AppleDaily20210503](https://github.com/quantumsnowball/AppleDaily20210503)
- ### [AppleDaily20210405](https://github.com/quantumsnowball/AppleDaily20210405)
- ### [AppleDaily20210308](https://github.com/quantumsnowball/AppleDaily20210308)
- ### [AppleDaily20210222](https://github.com/quantumsnowball/AppleDaily20210222)
- ### [AppleDaily20210125](https://github.com/quantumsnowball/AppleDaily20210125)
- ### [AppleDaily20201228](https://github.com/quantumsnowball/AppleDaily20201228)
- ### [AppleDaily20201130](https://github.com/quantumsnowball/AppleDaily20201130)
- ### [AppleDaily20201102](https://github.com/quantumsnowball/AppleDaily20201102)
- ### [AppleDaily20201005](https://github.com/quantumsnowball/AppleDaily20201005)
- ### [AppleDaily20200907](https://github.com/quantumsnowball/AppleDaily20200907)
- ### [AppleDaily20200810](https://github.com/quantumsnowball/AppleDaily20200810)
- ### [AppleDaily20200713](https://github.com/quantumsnowball/AppleDaily20200713)
- ### [AppleDaily20200615](https://github.com/quantumsnowball/AppleDaily20200615)
- ### [AppleDaily20200601](https://github.com/quantumsnowball/AppleDaily20200601)
- ### [AppleDaily20200504](https://github.com/quantumsnowball/AppleDaily20200504)
- ### [AppleDaily20200406](https://github.com/quantumsnowball/AppleDaily20200406)
- ### [AppleDaily20200309](https://github.com/quantumsnowball/AppleDaily20200309)
- ### [AppleDaily20200224](https://github.com/quantumsnowball/AppleDaily20200224)
- ### [AppleDaily20200113](https://github.com/quantumsnowball/AppleDaily20200113)
- ### [AppleDaily20191216](https://github.com/quantumsnowball/AppleDaily20191216)
- ### [AppleDaily20191118](https://github.com/quantumsnowball/AppleDaily20191118)
- ### [AppleDaily20191104](https://github.com/quantumsnowball/AppleDaily20191104)
- ### [AppleDaily20190930](https://github.com/quantumsnowball/AppleDaily20190930)
- ### [AppleDaily20190823](https://github.com/quantumsnowball/AppleDaily20190823)
- ### [AppleDaily20190722](https://github.com/quantumsnowball/AppleDaily20190722)
- ### [AppleDaily20190622](https://github.com/quantumsnowball/AppleDaily20190622)

<div align="right"><a href="#my-work">top</a></div>

## Research
![python](https://img.shields.io/badge/python-white?logo=python)
![jupyter](https://img.shields.io/badge/jupyter-white?logo=jupyter)
![numpy](https://img.shields.io/badge/numpy-white?logo=numpy&logoColor=blue)
![pandas](https://img.shields.io/badge/pandas-white?logo=pandas&logoColor=darkblue)

I write code to research the financial market all the time.

- ### [hong-kong-interbank-liquidity-plot](https://github.com/quantumsnowball/hong-kong-interbank-liquidity-plot)
  Do you think the USD-HKD peg is gonna hold? Here is an indicator you need to pay attention to.

- ### [terra-luna-ust-revival-analysis-May-2022](https://github.com/quantumsnowball/terra-luna-ust-revival-analysis-May-2022)
  A valuation model for Terra 2.0 before the launch of the new LUNA token.

- ### [impermanent-loss-simulation](https://github.com/quantumsnowball/impermanent-loss-simulation)

  When you provide liquidity to a liquidity pool to earn fees and incentives, you capital will face impermanent loss, but by how much? Here is a simulation.

- ### [automatic-market-maker-simulation](https://github.com/quantumsnowball/automatic-market-maker-simulation)

  How does a DEX like Uniswap works? It is built on automaatic market makers, which is very different from the traditional stock market. This jupyter notebook simulates the Constant Product Invariant Curve to better understand how it works.

- ### [marble-drawing-scam-analysis](https://github.com/quantumsnowball/marble-drawing-scam-analysis)

  To solve any probability problems, you can either use maths to solve it by first principal, or use programming to solve it by simulation.

<div align="right"><a href="#my-work">top</a></div>

## Data Science

I have done some data science and machine learning research projects in the past. Some interesting project are listed here as well.

- ### [toy-openai-gym-collections](https://github.com/quantumsnowball/toy-openai-gym-collections) - all about  deep reinforcement learning
  ![pytorch](https://img.shields.io/badge/pytorch-white?logo=pytorch) ![openai](https://img.shields.io/badge/openai-white?logo=openai&logoColor=black)  ![numpy](https://img.shields.io/badge/numpy-white?logo=numpy&logoColor=blue)

  Try to use use deep reinforcement learning models to play computer games! It was not easy at all.

- ### [toy-datasets-collections](https://github.com/quantumsnowball/toy-datasets-collections)

  ![tensorflow](https://img.shields.io/badge/tensorflow-white?logo=tensorflow) ![keras](https://img.shields.io/badge/keras-white?logo=keras&logoColor=red) ![pytorch](https://img.shields.io/badge/pytorch-white?logo=pytorch) ![scikit-learn](https://img.shields.io/badge/scikit--learn-white?logo=scikit-learn)

  These are very common machine learning and deep learning datasets.

<div align="right"><a href="#my-work">top</a></div>

## dotfiles

I am using these configs on Linux or Mac terminal. 

- ### [nvim](https://github.com/quantumsnowball/nvim) - my Neovim config written in lua 
  ![neovim](https://img.shields.io/badge/neovim-white?logo=neovim)  ![lua](https://img.shields.io/badge/lua-white?logo=lua&logoColor=030380)

- ### [tmux](https://github.com/quantumsnowball/tmux) - my tmux config repo
  ![sh](https://img.shields.io/badge/tmux-white?logo=tmux) ![sh](https://img.shields.io/badge/sh-white?logo=shell)

- ### [zshrc](https://github.com/quantumsnowball/zshrc) - my zshrc config repo
  ![sh](https://img.shields.io/badge/sh-white?logo=shell)

- ### [.repo](https://github.com/quantumsnowball/.repo) - my other config files repo
  ![sh](https://img.shields.io/badge/sh-white?logo=shell)

<div align="right"><a href="#my-work">top</a></div>

<!--
**quantumsnowball/QuantumSnowball** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
