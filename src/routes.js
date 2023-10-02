const { addNoteHandler, getAllNotesHandler,getNotebyIdHandler,editNoteByIdHandler,deleteNoteByIdHandler } = require('./handler');


const routes = [
    {
      method: 'POST',
      path: '/notes',
      handler: () => {},
      handler: addNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes',
        handler: () => {},
        handler: getAllNotesHandler,
      },
      {
        method: 'GET',
        path: '/notes/{id}',
        handler: () => {},
        handler: getNotebyIdHandler,
      },
      {
        method: 'PUT',
        path: '/notes/{id}',
        handler: () => {},
        handler: editNoteByIdHandler,

      },
      {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
     },
      
  ];

  module.exports = routes;
  