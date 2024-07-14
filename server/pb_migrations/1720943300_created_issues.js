/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "u1qq7q9iw4lbk2b",
    "created": "2024-07-14 07:48:20.034Z",
    "updated": "2024-07-14 07:48:20.034Z",
    "name": "issues",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lkskbmvx",
        "name": "title",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "dnuluchi",
        "name": "description",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("u1qq7q9iw4lbk2b");

  return dao.deleteCollection(collection);
})
