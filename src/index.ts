import Intro from '../data/Intro'
import Apps from '../data/Apps'
import WebDev from '../data/WebDev'
import AppleDaily from '../data/AppleDaily'
import Research from '../data/Research'
import DataScience from '../data/DataScience'
import Dotfiles from '../data/Dotfiles'
import Others from '../data/Others'
import fs from 'fs'


const md = Intro + Apps + WebDev + AppleDaily + Research + DataScience + Dotfiles + Others
fs.writeFile('README.md', md, err => console.log(err))

