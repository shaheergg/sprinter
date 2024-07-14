/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u1qq7q9iw4lbk2b")

  // add
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
        "backlog"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u1qq7q9iw4lbk2b")

  // remove
  collection.schema.removeField("9hq05emp")

  return dao.saveCollection(collection)
})
