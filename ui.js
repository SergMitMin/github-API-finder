class UI {
  constructor(){
    this.profile = document.getElementById('profile');
  }

  showProfile(user){
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}">
          <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">Viev Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary mb-2"> Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary mb-2"> Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success mb-2"> Public Followers: ${user.followers}</span>
            <span class="badge badge-info mb-2"> Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-item>Company: ${user.company}</li> 
              <li class="list-item>Website/Blog: ${user.blog}</li> 
              <li class="list-item>Location: ${user.location}</li> 
              <li class="list-item>Member since: ${user.created_at}</li> 
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }
  // Show repos
  showRepos(repos){
    let output = '';
    repos.forEach(function(repo){
      output += `
      <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div class="col-md-6">
            <span class="badge badge-primary mb-2"> Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary mb-2"> Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success mb-2"> Forks: ${repo.forks_count}</span>
          </div>
        </div>
      </div>
      `;
    });
    // Output repos
    document.getElementById('repos').innerHTML = output;
  }
  // Clear alert
  clearAlert(){
    const currentAlert = document.querySelector('.alert');
    if(currentAlert){
      currentAlert.remove();
    }
  }
  // Show aletr msg
  showAlert(message, className){
    this.clearAlert();
    // Create a div
    const div = document.createElement('div');
    // add classes
    div.className = className;
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.search-container');
    // Get serch box
    const search = document.querySelector('.search');
    //Insert the alert
    container.insertBefore(div, search);
    // Timeout
    setTimeout(() => {
      this.clearAlert();
    }, 3000)
  }
  //Clear profile after cclearing input fiekd
  clearProfile(){
    this.profile.innerHTML = "";
  }
}