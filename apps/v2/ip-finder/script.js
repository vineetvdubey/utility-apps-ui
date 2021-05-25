window.onload = () => {
  const ipFinderService = 'https://api.ipify.org?format=json';

  const updateIP = (ip) => {
    document.querySelector('#ip-display').innerHTML = ip;
  };

  const updateIPError = () => {
    document.querySelector('#ip-display').innerHTML = 'Please try after sometime..';
  };

  const request = new Request(ipFinderService);
  fetch(request)
    .then((res) => res.json())
    .then((json) => updateIP(json.ip))
    .catch(() => updateIPError());
};
