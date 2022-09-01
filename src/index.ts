import Intro from '../data/Intro'
import Apps from '../data/Apps'
import fs from 'fs'


const md = Intro + Apps
fs.writeFile('README.md', md, err => console.log(err))

