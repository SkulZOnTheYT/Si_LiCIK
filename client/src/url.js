const url = {
    apiUrl: import.meta.env.PROD 
      ? 'https://silicik-api.up.railway.app'
      : 'http://localhost:5000',
    clientUrl: import.meta.env.PROD
      ? 'https://silicik.vercel.app'
      : 'http://localhost:5173'
  };
  
  export default url;