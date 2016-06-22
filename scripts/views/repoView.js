(function(module) {
  var repoView = {};
 
  var repoCompiler = Handlebars.compile($('#repo-template').text());

  
  repoView.renderRepos = function() {
    $('#about ul').empty().append(
      repos.withTheAttribute('name')
      .map(repoCompiler)
    );
  };

  repos.requestRepos(repoView.renderRepos);

  module.repoView = repoView;
})(window);
