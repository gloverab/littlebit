class OrganizationsApi {

  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  }

  static getAllOrganizations() {
    const headers = this.requestHeaders()
    const request = new Request('http://localhost:3001/api/organizations', {
      method: "GET",
      headers: headers
    })

    return fetch(request)
      .then(response => {
        return response.json()
      }).catch(error => {
        return error
      })
  }

  static showOrganization(id) {
    const headers = this.requestHeaders()
    const request = new Request(`http://localhost:3001/api/organizations/${id}`, {
      method: "GET",
      headers: headers
    })

    return fetch(request)
      .then(response => {
        return response.json()
      }).catch(error => {
        return errors
      })
  }
}

export default OrganizationsApi
