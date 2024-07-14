/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u1qq7q9iw4lbk2b")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9hq05emp",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "active",
        "resolved",
        "in-progress"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u1qq7q9iw4lbk2b")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9hq05emp",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "active",
        "resolved",
        "out of scope"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
