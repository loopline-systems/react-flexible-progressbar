# react-flexible-progressbar

Customizable lightweight progress bar using TypesScript and React

[![License](https://img.shields.io/packagist/l/loopline-systems/react-flexible-progressbar.svg)](http://opensource.org/licenses/MIT)
[![Build Status](http://img.shields.io/travis/loopline-systems/react-flexible-progressbar.svg)](https://travis-ci.org/loopline-systems/react-flexible-progressbar)

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
import 'react-flexible-progressbar/progressBar.css'
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
