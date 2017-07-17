export default {
  organizations: {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  organization: [],
  session: !!sessionStorage.jwt
}
