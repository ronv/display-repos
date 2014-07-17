
    jQuery.githubUser = function(username, callback) {
      jQuery.getJSON('https://api.github.com/users/'+username+'/repos?callback=?',callback)
    }

    jQuery.fn.loadRepositories = function(username) {
      this.html("<span>Loading repositories...</span>");
     
      var target = this;
      $.githubUser(username, function(data) {
        var repos = data.data;
        sortByName(repos);  
     
        var list = $('<dl/>');
        target.empty().append(list);
        $(repos).each(function() {
            if (this.name != (username.toLowerCase()+'.github.com')) {
                list.append('<dt><a href="'+ (this.homepage?this.homepage:this.html_url) +'">' + this.name + '</a> - ' + this.description +' '+(this.language?('('+this.language+')'):'')+'</dt>');
                
          }
        });     
      });
      
      function sortByName(repos) {
        repos.sort(function(a,b) {
          return a.name - b.name;
        });
      }
    };
