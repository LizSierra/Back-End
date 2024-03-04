module.exports = {
    schemas: {
      user: { // cambiar por el schema que es.
        type: Object,
        properties: {
          "strName": {
            "type": "string",
            "example": "Alfonso"
          },
          "strEmail": {
            "type": "string",
            "example": "jesus.alf@gmail.com"
          },
          "age": {
            "type": "number",
            "example": 26
          },
          "nmbPhone": {
            "type": "string",
            "example": "497894561"
          },
          "password": {
            "type": "string",
            "example": "iorjqy78t3gbyug9whdw87"
          },
          "blnActivo": {
            "type": "boolean",
            "example": true
          }
        }
      }
    }
  }