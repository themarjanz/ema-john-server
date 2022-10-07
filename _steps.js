/*
-------------------------
One time for your computer
--------------------------
1.create heroku account
2.verify email
3.instll heroku cli
4.heroku login
-----------------------------
FOR EACH PROJECT  ONE TIME
--------------------------------
1.heroku create
2.git add . git commit -m "" , git push
(beacuse after added github)
3.git push heroku main
4.https://pure-sierra-31312.herokuapp.com/
(after deploy)
5.Go to heroku Dashboard > Current project > Setting > Reveal Config
6.copy paste config vars from your .env file
7. make sure you have whitelisted all ip address to access mongodb
--------------------------------------------------------------------------------
Update SERVER with new changes
---------------------------------------

1.make changes
2.make sure > git add . git commit -m "" , git push
3.git push heroku main
------------------------------------
connect server with client site
--------------------------------------------------------------------
1.replace localhost by heroku file client site
like localhost(http://localhost:5000/) > replace (https://ancient-island-81558.herokuapp.com/)
2.npm run build client site
3. npm firebase deploy

*
*


*/ 