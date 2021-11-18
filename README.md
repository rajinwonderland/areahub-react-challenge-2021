# AreaHub Landfill React Challenge

This is a NextJS React app interview challenge. Please fork this repo, and push your code to a branch in your forked repo (following the instructions below).

In this exercise you will create an Landfills table that has search, filtering and pagination. Data will be available at the endpoint `/api/search` or via the `LandfillClient` class located under `/lib/landfills-client`.

> _Note_: It is not required to finish implementing all the features.

First off, watch the [video](https://youtu.be/cScpqR9ezfE) to see what the end result should look like.

A final demonstration can be found [here](https://landfill-frontend-challenge.vercel.app/). We recommend using your browser's "Inspect" mode along with [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) to get a better sense of which components/styles are being used. All the theme files (colors, styles, and etc) have already been provided under `/styles/*`.

1. [Chakra-UI](https://chakra-ui.com/) is already setup along with the Solid Waste Landfill Facilities endpoint we are going to use.
2. For this challenge we will query the Solid Waste Landfill Facilities dataset. [Documentation](https://hifld-geoplatform.opendata.arcgis.com/datasets/solid-waste-landfill-facilities/explore?location=2.636237%2C-23.657176%2C2.51) and [API](https://services1.arcgis.com/Hp6G80Pky0om7QvQ/ArcGIS/rest/services/Solid_Waste_Landfill_Facilities/FeatureServer/0/query) reference.
3. After you get all of the landfills (or some of them, if you use pagination), render them in a table with the columns as in Designs. Icons have already been installed via the [`react-icons`](https://react-icons.github.io/react-icons) npm package. A list of helpful chakra component documentation is available here:

- [Table](https://chakra-ui.com/docs/data-display/table)
- [Badge](https://chakra-ui.com/docs/data-display/badge)
- [FormControl](https://chakra-ui.com/docs/form/form-control)
- [Button](https://chakra-ui.com/docs/form/button)

4. Search can be implemented for the Landfill's `NAME`, `CITY`, `STATE` and/or `ZIP`. _You're only required to implement one_ of the following search inputs as shown in the final project's demo and video for the purpose of this exercise.
5. Additional extensions added to the design and/or functionality will be noted for bonus points 🎉!!!
6. Another opportunity for bonus points, enable horizontally scrolling on the table for mobile layouts!

# Notes

- Make sure to implement the UI/UX according to the final demo provided. We highly value attention to detail.
- You are welcome to use server side rendering or client side rendering to query the data (packages should already be installed - check `package.json`).
  - Note the demo is using client-side rendering
- If you're not familiar with using Typescript, you're welcome to use javascript.
- For styling we use Chakra UI and we highly recommend you do so as well!

# Setup and Development

1. Fork this repo `git@github.com:edgeandnode/interview-challenge.git`
2. Make sure you are inside of the repo you just cloned, by running `cd interview-challenge`
3. Run `yarn` to install all dependencies
4. Run `yarn dev` to start the app
5. Open `http://localhost:3000` in your browser
6. We expect this challenge to take no more than 2-4 hours of your time, however, you are more than welcome to take up the entirety of the 48 hour time block!
7. May the force be with you ✌️
