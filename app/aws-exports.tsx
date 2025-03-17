const awsConfig = {
  Auth: {
    region: 'us-east-1', // your region
    userPoolId: 'us-east-1_uBm0MSO4C', // your user pool ID
    userPoolWebClientId: '624lc9td568p7bg2s3hldgk98g', // your app client ID
    oauth: {
      domain: 'your-cognito-domain.auth.us-east-1.amazoncognito.com', // replace with your domain
      scope: ['phone', 'openid', 'email'],
      redirectSignIn: 'myapp://auth/', // replace with your redirect URL
      redirectSignOut: 'myapp://logout/', // replace with your sign-out URL
      responseType: 'code',
    },
  },
};

export default awsConfig;
