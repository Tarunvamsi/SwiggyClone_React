# Lets Build a Food Delivery App

**Step 1 : Planning Phase**

- Build a mock app, or wireframae with pen and paper
- Once we exactly know what we are building , it will be easy
- Components
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
- _IT takes a big performance hit , if we dont use keys_
- React doesnt uniquely identify that items , so it will re render again all items , so we must use the keys whenever we use map in react
- - some devs will use index as a key . _React says never use index as a key (anti-pattern)_
- unique key (best practice)>>>> index as key >>>>>>> not using key (not acceptiable)
-

# Export and import the components in React

- export syntax : export default < componentName > //default export (1st type)
- import syntax : import < componentName > from < fileLocation >

- We cant write default export more than once , we should write only one default export
- By default a file can export only one thing
- To export multiple things we use names exports
  - just write export infront of that things ( export const CON_URL="sdgfdg")
  - # How to import named export
    - import {CON_URL} from "../../utils/constants"; //example

* We should not keep any hardcoded data or anything in the component files
* We need to call in seperate files ( const.js or config.js or utils.js)

# To keep data layer and UI layer consistent and sync with each other , here comes REACT

- REACT can do faster , efficient DOM manipulation

# State Variable in React - super powerful variable

- useState - Hooks
  #### React Hook - A normal javascript function given to us by react , which is prebuilt ( utility function)
  ##### Hooks In react
  - useState() - Gives the Super Powerful react state variables
    - import {useState} from "react";
    - used to create State Variable
      - it maintains the state of the component
      - local state Variable scope is inside the component
      - const [restroList] = useState([//pass default value]); //Local state variable creation syntax by react
      - let restroList ; //noraml Js variable creation
    - To modify the restroList
      - by a function , the function comes as second parameter in the array
        - const [restroList , setRestroList]= useState([{Defaultdata}]);
  - useEffect()

### Whenever state varaible changes react render the components --> Quickly updates the UI -React keeps eye on state variable

# How React work in Background ?

### React uses "RECONCILIATION ALGORITHM" (React fiber(from React16))

      - React fber is ongoing reimplemntation of Reacts core algorithm

- #### Incremental Rendering : Ability to split the rendering work into chunks and spread out over multiple frames (React makes application faster)
  - On the UI we have a DOM
    - Suppose we have 7 restaurant cards
      - After filtering our Ui changes to 3 restaurant cards
        -When we have 7 restaurants cards at beginning , react creates a _Virtual DOM (Represntation of an Actual DOM )_ --> Javascript Object (React Virtual Dom)

# Diff Algorithm

### Findss the differnce bewtween two Virtual DOMS (old Virtual dom and new virtual dom)

      - *ReactFiber* It will calculate the Differnce between the objects when any event happens and calculate the result and update the DOM at every render cycle

# UseEffect Hook();

- impoert {useEffect} from "react";
- useEffect will take two arguments
  - 1st Arrow function( Call back function)
  - 2nd Dependency Array
- # When will useEffect call back function called?
  - this call backfunction is called After our component renders
  - If we want something to be called after our page renders we use UseEffect
-

# Can we call swiggy api in our project ?

- when we fect the swiggy api , we are getting error
- Access to fetch at API' from origin 'http://localhost:1234' has been blocked by CORS policy
- What is CORS policy ? Who is blocking us ?
  - Our browsers block us from calling API from one origin to other origin
- How to bypass this cors ploicy error - Use CORS chrome exteniosn

# SHIMMER UI --> FOR BETTER UX

- Shimmer UI is a technique for displaying loading states in web and mobile apps. It provides a FAKE PAGE the appearance of content that will eventually load, improving the user experience by providing visual feedback and reducing perceived wait times
- We make user psychologocly better
- when we load a page , we see a blank cards and eventually they will filled with data
