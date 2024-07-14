/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u1qq7q9iw4lbk2b")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jxpwpdlv",
    "name": "labels",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "g0tp342ov7n83m0",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u1qq7q9iw4lbk2b")

  // remove
  collection.schema.removeField("jxpwpdlv")

  return dao.saveCollection(collection)
})
