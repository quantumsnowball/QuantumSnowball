<div align="center">
  <h1>
    Quantum Snowball
  </h1>
</div>
    

[![Repositories](https://img.shields.io/badge/Repositories-black?style=for-the-badge&logo=github)](https://github.com/quantumsnowball)
[![Homepage](https://img.shields.io/badge/Homepage-229922?style=for-the-badge&logo=github)](https://quantumsnowball.github.io)
[![Hashnode](https://img.shields.io/badge/Blog-2962FF?style=for-the-badge&logo=hashnode&logoColor=white)](https://quantumsnowball.hashnode.dev)
[![Email](https://img.shields.io/badge/Email-navy?style=for-the-badge&logo=gmail)](mailto:quantumsnowball@gmail.com)
[![Twitter](https://img.shields.io/badge/Twitter-dddddd?style=for-the-badge&logo=twitter)](https://twitter.com/QuantumSnowball)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0a66c2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/quantum-snowball-66441a251)
[![Leetcode](https://img.shields.io/badge/Leetcode-ffe2c7?style=for-the-badge&logo=leetcode)](https://leetcode.com/quantumsnowball/)
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

- ### [btbox](https://github.com/quantumsnowball/btbox/tree/dev) - a simple and easy to use trading strategy backtesting library written in Python
  ![python](https://img.shields.io/badge/python-white?logo=python)
  ![numpy](https://img.shields.io/badge/numpy-white?logo=numpy&logoColor=blue)
  ![pandas](https://img.shields.io/badge/pandas-white?logo=pandas&logoColor=darkblue)
  ![jupyter](https://img.shields.io/badge/jupyter-white?logo=jupyter)
  ![plotly](https://img.shields.io/badge/plotly-white?logo=plotly&logoColor=darkblue)

  When you have a trading idea in your mind, but you are not sure if it is going to work? Most of the time you want to backtest your idea first using historical market data before risking your real money. Usually this can be done using a spreadsheet, but soon you find that spreadsheet only works for simple strategies. Also you will need a robust way to measure 'how-good' a strategy by calculate its performance metrics, such as `Sharpe Ratio` or `Max Drawdown`. Well, you have come to the right place! `btbox` is here to provide a robust solution for strategy backtesting. It is most suitable to use in a Jupyter notebook. Most usage cases and results can be found in [trading-lab](https://nbviewer.org/github/quantumsnowball/trading-lab). Or go to the [tests](https://github.com/quantumsnowball/btbox/tree/dev/tests) folder of the [dev](https://github.com/quantumsnowball/btbox/tree/dev) branch for more reference. This library is still under active development and the API may subject to changes.

- ### [Tabman](https://github.com/quantumsnowball/telescope-tabman.nvim) - a telescope.nvim plugin 
  ![neovim](https://img.shields.io/badge/neovim-white?logo=neovim)
  ![lua](https://img.shields.io/badge/lua-white?logo=lua&logoColor=030380)
  
  If you use Neovim as an IDE, and mainly use telescope.nvim as a file picker, then you may find my plugin to be the long wanted missing tabpages picker.

- ### [link-finder](https://github.com/quantumsnowball/link-finder) - a Chrome extension that can help you capture web traffic urls
  ![typescript](https://img.shields.io/badge/typescript-white?logo=typescript)
  ![react](https://img.shields.io/badge/react-white?logo=react)

  Normally, you use the Chrome DevTool to monitor network traffic. But some website may stop running when the DevTool is opened, so I write a chrome extension to query the chorme API for all network traffic, avoiding the DevTool altogether. 

- ### [waylandmap](https://github.com/quantumsnowball/waylandmap) - a key mapping app for Linux that works under X11 or Wayland
  ![python](https://img.shields.io/badge/python-white?logo=python)
  ![pypi](https://img.shields.io/badge/pypi-white?logo=pypi)
  ![linux](https://img.shields.io/badge/linux-white?logo=linux)

  This project is distributed as [waylandmap](https://pypi.org/project/waylandmap/) on PyPI.org. The best use case I found for myself is to map `RightAlt` + `hjkl` to be the arrow keys by making `RightAlt` to be a 3rd-level shift key.

- ### [opensubtitles-dl](https://github.com/quantumsnowball/opensubtitles-dl) - you can search opensubtitle.org directly in the terminal
  ![python](https://img.shields.io/badge/python-white?logo=python)
  ![pypi](https://img.shields.io/badge/pypi-white?logo=pypi)

  This project is distributed as [opensubtitles-dl](https://pypi.org/project/opensubtitles-dl/) on PyPI.org.

- ### [wide-lihkg-userscript](https://github.com/quantumsnowball/wide-lihkg-userscript) - sideload custom CSS into lihkg

  ![javascript](https://img.shields.io/badge/javascript-white?logo=javascript)
  ![css](https://img.shields.io/badge/css-white?logo=css3&logoColor=blue)

  This project is distributed as [Wide LIHKG](https://greasyfork.org/en/scripts/430707-wide-lihkg) on greasyfork.org.
   

<div align="right"><a href="#my-work">top</a></div>

## Web Dev

Web dev is easy but also can be difficult. It is easy when you have a boilerplate to start with, but can be difficult when you need to build everything from scratch. I have built some starter projects, while trying to include some most common web dev technologies into them.

- ### [Furigana](https://github.com/quantumsnowball/furigana-domain) - a handy Japanese learning and translation app, featuring Furigana, Romaji and English/Chinese translation in a single interface
  ![typescript](https://img.shields.io/badge/typescript-white?logo=typescript)
  ![nextjs](https://img.shields.io/badge/next.js-white?logo=next.js&logoColor=black)
  ![react](https://img.shields.io/badge/react-white?logo=react)
  ![redux](https://img.shields.io/badge/redux-white?logo=redux&logoColor=black)
  ![mui](https://img.shields.io/badge/mui-white?logo=mui)

  [Furigana](https://furigana.quantumsnowball.vercel.app) is an easy to use interactive web app aims to help you learn Japanese. It is currently hosting at [furigana.quantumsnowball.vercel.app](https://furigana.quantumsnowball.vercel.app) as a PWA. When you copy and paste a Japanese text, the app should show the most essential parts to read, pronounce and understand the language. When you edit the source, the app will show the updated Furigana, Romaji together with English/Chinese translation. You can also save the source and translation into favorites, then you can restore to view them later. Feel free to build your own Japanese learning notebook by saving common phrases and sentences to favorite, and backup/restore your notebook by the import/export feature. Happy learning Japanese!

- ### [Bayes](https://github.com/quantumsnowball/bayes-domain) - a probability playground showcasing the Bayes Theorem
  ![typescript](https://img.shields.io/badge/typescript-white?logo=typescript)
  ![react](https://img.shields.io/badge/react-white?logo=react)
  ![nextjs](https://img.shields.io/badge/next.js-white?logo=next.js&logoColor=black)
  ![redux](https://img.shields.io/badge/redux-white?logo=redux&logoColor=black)
  ![mui](https://img.shields.io/badge/mui-white?logo=mui)

  [Bayes](https://bayes.quantumsnowball.vercel.app) is a simple interactive web app aim to provide a playground for easy understanding of the Bayes Theorem. It is now hosting on [bayes.quantumsnowball.vercel.app](https://bayes.quantumsnowball.vercel.app) as a progressive web app. You can edit, save and restore variety of different hypothesis and evidence combinations to come up to a posterior probability. Please feel free to install it on your phone as a handy assistant for solving probability problem.

- ### [Quotes](https://github.com/quantumsnowball/quotes.quantumsnowball) - a beautiful mobile-friendly react app, fetching famous quotes by celebrities 
  ![typescript](https://img.shields.io/badge/typescript-white?logo=typescript)
  ![react](https://img.shields.io/badge/react-white?logo=react)
  ![redux](https://img.shields.io/badge/redux-white?logo=redux&logoColor=black)
  ![mui](https://img.shields.io/badge/mui-white?logo=mui)
  
  This project has been built and hosting at [quotes.quantumsnowball.vercel.app](https://quotes.quantumsnowball.vercel.app/). It is mobile-friendly, can be installed as a PWA using mobile Chrome browser.

- ### [Todos](https://github.com/quantumsnowball/todos-domain) - a todos-list app with login and OAuth2 authentication based on JWT
  ![typescript](https://img.shields.io/badge/typescript-white?logo=typescript)
  ![nextjs](https://img.shields.io/badge/next.js-white?logo=next.js&logoColor=black)
  ![OAuth2.0](https://img.shields.io/badge/OAuth2.0-white?logo=google)
  ![react](https://img.shields.io/badge/react-white?logo=react)
  ![mongodb](https://img.shields.io/badge/mongodb-white?logo=mongodb)
  ![redis](https://img.shields.io/badge/redis-white?logo=redis)
  ![serverless](https://img.shields.io/badge/serverless-white?logo=vercel&logoColor=black)
  
  This project is a rewrite serverless version of the former MERN boilerplate project [todos-domain--serverful](https://github.com/quantumsnowball/todos-domain--serverful). Now the project is in production and deployed as [todos.quantumsnowball.vercel.app](https://todos.quantumsnowball.vercel.app). The main reason to rewrite this app is to convert the backend to serverless functions. Instead of relying on centralized servers, being serverless means distributing the backend api endpoints into pieces and run them as stateless functions, providing much bigger scaling potential for any apps. The rewrite version also make use of `Next.js` implementing server-side rendering (SSR), further enhancing the app experience. 

  Todos is a todo-list app with a authentication system using React and JWT. User can register an account, login to his account, and then add todo checklist items. The state should be saved into a database and user should be able to authenticate using JWT token and get back the checklist. You can also login using a Google account through OAuth2.0.

  Currently only the serverless version of this app is in production. Both serverless and serverful version of this app are ready-to-use boilerplates for starter login app. The serverless version can be easily deployed to cloud platforms like `Vercel`, while the serverful version needs a dedicated Node server to host the express app or its docker container.

- ### [github.io](https://github.com/quantumsnowball/quantumsnowball.github.io) - github user page repo, holding the source code of the current website
  ![typescript](https://img.shields.io/badge/typescript-white?logo=typescript)
  ![react](https://img.shields.io/badge/react-white?logo=react)
  ![redux](https://img.shields.io/badge/redux-white?logo=redux&logoColor=black)
  ![tailwindcss](https://img.shields.io/badge/tailwindcss-white?logo=tailwindcss)
  
  This project is the source code for my github user page. The production version is currently hosting at [quantumsnowball.github.io](https://quantumsnowball.github.io). The content of this website is based on the git submodule [github-profile-data](https://github.com/quantumsnowball/github-profile-data), which is also the content generator of my github profile page.

- ### [js_todo_list_app](https://github.com/quantumsnowball/js_todo_list_app) - a pure javascript todos starter
  ![css](https://img.shields.io/badge/html5-white?logo=html5)
  ![javascript](https://img.shields.io/badge/javascript-white?logo=javascript)
  ![css](https://img.shields.io/badge/css-white?logo=css3&logoColor=blue)

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

- ### [trading-lab](https://nbviewer.org/github/quantumsnowball/trading-lab)
  A Jupyter notebook collection of strategy backtest results using [btbox](https://github.com/quantumsnowball/btbox). View these notebooks using [nbviewer.org](https://nbviewer.org/github/quantumsnowball/trading-lab). Or visit the [repository](https://github.com/quantumsnowball/trading-lab) for source code. 

  - ### [indicators](https://nbviewer.org/github/quantumsnowball/trading-lab/tree/master/indicators/)
    Test out common trading indicators for 
    [moving-average](https://nbviewer.org/github/quantumsnowball/trading-lab/tree/master/indicators/moving-average), 
    [relative-strength](https://nbviewer.org/github/quantumsnowball/trading-lab/tree/master/indicators/relative-strength),
    [vwap](https://nbviewer.org/github/quantumsnowball/trading-lab/tree/master/indicators/vwap).

  - ### [sentiment](https://nbviewer.org/github/quantumsnowball/trading-lab/tree/master/sentiment/)
    Try strategies relying on market sentiment level in 
    [pnl-ratio](https://nbviewer.org/github/quantumsnowball/trading-lab/tree/master/sentiment/pnl-ratio).

- ### [hong-kong-interbank-liquidity-plot](https://github.com/quantumsnowball/hong-kong-interbank-liquidity-plot)
  Do you think the USD-HKD peg is gonna hold? Here is an indicator you need to pay attention to.

- ### [terra-luna-ust-revival-analysis-May-2022](https://github.com/quantumsnowball/terra-luna-ust-revival-analysis-May-2022)
  A valuation model for Terra 2.0 before the launch of the new LUNA token.

- ### [impermanent-loss-simulation](https://github.com/quantumsnowball/impermanent-loss-simulation)

  When you provide liquidity to a liquidity pool to earn fees and incentives, you capital will face impermanent loss, but by how much? Here is a simulation.

- ### [automatic-market-maker-simulation](https://github.com/quantumsnowball/automatic-market-maker-simulation)

  How does a DEX like Uniswap works? It is built on automaatic market makers, which is very different from the traditional stock market. This jupyter notebook simulates the Constant Product Invariant Curve to better understand how it works.

<div align="right"><a href="#my-work">top</a></div>

## Data Science

I have done some data science and machine learning research projects in the past. Some interesting project are listed here as well.

- ### [toy-openai-gym-collections](https://github.com/quantumsnowball/toy-openai-gym-collections) - all about  deep reinforcement learning
  ![pytorch](https://img.shields.io/badge/pytorch-white?logo=pytorch)
  ![openai](https://img.shields.io/badge/openai-white?logo=openai&logoColor=black)
  ![numpy](https://img.shields.io/badge/numpy-white?logo=numpy&logoColor=blue)

  Try to use use deep reinforcement learning models to play computer games! It was not easy at all.

- ### [toy-datasets-collections](https://github.com/quantumsnowball/toy-datasets-collections)

  ![tensorflow](https://img.shields.io/badge/tensorflow-white?logo=tensorflow)
  ![keras](https://img.shields.io/badge/keras-white?logo=keras&logoColor=red)
  ![pytorch](https://img.shields.io/badge/pytorch-white?logo=pytorch)
  ![scikit-learn](https://img.shields.io/badge/scikit--learn-white?logo=scikit-learn)

  These are very common machine learning and deep learning datasets.

- ### [marble-drawing-scam-analysis](https://github.com/quantumsnowball/marble-drawing-scam-analysis)

  ![python](https://img.shields.io/badge/python-white?logo=python)
  ![jupyter](https://img.shields.io/badge/jupyter-white?logo=jupyter)
  ![pandas](https://img.shields.io/badge/pandas-white?logo=pandas&logoColor=darkblue)

  To solve any probability problems, you can either use maths to solve it by first principal, or use programming to solve it by simulation.

<div align="right"><a href="#my-work">top</a></div>

## dotfiles

I am using these configs on Linux or Mac terminal. 

- ### [nvim](https://github.com/quantumsnowball/nvim-lazy) - my Neovim config written in lua 
  ![neovim](https://img.shields.io/badge/neovim-white?logo=neovim)
  ![lua](https://img.shields.io/badge/lua-white?logo=lua&logoColor=030380)

- ### [tmux](https://github.com/quantumsnowball/tmux) - my tmux config repo
  ![sh](https://img.shields.io/badge/tmux-white?logo=tmux)
  ![sh](https://img.shields.io/badge/sh-white?logo=shell)

- ### [zshrc](https://github.com/quantumsnowball/zshrc) - my zshrc config repo
  ![sh](https://img.shields.io/badge/sh-white?logo=shell)

- ### [poshrc](https://github.com/quantumsnowball/poshrc) - my poshrc config repo
  ![sh](https://img.shields.io/badge/sh-white?logo=shell)

- ### [settings](https://github.com/quantumsnowball/settings) - my other config files repo
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
