To run this example:

First install all the depedencies
```shell
  npm install .
```
Next start the example:

```shell
  node app.js
```


Now visit http://localhost:3000/ in your browser 

*Next steps - Things to try doing with the example:*

1. Visit the documentation page and run all the examples

2. Open the JavaScript console in your browser and use the API 
 
```javascript
   UserService.create({ name: "user", email:"user@site.com", password:"foofoo"},function(err,result){ console.log(err,result}; });
```

3. Generate the shell script stub

```shell
  # This will generate a shell script which uses 'curl' to call our API
  ../../bin/hopjs-gen --url http://localhost:3000/ shell --output api.sh
  chmod 755 ./api.sh

  # Now let's use the command line to create a user
  ./api.sh UserService.create --APIURL http://localhost:3000/ --email user@site.com --password foofoo --name user
  
  # Now we'll generate the unit test for this stub
  ../../bin/hopjs-gen --url http://localhost:3000/ shell --unitTest --output test_api.sh 
  chmod 755 ./test_api.sh

  ./test_api.sh http://localhost:3000/ ./api.sh

```

*Hints*

Run app.js with node-dev instead of node, it will automatically restart the server when you make changes to the code

```shell
sudo npm install -g node-dev

node-dev app.js

```
