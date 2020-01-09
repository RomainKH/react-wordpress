# React Wordpress API Starter
*********************

Just made this to learn some of the wordpress api usage, it's really just a starter in order to not have to make the links between react and the api because the base is done.

## Launch the project

### Wordpress
If you don't car about the .htaccess rules you can run a simple php server like this:
<br/>
`php -S localhost:8000 -d display_errors=1`

it is important to note that in order to run the .htaccess you need to start the wp project in an apache server, so just run it in a classical */htdocs/* folder.


### React
`npm i`
<br/>
`npm run start`
<br/>
You can put a proxy on the **package.json** in order to have clean links when it comes to ask the wordpress API some stuff but it is optional you do whatever you want.
