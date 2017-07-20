export default {
  userEmail: '',
  currentUser: {
    email: '',
    firstName: '',
    lastName: ''
  },
  organizations: {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  organization: [],
  session: !!sessionStorage.jwt
}
