export type AmplifyDependentResourcesAttributes = {
    "function": {
        "nodemailer": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "plantpathwellnessnodemailerDependencies": {
            "Arn": "string"
        }
    },
    "api": {
        "express": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}