# Lets Build a Food Delivery App
 **Step 1 : Planning Phase**
  * Build a mock app, or wireframae with pen and paper
  * Once we exactly know what we are building , it will be easy 
  * Components 
    - Header 
      - Logo
      - Nav bar items (home , about us, cart)
    - Body component 
      - Search
      - Restaurant Card Container
        - Restro Cards
          - name , star rating , cusines, delivery time
    - Footer
      - copyright
      - Links
      - Address
      - Contact

# Config Driven UI .

- our website is driven by data ( our web site is driven by configs)
- Controlling UI based on the Data coming
- Example : In swiggy , based on location the data changes and UI behaves accordingly

# why keys?- to uniquely identify list items to not get rendered again and again
- whenever we use map we need to use the key 
- *IT takes a big performance hit , if we dont use keys*
- React doesnt uniquely identify that items , so it will re render again all items , so we must use the keys whenever we use map in react
- - some devs will use index as a key . *React says never use index as a key (anti-pattern)* 
-   unique key (best practice)>>>> index as key >>>>>>> not using key (not acceptiable)
-   
# Export and import the components in React

- export syntax :   export default < componentName >          //default export (1st type)
- import syntax : import < componentName > from < fileLocation >

- We cant write default export more than once , we should write only one default export 
- By default a file can export only one thing 
- To export multiple things we use names exports     
  -  just write export infront of that things    ( export const CON_URL="sdgfdg")
  -   # How to import named export
      -   import {CON_URL} from "../../utils/constants";            //example

* We should not keep any hardcoded data or anything in the component files
* We need to call in seperate files ( const.js or config.js or utils.js)