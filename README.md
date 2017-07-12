================== STEP TO INSTALL ============================================
1. npm install
2. npm install --global gulp-cli
3. bower install
4. gulp serve
====================STEPS TO BUILD ===========================================
gulp build

===================== RUN DISTRIBUTION ============================================

Copy "dist" folder to web server or double click on dist\index.html

======================== SOURCE CODE STRUCTURE =======================

1. Structured by modules, each module will be in one folder.
2. Inside each module , there will be route definition (using angular ui router), html template,
scss file , controller and service (if any)
3. For testing I'm using mock data that store in src\mock

======================= FUNCTIONS ==========================================

1. Allow user see the list of pair of fx. The rate will be updated every (3 seconds for testing, actually should be longer and should be function to let the user fetch the lastes rate manually)
2. Click on 1 pair to go to FX Options screen. 
3. User key in the necessary information
    3.1. Options: choose between PUT and CALL
    3.2. Strike Price: the price user expect to buy/sell, the default value will be the price of PUT
    3.3. Expiration date: The valid date the option can be excercised.
    3.4. Premium: the fee user pay for buy the optons. It will be automatically calculated when user key in Strike Price. Rules: If user key in the price higher or lesser  10%, 20%, 30$ than the current price , the value of Permium will be 10, 20 and 30 pips respectively.
4. I haven't do the validations for fields in form.
# singteltest
