apos.define('apostrophe-widget-tree', {
  extend: 'apostrophe-context',
  construct: function(self, options) {
    self.open = function(options) {
      options.action = self.action;
      options.body = _.cloneDeep(options);
      options.body.href = window.location.href;
      return apos.create('widget-tree-modal', options);
    }
  }
});
