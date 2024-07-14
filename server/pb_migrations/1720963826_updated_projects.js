/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("chybm1xoudvvqnv")

  collection.listRule = "@request.auth.id = users_via_projects.id"
  collection.viewRule = "@request.auth.id = users_via_projects.id"
  collection.createRule = "@request.auth.id = users_via_projects.id"
  collection.updateRule = "@request.auth.id = users_via_projects.id"
  collection.deleteRule = "@request.auth.id = users_via_projects.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("chybm1xoudvvqnv")

  collection.listRule = "@request.auth.id != \"\""
  collection.viewRule = "@request.auth.id != \"\""
  collection.createRule = "@request.auth.id != \"\""
  collection.updateRule = "@request.auth.id != \"\""
  collection.deleteRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
})
