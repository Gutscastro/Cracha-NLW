const linksSocialMedia = {
    github = 'Gutscastro',
    youtube = 'guts_castro',
    facebook = 'Gustavo castro',
    instagram = 'guts_castro',
    twiter = 'gustavitscastro'
}

function changeSocialMediaLinks() {

    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

    }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
    const url = `https//api.github.com/users/$
    {linksSocialMedia.github}`

    fetch(url)
        .then(Response => Response.json())
        .then(data => {
            userName.textContent = data.name
            userBio.textContent = data.bio
            userlink.href = data.html_url
            userimage.src = data.avatar_url
            userlink.textContent = data.login
            userlogin.textContent = data.login


        })


}
getGitHubProfileInfos()