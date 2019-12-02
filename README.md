# pronet
Deployment link: https://pronet.azurewebsites.net/

ProNet is a [Sails v1](https://sailsjs.com) application. Hosted using Microsoft Azure's App Service and configured with a Docker Container. The web app has been developed using Sails.js MVC framework with Bootstrap.

### Version info
This app was originally generated on Sat Nov 16 2019 15:06:28 GMT-0400 (Atlantic Standard Time) using Sails v1.2.3.

### Updating Docker container
Clone the project via HTTPS from https://git.cs.dal.ca/jays/pronet.git 
```> cd pronet```
```> docker login```
```> docker build -t jaysharma95/pronet .```
```> docker run -it --rm -p 1337:1337 jaysharma95/pronet```
```> docker push jaysharma95/pronet```
Azure has an App Service named ‘pronet’ which must now be stopped and started again for the deployment to take effect. The app service is linked to DockerHub’s repository and shall update automatically.

### Accessing MySQL for Azure
Open MySQL Workbench on your computer and configure a new connection as:
Server/Host name: ```dal-fcs.mysql.database.azure.com```
Server admin login name: ```jays@dal-fcs```
Password: ```Test1234```
Port number: ```3306```
Schema: ```pronet ```

### References
+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)