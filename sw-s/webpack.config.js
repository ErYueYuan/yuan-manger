let path = require('path');
module.exports = {
    mode:'development',
    entry:'./src/main.js',
    output:{
        filename:'build.js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:{

    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:"babel-loader",
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                loader:['style-loader','css-loader']
            },
            {
                test:/\.less$/,
                loader:'less-loader',

            }
        ]
    }

}