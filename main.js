const clientConfig = require('./webpack.dev.config')
const serverConfig = require('./webpack.server.config')
const webpack = require('webpack')

webpack(serverConfig, (err, stats) => {
    if (err || stats.hasErrors()){
        console.error("Error building server")
        // console.error(err)
        if(stats) {
            console.error(stats.compilation.errors)
        }
        //console.error(stats.error);
        return
    } 
    console.log("Server built")

    webpack(clientConfig, (err, stats) => {
        if (err || stats.hasErrors()){            
            console.error("Error building client")
            if(err) {
                console.error(err)
            }
            if(stats) {
                console.error(stats.compilation.errors)
                console.error(stats.compilation.warnings)
            }
            //console.error(stats.error);
            return;
        }
        console.log("Client built")

        require("./dist/server")
    });
});