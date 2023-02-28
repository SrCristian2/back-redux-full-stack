const schemaEnv = {
    type: "object",
    required: [
      "PORT",
      "HOST",
      "MONGO_URI",
    ],
    properties: {
      PORT: {
        type: "number",
      },
      HOST: {
        type: "string",
      },
      MONGO_URI: {
        type: "string",
      },
    
    },
  };
  
  export const optionsEnv = {
    schema: schemaEnv,
    dotenv: true,
  };