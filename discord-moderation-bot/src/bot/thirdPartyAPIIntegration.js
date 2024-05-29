const axios = require('axios');
const WebPurify = require('webpurify');

const webPurifyClient = new WebPurify({
  api_key: 'YOUR_WEBPURIFY_API_KEY',
  endpoint: 'us',
});

const thirdPartyAPIIntegration = {
  detectNSFWContent: async (imageURL) => {
    try {
      const { data } = await axios.get(imageURL, { responseType: 'arraybuffer' });
      const result = await webPurifyClient.imgcheck(data.toString('base64'));
      return result;
    } catch (error) {
      console.error('Error detecting NSFW content:', error);
      return null;
    }
  },
};

module.exports = thirdPartyAPIIntegration;