# Install
You need [Node.js](https://nodejs.org) installed on your machine. Simply download the installer from [nodejs.org](https://nodejs.org) and go through the installation steps.

Once Node.js is installed, open your command prompt or terminal and run `sudo npm i -g gatsby-cli`. This installs [Gatsby](https://www.gatsbyjs.org/) command line tools.

 ---
# Development Build
The development build is unoptimized and ideal for testing new features and hunting down bugs. The server tracks file changes and forces a refresh in the browser when a change has been detected.

To run the development mode run:
<br/>`npm run develop`


Visit [localhost:8000](http://localhost:8000) to see the running application.
You can also go to [localhost:8000/___graphql](http://localhost:8000/___graphql) to query the data using the __graphql interface



# Production Build
The production build, compacts the files and bundles them for speed. Use this mode for deploying the application. 

To run the production database and server run:
<br/>`npm run build`
<br/>`npm run start`


Visit [localhost:9000](http://localhost:9000) to see the running application.

# Development

## Making New Events
Events are stored in the */src/events/* folder and are coded in an extended form of markdown, we call **MarkDownStorybook (mds)**.
This supports all the [usual syntax of markdown](https://www.markdownguide.org/basic-syntax/) including HTML. 

We extend markdown functionality with some additional tags:

- &lt;**Mod** *[stat] [skill] [relationship] [value]*&gt;&lt;/**Mod**&gt; <br>
 Modifies a specified player characteristic
    - *stat*: player stat to modify (mutually exclusive with *skill* and *person*)
    - *skill*: player skill to modify
    - *relationship*: player relationship to modify
    - *value*: amount to modify the characteristic by, can be positive or negative. (if not specified defaults to +1 for stat or +5 for skill and relationship)
    
    
- &lt;**Prompt**&gt;*body*&lt;/**Prompt**&gt; <br>
Displays text in the user controls. 
    - *body*: Everything in the body will be shown to the user in the controls. **But Not Evaluated** (mds tags in this section will be ignored)
    - Note: The last usage of the tag is the only one shown to the user
    

    
- &lt;**Check** *[stat] [skill] [relationship] [value]**&gt;*body*&lt;/**Check**&gt; <br>
Passive characteristic check, used for rendering event
    - *stat*: player stat to compare to (mutually exclusive with *skill* and *person*)
    - *skill*: player skill to compare to
    - *relationship*: player relationship to compare to
    - *value*: minimum value 
    - *body* if check passes the body is evaluated, otherwise body is skipped
    

- &lt;**Choice** *title*&gt;*body*&lt;/**Choice**&gt; <br>
Displays a story choice in the user controls. Body of the choice is only evaluated on click.
    - *title*: Label associated with choice, placed on buttons
    - *body*: Everything in the body will be evaluated and shown when the choice is selected 
    

- &lt;**Input** *type*&gt;&lt;/**Input**&gt; <br>
Call for specialized user input such as text input
    - *type*: special user input prompt to show to the user (takes precedence over choice, until resolved)
        - "name" : Prompts player name 
