function isTest(){
	return process.env.NODE_ENV == 'test'
}

function isDevelopment(){
    return process.env.NODE_ENV == 'development'
}

function isProduction(){
    return process.env.NODE_ENV == 'production'
}

export default {
	isTest,
    isDevelopment,
    isProduction,
}