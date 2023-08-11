module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: "AKIA2O5FOLDEXOYQOEUI",
        secretAccessKey: "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",
        region: "us-east-1",
        params: {
          Bucket: "ecommerce-strapi-games-migue",
        },
      },
    },
  },
});
