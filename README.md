# MICRO FRONTEND UI

### Doc's:

1. `npx create-mf-app` -> [app_1] -> Application -> framework -> style framework
2. create multiple apps based on the need
3. cd into the projects and run `npm i`

### Tutorial

    Learned from this video https://www.youtube.com/watch?v=lKKsjpH09dU&ab_channel=freeCodeCamp.org

### Notes:

1. Cannot use router inside router, so export all the components from app1 to main app and recreate the routes.
2. We can only use the ejected webpack.config to render the Module Federation Micro FE, but the exported CRA app cant be used in MF apps.
3. To fix this issue used `mf-cra` package, that can export our components from `CRA` apps. - `https://socket.dev/npm/package/mf-cra`
4. Removed `mf-cra`, as not to have any dependency over othe packages fo MF, copied the webpack code to local and fixed the process.
