class Github {
  constructor(){
    // took it from adress: https://github.com/settings/applications/980750 to make >100 request per hour
    this.client_id = 'f8fd12b916c9054ea846';
    this.client_secret = '5f47c4afe9b176caf5f201d65aab55da4468ad59';
    this.repos_count = 6;
    this.repos_sort = 'created: asc'
  }

  async getUser(user) {
    const profileResponse = await fetch(`
    https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`
    https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&
    client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    return {
      profile,
      repos
    }
  }
    
}