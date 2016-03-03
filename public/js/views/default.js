define(['jquery', 'underscore', 'backbone', 'mustache', '/js/collections/pages.js', 'text!/templates/page.mustache'], function ($, _, Backbone, Mustache, PagesCollection, pagesTemplate) {
  var DefaultView = Backbone.View.extend({
    el: $('.main'),
    collection: {},

    initialize: function() {
      this.collection = new PagesCollection();
      this.collection.on("sync", this.render, this);
      this.collection.fetch(); //gets that info and creates object
    },

    render: function(pageType){
      this.data = this.collection.toJSON();
      var compiledTemplate = Mustache.render(pagesTemplate, this);
      this.$el.html(compiledTemplate);
    }
  });
  return DefaultView;
});
