module.exports = {
  schemas: {
    empleado: { // cambiar por el schema que es.
      type: Object,
      properties: {
        "_id": {
          "type": "string",
          "example": "65df79f94489666c55af60cx"
        },
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
        }
      }
    }
  }
}