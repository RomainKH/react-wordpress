# React Wordpress API Starter
*********************

Just made this to learn some of the wordpress api usage, it's really just a starter in order to not have to make the links between react and the api because the base is done.

## Launch the project

First you need to install wordpress at the root of the project, then go inside *frontend/* and install every node dependencies `npm i`

### Wordpress extensions

In the case of this exemple I made custom fields in wordpress this is why call on the api are on 'projects' endpoint.
Here is the list of extensions used in wordpress:
- Custom Post Type UI
- JWT Authentication for WP-API


### Start the project

#### Wordpress side
If you don't care about the .htaccess rules you can run a simple php server like this:
<br/>
`php -S localhost:8000 -d display_errors=1`

It is important to note that in order to run the .htaccess you need to start the wp project in an apache server, so just run it in a classical *htdocs/* folder.

#### React side
`npm run start`
<br/>
You can put a proxy on the **package.json** in order to have clean links when it comes to ask the wordpress API some stuff but it is optional you do whatever you want.
