# react-mapillary

A simple [mapillaryJs](https://github.com/mapillary/mapillary-js) react component.

## Table of Contents

- [Installing](#installing)
- [Examples](#examples)
- [Props](#props)
- [Issues](#issues)
- [Contributing](#contributing)
- [Licensing](#licensing)

## Installing

```
  $ npm install --save react-mapillary
```

Then, just import to your React component:

```jsx
  import { MapillaryViewer } from 'react-mapillary';
```
### Stylesheets

Add the required stylesheets.
```
{/* The following line can be included in your src/index.js or App.js file*/}

import 'mapillary-js/dist/mapillary.min.css';
```

or

The simplest way is to include the latest styles from the CDN. A little more information about the benefits of using a CDN can be found here.

```html
  <link href='https://unpkg.com/mapillary-js@2.18.1/dist/mapillary.min.css' rel='stylesheet' />

```

## Examples
A demo can be found [here](https://alexus37.github.io/react-mapillary/)

## Props

| Name          | Type           | Default | Description |
| :------------ | :------------- | :------ | :---------- |
| clientId*       | string |   | API key for the streetview. |
| options   | object         |         | Optional configuration object specifing Viewer's and the components' initial setup. |
| onNodeChanged       | function |   | Fired every time the viewer navigates to a new node. |
| onBearingChanged   | function |   | Fired when the viewing direction of the camera changes. |
| onTiltChanged | function |  | This event is fired when the viewer tilt changes. |
| onFovChanged | function |  | This event is fired when the viewer FoV changes. Eg. when the user starts to zoom. |


## Issues

Find a bug or want to request a new feature?  Please let us know by submitting an issue.

## Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/esri/contributing).

## Licensing
Copyright 2019 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [license.txt](/license.txt) file.
