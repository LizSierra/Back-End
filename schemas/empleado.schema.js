module.exports = {
  schemas: {
    empleado: { // cambiar por el schema que es.
      type: Object,
      properties: {
        "name": {
          "type": "string",
          "example": "example"
        },
        "position": {
          "type": "string",
          "example": "SR"
        },
        "office": {
          "type": "string",
          "example": "DEVELOP"
        },
        "salary": {
          "type": "number",
          "example": 300000
        },
        "blnActivo": {
          "type": "boolean",
          "example": true
        }
      }
    }
  }
}