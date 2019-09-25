# KB-Primo-VE-libChat

**LibChat service**: includes a chat service, provided by libanswers/ springshare, onto the user interface (all pages).     
       
 ![Screenshot](chatbox.png) 
 
 *(screenshot taken from Harvard)*
 
 # Create the package
 * npm install
 * npm run prepare
 
 # Install in Primo VE
 ```bash
 cd MYVIEW
 npm install kb-primo-ve-libchat --save-dev
 ```
 
 Add to bottom of `js/main.js`
 ```javascript
 require('kb-primo-ve-libchat/dist/index.js');