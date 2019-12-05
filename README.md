# Pronet
Deployment link: https://pronet.azurewebsites.net/

ProNet is a [Sails v1](https://sailsjs.com) application. Hosted using Microsoft Azure's App Service and configured with a Docker Container. The web app has been developed using Sails.js MVC framework with Bootstrap.

### Team Members
1. Abhinandan Walia - B00820613
2. Jay Sharma - B00824331
3. Manpreet Singh - B00821998
4. Aishwarya Narayanan - B00820313)
5. Vishaali Srikanth - B00821049

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

### Prototype Description
1. The prototype is up and running on url 'https://pronet.azurewebsites.net/'.
2. The front-end has been designed using Bootstrap and back-end has been designed using the Sails Framework.
3. The back-end APIs have been created uisng Sails framework.The Sails has been chosen as a framewok for this project
   becauue it provides an inbuilt MVC architecture which smoothens the development process.
4. As a bonus functionality, we are using Docker for containerization and Microsoft Azure for the deployment of the application.
   Since, these are cloud services, the scalability and load balancing of the application can be highly improved using the Virtual
   Machines as the user base for the application increases.

### Coding Conventions
1. MVC approach has been followed for the coding of the application which separates the front-end and the backend of the application
   and makes the application loosely coupled, that will make it easy for future releases.
2. The code has been documented properly by using the proper naming conventions and providing the appropriate inline comments for the
   future development.Therefore, no additional documentation required for the code explanation.
3. The git commits have been done with useful messages so that all the actvities can be tracked efficiently in case of any problem in future.
4. The Sails Framework has been followed throughout the development which made the development process easier for the developers.

### User Experience
1. It is a light-weight application which doesn't take much time for processing any tasks.
2. All the key functionalities are on the homepage of the application with just a click away of the user.
3. The app is simple to use and the navigation within the app is easy as minimalistic design approach has been used.
4. The appropriate status messages have been provided to the users to make the User Experience better.

### Scalability
The app is highly scalable as we have used Microsoft Azure cloud service for the application deployment.The load balancing can be easily
achieved using Azure which makes the processing capability of the APIs faster.To balance the load, the mutiple Virtual Machines can be 
created in case of heavy number of requests to the aplication and based on the network tarffic the VMS will be configured.The application
is independent of any platform and can be easily migrated to any of the required platforms with minor changes if required in future.

### Security
The application has been deployed on a secure connection in order to ensure the privacy and security of the users.
As of now, a simple authentication process has been used in the form of registration and login to provide the authenticity
to the users.In future, the data encrytpion for the user credentials will be done using 'crypto-js' in order to avoid any 
kind of unauthorized access.Any kind of API keys or credentials will also be stored in an environment file which will be
private to the project.

### Analytics
The geocoding has been used to trace the exact locaton of the pronet devices and also check the coverage area covered by a set of devices
referred to as a grid.This data will help to serve the clients better and improve the User Experience for the end-users as they can
know which geographical location they need to focus more in order to ensure the Internet Connectivity.

### Reported Bugs
1. The accordian is not working properly on the Network Status page. 
2. The registration and login dialog don't open sometimes because bootstrap and jquery imports are raising conflicts.

### References
+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)