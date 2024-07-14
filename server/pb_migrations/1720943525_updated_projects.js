/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("chybm1xoudvvqnv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zdytj71v",
    "name": "issues",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "u1qq7q9iw4lbk2b",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("chybm1xoudvvqnv")

  // remove
  collection.schema.removeField("zdytj71v")

  return dao.saveCollection(collection)
})
