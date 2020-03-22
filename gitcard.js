var search_user = document.getElementById('buscar-github')
var name_user = document.getElementsByTagName('h1')
var links_user = document.getElementsByTagName('a')
var card_user_background = document.getElementsByTagName('div')[0]

const getGitHubInfo = function () {
    var username = document.getElementById('usuario-github').value
    var url = 'https://api.github.com/users/' + username;
    var ajax = new XMLHttpRequest();
    
    ajax.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            let ajax = JSON.parse(this.responseText);
            card_user_background.style.display = 'block'
            name_user[0].innerHTML = ajax.name

            links_user[0].href = ajax.html_url
            links_user[0].firstChild.src = ajax.avatar_url

            links_user[1].href = ajax.html_url+'?tab=repositories'
            links_user[1].firstChild.innerHTML = ajax.public_repos

            links_user[2].href = ajax.html_url
            links_user[2].firstChild.innerHTML = ajax.public_gists

            links_user[3].href = ajax.html_url+'followers'
            links_user[3].firstChild.innerHTML = ajax.followers
            
        } else if (this.readyState == 4) {
            card_user_background.style.display = 'none' 
            
            alert(`Erro ${ajax.status}: ${ajax.statusText}`)
        }
    };

    ajax.open('GET', url, true);
    ajax.send();
};

search_user.addEventListener('click', getGitHubInfo)

