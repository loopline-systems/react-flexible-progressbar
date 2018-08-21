# react-flexible-progressbar <sup>[![Version Badge][npm-version-svg]][package-url]</sup>
[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Customizable lightweight progress bar using TypesScript and Ract

## Demo

For example of the progressbar, go to https://github.com/loopline-systems/react-flexible-progressbar.

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
