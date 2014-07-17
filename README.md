Display Repos
============

A jQuery plugin to display GitHub repos, description and language on website

##Usage


before `</body>` tag 

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    <script src="/DisplayRepos.js" type="text/javascript"></script>
    <script type="text/javascript">
    $(function() {
        $("#github").loadRepositories("YOUR USERNAME");
    });
    </script>

In your HTML add `<div class="github"></div>`

