export default ({ env }) => ({
  documentation: {
    enabled: env.bool("SWAGGER_ENABLED", true),
  },
});
