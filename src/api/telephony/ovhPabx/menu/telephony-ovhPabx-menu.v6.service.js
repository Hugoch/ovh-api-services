angular.module('ovh-api-services').service('OvhApiTelephonyOvhPabxMenuV6', ($resource) => $resource('/telephony/:billingAccount/ovhPabx/:serviceName/menu/:menuId', {
  billingAccount: '@billingAccount',
  serviceName: '@serviceName',
  menuId: '@menuId',
}, {
  getBatch: {
    method: 'GET',
    isArray: true,
    headers: {
      'X-Ovh-Batch': ',',
    },
  },
  save: {
    method: 'PUT',
    isArray: false,
  },
  create: {
    method: 'POST',
    isArray: false,
  },
}));
