window.TrelloPowerUp.initialize(
  {
    // Adds "Change color" to each list's "..." menu
    'list-actions': function (t) {
      return [
        {
          text: 'Change color',
          callback: function (t) {
            return t.list('id').then(function (list) {
              return t.popup({
                title: 'List color',
                url: './color.html',
                height: 200,
                args: { listId: list.id }
              });
            });
          }
        }
      ];
    }
  },
  {
    appKey: window.LC_CONFIG.appKey,
    appName: window.LC_CONFIG.appName
  }
);
