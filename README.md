## Instructions 

- Execute command **npm i** to install modules required.
- Create **.env** file based **.env.example** file.
- Execute command **npm run start:dev** to run the script to extract the products

## Instructions to create fake api

- Access website https://mocki.io/
- Add the json:
```
{
   "total":99999,
   "count":1000,
   "products":[
      {
         "name":"Product 1",
         "price":10
      },
      {
         "name":"Product 2",
         "price":10
      }
   ]
}
```
- Now, click button named *Create api*
- Copy the URL created and put value for env *API_URL_SCRAPE*