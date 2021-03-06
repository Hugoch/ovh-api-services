angular.module('ovh-api-services').service('OvhApiConnectivityEligibilitySearchV6', ($resource) => $resource('/connectivity/eligibility/search', {
}, {
  searchCities: {
    url: '/connectivity/eligibility/search/cities',
    method: 'POST',
    isArray: false,
    params: {
      zipCode: '@zipCode',
    },
  },
  searchStreets: {
    url: '/connectivity/eligibility/search/streets',
    method: 'POST',
    isArray: false,
    params: {
      inseeCode: '@inseeCode',
    },
  },
}));
