# Carbon

![carbon](https://user-images.githubusercontent.com/65975591/118505197-df737400-b734-11eb-95be-5773b8603f75.png)

Setup instructions:

1. Clone the repo
```
git clone https://github.com/ascolm/carbon.git
cd carbon
```

2. Install dependencies
```
npm install
```

3. Create a .env file directly under the root folder, enter your API key and the URL as given below:
```
REACT_APP_API_KEY= // YOUR API KEY HERE
REACT_APP_API_URL=https://www.carboninterface.com/api/v1/estimates
```

4. Launch the app:
```
npm start
```

5. In order to test the app, run npm test:
```
npm test
```

Instructions:
  - Enter time, location and electricity usage (mwh) for each day of the week. 
  - You can only enter positive decimal numbers in usage field. 
  - Make sure you fill in all the fields, otherwise the app will complain.
  - Press enter or click the generate graph button. The app will fetch an estimation of your carbon usage and show you a graph once loaded.
  - You can open up the menu by clicking on the lightning button at the top left corner and get a new estimation and graph, should you wish to do so.
