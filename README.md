# react-flexible-progressbar

[![License](https://img.shields.io/npm/l/react-flexible-progressbar.svg?style=flat-square)](http://opensource.org/licenses/MIT)
![Version](https://img.shields.io/npm/v/react-flexible-progressbar.svg?style=flat-square)
![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/react-flexible-progressbar.svg?style=flat-square)
![npm type definitions](https://img.shields.io/npm/types/react-flexible-progressbar.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/loopline-systems/react-flexible-progressbar.svg?style=flat-square)](https://travis-ci.com/loopline-systems/react-flexible-progressbar)
[![Coverage Status](https://img.shields.io/coveralls/loopline-systems/react-flexible-progressbar.svg?style=flat-square)](https://coveralls.io/github/loopline-systems/react-flexible-progressbar?branch=master)

<!-- ![Version](https://img.shields.io/npm/dt/react-flexible-progressbar.svg?style=flat-square) -->


Customizable lightweight progress bar using TypesScript and React 16

## Demo

For example of the progressbar, go to https://loopline-systems.github.io/react-flexible-progressbar.

OR

To run that demo on your own computer:
* Clone this repository
* `npm i`
* `npm start`
* Visit http://localhost:3001/

## Getting Started
### Install
```
  npm i react-flexible-progressbar
```

### Import in component
```
import ProgressBar from 'react-flexible-progressbar'
import 'react-flexible-progressbar/dist/progressBar.css'
```

### Supported properties
```
{
  width?: number | string;
  height?: number | string;
  margin?: number | string;
  progress?: number;
  progressTxt?: string; // progress text to show before percentage
  showPercentage?: boolean; // whether to show percentage number
}
```
